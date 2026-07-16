import React from "react";
import Button from "../ui/Button";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navlinks = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "subjects", href: "#subjects" },
    { name: "Why choose us", href: "#Why" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <nav className="fixed px-6 py-4 lg:px-10 top-0 left-0 right-0 z-50 bg-white border-b">
      {/* desktop nav bar */}

      <div className="flex justify-between">
        <div>
          <a href="#home" className="text-2xl font-bold">
            Edu<span className="text-amber-500">Bridge</span>
          </a>
        </div>

        <div className=" hidden lg:flex items-center gap-8">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-gray-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button title="Get Started" className="px-4 py-1" />
        </div>
        {/*mobile menu button */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?(
            <HiOutlineX className="h-6 w-6" />
          ) : (
           <HiOutlineMenu className="h-6 w-6" />

          )}
        </button>
      </div>

      {/* mobile nav bar */}
      {isOpen && (
        <div className="lg:hidden py-4">
          <div className="flex flex-col gap-4"> 
            {navlinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium"
              >
                {link.name}
              </a>
            ))}
          <Button title="Get Started" className="px-4 py-1" />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
