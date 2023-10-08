import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Homepage from '../Pages/Homepage/Homepage';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Servicespage from '../Pages/Servicespage/Servicespage';
import Featurepage from '../Pages/Featurepage/Featurepage';
import Favouritepage from '../Pages/Favouritepage/Favouritepage';
import Ourservices from '../components/Ourservices/Ourservices';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element: <Homepage></Homepage>,
                loader: ()=> fetch('/services.json')
            },
            {
                path:"/services",
                element: <Ourservices></Ourservices>,
                loader: ()=> fetch('/services.json')
            },
            {
                path:"/feature",
                element: <Featurepage></Featurepage>
            },
            {
                path:"/favourite",
                element: <Favouritepage></Favouritepage>
            }
        ]
    }
])

export default Router;