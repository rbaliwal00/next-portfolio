import { FiveSvg } from "@/app/_assets";
import Image from "next/image";
import React from "react";

const HorecahCard = () => {
  return (
    <div className="text-white py-10 px-6 relative overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-24">
        <Image src={FiveSvg} alt="five" width={400} height={500} />
        <div className="mt-10 md:mt-0 text-right">
          <p className="font-handwriting text-red-400 text-2xl leading-snug">
            I AM OBSESSED WITH <br />
            PIXEL PERFECT UI
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorecahCard;
