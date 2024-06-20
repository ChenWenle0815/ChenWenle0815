<!--
 * @Author: cc_ray changrui03@meituan.com
 * @Date: 2024-06-20 15:00:18
 * @LastEditors: cc_ray changrui03@meituan.com
 * @LastEditTime: 2024-06-20 15:17:56
 * @FilePath: /ChenWenle0815/database/JSON.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 合格的 JSON 
合格的 JSON 格式遵循一套严格的规则，这些规则定义了数据如何被结构化，以便能够在不同的系统之间进行交换。JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，易于人阅读和编写，同时也易于机器解析和生成。以下是构成合格 JSON 格式的一些基本规则：

1. 数据在名称/值对中：JSON 数据由键值对构成，其中键（名称）是字符串，值可以是不同的数据类型（如字符串、数字、数组、布尔值、null 或另一个 JSON 对象）。
2. 数据由逗号分隔：多个键值对之间使用逗号（,）分隔。
3. 花括号保存对象：JSON 对象由花括号（{}）包围，内部包含键值对。
4. 方括号保存数组：JSON 数组由方括号（[]）包围，可以包含多个值（这些值可以是不同类型的），值之间用逗号分隔。
5. 字符串必须用双引号：在 JSON 中，字符串必须被双引号（"）包围。
6. 不允许尾随逗号：在 JSON 对象或数组的最后一个元素后面不允许有逗号。
7. 不支持注释：标准的 JSON 不支持注释。

一个简单的 JSON 示例：

``` json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
}
```

#### isJSON
lodash-contrib 是一个扩展了 Lodash 库的第三方库，它提供了一些额外的实用函数，包括 isJSON。这个 isJSON 函数可以用来检查一个字符串是否是合法的 JSON 格式。请注意，lodash-contrib 并不是官方的 Lodash 扩展，因此在使用时需要考虑到这一点，特别是在项目的维护性和依赖管理方面。
使用 isJSON 函数的基本方式如下：
``` js
import { isJSON } from 'lodash-contrib';

console.log(isJSON('{"name":"John", "age":30}')); // 应该返回 true
console.log(isJSON('This is not JSON')); // 应该返回 false
```

### JSON5 

JSON5 是 JSON 的一个扩展，它旨在使 JSON 格式更加易于人类编写和阅读。它通过引入一些 JavaScript 中的语法特性来放宽 JSON 的一些限制。以下是 JSON5 相对于标准 JSON 的一些主要区别：
1. 对象键名：在 JSON 中，对象的键名必须用双引号包围。而在 JSON5 中，键名可以不用引号包围，除非它们包含特殊字符或保留字。
2. 字符串：JSON5 允许使用单引号定义字符串，而标准 JSON 只允许使用双引号。
3. 尾随逗号：JSON5 允许对象和数组字面量中的最后一个元素后面跟一个逗号，这在标准 JSON 中是不允许的。
4. 注释：JSON5 支持使用 // 和 /* */ 添加注释，而标准 JSON 不支持注释。
5. 数字表示法：JSON5 支持十六进制数字、前导和尾随小数点（如 .5 和 5.）、NaN、Infinity 和 -Infinity，而这些在标准 JSON 中都不被支持。
6. 更多的转义字符：JSON5 支持更多的字符串转义字符，包括跨行字符串。
#### JSON.parse() 与 JSON5 的解析:
JSON.parse() 是 JavaScript 中用于将 JSON 字符串转换为 JavaScript 对象的标准方法。它遵循标准 JSON 的语法规则，因此不支持 JSON5 引入的扩展特性。如果尝试用 JSON.parse() 解析包含 JSON5 特性（如单引号字符串、尾随逗号、注释等）的字符串，会抛出语法错误。

### 压缩和转译义

JSON 压缩和转译（转义）通常用于减少数据大小以及确保数据在不同环境中安全传输。
#### JSON 压缩
压缩 JSON 主要是移除不必要的空格、换行和缩进，这可以通过 JSON.stringify() 方法实现，不提供额外的空格参数（或提供第三个参数为 0）。
``` js
const obj = {
  name: "John Doe",
  age: 30,
  isStudent: false
};
```

``` js
// 压缩 JSON
const compressedJSON = JSON.stringify(obj);
```

#### JSON 转译（转义）
转译（转义）JSON 是指将 JSON 字符串中的特定字符替换为它们的转义序列，以确保字符串可以安全地嵌入到 JavaScript 代码或 HTML 文档中。在 JavaScript 中，你可以使用 JSON.stringify() 方法生成的字符串直接作为安全的 JSON 字符串。如果需要在 JavaScript 字符串中嵌入 JSON 字符串，可能需要对双引号等进行转义。
如果你需要将 JSON 字符串嵌入到 HTML 中，可以使用 HTML 实体进行转义，例如将双引号转义为 &quot;。
示例：压缩并转义 JSON 以嵌入到 HTML 中