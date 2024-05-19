import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/home'
import Job from './routes/job'
import ErrorPage from './routes/error-page'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage />
   
  },
  {
    path: "/job",
    element: <Job/>,
    errorElement:<ErrorPage />
   
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
