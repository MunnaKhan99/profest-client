import React from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/coverage'>Coverage</NavLink></li>
            <li><NavLink to='/about'>About us</NavLink></li>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
        </>
    );

    // Removed the wrapping div from the buttons variable to allow flexible parent containers
    const actionButtons = (
        <>
            <button className="btn bg-white btn-sm lg:btn-md border-gray-200">Sign In</button>
            <button className="btn bg-[#CAEB66] btn-sm lg:btn-md border-none">Sign Up</button>
            <button className="btn btn-ghost lg:btn-circle btn-sm lg:bg-black text-white">
                <svg xmlns="http://www.w3.org" className="h-5 w-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </>
    );

    return (
        <nav className="navbar bg-white rounded-xl px-4 lg:px-8 mb-4 z-50">
            <div className="navbar-start">
                <Logo />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                {/* Desktop view: Wrapped in a flex row */}
                <div className="hidden lg:flex items-center gap-2">
                    {actionButtons}
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {/* Mobile view: Use a div instead of ul for the dropdown to allow mixed content safely */}
                    <div tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow-lg border border-base-200">
                        <ul className="menu menu-sm p-0">
                            {links}
                        </ul>
                        <div className="divider my-2"></div>
                        <div className="flex flex-col gap-2">
                            {actionButtons}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
