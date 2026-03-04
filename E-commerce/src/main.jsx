import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Shoes from './Pages/Shoes.jsx'
import Login from './Pages/Login.jsx'
import Products from './Componets/Products.jsx'
import Productform from './Componets/Productform.jsx'
import ProductCard from './Componets/ProductCard.jsx'
import Addtocart from './Pages/Addtocart.jsx'


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
        path:'/productcard/:id',
        element:<ProductCard/>
      },
      {
        path:"addcard",
        element: <Addtocart/> 
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
