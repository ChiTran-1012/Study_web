import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Courses from "./components/Courses"
import CoursesList from "./components/CoursesList"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Register from "./components/Register"
import CoursesDetail from "./components/CoursesDetail"

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id" element={<CoursesDetail />} />
        </Routes>

      </div>
    </>
    
  )
}

export default App
