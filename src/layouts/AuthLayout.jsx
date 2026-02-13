import React from 'react';
import Logo from '../pages/shared/Logo/Logo';
import authImg from "../../src/assets/authImage.png";
import { Outlet } from 'react-router';
import { motion } from "framer-motion";

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-[#E6F2F3] px-4 sm:px-8 lg:px-12 py-6">
            {/* Logo */}
            <div className="mb-6">
                <Logo />
            </div>

            {/* Main Content */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-20">

                {/* Form Section */}
                <div className="w-full max-w-md flex-1">
                    <Outlet />
                </div>

                {/* Image Section with Continuous Animation */}
                <motion.div
                    className="w-full flex-1 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                        opacity: 1,
                        y: [0, -12, 0]   // up-down floating
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror"
                    }}
                >
                    <img
                        src={authImg}
                        alt="Authentication Illustration"
                        className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[580px] object-contain"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default AuthLayout;
