import React, { useState } from "react";

import img1 from "../assets/3.png";
import img2 from "../assets/12.png";
import img3 from "../assets/11.png";
import img4 from "../assets/9.png";

const dashboardImages = [img1, img2, img3, img4];

export default function DashboardPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUp = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dashboardImages.length - 1 : prev - 1
    );
  };

  const handleDown = () => {
    setCurrentIndex((prev) =>
      prev === dashboardImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#ffe8e8] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Heading and buttons (left aligned) */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f5c]">
            Glimpses of our -
          </h2>
          <div className="flex gap-4">
            <button className="bg-orange-400 text-white px-6 py-3 rounded hover:bg-orange-500 transition">
              E.B Portal
            </button>
            <button className="border border-orange-400 text-black px-7 py-3 rounded hover:bg-orange-400 hover:text-white transition">
              Employee App
            </button>
          </div>
        </div>

        {/* Responsive layout */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center lg:items-start justify-between w-full">
          
          {/* Thumbnails + arrows section */}
          <div className="flex gap-6">
            {/* Thumbnails: stacked on large, 2x2 on small */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {dashboardImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumb ${index}`}
                  className={`w-28 h-20 p-2 object-cover rounded-xl cursor-pointer border-2 ${
                    currentIndex === index
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex lg:flex-col gap-3 items-center justify-center lg:justify-end">
              <button
                onClick={handleUp}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                ▲
              </button>
              <button
                onClick={handleDown}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                ▼
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="flex-1 w-full">
            <img
              src={dashboardImages[currentIndex]}
              alt="Dashboard Preview"
              className="w-full h-[400px] object-contain rounded-lg shadow-md bg-pink-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
