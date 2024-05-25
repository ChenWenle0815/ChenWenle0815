


function HappyLife() {

  const happyList = [
    { title: '旅游', image: 'src/assets/camera.png', description: 'To be a salior of the world,bound for all ports' },
    { title: '摩托', image: 'src/assets/motor.png', description: '青春没有售价，踏板直达拉萨' },
    { title: '运动', image: 'src/assets/swim.png', description: '每天锻炼 30 分钟' },
  ];

  return (
    <>
      <div className='happy-life'>
        <div className="happy-title">
          我的生活
        </div>
        <div className="title-bottom"></div>
        <div className="happy-box">
          {happyList.map(item => {
            return (
              <div className="happy-item">
                <img src={item.image} alt="" />
                <div className="title">
                  {item.title}
                </div>
                <div className="description">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </>
  );
}

export default HappyLife;