import React from "react";
import Header from "./Header";
import { CheckCircle, Users, Laptop, Clock } from "lucide-react";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      {/* <Header /> */}
      <section className="bg-gradient-to-r from-green-100 to-green-300 py-20 px-4 min-h-[70vh]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            About <span className="text-green-600">StudyWeb</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Empowering learners worldwide with accessible, high-quality courses.
            We believe education should be engaging, affordable, and available to everyone, everywhere.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Whether you want to master <span className="font-semibold text-green-700">web development</span>, dive into{" "}
              <span className="font-semibold text-green-700">data science</span>, or design intuitive{" "}
              <span className="font-semibold text-green-700">UI/UX</span>, our expert instructors and carefully crafted
              curriculum will guide you step by step.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-green-600 w-6 h-6" /> Expert instructors with real-world experience
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Laptop className="text-green-600 w-6 h-6" /> Interactive lessons & practical projects
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Users className="text-green-600 w-6 h-6" /> Supportive learning community
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Clock className="text-green-600 w-6 h-6" /> Flexible, self-paced learning
              </li>
            </ul>
          </div>

          {/* Right - Image/Illustration */}
          <div className="flex justify-center">
            <img
              src="https://cdn.prod.website-files.com/67b1581e15b526915594dc8a/67b2bb519ff3a45947d34f8c_Limite%20image.jpg"
              alt="Avatar illustration"
              className="w-80 md:w-96 drop-shadow-lg"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-4">
            Join <span className="font-semibold text-green-700">StudyWeb</span> today and start your journey to success!
          </p>
          <Link
            to="/courses-list"
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
