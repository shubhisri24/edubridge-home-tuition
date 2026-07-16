import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 py-4 lg:px-10"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Personalized Home <span className="text-gradient">Tution</span> That
            Helps Students Excel
          </h1>

          <p className="text-lg max-w-lg">
            Experienced tutors for Classes 1–8, helping students build
            confidence, improve academic performance, and achieve their goals
            through personalized one-on-one learning at home.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button title="Register for Tuition" className="px-6 py-2"></Button>
            <Button title="Contact Us" className="px-6 py-2"></Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm ">Students Guided</p>
            </div>
            <div className="h-12 w-px border" />
            <div>
              <p className="text-3xl font-bold">1-10</p>
              <p className="text-sm ">Classes Covered</p>
            </div>
            <div className="h-12 w-px border" />
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm ">Student Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <img
              src="/Hero.jpg"
              alt="Students learning together"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
