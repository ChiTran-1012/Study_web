import React from "react";
import { useParams, Link } from "react-router-dom";
import courses from "./Data";

const CoursesDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const course = courses.find((c) => c.id.toString() === id); // Tìm course tương ứng


  return (
    <section className="py-20 px-4 bg-white min-h-[60vh]">
      <div className="max-w-3xl mx-auto bg-green-50 rounded-2xl shadow-lg p-8">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-56 object-cover rounded-xl mb-6"
        />
        <h2 className="text-3xl font-bold text-green-900 mb-4">{course.title}</h2>
        <p className="text-lg text-gray-700 mb-6">{course.description}</p>

        {course.instructor && (
          <p className="text-md text-green-700 mb-2">
            <span className="font-semibold">Instructor:</span> {course.instructor}
          </p>
        )}
        {course.duration && (
          <p className="text-md text-green-700 mb-2">
            <span className="font-semibold">Duration:</span> {course.duration}
          </p>
        )}
        {course.level && (
          <p className="text-md text-green-700 mb-2">
            <span className="font-semibold">Level:</span> {course.level}
          </p>
        )}

        <button className="mt-6 bg-[#bce955] text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-[#a0d94a] transition">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default CoursesDetail;
