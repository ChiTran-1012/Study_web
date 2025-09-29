import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <nav className="flex justify-between items-center w-full max-w-6xl px-6 py-3
        rounded-full shadow-lg
        bg-white/70 backdrop-blur
        border border-green-100
        ">
        {/* Logo */}
        <div className="font-bold text-xl text-gray-900">Logo</div>

        {/* Menu */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-900 hover:text-[#bce955] transition">Home</Link>
          <Link to="/about" className="text-gray-900 hover:text-[#bce955] transition">About</Link>
          <Link to="/courses-list" className="text-gray-900 hover:text-[#bce955] transition">Courses</Link>
          <Link to="/contact" className="text-gray-900 hover:text-[#bce955] transition">Contact</Link>
        </div>

        {/* Right-side (Login) */}
        <div>
          <Link to="/login" className="bg-[#bce955] text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-[#a0d94a] transition">
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header