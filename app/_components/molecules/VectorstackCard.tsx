import { Capi, SixSvg } from "@/app/_assets";
import Image from "next/image";

export default function VectorStackCard() {
  return (
    <div className="w-[100%] py-10 md:w-[80%] grid grid-cols-1 md:grid-cols-3  p-8rounded-lg shadow-lg gap-8 justify-center m-auto items-center">
      <Image
        src={Capi}
        alt="capi"
        className="md:self-end justify-self-center md:justify-self-end"
      />
      <Image src={SixSvg} alt="arrow" className="justify-self-center" />
      <div className="md:justify-self-start justify-self-center text-[#A5C9FF] text-xl leading-snug font-handwritten">
        <p>I WORKED A LOT ON</p>
        <p>LEADING MULTIPLE PROJECTS</p>
      </div>
    </div>
  );
}
