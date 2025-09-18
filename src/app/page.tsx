// pages/index.jsx
import Head from "next/head";
import Link from "next/link";

const programs = [
  {
    title: "BS Nursing",
    duration: "4 years",
    desc: "Comprehensive BSN program with clinical rotations, affiliated with LUMHS Jamshoro.",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "LHV (Lady Health Visitor)",
    duration: "1.5 years",
    desc: "Community health & primary care training for maternal & child health.",
    image: "https://images.unsplash.com/photo-1503437313881-503a91226419?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "CMW (Community Midwifery)",
    duration: "2 years",
    desc: "Hands-on midwifery training with hospital & community clinical placements.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cert. Nursing Assistant (CNA)",
    duration: "6 months",
    desc: "Short course for clinical assistance & basic patient care skills.",
    image: "https://images.unsplash.com/photo-1512070679279-c2f999098c01?auto=format&fit=crop&w=600&q=80",
  },
];

type Program = {
  title: string;
  duration: string;
  desc: string;
  image: string;
};

const ProgramCard = ({ p }: { p: Program }) => (
  <div className="relative group rounded-2xl shadow-xl bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
    <div className="relative h-40 overflow-hidden">
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
      <div className="absolute bottom-3 left-3">
        <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">{p.duration}</span>
      </div>
    </div>
    <div className="p-5 flex flex-col h-44">
      <h3 className="text-xl font-bold mb-1 text-gray-900 group-hover:text-blue-700 transition-colors">{p.title}</h3>
      <p className="text-gray-600 mb-3 flex-1 line-clamp-3">{p.desc}</p>
      <div className="mt-auto">
        <span className="inline-block text-xs text-gray-400">{p.duration}</span>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Nightingale Institute of Nursing — Tando Adam</title>
        <meta
          name="description"
          content="NINSS – Recognized by Pakistan Nursing Council. Programs: BS Nursing, LHV, CMW, CNA, PBCN, PBPN. Contact us for admissions."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 scroll-smooth">
        <main>
          {/* HERO */}
          <section
            className="relative h-screen flex items-center"
            style={{
              backgroundImage: "url('/images/hero-campus.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-white/70"></div>  
            {/* Light overlay to blend white theme but ensure image visible */}

            <div className="relative container mx-auto px-4 text-center">
              <img
                src="/images/ninss_logo.png"
                alt="NINSS Logo"
                className="mx-auto w-32 h-32 rounded-full border-4 border-gray-300 mb-6 object-cover"
              />
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
                Nightingale Institute of Nursing
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-6">
                Producing skilled healthcare professionals with integrity. Recognized by Pakistan Nursing Council & affiliated with LUMHS Jamshoro. Clinical training across affiliated hospitals.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/programs" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
                  Explore Programs
                </Link>

                <Link href="/admissions" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105 duration-300">
                  Apply Now
                </Link>
              </div>

              <div className="mt-10 text-gray-500">
                <a href="#programs" className="inline-flex items-center gap-2 hover:text-blue-600 transition">
                  Scroll to Programs ↓
                </a>
              </div>
            </div>
          </section>

          {/* Trust / Recognitions */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg shadow-md">
                <h4 className="text-3xl font-bold text-gray-900">Recognized By</h4>
                <p className="mt-2 text-gray-600">Pakistan Nursing Council, Islamabad</p>
              </div>
              <div className="p-6 rounded-lg shadow-md">
                <h4 className="text-3xl font-bold text-gray-900">Affiliated With</h4>
                <p className="mt-2 text-gray-600">Liaquat University of Medical & Health Sciences, Jamshoro</p>
              </div>
              <div className="p-6 rounded-lg shadow-md">
                <h4 className="text-3xl font-bold text-gray-900">Clinical Partners</h4>
                <p className="mt-2 text-gray-600">Civil Hospital Sanghar • Suleman Roshan Hospital • Shahdadpur Institute of Medical Science</p>
              </div>
            </div>
          </section>

          {/* Programs Offered */}
          <section id="programs" className="py-16 container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((p) => <ProgramCard key={p.title} p={p} />)}
            </div>
            <div className="mt-10 text-center">
              <Link href="/programs" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
                Full Programs & Curriculum
              </Link>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Mission & Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mission: The mission of Nightingale Institute Of Nursing Sanghar Sindh (NINSS) is to foster excellence in nursing professional/health professional education, to educate the student of Nursing profession in accordance with highest professional standards and ethical values and to meet the health care needs of community through dissemination of knowledge and service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vision: NINSS aims to achieve prominence as a top-level world-class nursing school and a leading institute in the field of nursing, producing health care providers of excellence operating in every part of the community.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-700 mb-2">Address: G-1 Satellite Town, Tando Adam, Sanghar, Sindh</p>
                <p className="text-gray-700 mb-2">Phone: +92 322 1443406</p>
                <p className="text-gray-700 mb-4">Email: info@ninss.edu.pk</p>
                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
                  Get In Touch
                </Link>
              </div>
              <div>
                <form className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-sm">
                  <input className="w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                  <input className="w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" type="email" />
                  <textarea className="w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Message"></textarea>
                  <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm">© {new Date().getFullYear()} Nightingale Institute of Nursing — All Rights Reserved.</p>
              <p className="text-xs mt-2">Recognized by Pakistan Nursing Council • Affiliated with LUMHS Jamshoro</p>
            </div>
          </footer>

        </main>
      </div>
    </>
  );
}
