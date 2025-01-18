import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import AboutMe from './pages/AboutMe.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/projects",
    element: <Projects> </Projects>
  },
  {
    path:"/experience",
    element: <Experience> </Experience>
  },
  {
    path:"/aboutme",
    element: <AboutMe> </AboutMe>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
