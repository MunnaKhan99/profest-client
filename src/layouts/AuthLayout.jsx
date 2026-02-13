import React from 'react';
import Logo from '../pages/shared/Logo/Logo';
import authImg from "../../src/assets/authImage.png";
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-[#E6F2F3] px-4 sm:px-8 lg:px-12 py-6">
            {/* Logo */}
            <div className="mb-6">
                <Logo />
            </div>

            {/* Main Content */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center">

                {/* Form Section */}
                <div className="w-full max-w-md flex-1">
                    <Outlet />
                </div>

                {/* Image Section */}
                <div className="w-full flex-1 flex justify-center">
                    <img
                        src={authImg}
                        alt="Authentication Illustration"
                        className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[580px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
