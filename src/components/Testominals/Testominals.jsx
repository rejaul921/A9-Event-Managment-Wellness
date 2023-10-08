
const Testominals = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl font-bold text-center mb-6">Testonimals</h2>
                <p> Checkout what people says about our Events and how they are benifited from the events that we have organized.</p>
            </div>
            <div className='grid my-8 gap-3 md:grid-cols-2 lg:grid-cols-3'>
            {/* person1 */}
                <div className="card bg-neutral text-neutral-content">
                <div><img className='w-16 h-16 mx-auto mt-5 rounded-full' src="https://i.ibb.co/0VDgjw0/emily.jpg" alt="" /></div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Emily</h2>
                    <p>Mindful Movement Event was a truly transformative experience! HarmonyCraft Events curated a serene atmosphere, seamlessly blending meditation and gentle exercises. The connection to mind and body was palpable. Kudos for crafting an event that beautifully integrated mindfulness into movement.</p>
                </div>
                </div>
            {/* person 2 */}
                <div className="card bg-neutral text-neutral-content">
                <div><img className='w-16 h-16 mx-auto mt-5  rounded-full' src="https://i.ibb.co/vV1NvgS/alex.jpg" alt="" /></div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Alex</h2>
                    <p>Fitness Fusion Event by HarmonyCraft was exhilarating! Dynamic workouts, vibrant venue, and seamless organization showcased a commitment to both physical and mental well-being. A truly inspiring experience.</p>
                </div>
                </div>
            {/* person 3 */}
                <div className="card bg-neutral text-neutral-content">
                <div><img className='w-16 h-16 mx-auto mt-5  rounded-full' src="https://i.ibb.co/p1rsYW8/sarah.jpg" alt="" /></div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Sara</h2>
                    <p>Yoga Bliss Event by HarmonyCraft was a soulful journey. Skilled instructors, a serene venue, and thoughtfully curated sessions provided the perfect blend of relaxation and rejuvenation. HarmonyCrafts attention to detail truly sets them apart.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testominals;