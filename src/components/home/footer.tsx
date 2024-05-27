import './home.scss';


function getIcon(path: string) {
  return new URL(path, import.meta.url).href;
}


function Footer() {
  const list = [
    {
      name: 'Github',
      icon: '',
      img: '../../assets/github.png'
    },
    {
      name: '微博',
      icon: '',
      img: '../../assets/weibo.png'
    },
    {
      name: '博客',
      icon: '',
      img: '../../assets/wordpress.png'
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
                  <img src={getIcon(item.img)} alt="" />
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