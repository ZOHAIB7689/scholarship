import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-cover bg-center text-white py-32 px-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative container mx-auto text-center">
                        <h1 className="text-5xl font-extrabold mb-4">Find Your Scholarship, Fuel Your Future</h1>
                        <p className="text-xl text-gray-200 mb-8">Your premier destination for discovering financial aid opportunities to achieve your academic dreams.</p>
                        <div className="space-x-4">
                            <Link href="/scholarships" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
                                Browse Scholarships
                            </Link>
                            <Link href="/apply" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="feature-card">
                                <h3 className="text-2xl font-semibold mb-4">Curated Opportunities</h3>
                                <p className="text-gray-600">We provide a curated list of high-quality scholarships, saving you time and effort in your search.</p>
                            </div>
                            <div className="feature-card">
                                <h3 className="text-2xl font-semibold mb-4">Simplified Applications</h3>
                                <p className="text-gray-600">Our streamlined application process makes it easy to apply for multiple scholarships with minimal hassle.</p>
                            </div>
                            <div className="feature-card">
                                <h3 className="text-2xl font-semibold mb-4">Expert Guidance</h3>
                                <p className="text-gray-600">We offer resources and support to help you craft the perfect application and stand out from the crowd.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;