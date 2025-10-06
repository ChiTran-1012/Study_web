import React, { useState } from "react";
import { Link } from "react-router-dom";
import courses from "./Data";

const CoursesList = () => {
  const [selectedMajor, setSelectedMajor] = useState("All");

  // ✅ Tạo danh sách category duy nhất
  const categories = ["All", ...new Set(courses.map((course) => course.category))];

  // ✅ Lọc khóa học theo category
  const filteredCourses =
    selectedMajor === "All"
      ? courses
      : courses.filter((course) => course.category === selectedMajor);

  return (
    <section className="py-24 px-4 sm:px-8 md:px-12 bg-gradient-to-r from-green-100 to-green-300 min-h-[60vh]">
      {/* Tiêu đề */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-green-900">
        Our Courses
      </h2>

      {/* Bộ lọc */}
      <div className="flex justify-center mb-10">
        <select
          value={selectedMajor}
          onChange={(e) => setSelectedMajor(e.target.value)}
          className="px-4 py-2 rounded-lg border border-green-300 bg-white shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-green-400 
                     text-green-800 font-medium cursor-pointer"
        >
          {categories.map((major) => (
            <option key={major} value={major} className="capitalize py-2 px-4 text-gray-700">
              {major}
            </option>
          ))}
        </select>
      </div>

      {/* Danh sách khóa học */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-1 transition transform duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {course.description}
              </p>

              {/* Link sang trang chi tiết */}
              <Link
                to={`/courses/${course.id}`}
                className="text-green-700 font-semibold hover:text-green-900 transition"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesList;
