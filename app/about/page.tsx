import Image from "next/image";
import { Final, OneSvg, TwoSvg } from "../_assets";
import CardOne from "../_components/molecules/CardOne";
import TechStack from "../_components/molecules/StackCard";
import SchoolSection from "../_components/molecules/SchoolSection";
import InternshipCard from "../_components/molecules/InternshipCard";
import InternshipDetailsCard from "../_components/molecules/InternshipDetailsCard";
import HorecahCard from "../_components/molecules/HorecahCard";
import HorecahSection from "../_components/molecules/HorecahDetailsCard";
import VectorStackCard from "../_components/molecules/VectorstackCard";
import VectorStackDetailsCard from "../_components/molecules/VectorstackDetailsCard";

const About = () => {
  return (
    <div className="mt-8">
      <TechStack />
      <Image src={OneSvg} alt="one" className="one" height={330} />
      <div className="flex justify-center items-center text-white py-4 px-8 text-center overflow-hidden">
        <h1 className="text-xl md:text-5xl font-bold tracking-wide">
          <span className="font-extrabold">My</span> tech journey
        </h1>
        <Image src={TwoSvg} alt="two" />
      </div>
      <CardOne />
      <SchoolSection />
      <InternshipCard />
      <InternshipDetailsCard />
      <HorecahCard />
      <HorecahSection />
      <VectorStackCard />
      <VectorStackDetailsCard />
      <Image src={Final} alt="one" />
    </div>
  );
};

export default About;
