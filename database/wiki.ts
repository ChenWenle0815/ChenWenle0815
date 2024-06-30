import M_END from './M_END.md';
import JS_RUNTIME from './JS_RUNTME.md';
import WORK from './Work.md';
import No_Node from './NO_NODE.md';
import JSON from './JSON.md';
import CMD from './CMD.md';
import GITLENS from './GITLENS.md';
import SEARCH from './SEARCH.md';
import VSCODE_PLUGIN from './VSCODE_PLUGIN.md';
import SHOT from './SHOT.md';
import BARTENDER from './BARTENDER.md';
import NUXT from './NUXT.md';
import SERVERLESS from './Serverless.md';
import THRIFT from './THRIFT.md';
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
    categoryId: 0,
    description: '我们为什么工作？'
  },
  {
    id: 11,
    title: 'M端在玩什么？ ',
    content: M_END,
    createTime: 1622547600000,
    updateTime: 1625139600000,
    categoryId: 1,
    description: '讲讲工作两年来对M端不同阶段的理解'
  },
  {
    id: 12,
    title: '从 JS 运行时说开去',
    content: JS_RUNTIME,
    createTime: 1622634000000,
    updateTime: 1625226000000,
    categoryId: 1,
    description: '这是很多面试题的来源之处'
  },
  {
    id: 13,
    title: '去 node 化 ',
    content: No_Node,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId: 1
  },
  {
    id: 14,
    title: '关于 JSON 我知道的也不多',
    content: JSON,
    createTime: 1622634000000,
    updateTime: 1625226000000,
    categoryId: 1,
    description: '日常遇到的一些 JSON 问题'
  },
  {
    id: 15,
    title: '关于 Nuxt 的几个问题',
    content: NUXT,
    createTime: 1622634000000,
    updateTime: 1625226000000,
    categoryId: 1,
    description: 'Nuxt 有中间件、有layout、有SSR...'
  },
  {
    id: 21,
    title: '我所了解的一点点 Thrift',
    content: THRIFT,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId: 2
  },
  {
    id: 22,
    title: '谈谈 Serverless',
    content: SERVERLESS,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId: 2
  },
  {
    id: 31,
    title: 'CMD',
    content: CMD,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId: 3
  },

  {
    id: 32,
    title: '截图',
    content: SHOT,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId: 3
  },
  {
    id: 33,
    title: '全局助手',
    content: SEARCH,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId: 3
  },
  {
    id: 34,
    title: ' GIT 可视化 ',
    content: GITLENS,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId: 3
  },
  {
    id: 35,
    title: '菜单栏 ',
    content: BARTENDER,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId: 3
  },
  {
    id: 36,
    title: 'VSCODE 插件 ',
    content: VSCODE_PLUGIN,
    createTime: 1622720400000,
    updateTime: 1625312400000,
    categoryId: 3
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
      {
        id: 14,
        name: '关于 JSON 我知道的也不多',
        desc: '关于 JSON 我知道的也不多',
      },
      {
        id: 15,
        name: '一些关于 Nuxt 的疑问 ',
        desc: 'Nuxt有中间件、有layout、等等，让我产生了疑问',
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
        name: '我所了解的一点点 Thrift',
        desc: 'Http 与 RPC ',
      },
      {
        id: 22,
        name: '你知道serverless吗？',
        desc: 'fass and bass',
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
