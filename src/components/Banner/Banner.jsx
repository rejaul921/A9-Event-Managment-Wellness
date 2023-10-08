import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3YddjYV/well.jpg' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Welcome to Wellness EventHarbor</h1>
                        <p className="mb-5">We are praised in Town for Bringing communities together through vibrant cultural events that celebrate diversity and unity.</p>
                        <button className="btn btn-primary bg-green-700 border-none">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;