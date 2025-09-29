import React from "react";
import CoursesCard from "./CoursesCard"; // import component riêng
import courses from "./Data"; // import data từ file Data.jsx


const Courses = () => {
  const famousCourses = courses.filter(course => course.famous);

  return (
    <section className="py-36 px-4 bg-green-100 min-h-[60vh]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Our Famous Courses
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {famousCourses.map((course, idx) => (
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

export default Courses;
