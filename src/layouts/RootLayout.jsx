import React from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';


const RootLayout = () => {
    return (
        <div className='font-urbanist max-w-6xl mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;