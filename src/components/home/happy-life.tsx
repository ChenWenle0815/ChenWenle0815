
import camera from '../../assets/camera.png';
import motor from '../../assets/motor.png';
import swim from '../../assets/swim.png';
import { useNavigate } from "react-router-dom"

function HappyLife() {
  const navigate = useNavigate()
    const goLife = () => {
      // 代码跳转路由
      navigate('/life', { replace: false })
    }

  const happyList = [
    { title: '旅游', image: camera, description: 'To be a salior of the world,bound for all ports' },
    { title: '摩托', image: motor, description: '青春没有售价，踏板直达拉萨' },
    { title: '运动', image: swim, description: '每天锻炼 30 分钟' },
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
              <div className="happy-item" onClick={goLife}>
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