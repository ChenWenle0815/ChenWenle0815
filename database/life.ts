import BEIJING from './BEIJING.md';
import SHANGHAI from './SHANGHAI.md';
import KUNMING from './KUNMING.md';
import GUANGZHOU from './GUANGZHOU.md';
import Motor from './Motor.md';
import SKI from './SKI.md';
import FRISBEE from './FRISBEE.md';
import PHOTOGRAHPY from './PHOTOGRAHPY.md';

interface Life {
  id: number;
  lifeCategoryDTO: {
    id: number;
    name: string;
    iconPath?:'',
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


export const lifeWikis = [
  {
    id: 1,
    title: '北京 ',
    content: BEIJING,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
  {
    id: 2,
    title: '上海 ',
    content: SHANGHAI,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
  {
    id: 3,
    title: '广州 ',
    content: GUANGZHOU,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
  {
    id: 4,
    title: '昆明 ',
    content: KUNMING,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
  {
    id: 5,
    title: '摩托',
    content: Motor,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
  {
    id: 6,
    title: '摄影',
    content: PHOTOGRAHPY,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
  {
    id: 7,
    title: '滑雪',
    content: SKI,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
  {
    id: 8,
    title: '飞盘',
    content: FRISBEE,
    createTime: 1622547600000,
    updateTime: 1625139600000
  },
];

export const lifeList: Life[] = [
  {
    id: 1,
    lifeCategoryDTO: {
      id: 1,
      name: '四方游记',
      iconPath: '',
      lifeDetailDTOS: [
        {
          id: 1,
          name: '北京',
          descriptionSummary: '离家三千里',
          iconPath: beijing,
        },
        {
          id: 2,
          name: '上海',
          descriptionSummary: '时尚的城市',
          iconPath: shanghai,
        },
        {
          id: 3,
          name: '广州',
          descriptionSummary: '四年大学生活',
          iconPath: guangzhou,
        },
     
        {
          id: 4,
          name: '昆明',
          descriptionSummary: '我的家🏠',
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
          id: 5,
          name: '骑摩托',
          descriptionSummary: '慢慢骑、骑到老',
          iconPath: motor,

        },
        {
          id: 6,
          name: '拍照片',
          descriptionSummary: '有人的照片是回忆',
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
          id: 7,
          name: '滑雪',
          descriptionSummary: '白色鸦片',
          iconPath: ski,
        },
        {
          id: 8,
          name: '飞盘',
          descriptionSummary: '各种运动集合体',
          iconPath: frisbee,
        },
      ],
    },
  },
];
