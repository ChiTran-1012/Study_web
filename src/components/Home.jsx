import React, { useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Courses from "./Courses";
import Footer from "./Footer";

const Home = () => {
  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <Hero onScrollToCourses={scrollToCourses} />
      <section ref={coursesRef}>
        <Courses />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
