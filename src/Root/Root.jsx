import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='mx-auto w-11/12'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;