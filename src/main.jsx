import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./component/NotFound.jsx";
import Home from "./Home.jsx";
import JobDetails from "./JobDetails.jsx";
import AppliedJobs from "./AppliedJobs.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('./job.json'),
            },
            {
                path: '/job/details/:id',
                element: <JobDetails />,
                loader: () => fetch('/job.json'),
            },
            {
                path: '/job/applied-job',
                element: <AppliedJobs />,
                loader: () => fetch('../job.json'),
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
