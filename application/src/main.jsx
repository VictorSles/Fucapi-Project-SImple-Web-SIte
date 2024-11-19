import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
{/* Web Pages */ }
import Home from './assets/Páginas/Home.jsx'
import Login from './assets/Páginas/Login.jsx'
import Nos from './assets/Páginas/Nos.jsx'
{/* Biclioteca para as rotas de cada página */ }
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const pages_in_array = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'sobre-nos',
        element: <Nos />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pages_in_array} />
  </StrictMode>,
)