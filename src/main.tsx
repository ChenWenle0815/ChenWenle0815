// App.tsx 或其他路由配置文件
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import Job from './routes/job';
import ErrorPage from './routes/error-page';
import Layout from './components/common/Layout'; // 引入布局组件
import { Provider } from 'react-redux';
import store from '@/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // 使用布局组件
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'job', element: <Job /> },
      // 其他子路由...
    ],
  },
  // 如果有其他顶级路由，也可以在这里添加
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
