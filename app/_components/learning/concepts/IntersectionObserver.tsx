"use client";

import React, { useEffect, useRef } from "react";

const IntersectionObserverDemo = () => {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "itersection-observer__show",
            entry.isIntersecting,
          );
        });
      },
      {
        threshold: 1,
      },
    );

    if (boxRefs) {
      observer.observe(boxRefs.current[0]);
      observer.observe(boxRefs.current[1]);
      observer.observe(boxRefs.current[2]);
      observer.observe(boxRefs.current[3]);
      observer.observe(boxRefs.current[4]);
      observer.observe(boxRefs.current[5]);
      observer.observe(boxRefs.current[6]);
      observer.observe(boxRefs.current[7]);
      observer.observe(boxRefs.current[8]);
      observer.observe(boxRefs.current[9]);
    }
  }, []);

  return (
    <div className="itersection-observer__container">
      <div style={{ color: "white" }}>Intersection Observer Example</div>
      <div
        className="itersection-observer__card"
        ref={(el: any) => (boxRefs.current[0] = el)}
      >
        This is the first card
      </div>
      <div
        className="itersection-observer__card "
        ref={(el: any) => (boxRefs.current[1] = el)}
      >
        1
      </div>
      <div
        className="itersection-observer__card"
        ref={(el: any) => (boxRefs.current[2] = el)}
      >
        2
      </div>
      <div
        className="itersection-observer__card"
        ref={(el: any) => (boxRefs.current[3] = el)}
      >
        3
      </div>
      <div
        className="itersection-observer__card"
        ref={(el: any) => (boxRefs.current[4] = el)}
      >
        4
      </div>
      <div
        className="itersection-observer__card"
        ref={(el: any) => (boxRefs.current[5] = el)}
      >
        5
      </div>
      <div
        className="itersection-observer__card"
        ref={(el: any) => (boxRefs.current[6] = el)}
      >
        6
      </div>
      <div
        className="itersection-observer__card"
        ref={(el: any) => (boxRefs.current[7] = el)}
      >
        7
      </div>
      <div
        className="itersection-observer__card"
        ref={(el: any) => (boxRefs.current[8] = el)}
      >
        8
      </div>
      <div
        className="itersection-observer__card"
        ref={(el: any) => (boxRefs.current[9] = el)}
      >
        9
      </div>
    </div>
  );
};

export default IntersectionObserverDemo;
