import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom';
import Root from './Layout/Root.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import MyCraftList from './Components/MyCraftList/MyCraftList.jsx';
import CraftItems from './Components/CraftItems/CraftItems.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AddCraftItem from './Components/AddCraftItem/AddCraftItem.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/myItems",
        element: <MyCraftList></MyCraftList>,
      },
      {
        path: "/craftItems",
        element: <CraftItems></CraftItems>,
      },
      {
        path: "/addItems",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
