import React from "react";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { LuShieldCheck } from "react-icons/lu";
import { FaRegClock, FaRegCheckCircle } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f5f7fa] py-16 px-4">
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Green Curved Arrow (SVG) */}
        <svg
          className="hidden lg:block absolute left-[45%] top-6 w-[200px] h-[150px] z-30"
          viewBox="0 0 200 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 C100 100, 100 20, 200 100"
            stroke="#00C853"
            strokeWidth="8"
            fill="transparent"
            markerEnd="url(#arrowhead)"
          />
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 Z" fill="#00C853" />
            </marker>
          </defs>
        </svg>

        {/* LEFT BOX */}
        <div className="bg-white rounded-2xl p-8 w-full lg:w-[55%] shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002072] mb-8">
            Why Choose RTF <br className="hidden md:block" /> Insurance?
          </h2>

          <div className="space-y-6">
            {/* 1 */}
            <div className="flex gap-4 items-start">
              <PiCertificateLight className="text-orange-400 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-base">Expert Guidance</h4>
                <p className="text-gray-600 text-sm">
                  Our certified professionals provide personalized advice tailored to your unique needs.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-4 items-start">
              <FaRegClock className="text-orange-400 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-base">24/7 Support</h4>
                <p className="text-gray-600 text-sm">
                  Round-the-clock assistance when you need it most, because emergencies don’t wait.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-4 items-start">
              <LuShieldCheck className="text-orange-400 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-base">Trusted Partners</h4>
                <p className="text-gray-600 text-sm">
                  We work with A-rated insurance companies to ensure your claims are paid promptly.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex gap-4 items-start">
              <FaRegCheckCircle className="text-orange-400 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-base">Simplified Process</h4>
                <p className="text-gray-600 text-sm">
                  From quotes to claims, we’ve streamlined everything to save you time and hassle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="w-full lg:w-[40%] bg-gradient-to-br from-white to-[#f3fef0] rounded-2xl p-8 flex flex-col items-center justify-center text-center z-0 shadow-md">
          <LuShieldCheck className="text-[#002072] text-[100px] md:text-[120px] mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-[#002072]">
            Your Protection, Our Promise
          </h3>
          <p className="text-sm text-[#002072] mt-2">
            Dedicated to Safeguarding what matters most to you
          </p>
        </div>
      </div>
    </section>
  );
}
