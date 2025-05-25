import { Project_Smartle } from "@/app/_assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InternshipDetailsCard = () => {
  return (
    <div>
      <div className="text-white px-6 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Left Text Content */}
          <div className="flex-1">
            {/* Heading */}
            <h2 className="text-4xl font-extrabold">
              <span className="text-gradient-2 bg-gradient-to-r from-sky-300 to-green-400 bg-clip-text text-transparent">
                Smartle
              </span>
            </h2>
            <p className="text-xl text-sky-200 mt-2">2022</p>
            {/* Paragraphs */}
            <p className="mt-6 text-lg text-white leading-relaxed">
              While I was finishing my studies,{" "}
              <span className="underline text-teal-300">Smartle</span> gave me
              the opportunity to work in a great team, with projects for big
              brands.
            </p>
            <p className="mt-4 text-lg text-white leading-relaxed">
              I was lucky to work with{" "}
              <span className="text-green-300 font-semibold">
                <Link
                  href={"https://www.linkedin.com/in/adeebdev/"}
                  target="_blank"
                >
                  @Adeeb
                </Link>
              </span>
              , one of the best designers I know and he was a great mentor and
              good friend.
            </p>

            {/* Info Tags */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="bg-zinc-800 px-4 py-3 rounded-xl max-w-xs text-sm">
                Smartle is a EdTech platform that creates fun, social, and safe
                learning experiences for ages 8 to 14.
              </div>
              <div className="bg-zinc-800 px-4 py-3 rounded-xl max-w-xs text-sm">
                I developed both fronend and backend of the platform using
                <span className="text-green-300 font-semibold">
                  {" "}
                  React
                </span> and{" "}
                <span className="text-green-300 font-semibold"> Node.js </span>
                and deployed it on{" "}
                <span className="text-green-300 font-semibold"> AWS</span>.
              </div>
            </div>
          </div>

          {/* Right Image Stack */}
          <div className="flex-1 flex flex-col items-center gap-6">
            {/* Top Image */}
            <div className="relative w-fit rotate-[-5deg]">
              <Image
                src={Project_Smartle}
                alt="Smartle"
                className="rounded-xl border-4 border-white shadow-lg"
              />
              <p className="text-center text-handwriting mt-2 text-white">
                Smarlte – 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetailsCard;
