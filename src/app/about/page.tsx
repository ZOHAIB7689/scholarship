import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white py-32 px-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto text-center">
                    <h1 className="text-5xl font-extrabold">About Us</h1>
                    <p className="text-xl mt-4">Connecting students with opportunities to fund their education.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Our mission is to bridge the gap between ambitious students and the financial resources they need to achieve their academic and professional goals. We believe that financial constraints should never be a barrier to education. We are committed to creating a comprehensive and accessible platform where students can find and apply for scholarships that match their unique talents and aspirations.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="team-member">
                            <img src="https://i.pinimg.com/564x/b1/c3/76/b1c376a4d33537de54a88b9a0c24213d.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"/>
                            <h3 className="text-2xl font-semibold">Alex Johnson</h3>
                            <p className="text-gray-500">Founder & CEO</p>
                        </div>
                        <div className="team-member">
                            <img src="https://i.pinimg.com/564x/5a/69/95/5a6995db2a279903184a48978a6d1595.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"/>
                            <h3 className="text-2xl font-semibold">Maria Garcia</h3>
                            <p className="text-gray-500">Director of Operations</p>
                        </div>
                        <div className="team-member">
                            <img src="https://i.pinimg.com/564x/a7/8c/a3/a78ca39358223a480eafd484a5919593.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"/>
                            <h3 className="text-2xl font-semibold">James Smith</h3>
                            <p className="text-gray-500">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;