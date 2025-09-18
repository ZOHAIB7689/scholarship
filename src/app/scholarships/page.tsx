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
            <h1 className="text-4xl font-bold mb-12 text-center">Available Scholarships</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {scholarships.map((scholarship) => (
                    <div
                        key={scholarship.id}
                        className="relative group rounded-2xl shadow-xl bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={scholarship.imageUrl}
                                alt={scholarship.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">{scholarship.amount}</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col h-56">
                            <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">{scholarship.title}</h2>
                            <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{scholarship.description}</p>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-500">Deadline:</span>
                                <span className="text-sm font-semibold text-gray-800">{new Date(scholarship.deadline).toLocaleDateString()}</span>
                            </div>
                            <Link
                                href={`/scholarships/${scholarship.id}`}
                                className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow transition-colors"
                            >
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