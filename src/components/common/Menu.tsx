

import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { IMenu } from '../../../database/wiki';
import { convertToMenuItem, getWikiContent } from '@/sevices/job.service';
import { useDispatch } from 'react-redux';
import { setContent } from '@/store/modules/job';
type MenuItem = Required<MenuProps>['items'][number];

interface DiyMenuProps {
    theme: boolean; // 假设 theme 是一个布尔值
    menu: IMenu[]
  }



const MyMenu: React.FC<DiyMenuProps> = ({ theme, menu }) => {
  const [current, setCurrent] = useState('1');
  const dispatch = useDispatch();
  const items: MenuItem[] = convertToMenuItem(menu);

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
    // 设置右侧内容区域 markdown
    const content = getWikiContent(Number(e.key));
    dispatch(setContent({ content }));
  };




  return (
    <>
      <div className='menu'>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme={theme ? 'dark' : 'light'}
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
        />
      </div>
    </>
  );
};

export default MyMenu;


