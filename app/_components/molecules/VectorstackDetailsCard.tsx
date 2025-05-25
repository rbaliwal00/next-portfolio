import { Board, SketchBook, VectorstackTeam } from "@/app/_assets";
import Image from "next/image";

export default function VectorStackDetailsCard() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4 py-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
        <Image
          src={Board}
          alt="board"
          width={450}
          height={300}
          className="justify-self-end"
        />
        {/* Right Text Section */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-blue-400 text-5xl font-bold">VectorStack</h1>
            <p className="text-blue-300 text-xl font-semibold mt-1">
              2024 – Present
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I led several strategic projects, working alongside{" "}
              <span className="text-blue-400">@Sateesh</span>,{" "}
              <span className="text-blue-400">@Abhishek</span>, and
              <span className="text-blue-400"> @Anurag</span>.
            </p>

            <p>
              Together with <span className="text-blue-400">@Nikhil</span>, I
              developed secure, scalable backend microservices with{" "}
              <span className="font-medium">Spring Boot</span>,{" "}
              <span className="font-medium">Spring Security</span> and{" "}
              <span className="font-medium">AWS Services</span>. <br />
              <br />
              On the frontend, I built dynamic user-facing features and a
              real-time CMS using <span className="font-medium">
                React.js
              </span>{" "}
              with <span className="font-medium">Redux Toolkit and Saga</span>,
              enabling stakeholders to monitor metrics live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
