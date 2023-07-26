import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import About from './routes/About.jsx';


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
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/About",
        element: <About/>
      }
    ]
  }
]) 


import { CounterContextProvider } from './context/CounterContext.jsx';
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2 - Criando provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
