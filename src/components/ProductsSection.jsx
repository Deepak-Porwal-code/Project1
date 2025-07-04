import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/4.png";
import img3 from "../assets/7.png";
import { AiFillSafetyCertificate } from "react-icons/ai";
import {
  FaCarSide,
  FaHandHoldingHeart,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const products = [
  {
    title: "Health Insurance",
    description: "Protect your health with comprehensive coverage plans.",
    image: img1,
    icon: <FaPeopleGroup />,
  },
  {
    title: "Motor Insurance",
    description: "Secure your vehicle against accidents and theft.",
    image: img2,
    icon: <FaCarSide />,
  },
  {
    title: "Home Insurance",
    description: "Safeguard your home and valuable belongings.",
    image: img3,
    icon: <FaHandHoldingHeart />,
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-[#e3e9fa] py-16 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-5 text-center mb-12">
        <span className="bg-[#d0d8f2] text-[#001f5c] flex justify-center items-center gap-2 text-[17px] font-semibold border-2 border-gray-300 w-[180px] px-2 py-3 rounded-3xl">
          <AiFillSafetyCertificate
            className="text-green-400 hover:text-black"
            size={25}
          />
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f5c]">
          Our Insurance Products
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Comprehensive insurance solutions tailored to your individual and
          business needs with industry leading coverage and competitive rates.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col text-left overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="text-orange-500 text-[30px] mb-2">
                {product.icon}
              </div>
              <h3 className="text-xl font-extrabold text-black mb-1">
                {product.title}
              </h3>
              <p className="text-gray-600">{product.description}</p>
              <button className="mt-4 flex items-center gap-3 px-5 py-2 border-2 border-amber-500 bg-gray-100 hover:text-white rounded-[30px] hover:bg-orange-500 transition">
                Learn More
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
