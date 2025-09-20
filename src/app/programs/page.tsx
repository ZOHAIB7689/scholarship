"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getPrograms } from "../../lib/data";
import type { Program } from "../../lib/data";

type ProgramWithDetails = Program & {
  title: string;
  category: string;
  description?: string;
  imageUrl?: string;
};

const ProgramsPage = () => {
  const [programs, setPrograms] = useState<ProgramWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const data = await getPrograms();
        // Normalize Program to ProgramWithDetails by ensuring title and category exist.
        // Use existing properties if available (e.g. name/type) or sensible defaults.
        const normalized: ProgramWithDetails[] = data.map((p) => ({
          ...p,
          title: (p as any).title ?? (p as any).name ?? "Untitled Program",
          category: (p as any).category ?? (p as any).type ?? "General",
          description: (p as any).description,
          imageUrl: (p as any).imageUrl,
        }));
        setPrograms(normalized);
      } catch (err) {
        setError("Failed to fetch programs.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-black mb-6 drop-shadow-lg">
            Explore Our Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Choose from a variety of professional, academic, and skill-based programs designed to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-4xl font-bold text-blue-700">50+</h3>
          <p className="text-gray-600 mt-2">Programs Offered</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-4xl font-bold text-blue-700">10k+</h3>
          <p className="text-gray-600 mt-2">Students Enrolled</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-4xl font-bold text-blue-700">200+</h3>
          <p className="text-gray-600 mt-2">Expert Instructors</p>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">Our Popular Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative group rounded-2xl shadow-xl bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {program.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col h-56">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">
                  {program.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                  {program.description}
                </p>
                <Link
                  href={`/programs/${program.id}`}
                  className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          Apply today and take the first step toward achieving your career and academic goals.
        </p>
        <Link
          href="/apply"
          className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
};

export default ProgramsPage;
