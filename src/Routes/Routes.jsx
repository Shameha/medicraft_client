import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home";
import Article from "../pages/Article/Article/Article";
import ItemDetails from "../pages/Article/Article/ItemDetails";
import Medicine from "../pages/Medicine/Medicine/Medicine";
import MedicineDetails from "../pages/Medicine/Medicine/MedicineDetails";
 
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'article',
          element: <Article></Article>
      },
      {
        path: '/item/:_id',
        element: <ItemDetails></ItemDetails>,
        loader:()=>fetch('http://localhost:5000/blog')
    },
    {
      path: 'medicine',
      element: <Medicine></Medicine>
  },
  {
    path: '/medi/:_id',
    element: <MedicineDetails></MedicineDetails>,
    loader:()=>fetch('http://localhost:5000/medicine')
},
      ]
    },
  ]);