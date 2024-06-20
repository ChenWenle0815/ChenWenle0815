/*
 * @Author: cc_ray changrui03@meituan.com
 * @Date: 2024-06-20 10:46:43
 * @LastEditors: cc_ray changrui03@meituan.com
 * @LastEditTime: 2024-06-20 14:52:03
 * @FilePath: /ChenWenle0815/plugins/vite-plugin-auto-import-wiki.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// vite-plugin-auto-import-wiki.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'json5';
const { parse } = pkg;
import { v4 as uuidv4 } from 'uuid';

// ES 模块中获取 __dirname 的方法
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function autoImportWiki():any {
  const databaseDir = path.resolve(__dirname, '../database');
  const wikFilePath = path.resolve(__dirname, '../database/wiki.ts');

  return {
    name: 'auto-import-wiki',
    buildStart() {
      console.log('listening');
      fs.watch(databaseDir, (eventType, filename) => {
        console.log('listened');
        if (eventType === 'rename' && filename?.endsWith('.md')) {
          const filePath = path.join(databaseDir, filename);
          fs.stat(filePath, (err, stats) => {
            if (err) {
              throw err;
            }
            if (stats.isFile()) {
              // 读取 wik.ts 文件
              fs.readFile(wikFilePath, 'utf-8', (err, data) => {
                if (err) {
                  throw err;
                }
                // 假设 wik.ts 文件中有一个名为 wikis 的数组
                const match = data.match(/const wikis\s*:\s*Array<IWiki>\s*=\s*(\[\s*{[\s\S]*?\}\s*\])/);
                if (match) {
                  try {
                    const wikis = parse(match[1]);
                    // 添加新的 wiki 条目
                    const newWiki = {
                      id: uuidv4(),
                      title: filename.replace('.md', ''),
                      content: fs.readFileSync(filePath, 'utf-8'),
                      createTime: Date.now(),
                      updateTime: Date.now(),
                      // 其他属性根据需要添加
                    };
                    wikis.push(newWiki);
                    // 更新 wik.ts 文件
                    const newData = data.replace(match[0], `const wikis = ${JSON.stringify(wikis, null, 2)}`);
                    fs.writeFile(wikFilePath, newData, 'utf-8', err => {
                      if (err) {
                        throw err;
                      }
                      console.log(`Wiki ${filename} imported successfully.`);
                    });
                  } catch (error) {
                    console.log('合理的 error :', error);
                  }
                }
              });
            }
          });
        }
      });
    },
  };
}
