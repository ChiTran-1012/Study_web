import React from 'react'

const Hero = ({ onScrollToCourses }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-52 py-12 bg-gradient-to-b from-white via-white to-green-100">
      
      {/* Text */}
      <header className="flex-1 space-y-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Upgrade your skills, <br className="hidden md:block" />
          <span className="text-[#bce955]">elevate your life</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-xl mx-auto md:mx-0">
          Join our community of learners and start your journey today.
        </p>
        <button
          className="bg-[#bce955] text-black rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:bg-[#a0d94a] transition"
          onClick={onScrollToCourses}
        >
          Get Started
        </button>
      </header>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://cdn.prod.website-files.com/67b1581e15b526915594dc8a/67bd41f5be90dff23fce9a4c_Hero%20Bg%20Image.webp"
          alt="People learning together"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded-2xl shadow-xl border-4 border-white"
        />
      </div>
    </section>
  )
}

export default Hero
