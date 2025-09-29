import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Courses from "./components/Courses"
import CoursesList from "./components/CoursesList"
import Contact from "./components/Contact"

function App() {
  return (
    <>
    <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses-list" element={<CoursesList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </>
    
  )
}

export default App
