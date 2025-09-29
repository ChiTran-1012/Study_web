import React from "react";

const CourseCard = ({ title, description, image }) => {
  return (
    <div className="bg-green-50 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-green-900">{title}</h3>
      <p className="text-gray-700 text-center mb-4">{description}</p>
      <button className="mt-auto bg-[#bce955] text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-[#a0d94a] transition">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
