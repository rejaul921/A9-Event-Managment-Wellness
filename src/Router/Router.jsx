
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
import Protected from '../components/Protected Route/Protected';

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
                element: <Protected><Servicedes></Servicedes></Protected>,
                loader: ()=> fetch('/services.json')
            },
            {
                path:"/contactus",
                element: <Protected><ConactUs></ConactUs></Protected>
            },
            {
                path:"/running",
                element: <Protected><RunningEvents></RunningEvents></Protected>
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