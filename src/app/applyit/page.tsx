"use client";

import { useState } from "react";

const ApplyPage = () => {
  const [form, setForm] = useState({ name: "", email: "", program: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.program) {
      setError("All fields are required!");
      return;
    }

    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Submission failed.");
    } else {
      setSuccess(data.message);
      setForm({ name: "", email: "", program: "" });
    }
  };

  return (<div className="h-screen bg-emerald-50 flex items-center justify-center">
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-lg mt-8">
      <h1 className="text-2xl font-bold mb-4">Apply Now</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-lg font-semibold text-emerald-950" >Name</h1>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 text-black rounded"
        />

        <h1 className="text-lg font-semibold text-emerald-950" >Email</h1>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border text-gray-700 px-3 py-2 rounded"
        />

        <h1 className="text-2xl font-semibold text-zinc-800" >Select Program</h1>
        <select
          name="program"
          value={form.program}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded text-black"
        >
          <option value="">Select Program</option>
          <option value="BS Nursing">BS Nursing</option>
          <option value="Diploma in Midwifery">Diploma in Midwifery</option>
          <option value="Certified Nursing Assistant">Certified Nursing Assistant</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
    </div>
  );
};

export default ApplyPage;
