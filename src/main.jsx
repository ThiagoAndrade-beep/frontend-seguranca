import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/register/Register.jsx'
import Auth from './pages/auth/Auth.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "RegisterUser",
      element: <Register />
    },
    {
      path: "LoginUser",
      element: <Auth />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router}/>
    </ThemeContextProvider>
  </StrictMode>,
)
