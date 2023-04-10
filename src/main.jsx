import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout></Layout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      }, 
      {
        path : '/jobs',
        element : <AppliedJobs></AppliedJobs>,
      }, 
      {
        path : '/jobDetails/:pid',
        element : <JobDetails></JobDetails>,
        loader : ()=> fetch('/featuredJobs.json')
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)



/* {
  path : '/jobs',
  element : <AppliedJobs></AppliedJobs>,
  loader : ()=> fetch('featuredJobs.json')
}, */
    
