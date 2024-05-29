import { ReactNode } from 'react';
import Content from './Content';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import { IMenu } from '../../../database/wiki';

interface BlogProps {
    children: ReactNode;
    menu:IMenu[]
  }
function Blog({ children, menu }:BlogProps) {

  const { theme } = useSelector((state: any) => state.job);

  return (
    <>
      <div className="blog">
        <Menu theme={theme} menu={menu}/>
        <div className="right">
          <div >
            {children}
          </div>
          <Content />
        </div>
      </div>
    </>
  );
}

export default Blog;