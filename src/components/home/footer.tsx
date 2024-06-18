import './home.scss';
import github from '../../assets/github.png';
import weibo from '../../assets/weibo.png';
import wordpress from '../../assets/xhs_icon.png';



function Footer() {
  const list = [
    {
      name: 'Github',
      path: 'https://github.com/ChenWenle0815',
      img: github
    },
    {
      name: '微博',
      path: 'https://m.weibo.cn/u/6818670520?featurecode=profile_qrcode&uid=6818670520&t=userinfo&_T_WM=bb09d410239f2ed3c2ebf4a69933ba29',
      img: weibo
    },
    {
      name: '小红书',
      path: 'https://www.xiaohongshu.com/user/profile/6430311f000000001201289f?exSource=',
      img: wordpress
    },
  ];
  const toSocialMedia = (path:string)=>{
    window.open(path)
  }
  return (
    <>
      <div className="footer">
        <div className="box">
          <div className='left'>
            <p>你可以在这里找到我 </p>
          </div>
          <div className='right'>
            {list.map(item => {
              return (
                <div onClick={()=>{toSocialMedia(item.path)}}>
                  <div>{item.name}</div>
                  <img src={item.img} alt="" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;