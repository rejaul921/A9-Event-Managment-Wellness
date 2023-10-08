import React from 'react';
import Banner from '../../components/Banner/Banner';
import Ourservices from '../../components/Ourservices/Ourservices';
import { useLoaderData } from 'react-router-dom';

const Homepage = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className=''>
            <Banner></Banner>
            <Ourservices></Ourservices>
        </div>
    );
};

export default Homepage;