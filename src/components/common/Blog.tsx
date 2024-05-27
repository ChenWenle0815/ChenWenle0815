import { ReactNode } from 'react';
import Content from './Content';
import Menu from './Menu';
import { useSelector } from 'react-redux';

interface BlogProps {
    children: ReactNode;
  }
function Blog({ children }:BlogProps) {

  const { theme } = useSelector((state: any) => state.job);

  return (
    <>
      <div className="blog">
        <Menu theme={theme}/>
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