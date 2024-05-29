import { IMenu, wikis } from '../../database/wiki';

export const convertToMenuItem = (menus: IMenu[]): any[] => {
  return menus.map(menu => {
    const { id, name, desc, children } = menu;
    // 对于每个menu项，递归处理其children
    const convertedChildren = children ? convertToMenuItem(children) : undefined;
    return { key: id?.toString(), label: name, desc, children: convertedChildren };
  });
};

export function getWikiContent(id: number):string {
  return wikis.find(item => item.id === id)?.content || '';
}