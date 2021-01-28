import React, { useRef, useEffect} from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles/pages.scss';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
};

const Reveal = ({ children, className }) => {
            
  const revealRef = useRef(null);

  useEffect(() => {
  gsap.from(revealRef.current, {
      id: "reveal",
      scrollTrigger: revealRef.current,
      y: 150,
      scrub: 0.01,
      autoAlpha: 1, 
      ease: "expo", 
      duration: 1.25,
      stagger: { each: 0.30},
      start: "5% center"
  });
  return () => {
    if (ScrollTrigger.getById('reveal')) {
      ScrollTrigger.getById('reveal').kill();
    }
  };
  }, []);

  return <div className={className} ref={revealRef}>{children}</div>;
};

export default Reveal;

