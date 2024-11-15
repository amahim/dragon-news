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
import AuthLayout from './Components/AuthLayout/AuthLayout';
import Login from './Components/AuthLayout/Login';
import Register from './Components/AuthLayout/Register';
import AuthProvider from './Provider/AuthProvider';
import About from './Components/About';
import Career from './Components/Career';
import NewsDetails from './Components/MainHome/NewsDetails';
import PrivateRoute from './Routes/PrivateRoute';

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
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login", 
        element: <Login />
      },
      {
        path: "register", 
        element: <Register />
      },
    ]
  },
  {
    path:"about",
    element: <About/>
  },
  {
    path:"career",
    element: <Career/>
  },
  {
    path:"/news/:id",
    element:  <PrivateRoute>
                <NewsDetails/>
              </PrivateRoute>,
    loader: ({params})=> 
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },

  
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
