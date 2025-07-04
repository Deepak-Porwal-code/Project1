import React from "react";
import logo from "../assets/13.png";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import playStore from "../assets/vecteezy_badge-google-play-and-app-store-button-download_24170871.png";
import appStore from "../assets/vecteezy_app-store-download-button-in-black-colors-download-on-the_12871375.png";

export default function Footer() {
  return (
    <footer className="bg-[#d4dbff] text-black pt-16 px-4 pb-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 justify-between items-start">

        {/* LEFT SIDE - Logo + Socials */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={logo} alt="RTF Logo" className="h-20 mb-6" />
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - 4 Columns */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm text-center lg:text-left">
          {/* Column 1: Learn More */}
          <div>
            <h4 className="font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy & Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 2: RTF Care Products */}
          <div>
            <h4 className="font-semibold mb-4">RTF Care Products</h4>
            <ul className="space-y-2">
              <li><a href="#">Health Insurance</a></li>
              <li><a href="#">Home & Digital Care</a></li>
              <li><a href="#">Motor Insurance</a></li>
              <li><a href="#">Travel Insurance</a></li>
              <li><a href="#">Opd & Wellness</a></li>
            </ul>
          </div>

          {/* Column 3: RTF Business */}
          <div>
            <h4 className="font-semibold mb-4">RTF Business</h4>
            <ul className="space-y-2">
              <li><a href="#">S.E.M. Insurance</a></li>
              <li><a href="#">Employee Benefit Insurance</a></li>
              <li><a href="#">Office Package Insurance</a></li>
              <li><a href="#">Liability Insurance</a></li>
              <li><a href="#">Engineering Insurance</a></li>
            </ul>
          </div>

          {/* Column 4: App for Employees */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="font-semibold mb-4">App for Employees</h4>
            <div className="flex flex-col gap-3 items-center lg:items-end">
              <img src={playStore} alt="Play Store" className="w-32 bg-white rounded-xl" />
              <img src={appStore} alt="App Store" className="w-32 bg-white rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-12 pt-6 text-sm text-black max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-2 text-center">
        <div>© 2025 RTF Insurance Brokers Pvt Ltd. All rights reserved.</div>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-orange-500">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-orange-500">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
