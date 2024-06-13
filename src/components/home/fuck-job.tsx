import workImg from '../../assets/work.png';
import { wikis } from '../../../database/wiki';
import { Avatar, List } from 'antd';
import { Link } from 'react-router-dom';

function FuckJob() {
  return (
    <>
      <div className="fucking-job">
        <div className="job-title">
          我的工作
        </div>
        <div className="title-bottom"></div>
        <div className="wrapper">
          <div className="left-box">
            <img src={workImg} alt="" />
          </div>
          <div className="right-box">
            <div className='wiki_logon'>总是播种，常常期待，有时收获。</div>
            <List
            className='wiki_list'
              itemLayout="horizontal"
              dataSource={wikis}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={<Link 
                      to={`/job?categoryId=${item.categoryId}&id=${item.id}`}>
                        {item.title}</Link>
                    }
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FuckJob;