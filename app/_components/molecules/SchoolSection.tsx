import { College } from "@/app/_assets";
import Image from "next/image";

// app/components/SchoolSection.tsx
export default function SchoolSection() {
  return (
    <section className="text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left: Polaroid Photo */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center">
          <div className="bg-white rounded-xl shadow-lg transform rotate-[-5deg] p-4">
            <Image
              src={College}
              alt="Duoc UC - 2006"
              className="rounded-md"
              width={300}
              height={300}
            />

            <p className="text-black text-center font-handwriting mt-2">
              IKGPTU Jalandhar - 2020
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-sky-300">College</h2>
          <p className="text-xl text-sky-200">2020 – 2024</p>
          <p className="text-lg text-white">
            I started studying at IKG Punjab Technical University in Jalandhar
          </p>
          <p className="text-lg text-white">
            In my early years, I explored different techs and met great coders.
          </p>

          <div className="flex  gap-4 mt-6">
            <div className="bg-neutral-800 px-4 py-3 rounded-xl max-w-xs">
              I was very good at the interaction and web dev courses
            </div>
            <div className="bg-neutral-800 px-4 py-3 rounded-xl max-w-xs">
              I loved how full-stack development let me turn ideas into real,
              working products.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
