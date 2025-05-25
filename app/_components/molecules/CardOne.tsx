import { ThreeSvg } from "@/app/_assets";
import Image from "next/image";
import React from "react";

const CardOne = () => {
  return (
    <div>
      <div className="text-[#b3d4fc] px-6 md:px-24 py-2  overflow-hidden">
        <div className="grid md:grid-cols-3 justify-center items-center gap-8 relative z-10">
          <div className="font-handwritten text-2xl md:text-3xl leading-relaxed text-center md:text-left">
            <p>I STARTED MY CAREER</p>
            <p>STUDYING SOFTWARE</p>
            <p>ENGINEERING IN 2020</p>
          </div>
          <Image src={ThreeSvg} alt="three" />
          <div className="relative text-lg md:text-xl leading-relaxed">
            <p>The first time I really came into contact</p>
            <p>with programming I was around ten old.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
