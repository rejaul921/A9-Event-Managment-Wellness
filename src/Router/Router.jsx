
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Homepage from '../Pages/Homepage/Homepage';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Ourservices from '../components/Ourservices/Ourservices';
import Servicedes from '../components/Servicec/Servicedes';
import Forlogin from '../Pages/Forlogin/Forlogin';
import Register from '../Pages/Forlogin/Register';
import ConactUs from '../Pages/Featurepage/ConactUs';
import RunningEvents from '../Pages/Favouritepage/RunningEvents';

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
                path:"/services/:id",
                element: <Servicedes></Servicedes>,
                loader: ()=> fetch('/services.json')
            },
            {
                path:"/contactus",
                element: <ConactUs></ConactUs>
            },
            {
                path:"/running",
                element: <RunningEvents></RunningEvents>
            },
            {
                path:"/login",
                element: <Forlogin></Forlogin>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ]
    }
])

export default Router;