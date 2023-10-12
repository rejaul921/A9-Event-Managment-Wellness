
import { useLoaderData } from 'react-router-dom';
import Service from '../Servicec/Service';

const Ourservices = () => {
    const services = useLoaderData()
    
    return (
        <div className='my-11'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold bg-green-700 p-4 text-white text-center my-6'>Our Services</h2>
                <p className='px-8'>At <span className='text-lg font-bold'>Wellness EventHarbor</span>, we specialize in crafting transformative Health and Wellness Events that inspire and invigorate. From fitness boot camps and wellness workshops to mindfulness retreats, our dedicated team meticulously plans and executes events that prioritize physical and mental well-being. Elevate your community health with our expert event management services, where every detail is curated to foster a culture of holistic living.</p>
            </div>
            <div className='grid gap-4 text-center mt-8 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service=> <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Ourservices;