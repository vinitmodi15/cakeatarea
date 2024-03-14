import React from 'react'
import MyPosts from './components/MyPosts'
import Menu from './components/Menu'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Order from './components/Order';
import Contact from './components/Contact';
import "./app.css"
import Description from './components/Description';

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <MyPosts/>
      
    ),
  },

  {
    path: "/menu",
    element: ( <Menu/>
      
    )
  },

  {
    path: "/order/",
    element: ( <Order/>
      
    )
  },
 
  {
    path: "/contact",
    element: ( <Contact/>
      
    )
  },

  {
    path: "/order/bakery/:category",
    element: ( <Description/>
      
    )
  },

  {
    path: "/order/dessert/:category",
    element: ( <Description/>
      
    )
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}