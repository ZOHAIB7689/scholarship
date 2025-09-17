"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getScholarshipById } from '../../../lib/data';
import type { Scholarship } from '../../../lib/data';
import Link from 'next/link';

const ScholarshipDetail = () => {
    const params = useParams();
    const id = params.id as string;
    const [scholarship, setScholarship] = useState<Scholarship | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchScholarship = async () => {
                try {
                    const data = await getScholarshipById(id);
                    if (data) {
                        setScholarship(data);
                    } else {
                        setError('Scholarship not found.');
                    }
                } catch (err) {
                    setError('Failed to fetch scholarship details.');
                } finally {
                    setLoading(false);
                }
            };

            fetchScholarship();
        }
    }, [id]);

    if (loading) return <div className="text-center mt-8">Loading...</div>;
    if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
    if (!scholarship) return <div className="text-center mt-8">Scholarship not found.</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img src={scholarship.imageUrl} alt={scholarship.title} className="w-full h-64 object-cover"/>
                <div className="p-8">
                    <h1 className="text-4xl font-bold mb-4">{scholarship.title}</h1>
                    <p className="text-lg text-gray-700 mb-6">{scholarship.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-2">Eligibility</h2>
                            <p className="text-gray-800">{scholarship.eligibility}</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-2">Application Process</h2>
                            <p className="text-gray-800">{scholarship.applicationProcess}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/apply" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipDetail;