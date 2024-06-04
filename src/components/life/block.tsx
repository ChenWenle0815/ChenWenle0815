import React from 'react';
import './block.scss';
import { useNavigate } from 'react-router-dom';

interface LifeDetailProps {
  lifeSpecificList: {
    id: number;
    name: string;
    descriptionSummary: string;
    iconPath:string;
  }[];
  title: string;
  categoryId: number;
}

const LifeDetail: React.FC<LifeDetailProps> = ({
  lifeSpecificList,
  title,
}) => {

  const navigate = useNavigate();

  const handleItemClick = (itemId: number) => {
    navigate(`/lifeDetail?id=${itemId}`);
  };


  return (
    <div className="life-module">
      <div className="title">{title}</div>
      <div className="list-all">
        {lifeSpecificList.map(item => (
          <div
            key={item.id}
            className="life-list"
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.iconPath} className="life-list-img" />
            <div className="life-list-description">
              <div className="life-list-description-name">{item.name}</div>
              <div className="life-list-description-detail">{item.descriptionSummary}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeDetail;
