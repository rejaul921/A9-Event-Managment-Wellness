import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' font-bold flex items-center justify-between px-5 mt-3 py-4 shadow-lg'>
            <div className='flex gap-3 items-center'>
                <div> <img className='w-12 h-12 rounded-full' src="/logo.jpg" alt="" /></div>
                <div> <p>Wellness EventHarbor</p></div>
            </div>
            <div className='w-1/2 flex justify-around gap-3 text-center'>
                <div><NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""} >
                            Home
                    </NavLink>
                </div>
                <div><NavLink to="/favourite"  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""}>
                        Favourite Events
                    </NavLink>
                </div>
                <div><NavLink to="/feature" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""}>
                        Features
                    </NavLink>
                </div>
                <div><NavLink to="/services" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""}>
                        Services
                    </NavLink>
                </div>
                <div><NavLink to="/regster"  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""}>
                        Register
                    </NavLink>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;