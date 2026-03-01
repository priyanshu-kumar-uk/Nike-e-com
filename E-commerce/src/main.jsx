import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Shoes from './Pages/Shoes.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Login from './Pages/Login.jsx'
import Products from './Componets/Products.jsx'
import Productform from './Componets/Productform.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children : [
      {
        index: true,
        element: <Home/>
      },
      {
        path:"/about",
        element : <About/>
      },
      {
        path:"/shoes",
        element: <Shoes/>
      },
      {
        path:'/createProduct',
        element : <Products/>
      },
      {
        path:"wishlist",
        element: <Wishlist/>
      },
      {
        path:"/login",
        element : <Login/>
      },

    ]
    
  },
  {
    path:'/productform',
    element: <Productform/>
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)
