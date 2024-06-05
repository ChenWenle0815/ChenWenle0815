import React, { useState, useEffect } from 'react';
import LifeDetail from '@/components/life/block';
import { lifeList as life } from '../../../database/life';
import './list.scss';
interface Life {
  id: number;
  lifeCategoryDTO: {
    id: number;
    name: string;
    iconPath?: string;
    lifeDetailDTOS: any[];
  };
}

const LifeCenter: React.FC = () => {
  const [lifeList, setLifeList] = useState<Life[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLifeList(life);

    };
    fetchData();
  }, []);





  return (
    <div className="life">
      <div className="life-details">
        {lifeList.map((item, index) => (
          <div
            key={index}
          >
            <LifeDetail
              lifeSpecificList={item.lifeCategoryDTO.lifeDetailDTOS}
              title={item.lifeCategoryDTO.name}
              categoryId={item.lifeCategoryDTO.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeCenter;
