import { useEffect } from 'react';
import Blog from '../components/common/blog'
import '../components/job/job.scss'
import '../components/common/common.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '@/store/modules/job';
import { Switch,Button } from 'antd';
import {test} from '../api/index'


export default function Job() {

  // 通过useDispatch 派发事件
  const dispatch = useDispatch();

  // 通过useSelector直接拿到store中定义的value
  const { theme } = useSelector((store: any) => store.job);

  const testApi = async ()=>{
    const res = await test()
    console.log("🚀 ~ testApi ~ res:", res)

  }

  useEffect(() => {
    // 监听 counter 变化
    console.log(theme);
  }, [theme])

  return (
    <>
      <div className='job'>
        <Blog>
          这里是切换的地方
          <Button onClick={()=>testApi()}> 测试接口</Button>
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
