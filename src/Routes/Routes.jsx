import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProductsAll from "../Pages/ProductsAll/ProductsAll";
import Dashboard from "../Layout/Dashboard";
import ManageProduct from "../Pages/DashBoard/ManageProduct/ManageProduct";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
        path: "/",
        element: <Home></Home>
        },
        {
        path: "/productsAll",
        element: <ProductsAll></ProductsAll>
        },
       
      ]
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children: [
          {
            path:"addProduct",
            element:<AddProduct></AddProduct>
          },
          {
            path:"manageProduct",
            element:<ManageProduct></ManageProduct>
          },
        ]
    }
  ]);