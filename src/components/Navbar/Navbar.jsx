import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const SignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className=' font-bold sm: grid md:flex items-center justify-between px-5 mt-3 py-4 shadow-lg'>
            <div className='flex gap-3 items-center'>
                <div> <img className='w-12 h-12 rounded-full' src="/logo.jpg" alt="" /></div>
                <div> <p>Wellness EventHarbor</p></div>
            </div>
            <div className='sm:w-full sm:justify-center lg:w-1/2 flex justify-around gap-3 text-center'>
                <div><NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""} >
                    Home
                </NavLink>
                </div>
                <div><NavLink to="/running" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""}>
                    On Going Events
                </NavLink>
                </div>
                <div><NavLink to="/contactus" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""}>
                    Contact us
                </NavLink>
                </div>
                <div><NavLink to="/services" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""}>
                    Services
                </NavLink>
                </div>
                <div>
                    {
                        user ? <div className=''>
                            <div className='flex items-center text-center gap-1'>
                                <button onClick={SignOut} className=' bg-green-700 p-1 text-white rounded-lg '>Logout</button>
                                <img className='rounded-full w-8 h-8' src={user.photoURL} alt="" />
                                <p>{user.displayName}</p>
                            </div>             
                        </div>

                            :

                            <NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-700 text-white p-2 rounded-lg" : ""}>
                                Log in
                            </NavLink>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;