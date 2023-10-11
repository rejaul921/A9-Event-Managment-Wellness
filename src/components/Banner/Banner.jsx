import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="mx-auto text-center">
            <div className=" my-10 mx-auto text-center">
                    <div className="mx-auto text-center">
                        <h1 className="mb-5 text-3xl font-bold">Welcome to Wellness EventHarbor</h1>
                        <p className="mb-5">We are praised in Town for Bringing communities together through vibrant cultural events that celebrate diversity and unity.</p>
                        <Link to="/contactus"><button className="btn btn-primary bg-green-700 border-none">Contact us</button></Link>
                    </div>
                </div>
                <div  className="mx-auto text-center"> <img className='w-full mx-auto' src="https://i.ibb.co/3YddjYV/well.jpg" alt="" /> </div>
                
            </div>
        </div>
    );
};

export default Banner;