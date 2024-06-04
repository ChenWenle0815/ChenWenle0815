
import Editor from '@/components/common/Editor';
import { useLocation } from 'react-router-dom';
import { getWikiContent } from '@/sevices/life.service';

function Job() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const content =  getWikiContent(Number(id));
  return (
    <>
      <div className='life-editor-box'>
        <Editor content={content}/>
      </div>
    </>
  );
}

export default Job;