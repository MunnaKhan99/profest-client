import React from 'react';
import logo from '../../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="" className='w-10' />
            <h1 className='text-4xl font-bold -ml-4'>ProShift</h1>
        </div>
    );
};

export default Logo;