import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../pages/Home/Home/Home';
import RootLayout from '../layouts/RootLayout';
import AuthLayout from '../layouts/AuthLayout';
import Register from '../pages/Authentication/Register/Register';
import Login from '../pages/Authentication/Login/Login';
import Coverage from '../pages/Coverage/Coverage';
import AddParcel from '../pages/AddParcel/AddParcel';
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/coverage',
                element: <Coverage />,
                loader: () => fetch("./servicePoint.json")
            },
            {
                path: '/addParcel',
                element: <AddParcel />,
                loader: (() => fetch("./servicePoint.json"))
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]

    },
]);


export default router;