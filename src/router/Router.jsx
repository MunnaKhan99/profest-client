import React from 'react';

import { createBrowserRouter } from "react-router";
import Home from '../pages/Home/Home/Home';
import RootLayout from '../layouts/RootLayout';
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
]);


export default router;