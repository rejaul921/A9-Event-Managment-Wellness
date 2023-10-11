import React from 'react';

const RunningEvents = () => {
    return (
        <div className='w-4/5 text-center mx-auto'>
            <div className='text-3xl text-white p-3 bg-green-700 font-bold mt-8'>Currently Availabe events to Join</div>
            <div className='my-8'>
                <p>
                Explore the vibrancy of our current events! Welcome to the heart of <span className='text-lg font-bold'>Wellness EventHarbor</span>, where cultural celebrations and wellness experiences come to life. Immerse yourself in the dynamic tapestry of our ongoing events, each carefully curated to inspire, connect, and uplift. Discover the richness of diverse traditions and embrace a holistic journey to well-being. Join us in the present moment, where the magic of community and the joy of celebration converge. Explore our current events below and embark on a meaningful journey with <span className='text-lg font-bold'>Wellness EventHarbor</span>.
                </p>
            </div>

            <hr />

            {/* static running event */}
            <div className="bg-base-100 rounded-lg shadow-xl">
                <div><img className='h-[70vh] w-full p-2 rounded-lg' src="https://i.ibb.co/55nCM3K/fitness.jpg" alt="Shoes" /></div>
                <div className="px-3">
                    <h2 className="text-xl font-bold">Fitness Fusion Event</h2>
                    <p>Unleash your passion for a healthy lifestyle at our Fitness Fusion Event. Join us for an energetic convergence of various fitness disciplines designed to elevate your workout routine. Experience the thrill of dynamic fusion workouts that seamlessly combine strength, flexibility, and cardio exercises. It is a fitness extravaganza that promises to ignite your enthusiasm for a balanced and invigorating lifestyle.</p>
                    <p className='mt-3 font-bold'>Price: <span>39.99$ only</span></p>
                    <p className='p-4 font-bold text-white bg-green-700 mt-4'>Availabe Seat:13</p>
                </div>
            </div>
            {/* 4 */}
            <div className="bg-base-100 rounded-lg shadow-xl my-10">
                <div><img className='h-[70vh] w-full p-2 rounded-lg' src="https://i.ibb.co/NjHq9MR/habits.jpg" alt="Shoes" /></div>
                <div className="px-3">
                    <h2 className="text-xl font-bold">Healthy Habits Event</h2>
                    <p>Embark on a transformative journey towards a healthier you with our Healthy Habits Event. This comprehensive program is designed to empower you with the knowledge and tools needed to cultivate and sustain positive lifestyle habits. From nutrition guidance to fitness routines, our experts will provide practical insights to help you make lasting changes and achieve your wellness goals.</p>
                    <p className='mt-3 font-bold'>Price: <span>35.99$ only</span></p>
                    <p className='p-4 font-bold text-white bg-green-700 mt-4'>Availabe Seat:16</p>
                </div>
            </div>

            {/* 6 */}
            <div className="bg-base-100 rounded-lg shadow-xl mb-10">
                <div><img className='h-[70vh] w-full p-2 rounded-lg' src="https://i.ibb.co/6rtrRqy/wisdom.jpg" alt="Shoes" /></div>
                <div className="px-3">
                    <h2 className="text-xl font-bold">Wellness Wisdom Event</h2>
                    <p>Unlock the secrets to holistic well-being at our Wellness Wisdom Event. Dive into thought-provoking discussions led by experts in the field, offering practical insights into living a healthier and more balanced life. This event is a gathering of minds, where wisdom meets wellness, providing attendees with valuable takeaways and actionable steps towards a mindful and purposeful journey.</p>
                    <p className='mt-3 font-bold'>Price: <span>35.99$ only</span></p>
                    <p className='p-4 font-bold text-white bg-green-700 mt-4'>Availabe Seat:10</p>
                </div>
            </div>

        </div>
    );
};

export default RunningEvents;