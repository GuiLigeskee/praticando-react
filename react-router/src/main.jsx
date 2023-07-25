import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import ContactDetails from './routes/ContactDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/contact',
//     element: <Contact/>
//   }
// ])


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // 3 - Pagina de erro
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },

      // 5 - nested routes - identificador único - dynamic routs
      {
        path: '/contact/:id',
        element: <ContactDetails/>
      },
      // 7 - navigate para paginas não existentes
      {
        path: '/oldcontact',
        element: <Navigate to="/contact"/>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
