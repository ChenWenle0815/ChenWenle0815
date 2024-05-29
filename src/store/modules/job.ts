/* store/modules/motor.ts */

import { createSlice } from '@reduxjs/toolkit';

export interface JobState {
  theme: boolean;
  title: string;
  content: string;
}

const initialState: JobState = {
  theme: false,
  title: 'redux toolkit pre',
  content: ''
};

// 创建一个 Slice
export const job = createSlice({
  // 命名空间
  name: 'job',

  // 初始化状态值
  initialState,

  // 定义 reducers 并生成关联的操作
  reducers: {
    setTheme(state, { payload }) {
      console.log(payload);
      state.theme = payload.theme;
    },
    setContent(state, { payload }) {
      console.log(payload);
      state.content = payload.content;
    }
  },
});

// 导出 reducers 方法
export const { setTheme, setContent } = job.actions;

// 默认导出
export default job.reducer;