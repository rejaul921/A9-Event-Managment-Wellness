import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Protected = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const location =useLocation()
    console.log(location.pathname)

    if(loading){
        return <div className='flex justify-center items-center my-auto mx-auto'><div><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div></div>
    }

    if(user){
        return children
    }
    return<Navigate state={location.pathname} to="/login"></Navigate>
};

export default Protected;