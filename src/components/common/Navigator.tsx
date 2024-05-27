import React from 'react';
import { Affix } from 'antd';
import './common.scss';
import { Link } from 'react-router-dom'; // 引入Link组件

const Navigator: React.FC = () => {
  return (
    <Affix>
      <div className='navigator'>
        <div className='wrapper'>
          {/* 使用Link组件提供导航 */}
          <img src="src/assets/cc.png" alt="" />
          <Link className="link" to="/">主页</Link>
          <Link className="link" to="/job">工作</Link>
          <Link className="link" to="/life">生活</Link>
          <Link className="link" to="/thoughts">随想</Link>
        </div>
      </div>
    </Affix>
  );
};

export default Navigator;