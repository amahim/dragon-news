import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Error from './Components/Error';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import News from './Components/MainHome/News';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Navigate to={"/category/08"}></Navigate>
      },
      {
        path: "/category/:id",
        element: <News/>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          )
        // loader:()=> fetch(".././public/news.json")
      },
    ]
  },
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
