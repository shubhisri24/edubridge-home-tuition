import React, { useRef, useState } from "react";
import Button from "./ui/Button";
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
  const [formData, setFormData] = useState({
    parent_name: "",
    student_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const parent_nameRef = useRef(null);
  const student_nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);

  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});

  function validateField(name, value) {
    if (name === "parent_name" || name === "student_name") {
      if (!value.trim()) {
        return "This field is required.";
      }

      if (value.length < 2) {
        return "Name must be at least 2 characters.";
      }

      if (!/^[A-Za-z\s]+$/.test(value)) {
        return "Only letters and spaces are allowed.";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        return "Email is required.";
      }

      if (!/^[^\s@]+@gmail\.com$/.test(value)) {
        return "Please enter a valid Gmail address.";
      }
    }

    if (name === "subject") {
      if (!value.trim()) {
        return "Subject is required.";
      }
    }

    return "";
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    const errorMessage = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fieldsToValidate = [
      { name: "parent_name", ref: parent_nameRef },
      { name: "student_name", ref: student_nameRef },
      { name: "email", ref: emailRef },
      { name: "subject", ref: subjectRef },
    ];

    for (const field of fieldsToValidate) {
      const errorMessage = validateField(field.name, formData[field.name]);

      if (errorMessage) {
        setErrors((prev) => ({
          ...prev,
          [field.name]: errorMessage,
        }));
        setSubmitStatus("error");
        setSubmitMessage(errorMessage);
        field.ref.current.focus();

        return;
      }
    }

    console.log("Sending form data:", formData);

    try {
      const response = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Enquiry submitted successfully!");
        setFormData({
          parent_name: "",
          student_name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitMessage("");
        }, 3000);
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }

      console.log(data);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };
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
              <Button
                title="Book Demo"
                className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md"
              ></Button>
            </div>
          </div>

          <div className="rounded-xl border p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Enquire About Tuition
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Parent Name
                  </label>
                  <input
                    ref={parent_nameRef}
                    className=" border-[1.2px] border-gray-500 rounded-md py-1 px-1.5"
                    placeholder="Parent Name"
                    name="parent_name"
                    value={formData.parent_name}
                    onChange={handleChange}
                    maxLength={50}
                  />
                  {errors.parent_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.parent_name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Student Name
                  </label>
                  <input
                    ref={student_nameRef}
                    className=" border-[1.2px] border-gray-500 rounded-md py-1 px-1.5"
                    placeholder="Student Name"
                    name="student_name"
                    value={formData.student_name}
                    onChange={handleChange}
                    maxLength={50}
                  />
                  {errors.student_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.student_name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  ref={emailRef}
                  className=" border-[1.2px] border-gray-500 rounded-md py-1 px-1.5 w-full"
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject Required
                </label>
                <input
                  ref={subjectRef}
                  className=" border-[1.2px] border-gray-500 rounded-md py-1 px-1.5 w-full"
                  placeholder="Maths / Science / English"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                />
              </div>

              <Button
                title="Send Message"
                className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md"
              >
                Send Message
              </Button>
              {submitMessage && (
                <div
                  className={
                    submitStatus === "success"
                      ? "mt-4 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                      : "mt-4 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  }
                >
                  <span className="font-bold">
                    {submitStatus === "success" ? "✓" : "✕"}
                  </span>

                  <span>{submitMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
