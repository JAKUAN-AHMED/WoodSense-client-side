import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Utility/Routes/Routes'
import ProviderContext from './Context/Provider/ProviderContext'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderContext>
      <RouterProvider router={router} ></RouterProvider>
    </ProviderContext>
  </React.StrictMode>
);
