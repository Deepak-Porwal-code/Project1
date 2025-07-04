import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Header() {
  return (
    <div className="w-full bg-[#001f5c] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Left Info */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
          {/* Phone */}
          <div className="flex items-center gap-2 border-r md:border-r-2 border-amber-600 pr-4 text-orange-600">
            <FaPhoneAlt size={15} />
            <span className="text-white">+111-99-283-473</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 border-r md:border-r-2 border-amber-600 pr-4 text-orange-600">
            <MdEmail size={15} />
            <span className="text-white">rtfinsurance@gmail.com</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-orange-600">
            <FaMapMarkerAlt size={15} />
            <span className="text-white">New York City US</span>
          </div>
        </div>

        {/* Right Socials */}
        <div className="flex gap-5">
          <FiFacebook size={20} className="text-white hover:text-orange-600" />
          <FiInstagram size={20} className="text-white hover:text-orange-600" />
          <FiTwitter size={20} className="text-white hover:text-orange-600" />
        </div>
      </div>
    </div>
  );
}
