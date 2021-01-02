import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ lineContent, lineContent2 }) => {
    
  let line1 = useRef(null);
  let line2 = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    tl.staggerFrom(
      [line1, line2],
      1,
      {
        y: 46,
        ease: 'sine.in',
        delay: 0.8
      },
      0.15
    );
  }, [line1, line2]);

  return (
    <h1 className="page-title">
      <div className="line-wrap">
        <div ref={el => (line1 = el)} className="line">
          {lineContent}
        </div>
      </div>
      <div className="line-wrap">
        <div ref={el => (line2 = el)} className="line">
          {lineContent2}
        </div>
      </div>
    </h1>
  );
};

export default Title;
