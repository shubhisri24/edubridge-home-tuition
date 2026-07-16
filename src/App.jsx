import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Courses from "./component/Subjects";
import Educators from "./component/Why";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Educators />
      <Contact />
      <Footer />
    </>
  );
};

export default App;