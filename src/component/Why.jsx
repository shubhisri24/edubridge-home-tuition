import React from "react";

const educators = [
  {
    id: 1,
    name: "Mr. [Tutor's Name]",
    role: "Home Tuition Educator",
    image: "./edu1.jpg",
    classes: "1–8",
    students: "500+ Students Guided",
    bio: "Passionate educator with years of experience teaching students from Classes 1–8. Focused on concept-based learning, personalized attention, and helping every student achieve their academic goals.",
  },
];

const Educators = () => {
  return (
    <section id="Why" className="py-20">
      <div className="px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Your <span className=" text-amber-500">Tutor</span>
          </h2>
          <p className="text-lg">
            Dedicated to helping students from Classes 1–8 build strong
            concepts, improve confidence, and achieve academic success through
            personalized home tuition.
          </p>
        </div>

        <div
          className={`grid gap-8 justify-items-center ${
            educators.length === 1
              ? "grid-cols-1"
              : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {educators.map((educator) => (
            <div
              key={educator.id}
              className="group rounded-xl border overflow-hidden w-full max-w-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={educator.image}
                  alt={educator.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                    ></a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-card/80 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    ></a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-card/80 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    ></a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{educator.name}</h3>
                <p className="font-medium text-sm mb-3 text-orange-400">
                  {educator.role}
                </p>
                <p className="text-sm mb-4">{educator.bio}</p>
                <div className="flex justify-between text-sm border-t pt-4">
                  <div>
                    <p className="font-semibold">{educator.classes}</p>
                    <p>Classes</p>
                  </div>
                  <div>
                    <p className="font-semibold ">
                      {educator.students.toLocaleString()}
                    </p>
                    <p>Students</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educators;
