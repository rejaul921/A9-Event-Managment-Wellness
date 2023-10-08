import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-5 my-3 py-4 shadow-lg'>
            <div className='flex gap-3 items-center'>
                <div> <img className='w-12 h-12 rounded-full' src="/logo.jpg" alt="" /></div>
                <div> <p>Wellness EventHarbor</p></div>
            </div>
            <div className='w-1/2 flex justify-around gap-3 text-center'>
                <div><NavLink to={"/"}>Home</NavLink></div>
                <div><NavLink to={"/blog"}>Blog</NavLink></div>
                <div><NavLink to={"/regster"}>Register</NavLink></div>
                <div><NavLink to={"/services"}>Services</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;