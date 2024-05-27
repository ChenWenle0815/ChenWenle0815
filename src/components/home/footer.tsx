import './home.scss';
import github from '../../assets/github.png';
import weibo from '../../assets/weibo.png';
import wordpress from '../../assets/wordpress.png';



function Footer() {
  const list = [
    {
      name: 'Github',
      icon: '',
      img: github
    },
    {
      name: '微博',
      icon: '',
      img: weibo
    },
    {
      name: '博客',
      icon: '',
      img: wordpress
    },
  ];
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
                <div>
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