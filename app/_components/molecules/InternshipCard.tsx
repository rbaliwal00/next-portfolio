import { FourSvg } from "@/app/_assets";
import Image from "next/image";
import React from "react";

const InternshipCard = () => {
  return (
    <div>
      <div className="relative w-full min-h-[400px] text-white px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-handwriting text-2xl md:text-3xl leading-relaxed bg-gradient-to-br from-green-300 via-blue-300 to-green-400 bg-clip-text text-transparent">
              I DID MY FIRST INTERNSHIP
              <br />
              AT SMARTLE IN 2022
              <br />
              YEARS AS A FUll STACK DEV
            </p>
          </div>

          {/* Logo + Arrow */}
          <Image src={FourSvg} alt="image" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
