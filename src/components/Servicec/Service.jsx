import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id} = service
    return (
        <div>
            <div className="h-80 bg-base-100 rounded-lg shadow-xl">
                <div><img className='h-40 w-full p-2 rounded-lg' src={service.img} alt="Shoes" /></div>
                <div className="px-3">
                    <h2 className="text-xl font-bold">{service.title}</h2>
                    <p>{service.description.slice(0,80)}</p>
                    <p className='font-semibold'>Price: <span>{service.price} $</span></p>
                    <Link to={`/services/${id}`} ><button className="btn bg-green-700 text-white">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;