import { lifeWikis } from '../../database/life';


export function getWikiContent(id: number):string {
  return lifeWikis.find(item => item.id === id)?.content || '';
}