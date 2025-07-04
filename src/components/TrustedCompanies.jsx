import React from "react";
import img1 from "../assets/21.png";
import img2 from "../assets/18.png";
import img3 from "../assets/17.png";
import img4 from "../assets/15.png";
import img5 from "../assets/14.png";
import img6 from "../assets/8.png";

const baseLogos = [
  { src: img1, alt: "Company 1", width: "w-28", height: "h-10" },
  { src: img2, alt: "Company 2", width: "w-32", height: "h-12" },
  { src: img3, alt: "Company 3", width: "w-24", height: "h-8" },
  { src: img4, alt: "Company 4", width: "w-36", height: "h-10" },
  { src: img5, alt: "Company 5", width: "w-28", height: "h-14" },
  { src: img6, alt: "Company 6", width: "w-28", height: "h-14" },
];

// Doubled for infinite scroll
const logos = [...baseLogos, ...baseLogos];

export default function TrustedCompanies() {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center py-15 gap-5 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Trusted by 100+ Companies
        </h2>
      </div>

      <div className="overflow-hidden w-[80%] flex justify-center items-center">
        <div className="flex justify-center items-center w-max animate-slide space-x-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.width} ${logo.height} object-contain`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
