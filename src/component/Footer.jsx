import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Subjects", href: "#" },
    { name: "Why Us", href: "#" },
    { name: "Contact", href: "#" },
  ],
  courses: [
    { name: "Mathematics", href: "#subjects" },
    { name: "Science", href: "#subjects" },
    { name: "English", href: "#subjects" },
    { name: "Hindi", href: "#subjects" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#contact" },
    { name: "FAQs", href: "#" },
    { name: "Location: Delhi NCR", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className=" bg-[#303a50] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <a href="#home" className="text-2xl font-bold">
              Edu<span className=" text-amber-500">Bridge</span>
            </a>
            <p className="mt-4 max-w-sm">
              Providing personalized home tuition for students from Classes 1–8.
              Our experienced tutors help students build confidence, strengthen
              concepts, and achieve academic success.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-amber-500 transition">
                <FaFacebookF size={20} />
              </a>

              <a href="#" className="hover:text-amber-500 transition">
                <FaInstagram size={20} />
              </a>

              <a href="#" className="hover:text-amber-500 transition">
                <FaWhatsapp size={20} />
              </a>

              <a
                href="mailto:contact@edubridge.com"
                className="hover:text-amber-500 transition"
              >
                <MdEmail size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-500 mt-12 pt-4 text-center text-white text-sm">
          © 2026 EduBridge Home Tuition Services. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
