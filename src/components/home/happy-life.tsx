import { Carousel } from 'antd';

const happyList = [
  { title: '旅游', image: 'src/assets/datong.jpeg', description: '' },
  { title: '摩托', image: 'src/assets/taban.jpeg', description: '' },
  { title: '运动', image: 'src/assets/ski.jpeg', description: '' },
  { title: '游戏', image: 'src/assets/chanchan.jpeg', description: '' },
];

function HappyLife() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className='happy-life'>
                这里是对快乐生活的一些记录
        <Carousel afterChange={onChange}>
          {happyList.map((item, index) => {
            return (
              <div key={index} >
                <div className='box'>
                  <div className='left'>
                    <h3 >{item.title}</h3>
                  </div>
                  < div className='right'>
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default HappyLife;