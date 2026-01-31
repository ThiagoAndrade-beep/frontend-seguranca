import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/register/Register.jsx'
import Auth from './pages/auth/Auth.jsx'
import HomePage from './pages/home/HomePage.jsx'
import Layout from './components/layout/Layout.jsx'
import Vulnerabilities from './pages/vulnerabilities/Vulnerabilities.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "RegisterUser",
      element: <Register />
    },
    {
      path: "LoginUser",
      element: <Auth />
    },
    {
      path: "/app",
      element: <Layout />,
        children: [
          {
            path: "vulnerabilities",
            element: <Vulnerabilities />
          }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router}/>
    </ThemeContextProvider>
  </StrictMode>,
)
