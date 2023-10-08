import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Homepage from '../Pages/Homepage/Homepage';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element: <Homepage></Homepage>
            }
        ]
    }
])

export default Router;