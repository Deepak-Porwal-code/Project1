import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/13.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="RTF Logo" className="h-12" />
          
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12 text-[#001f5c] font-medium">
          <li><a href="#" className="hover:text-orange-600">Home</a></li>
          <li><a href="#" className="hover:text-orange-600">Product</a></li>
          <li><a href="#" className="hover:text-orange-600">Elements</a></li>
          <li><a href="#" className="hover:text-orange-600">Blog</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="px-5 py-2 border border-[#001f5c] hover:border-orange-600 text-[#001f5c] hover:text-orange-600 rounded-md">
            Login
          </button>
          <button className="px-5 py-2 bg-[#001f5c] hover:bg-white border-2 border-[#001f5c] hover:border-black text-white hover:text-black rounded-md">
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#001f5c] text-3xl focus:outline-none">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 flex flex-col items-center gap-4 text-center">
          <a href="#" className="text-[#001f5c] hover:text-orange-600 font-medium">Home</a>
          <a href="#" className="text-[#001f5c] hover:text-orange-600 font-medium">Product</a>
          <a href="#" className="text-[#001f5c] hover:text-orange-600 font-medium">Elements</a>
          <a href="#" className="text-[#001f5c] hover:text-orange-600 font-medium">Blog</a>

          <button className="w-full mt-4 px-5 py-2 border border-[#001f5c] hover:border-orange-600 text-[#001f5c] hover:text-orange-600 rounded-md">
            Login
          </button>
          <button className="w-full px-5 py-2 bg-[#001f5c] hover:bg-white border-2 border-[#001f5c] hover:border-black text-white hover:text-black rounded-md">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
}
