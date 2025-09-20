"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPrograms } from "../../../lib/data";
import type { Program } from "../../../lib/data";
import Link from "next/link";

const ProgramDetail = () => {
  const params = useParams();
  const id = params.id as string;
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProgram = async () => {
        try {
          const programs = await getPrograms();
          const data = programs.find((p) => p.id === id);
          if (data) {
            setProgram(data);
          } else {
            setError("Program not found.");
          }
        } catch (err) {
          setError("Failed to fetch program details.");
        } finally {
          setLoading(false);
        }
      };

      fetchProgram();
    }
  }, [id]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!program) return <div className="text-center mt-8">Program not found.</div>;

  return (
    <div className="bg-gray-50">
      {/* HERO IMAGE */}
      <section className="relative h-80 w-full">
        <img
          src={program.imageUrl}
          alt={program.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
            {program.name}
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">
          {/* OVERVIEW */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* ELIGIBILITY & PROCESS */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-semibold mb-3 text-blue-700">
                Eligibility
              </h2>
              <p className="text-gray-800">{program.eligibility}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-semibold mb-3 text-blue-700">
                Application Process
              </h2>
              <p className="text-gray-800">{program.description}</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Duration:</span>{" "}
                {program.duration}
              </li>
              <li>
                <span className="font-semibold">Fee:</span> $$$$
              </li>
              <li>
                <span className="font-semibold">Duration:</span>{" "}
                {new Date(program.duration).toLocaleDateString()}
              </li>
              
            </ul>
          </div>
          <Link
            href="/applyit"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Apply Now
          </Link>
        </aside>
      </section>
    </div>
  );
};

export default ProgramDetail;
