import React from "react";
import Image from "next/image";
import Up from "../icons/Arrows/arrow-drop-up-fill.svg";
import Down from "../icons/Arrows/arrow-drop-down-fill.svg";
import Left from "../icons/Arrows/arrow-drop-left-fill.svg";
import Right from "../icons/Arrows/arrow-drop-right-fill.svg";

const Arrow = ({ remaining }: { remaining: number }) => {
  const food = () => {
    for (let i = 0; i < remaining; i++) {
      <div key={i}>{i}</div>;
    }
  };

  return (
    <div className="arrow-container text-white">
      <div>&#47;&#47; use keyboard</div>
      <div>&#47;&#47; arrows to play</div>
      <div className="arrow first-arrow">
        <Image
          src={Up}
          color="white"
          width={50}
          height={50}
          className="text-white"
          alt="Up-Arrow"
        />
      </div>
      <div className="arrows">
        <div className="arrow ">
          <Image
            src={Left}
            color="white"
            width={50}
            height={50}
            className="text-white"
            alt="Follow us on Twitter"
          />
        </div>
        <div className="arrow">
          <Image
            src={Down}
            color="white"
            width={50}
            height={50}
            className="text-white"
            alt="Follow us on Twitter"
          />
        </div>
        <div className="arrow">
          <Image
            src={Right}
            color="white"
            width={50}
            height={50}
            className="text-white"
            alt="Follow us on Twitter"
          />
        </div>
      </div>
      <div className="mt-10">
        <div>&#47;&#47; food left</div>
        <div className="food-dots">
          {[...Array(remaining)].map((_, i) => {
            return <div className="food-dot" key={i}></div>;
          })}
          {[...Array(10 - remaining)].map((_, i) => {
            return <div className="food-dot eaten" key={i}></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Arrow;
