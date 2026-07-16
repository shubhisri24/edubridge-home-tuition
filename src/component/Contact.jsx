import React from "react";
import Button from "../ui/Button";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

const contactInfo = [
  {
    icon: <FaLocationDot size={22} />,
    title: "Visit Us",
    details: [
      "Delhi NCR, India",
      "Home Tuition Services, (By Appointment Only)",
    ],
  },
  {
    icon: <IoCall size={22} />,
    title: "Call Us",
    details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
  },
  {
    icon: <MdEmail size={22} />,
    title: "Email Us",
    details: ["edubridgehome@gmail.com", "support@edubridge.com"],
  },
  {
    icon: <MdWatchLater size={22} />,
    title: "Working Hours",
    details: ["Mon - Fri: 9AM - 6PM", "Sat - Sun: 10AM - 4PM"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a <span className=" text-amber-500">Free Demo Class</span>
          </h2>
          <p className="text-lg">
            Have questions about our home tuition services? Contact us today and
            we'll help you find the right tutor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="p-6 rounded-xl border">
                  <div className=" bg-amber-100 text-orange-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span>{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, index) => (
                    <p key={index} className="text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#303a50] text-white rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Book Your Free Demo Class
              </h3>
              <p className="opacity-90 mb-4">
                Qualified Tutors | Personalized Learning | Flexible Scheduling
              </p>
              <Button title="Book Demo" className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md"></Button>
            </div>
          </div>

          <div className="rounded-xl border p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Enquire About Tuition
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Parent Name
                  </label>
                  <input
                    className=" border-[1.2px] border-gray-500 rounded-md py-1 px-1.5"
                    placeholder="Parent Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Student Name
                  </label>
                  <input
                    className=" border-[1.2px] border-gray-500 rounded-md py-1 px-1.5"
                    placeholder="Student Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  className=" border-[1.2px] border-gray-500 rounded-md py-1 px-1.5 w-full"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject Required
                </label>
                <input
                  className=" border-[1.2px] border-gray-500 rounded-md py-1 px-1.5 w-full"
                  placeholder="Maths / Science / English"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className=" border-[1.2px] border-gray-500 rounded-md py-1 px-1.5 w-full"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                />
              </div>

              <Button title="Send Message" className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
