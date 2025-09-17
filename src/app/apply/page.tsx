"use client"

import { useState } from 'react';

const ApplyPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        scholarshipId: '',
        essay: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log('Application submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                <p className="text-lg text-gray-700">Your application has been submitted successfully. We will review it and get back to you soon.</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Apply for a Scholarship</h1>
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="scholarshipId" className="block text-sm font-medium text-gray-700 mb-1">Scholarship ID</label>
                            <input
                                type="text"
                                id="scholarshipId"
                                name="scholarshipId"
                                value={formData.scholarshipId}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="e.g., 1, 2, 3"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="essay" className="block text-sm font-medium text-gray-700 mb-1">Essay</label>
                            <textarea
                                id="essay"
                                name="essay"
                                value={formData.essay}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                rows={6}
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyPage;