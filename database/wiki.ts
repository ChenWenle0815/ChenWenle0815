import M_END from './M_END.md';
import JS_RUNTIME from './JS_RUNTME.md';
import WORK from './Work.md';
import No_Node from './NO_NODE.md';
interface IWiki {
    id: number;
    title: string;
    content: string;
    createTime: number;
    updateTime: number;
    categoryId?: number;
    description?:string;
}

interface IMenu {
  id: number;
  name: string;
  desc: string;
  wikiId?: number; // 可选属性，表示与之关联的wiki条目的ID
  children?: IMenu[];
  
}

const wikis:Array<IWiki> = [
  {
    id: 0,
    title: 'Keep looking, don’t settle',
    content: WORK,
    createTime: 1622547600000,
    updateTime: 1625139600000,
    categoryId:0,
    description:'我们为什么工作？'
  },
  {
    id: 11,
    title: 'M端在玩什么？ ',
    content: M_END,
    createTime: 1622547600000,
    updateTime: 1625139600000,
    categoryId:1,
    description:'讲讲工作两年来对M端不同阶段的理解'
  },
  {
    id: 12,
    title: '从 JS 运行时说开去',
    content: JS_RUNTIME,
    createTime: 1622634000000,
    updateTime: 1625226000000,
    categoryId:1,
    description:'这是很多面试题的来源之处'

  },
  {
    id: 21,
    title: 'Http 与 RPC ',
    content: 'Http 与 RPC ',
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId:2
  },
  {
    id: 22,
    title: '你知道serverless吗？ ',
    content: '你知道serverless吗？',
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId:2
  },
  {
    id: 13,
    title: '去 node 化 ',
    content: No_Node,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId:2
  },
  {
    id: 22,
    title: '你知道serverless吗？ ',
    content: '你知道serverless吗？',
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId:2
  },
];

const jobMenu: IMenu[] = [
  {
    id: 1,
    name: '前端',
    desc: 'Vue、React、Webpack、Vite',
    children: [
      {
        id: 11,
        name: 'M端在玩什么？ ',
        desc: 'M端在玩什么？ ',
      },
      {
        id: 12,
        name: '从 JS 运行时说开去',
        desc: '从 JS 运行时说开去',
      },
      {
        id: 13,
        name: '去 node 化',
        desc: '去 node 化',
      },
    ]
  },
  {
    id: 2,
    name: '后端开发',
    desc: 'Node、SQL、Go',
    children: [
      {
        id: 21,
        name: 'Http 与 RPC ',
        desc: 'Http 与 RPC ',
      },
      {
        id: 22,
        name: '你知道serverless吗？',
        desc: '你知道serverless吗？',
      }
    ]
  },
  {
    id: 3,
    name: '工具',
    desc: '好用的开发工具',
    children: [
      {
        id: 31,
        name: '命令行',
        desc: '弥补系统自带的终端',
      },
      {
        id: 32,
        name: '截图',
        desc: '截图、钉在屏幕上、取色',
      },
      {
        id: 33,
        name: '全局助手',
        desc: '快速打开应用',
      },
      {
        id: 34,
        name: 'Git可视化',
        desc: '清晰看到 git 工作流，快速进行 git 操作',
      },
      {
        id: 35,
        name: 'Bartender',
        desc: '控制 Mac 顶部菜单栏',
      },
      {
        id: 36,
        name: 'VsCode插件',
        desc: '生产力起飞',
      },
    ]
  },
  {
    id: 4,
    name: '方法论',
    desc: '学学怎么思考、怎么做事，少走点弯路',
    children: [
      {
        id: 31,
        name: '命令行',
        desc: '弥补系统自带的终端',
      },
      {
        id: 32,
        name: '截图',
        desc: '截图、钉在屏幕上、取色',
      },
      {
        id: 33,
        name: '全局助手',
        desc: '快速打开应用',
      },
      {
        id: 34,
        name: 'Git可视化',
        desc: '清晰看到 git 工作流，快速进行 git 操作',
      },
      {
        id: 35,
        name: 'Bartender',
        desc: '控制 Mac 顶部菜单栏',
      },
      {
        id: 36,
        name: 'VsCode插件',
        desc: '生产力起飞',
      },
    ]
  }
];




export {
  wikis,
  jobMenu
};
export type {
  IWiki,
  IMenu
};
