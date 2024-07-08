import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1 - Configurando o router

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from './routes/Home';
import Contact from './routes/Contact';
import Error from './routes/Error';
import ContactDetails from './routes/ContactDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //3-  Error Page
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contato",
        element: <Contact />
      },
      // 5 - nested routes - identificador único dynamic routes
      {
        path: "/contato/:id",
        element: <ContactDetails />,
      },
      // 7 - Navigate para páginas não existentes
      {
        path: "oldcontato",
        element: <Navigate to="/contato"/>,
      }
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
