import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className="py-16 flex items-center text-center justify-center">
            <div>
                <h1 className="mb-5 text-3xl text-black font-bold">You have lost the route. Please go back to</h1>
                 <Link to="/"> <button className="btn btn-primary bg-green-700 border-none text-white">Home</button></Link>
            </div>
        </div>
    );
};

export default Errorpage;