import React, { useState } from "react";
import CoursesCard from "./CoursesCard";
import courses from "./Data"; // Nếu export default thì import như vầy

const CoursesList = () => {
  const [selectedMajor, setSelectedMajor] = useState("All");

  // Lấy danh sách category duy nhất
  const categories = ["All", ...new Set(courses.map((course) => course.category))];

  const filteredCourses =
    selectedMajor === "All"
      ? courses
      : courses.filter((course) => course.category === selectedMajor);

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-green-100 to-green-300 min-h-[60vh]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-green-900">
        Our Courses
      </h2>

      {/* Dropdown filter */}
      <div className="flex justify-center mb-10">
        <select
          value={selectedMajor}
          onChange={(e) => setSelectedMajor(e.target.value)}
          className="px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {categories.map((major) => (
            <option key={major} value={major}>
              {major}
            </option>
          ))}
        </select>
      </div>

      {/* Courses grid */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {filteredCourses.map((course, idx) => (
          <CoursesCard
            key={idx}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesList;
