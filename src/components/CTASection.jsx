import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function CTASection() {
  return (
    <section className="bg-[#001f5c] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Protected ?
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-10">
          Take the first step towards securing your future. Get a personalized
          insurance quote in just minutes and discover how affordable protection
          can be be
        </p>
        <div className="flex gap-4 flex-wrap justify-center font-bold">
          <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">
            Get Free Quote → 
          </button>
          <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">
            +1 (555) 123-4567
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-0">
          {/* Feature 1 */}
          <div className="bg-transparent text-white gap-5 rounded-xl  p-6 flex flex-col items-center text-center">
            {/* Placeholder icon — replace with your icon */}
            <div className="w-18 h-18 p-2 object-cover bg-[#1f4666] rounded-2xl cursor-pointer justify-center items-center flex text-3xl border-2 border-orange-400">
              <FaPhone  className="text-orange-400" />
            </div>{" "}
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-white">
              +1 (555) 123-4567 <br />
              Available 24/7 for emergencies
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-transparent text-white gap-5 rounded-xl  p-6 flex flex-col items-center text-center">
            <div className="w-18 h-18 p-2 object-cover bg-[#1f4666] rounded-2xl cursor-pointer justify-center items-center flex text-3xl border-2 border-green-400">
              <MdOutlineMail className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email US</h3>
            <p className="text-white">
              info@rtfinsurance.com <br />
              We ll respond within 24 hours
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-transparent text-white gap-5 rounded-xl  p-6 flex flex-col items-center text-center">
            <div className="w-18 h-18 p-2 object-cover bg-[#1f4666] rounded-2xl cursor-pointer justify-center items-center flex text-3xl border-2 border-orange-400">
              <IoLocationOutline className="text-orange-400" />
            </div>{" "}
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-white">
              123Insurance Ave ,SUIT <br />
              Monday Friday, 9AM 6PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
