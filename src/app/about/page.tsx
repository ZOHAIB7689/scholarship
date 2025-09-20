import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-32 px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1170&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">About Us</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto drop-shadow-md">
            Nurturing future healthcare leaders with excellence in education and practice.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality nursing education that empowers students with knowledge,
                compassion, and practical skills, enabling them to serve communities with
                dedication and integrity.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading nursing institute recognized nationally and internationally for
                excellence in education, research, and healthcare leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Goals</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <li className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Excellence in Education</h4>
              <p className="text-gray-600">
                Deliver innovative, evidence-based nursing programs that meet global standards.
              </p>
            </li>
            <li className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Community Service</h4>
              <p className="text-gray-600">
                Encourage students to actively participate in community health improvement projects.
              </p>
            </li>
            <li className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Professional Growth</h4>
              <p className="text-gray-600">
                Develop leadership, critical thinking, and research skills in nursing practice.
              </p>
            </li>
            <li className="p-6 bg-gray-50 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Global Recognition</h4>
              <p className="text-gray-600">
                Build partnerships with healthcare organizations and universities worldwide.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Courses We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Bachelor of Science in Nursing (BSN)</h3>
              <p className="text-gray-600">
                A 4-year degree program designed to prepare students for professional nursing roles.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Diploma in Nursing</h3>
              <p className="text-gray-600">
                A comprehensive diploma focusing on foundational nursing skills and patient care.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Specialized Nursing Courses</h3>
              <p className="text-gray-600">
                Short-term certifications in areas like Midwifery, Critical Care, and Community Health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Location</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Nightingale Institute of Nursing is located in Tando Adam, Sanghar – a peaceful city
            that provides a focused environment for learning. The campus is well-equipped with modern
            classrooms, labs, and library facilities.
          </p>
          <iframe
            className="w-full h-96 rounded-lg shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5967639465865!2d68.6613!3d25.7693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394d3c1aebf6e8a3%3A0xb98d6f0bcbfba5!2sTando%20Adam!5e0!3m2!1sen!2s!4v1694357345347!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Experienced Faculty</h3>
              <p className="text-gray-600">Learn from qualified instructors with real-world experience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Modern Facilities</h3>
              <p className="text-gray-600">Access well-equipped labs, simulation centers, and digital libraries.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Career Opportunities</h3>
              <p className="text-gray-600">Strong network with hospitals and healthcare organizations for placements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="team-member">
              <img
                src="https://i.pinimg.com/564x/b1/c3/76/b1c376a4d33537de54a88b9a0c24213d.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Alex Johnson</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="team-member">
              <img
                src="https://i.pinimg.com/564x/5a/69/95/5a6995db2a279903184a48978a6d1595.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Maria Garcia</h3>
              <p className="text-gray-500">Director of Operations</p>
            </div>
            <div className="team-member">
              <img
                src="https://i.pinimg.com/564x/a7/8c/a3/a78ca39358223a480eafd484a5919593.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-800">James Smith</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
