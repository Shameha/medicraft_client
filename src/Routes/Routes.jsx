import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home";
import Article from "../pages/Article/Article/Article";
import ItemDetails from "../pages/Article/Article/ItemDetails";
import Medicine from "../pages/Medicine/Medicine/Medicine";
 
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
        loader:()=>fetch('blog.json')
    },
    {
      path: 'medicine',
      element: <Medicine></Medicine>
  },
      ]
    },
  ]);