/* store/modules/motor.ts */

import { createSlice } from '@reduxjs/toolkit';

export interface MotorState {
  counter: number;
  title: string
}

const initialState: MotorState = {
  counter: 0,
  title: 'redux toolkit pre'
};

// 创建一个 Slice
export const motor = createSlice({
  // 命名空间
  name: 'motor',

  // 初始化状态值
  initialState,

  // 定义 reducers 并生成关联的操作
  reducers: {
    setCounter(state, { payload }) {
      console.log(payload);
      state.counter = payload.counter;
    }
  },
});

// 导出 reducers 方法
export const { setCounter } = motor.actions;

// 默认导出
export default motor.reducer;