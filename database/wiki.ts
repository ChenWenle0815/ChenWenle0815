import M_END from './M_END.md';
interface IWiki {
    id: number;
    title: string;
    content: string;
    createTime: number;
    updateTime: number;
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
    id: 1,
    title: 'M端在玩什么？ ',
    content: M_END,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
  {
    id: 2,
    title: '纯静态页面与 Node 层 ',
    content: '纯静态页面与 Node 层 ',
    createTime: 1622634000000,
    updateTime: 1625226000000
  },
  {
    id: 3,
    title: 'Http 与 RPC ',
    content: 'Http 与 RPC ',
    createTime: 1622720400000,
    updateTime: 1625312400000
  },
  {
    id: 3,
    title: '你知道serverless吗？ ',
    content: '你知道serverless吗？',
    createTime: 1622720400000,
    updateTime: 1625312400000
  }
];

const jobMenu: IMenu[] = [
  {
    id: 1,
    name: '前端',
    desc: 'Vue、React、Webpack、Vite',
    children: [
      {
        id: 1,
        name: 'M端在玩什么？ ',
        desc: 'M端在玩什么？ ',
      },
      {
        id: 2,
        name: '纯静态页面与 Node 层 ',
        desc: '纯静态页面与 Node 层 ',
      }
    ]
  },
  {
    id: 2,
    name: '后端开发',
    desc: 'Node、SQL、Go',
    children: [
      {
        id: 3,
        name: 'Http 与 RPC ',
        desc: 'Http 与 RPC ',
      },
      {
        id: 4,
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
        id: 5,
        name: '命令行',
        desc: '开发Android应用',
      },
      {
        id: 6,
        name: '截图',
        desc: '开发iOS应用',
      }
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