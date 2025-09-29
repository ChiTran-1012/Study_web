import React from "react";
import CoursesCard from "./CoursesCard"; // dùng component riêng
import  courses  from "./Data"; // import data từ file Data.jsx

const Courses = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-green-50 to-green-100 min-h-[60vh]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-green-900">
        Our Courses
      </h2>
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {courses.map((course, idx) => (
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