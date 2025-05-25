import { HorecahTeam, Project_Horecah, SketchBook } from "@/app/_assets";
import Image from "next/image";
import Link from "next/link";

const SantanderSection = () => {
  return (
    <section className="text-white px-6 md:px-20 py-10 font-sans flex flex-col lg:flex-row justify-between gap-12">
      <div className="max-w-xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-red-400 font-extrabold text-5xl">Horecah</h1>
          <p className="text-red-300 text-xl mt-1">2024</p>
        </div>

        {/* Body */}
        <div className="text-[17px] leading-relaxed space-y-6">
          <p>
            I worked at the social networking company{" "}
            <span className="text-red-400 underline">
              <Link href={"https://www.horecah.com/"} target="_blank">
                Horecah
              </Link>
            </span>
            , where I helped design and build a{" "}
            <span className="text-red-400">robust digital platform</span> to
            enhance the job search experience through the company’s app and
            website.
          </p>

          <p>
            Coordinating with multiple teams and considering the needs across a
            large organisation was challenging but the end result was a huge
            improvement in the handoff process.
          </p>

          <p>
            <span className="font-semibold">
              The best thing was the collaborative work with my teammates,
              <span className="text-red-400 underline">
                <Link
                  href={"https://www.linkedin.com/in/umesh-ms/"}
                  target="_blank"
                >
                  @Umesha
                </Link>
              </span>
              ,
              <span className="text-red-400 underline">
                <Link
                  href={"https://www.linkedin.com/in/sangeeta-chandrashekhar/"}
                  target="_blank"
                >
                  @Sangeeta
                </Link>
              </span>{" "}
              and
              <span className="text-red-400 underline">
                <Link
                  href={"https://www.linkedin.com/in/don-bosco-790b57150/"}
                  target="_blank"
                >
                  @Don
                </Link>
              </span>
              .
            </span>
          </p>
        </div>

        {/* Quote Box */}
        <div className="bg-neutral-800 text-sm text-gray-300 px-4 py-3 rounded-md w-fit mt-4">
          What began as a basic prototype grew into a scalable, full-stack
          solution that now supports the majority of the company’s digital
          infrastructure.
        </div>
      </div>

      {/* Right Column: Images */}
      <div className="relative w-full max-w-xl">
        {/* Group photo */}
        <Image
          src={HorecahTeam}
          alt="Team photo"
          width={200}
          height={250}
          className="absolute top-[10px] left-0 rounded-md rotate-3 shadow-lg"
        />
        <div className="absolute top-[145px] left-[10px] text-black font-bold text-xs bg-orange-100 px-2 py-1 rounded shadow-md">
          AGILE
        </div>
        <div className="absolute top-[140px] left-[260px] text-black font-bold text-xs bg-pink-200 px-2 py-1 rounded shadow-md">
          DESIGN THINKING
        </div>

        {/* Sketchbook */}
        <Image
          src={SketchBook}
          alt="Sketchbook drawing"
          width={400}
          height={300}
          className="rounded-md mt-[130px] shadow-md"
        />
        <div className="absolute top-[395px] left-[40px] text-black font-bold text-xs bg-blue-300 px-2 py-1 rounded shadow-md">
          SYSTEM DESIGN
        </div>

        {/* Mobile App Mockup */}
        <div className="ml-20">
          <Image
            src={Project_Horecah}
            alt="App UI"
            width={420}
            height={620}
            className="rotate-[5deg] rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SantanderSection;
