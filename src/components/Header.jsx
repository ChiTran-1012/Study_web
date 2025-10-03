import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-5 z-50 flex justify-center">
      <nav className="flex items-center w-full max-w-6xl px-6 py-3 
        rounded-full shadow-lg 
        bg-white/70 backdrop-blur 
        border border-green-100 relative">

        {/* Logo */}
        <div className="font-bold text-xl text-gray-900">Logo</div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden ml-auto text-2xl px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Menu Items */}
        <div
          className={`flex flex-col md:flex-row md:items-center flex-1 justify-center
  absolute md:static top-16 left-0 w-full md:w-auto 
  bg-white md:bg-transparent 
  shadow md:shadow-none 
  rounded-b-xl md:rounded-none 
  transition-all duration-300 ease-in-out
  ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"}`}
        >
          <Link to="/" className="px-6 py-2 text-gray-900 hover:text-[#bce955] transition">
            Home
          </Link>
          <Link to="/about" className="px-6 py-2 text-gray-900 hover:text-[#bce955] transition">
            About
          </Link>
          <Link to="/courses-list" className="px-6 py-2 text-gray-900 hover:text-[#bce955] transition">
            Courses
          </Link>
          <Link to="/contact" className="px-6 py-2 text-gray-900 hover:text-[#bce955] transition">
            Contact
          </Link>

          {/* Mobile Login */}
          <div className="md:hidden px-6 pb-4">
            <Link
              to="/login"
              className="bg-[#bce955] text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-[#a0d94a] transition block"
            >
              Login
            </Link>
          </div>
        </div>


        {/* Desktop Login */}
        <div className="hidden md:block ml-6">
          <Link
            to="/login"
            className="bg-[#bce955] text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-[#a0d94a] transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
