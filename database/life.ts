import M_END from './M_END.md';
import Motor from './Motor.md';

interface Life {
  id: number;
  lifeCategoryDTO: {
    id: number;
    name: string;
    lifeDetailDTOS: any[
    ];
  };
}

import beijing from '@/assets/forbidden-city.png';
import shanghai from '@/assets/shanghai.png';
import guangzhou from '@/assets/dimsum.png';
import mushroom from '@/assets/mushroom.png';
import motor from '@/assets/motor.png';
import ski from '@/assets/ski.png';
import frisbee from '@/assets/frisbee.png';
import camera from '@/assets/camera.png';


export const lifeList: Life[] = [
  {
    id: 1,
    lifeCategoryDTO: {
      id: 1,
      name: '四方游记',
      lifeDetailDTOS: [
        {
          id: 1,
          name: '北京',
          descriptionSummary: '保持身体健康，增强体质。',
          iconPath: beijing,
        },
        {
          id: 2,
          name: '广州',
          descriptionSummary: '科学膳食，健康饮食。',
          iconPath: guangzhou,
        },
        {
          id: 2,
          name: '上海',
          descriptionSummary: '科学膳食，健康饮食。',
          iconPath: shanghai,
        },
        {
          id: 2,
          name: '昆明',
          descriptionSummary: '科学膳食，健康饮食。',
          iconPath: mushroom,
        },
      ],
    },
  },
  {
    id: 2,
    lifeCategoryDTO: {
      id: 2,
      name: '趣味人生',
      lifeDetailDTOS: [
        {
          id: 21,
          name: '骑摩托',
          descriptionSummary: '欣赏最新电影，放松心情。',
          iconPath: motor,

        },
        {
          id: 4,
          name: '拍照片',
          descriptionSummary: '呼吸新鲜空气，感受大自然。',
          iconPath: camera,

        },
      ],
    },
  },
  {
    id: 2,
    lifeCategoryDTO: {
      id: 2,
      name: '健康生活',
      lifeDetailDTOS: [
        {
          id: 3,
          name: '滑雪',
          descriptionSummary: '欣赏最新电影，放松心情。',
          iconPath: ski,
        },
        {
          id: 4,
          name: '飞盘',
          descriptionSummary: '呼吸新鲜空气，感受大自然。',
          iconPath: frisbee,
        },
      ],
    },
  },
];


export const lifeWikis = [
  {
    id: 1,
    title: '北京 ',
    content: M_END,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
  {
    id: 21,
    title:  '摩托',
    content: Motor,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
];