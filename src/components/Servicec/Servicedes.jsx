import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Servicedes = () => {

    const [service, setService] = useState({})
    const { id } = useParams()
    const services = useLoaderData()
    useEffect(() => {
        const findService = services.find(service => service.id == id)
        setService(findService)
    }, [id, services])

    
    const favouriteEvent=()=>{
    }
    

    return (
        <div>
            <div className="mx-auto bg-base-100 rounded-lg shadow-xl">
            <div className='mx-auto mb-6 px-10'><h2 className="bg-green-700 w-1/3 mx-auto text-white px-3 text-2xl font-bold">{service.title}</h2></div>
                <div><img className='h-[70vh] w-full p-2 rounded-lg' src={service.img} alt="Shoes" /></div>
                <div className="px-3">
                    
                    <p>{service.description}</p>
                    <p className='mt-3 font-bold'>Price: <span>{service.price} $</span></p>
                    <button onClick={favouriteEvent} className="btn my-3 bg-green-700 text-white">Add to Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default Servicedes;