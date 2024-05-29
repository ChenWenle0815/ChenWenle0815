import { useSelector } from 'react-redux';
import Editor from './Editor';


function Content() {
  const { content } = useSelector((state: any) => state.job);

  return (
    <>
      <div className="content">
        <Editor content={content}/>
      </div>
    </>
  );
}

export default Content;