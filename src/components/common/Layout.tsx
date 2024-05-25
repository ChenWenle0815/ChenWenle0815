// Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from './Navigator';

const Layout: React.FC = () => {
  return (
    <>
      <Navigator />
      <Outlet /> {/* 子路由将在这里渲染 */}
    </>
  );
};

export default Layout;
