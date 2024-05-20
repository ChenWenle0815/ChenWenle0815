import { useEffect } from 'react';
import Blog from '../components/common/blog'
import '../components/job/job.scss'
import '../components/common/common.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '@/store/modules/job';
import { Switch } from 'antd';



export default function Job() {

  // 通过useDispatch 派发事件
  const dispatch = useDispatch();

  // 通过useSelector直接拿到store中定义的value
  const { theme } = useSelector((store: any) => store.job);


  useEffect(() => {
    // 监听 counter 变化
    console.log(theme);
  }, [theme])

  return (
    <>
      <div className='job'>
        <Blog>
          这里是切换的地方
          <Switch
            checked={theme}
            onChange={() => dispatch(setTheme({theme:!theme}))}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </Blog>
      </div>

    </>
  );
}
