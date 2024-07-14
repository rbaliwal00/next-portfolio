import Image from "next/image";
import HelloIntro from "./_components/hello/HelloIntro";
import Snake from "./snake/page";

export default function Home() {
  return (
    <div className="main__container">
      <HelloIntro />
      <Snake />
    </div>
  );
}
