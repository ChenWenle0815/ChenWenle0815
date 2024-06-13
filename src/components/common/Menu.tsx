

import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { IMenu } from '../../../database/wiki';
import { convertToMenuItem, getWikiContent } from '@/sevices/job.service';
import { useDispatch } from 'react-redux';
import { setContent } from '@/store/modules/job';
import { useSearchParams } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

interface DiyMenuProps {
    theme: boolean; // 假设 theme 是一个布尔值
    menu: IMenu[]
  }


const MyMenu: React.FC<DiyMenuProps> = ({ theme, menu }) => {
  let [searchParams,setSearchParams] = useSearchParams();

  const categoryId = searchParams.get('categoryId') || ''
  const id = searchParams.get('id')  || ''
  
  const dispatch = useDispatch();
  const content = getWikiContent(Number(id));
  dispatch(setContent({ content }));
  const items: MenuItem[] = convertToMenuItem(menu);
  const onClick: MenuProps['onClick'] = e => {
    // 设置右侧内容区域 markdown
    console.log(e)
    setSearchParams({
      categoryId: e.keyPath[1],
      id: e.keyPath[0],
    })
    const content = getWikiContent(Number(e.key));
    dispatch(setContent({ content }));
  };
  return (
    <>
      <div className='menu'>
        <Menu
          defaultSelectedKeys={[categoryId,id]}
          defaultOpenKeys={[categoryId,id]}
          mode="inline"
          theme={theme ? 'dark' : 'light'}
          items={items}
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default MyMenu;


