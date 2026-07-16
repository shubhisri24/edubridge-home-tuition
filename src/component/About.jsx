import React from "react";
import { GoGoal } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { GrCertificate } from "react-icons/gr";
import { GiBookCover } from "react-icons/gi";

const features = [
  {
    icon: <GoGoal size={45} color="orange" />,
    title: "Personalized Learning",
    description:
      "Every student learns differently. Our tutors tailor each lesson to match the student's pace, strengths, and learning goals.",
  },
  {
    icon: <IoMdContact size={56} color="orange" />,
    title: "Experienced Tutors",
    description:
      "Our team of experienced tutors brings years of expertise to help your child succeed.",
  },
  {
    icon: <GrCertificate size={47} color="orange" />,
    title: "Regular Progress Updates",
    description:
      "Receive regular updates on your child's progress and performance.",
  },
  {
    icon: <GiBookCover size={45} color="orange" />,
    title: "Flexible Timings",
    description:
      "Choose class schedules that fit your family's routine with convenient morning, evening, or weekend sessions.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className=" text-amber-500">EduBridge</span>?
          </h2>
          <p className="text-lg">
            We provide personalized home tuition designed to help every student
            build confidence, improve academic performance, and achieve their
            full potential through dedicated one-on-one learning.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-white/50 rounded-xl border"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 ">
                <span>{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="./about.jpg"
              alt="Modern classroom"
              className="rounded-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 p-6 rounded-xl border bg-white">
              <p className="text-4xl font-bold text-amber-500">20+</p>
              <p>Years Experience</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Helping Every Student Reach Their Full Potential
            </h3>
            <p>
              At EduBridge, we believe every student deserves personalized
              attention and quality education. We connect students with
              experienced home tutors who focus on building strong concepts,
              improving academic performance, and boosting confidence through
              one-on-one learning.
            </p>
            <p>
              Whether your child needs regular academic support, exam
              preparation, or help with challenging subjects, our tutors provide
              patient guidance tailored to each student's learning style and
              pace.
            </p>
            <ul className="space-y-3">
              {[
                "Experienced & Verified Tutor",
                "Personalized One-on-One Learning",
                "Career support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
