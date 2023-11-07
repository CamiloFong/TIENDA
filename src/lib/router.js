import {
    createBrowserRouter,    
} from "react-router-dom";
import About from "../router/about/About";
import Login from "../router/login/Login";
import Catalogo from "../router/products/Catalogo";
import Contact from "../router/contac/Contact";
import Index from '../router/index'

export const router = createBrowserRouter([    
    {
      path: "/",
      element: <Index/>,
      errorElement: <div> Qiubo bb, hay un errorcito</div>
    },
    {
      path: "/about",
      element: <About/>,      
    },
    {
      path: "/catalogo",
      element: <Catalogo/>,      
    },
    {
      path: "/contact",
      element: <Contact/>,      
    },
    {
      path: "/login",
      element: <Login/>,      
    },
  ]);