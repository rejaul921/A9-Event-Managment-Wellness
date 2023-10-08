
import Banner from '../../components/Banner/Banner';
import Ourservices from '../../components/Ourservices/Ourservices';
import { useLoaderData } from 'react-router-dom';
import Testominals from '../../components/Testominals/Testominals';
import Whyus from '../../components/Whyus/Whyus';

const Homepage = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className=''>
            <Banner></Banner>
            <Ourservices></Ourservices>
            <Testominals></Testominals>
            <Whyus></Whyus>
        </div>
    );
};

export default Homepage;