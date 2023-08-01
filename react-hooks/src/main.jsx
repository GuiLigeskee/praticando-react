import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import { HookUseContext } from './components/HookUseContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HookUseContext>
       <RouterProvider router={router}/>
    </HookUseContext>
  </React.StrictMode>
)
