import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Root from './Root.jsx'
import SignupForm from './SignupForm.jsx'
import NewBlog from './NewBlog.jsx'
import Blogs from './Blogs.jsx'
import LoginForm from './LoginForm.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {
        path:'/',
        element:<App />
      },
      {
        path:'/signup',
        element:<SignupForm />
      },
      {
        path:'/new',
        element:<NewBlog />
      },
      {
        path:'/blogs',
        element:<Blogs />
      },
      {
        path:'/login',
        element:<LoginForm />
      }

    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
