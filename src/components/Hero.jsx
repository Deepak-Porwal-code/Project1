import React from "react";
import image1 from "../assets/24.png";
import image2 from "../assets/10.png";
import image3 from "../assets/20.png";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#001f5c] text-white py-16">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[40%] space-y-6 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Trusted <br />
            <span className="text-orange-400">Insurance <br /> Partner</span>
          </h1>
          <p className="text-lg text-gray-200">
            Making insurance accessible, valuable. Your{" "}
            <span className="text-orange-400">lifetime commitment.</span>
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 font-bold">
            <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">
              Explore Products
            </button>
            <button className="bg-white text-[#001f5c] px-6 py-2 rounded-md hover:bg-gray-100 transition">
              Learn more →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="w-full lg:w-[60%] flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6">
          {/* Block 1 */}
          <div className="flex flex-col items-center gap-4">
            <span className="bg-blue-800 hover:bg-white hover:text-black flex items-center gap-2 text-sm font-semibold border-2 border-green-500 px-4 py-2 rounded-2xl">
              <FaRegHeart className="text-green-400" />
              Health Insurance
            </span>
            <img
              src={image2}
              alt="Health Insurance"
              className="w-44 sm:w-52 md:w-56 h-auto object-cover rounded-[25px] shadow-lg"
            />
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={image1}
              alt="Motor Insurance"
              className="w-44 sm:w-52 md:w-56 h-auto object-cover rounded-[25px] shadow-lg"
            />
            <span className="bg-blue-800 hover:bg-white hover:text-black flex items-center gap-2 text-sm font-semibold border-2 border-red-500 px-4 py-2 rounded-2xl">
              <AiFillSafetyCertificate className="text-green-400" />
              Motor Insurance
            </span>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center gap-4">
            <span className="bg-blue-800 hover:bg-white hover:text-black flex items-center gap-2 text-sm font-semibold border-2 border-blue-300 px-4 py-2 rounded-2xl">
              <AiFillSafetyCertificate className="text-green-400" />
              Home Insurance
            </span>
            <img
              src={image3}
              alt="Home Insurance"
              className="w-44 sm:w-52 md:w-56 h-auto object-cover rounded-[25px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
