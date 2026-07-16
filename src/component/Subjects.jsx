import React from "react";
import Button from "./ui/Button";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const subjects = [
  {
    id: 1,
    title: "Mathematics",
    category: "Classes till 8",
    image: "./maths.jpeg",
    description:
      "Strengthen concepts, improve problem-solving skills, and score better in exams.",
    mode: "Home & Online",
    board: "CBSE • ICSE • State Board",
  },
  {
    id: 2,
    title: "Science",
    category: "Classes till 8",
    image: "./science.jpeg",
    description:
      "Learn Physics, Chemistry, and Biology through concept-based teaching.",
    mode: "Home & Online",
    board: "CBSE • ICSE • State Board",
  },
  {
    id: 3,
    title: "English",
    category: "Classes till 8",
    image: "./english.jpeg",
    description:
      "Improve grammar, vocabulary, reading, writing, and communication skills.",
    mode: "Home & Online",
    board: "All Boards",
  },
  {
    id: 4,
    title: "Social Science",
    category: "Classes till 8",
    image: "./sst.jpeg",
    description:
      "Comprehensive guidance in History, Geography, Civics, and Economics.",
    mode: "Home & Online",
    board: "CBSE • ICSE • State Board",
  },
  {
    id: 5,
    title: "Hindi",
    category: "Classes till 8",
    image: "./hindi.jpeg",
    description: "Improve reading, writing, and comprehension skills in Hindi.",
    mode: "Home & Online",
    board: "CBSE • ISC",
  },
  
];

const Subjects = () => {
  return (
    <section id="subjects" className="py-20">
      <div className="px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subjects We <span className="text-amber-500">Teach</span>
          </h2>

          <p className="text-lg">
            Personalized home tuition for students from Classes 1–8 with
            experienced tutors, flexible timings, and concept-based learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="group rounded-xl border overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={subject.image}
                  alt={subject.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-amber-500 rounded-full">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full">
                    {subject.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>

                <p className="text-sm text-gray-600 mb-4">
                  {subject.description}
                </p>

                <div className="space-y-2 text-sm text-gray-600 mb-5">
                  <p>📍 {subject.mode}</p>
                  <p>🎓 {subject.category}</p>
                  <p>📚 {subject.board}</p>
                </div>

                <div className="pt-4 border-t">
                  <Button
                    title="Register Now"
                    className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>
  );
};

export default Subjects;
