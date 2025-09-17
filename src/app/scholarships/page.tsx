"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getScholarships } from '../../lib/data';
import type { Scholarship } from '../../lib/data';

const ScholarshipsPage = () => {
    const [scholarships, setScholarships] = useState<Scholarship[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchScholarships = async () => {
            try {
                const data = await getScholarships();
                setScholarships(data);
            } catch (err) {
                setError('Failed to fetch scholarships.');
            } finally {
                setLoading(false);
            }
        };

        fetchScholarships();
    }, []);

    if (loading) return <div className="text-center mt-8">Loading...</div>;
    if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Available Scholarships</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {scholarships.map((scholarship) => (
                    <div key={scholarship.id} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                        <img src={scholarship.imageUrl} alt={scholarship.title} className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">{scholarship.title}</h2>
                            <p className="text-gray-700 mb-4 h-24 overflow-hidden">{scholarship.description}</p>
                            <div className="mb-4">
                                <p className="font-bold">Amount: <span className="font-normal">{scholarship.amount}</span></p>
                                <p className="font-bold">Deadline: <span className="font-normal">{new Date(scholarship.deadline).toLocaleDateString()}</span></p>
                            </div>
                            <Link href={`/scholarships/${scholarship.id}`} className="text-blue-500 hover:underline font-semibold">
                                View Details &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScholarshipsPage;