import { Carousel } from 'antd';

const happyList = [
    { title: '旅游', image: '', description: '' },
    { title: '摩托', image: '', description: '' },
    { title: '运动', image: '', description: '' },
    { title: '游戏', image: '', description: '' },
]

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
                                    <div>left-box</div>
                                    < div>right-box
                                        <h3 >{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default HappyLife