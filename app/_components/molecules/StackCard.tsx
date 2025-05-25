import {
  AWS,
  ChatGpt,
  Docker,
  Figma,
  Java,
  Javascript,
  Jest,
  Kafka,
  MongoDb,
  Nest,
  Next,
  Node,
  Posgtgres,
  React,
  Redux,
  SpringBoot,
  StoryBook,
  Typescript,
} from "@/app/_assets";
import Image from "next/image";

const stack = [
  {
    category: "Development",
    tools: [
      { name: "Spring Boot", type: "Framework", logo: SpringBoot },
      { name: "React", type: "UI Library", logo: React },
      { name: "AWS", type: "Cloud", logo: AWS },
      { name: "Java", type: "Programming", logo: Java },
      { name: "Javascript", type: "Programming", logo: Javascript },
      { name: "Typescript", type: "Programming", logo: Typescript },
      { name: "Docker", type: "Virtualization", logo: Docker },
      { name: "Posgtres", type: "Database", logo: Posgtgres },
      { name: "Next.js", type: "Framework", logo: Next },
      { name: "Node.js", type: "Framework", logo: Node },
      { name: "Nest.js", type: "Framework", logo: Nest },
      { name: "Redux", type: "State Management", logo: Redux },
      { name: "Jest", type: "Testing", logo: Jest },
      { name: "Storybook", type: "Testing", logo: StoryBook },
      { name: "Figma", type: "Design Tool", logo: Figma },
      { name: "ChatGpt", type: "Ai", logo: ChatGpt },
      { name: "MongoDB", type: "Database", logo: MongoDb },
      { name: "Kafka", type: "Event Streaming", logo: Kafka },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="text-[#607b96] px-6 md:px-12 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white">My Stack</h2>
      <p className="text-[#607b96] mt-2">
        Software and tools I use on a regular basis.
      </p>

      <div className="mt-6 border border-[#607b96] rounded-md p-6">
        {stack.map((section, i) => (
          <div key={i}>
            <h3 className="text-xl font-bold mb-4 text-white">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-md transition-all duration-200 hover:bg-[#1a2b3c] cursor-pointer"
                >
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                  <div>
                    <h4 className="font-medium text-gradient-2">{tool.name}</h4>
                    <p className="text-sm text-[#607b96]">{tool.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
