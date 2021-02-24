import React, {useRef,useEffect, useState} from 'react';
import '../../assets/styles/pages.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
}; 

export default function HFadsBio ()  {  
  
  const [killTl, setkillTl] = useState(false);
  const tl = useRef();
  const fadsbio = useRef();
  const biotxt = useRef();

  useEffect(() => {
    let elementsToSave = [];
    fadsbio.current && elementsToSave.push(fadsbio.current);
    biotxt.current && elementsToSave.push(biotxt.current);
    ScrollTrigger.saveStyles(elementsToSave);
    
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": () => {
        if (!killTl) {
          tl.current = gsap.timeline({
            scrollTrigger: {
              trigger: fadsbio.current,
              id: "hometl",
              start: "-10% 15%",
              end: 'bottom bottom-=70px',
              anticipatePin: 2,
              pin: biotxt.current,
              toggleActions: "play complete reverse reset",
            }
          })
          .from(biotxt.current, {opacity: 0, duration: 0.7, ease: 'sine.in'}, "-=1.5")
          /*.to(fadsbio.current, {duration: 2, backgroundColor: '#757c97', ease: "linear"});*/
        }
      },
      "(max-width: 430px)": () => {
        if (!killTl) {
          tl.current = gsap.timeline({
            scrollTrigger: {
              trigger: fadsbio.current,
              scrub: 0.1,
              id: "hometlMobile",
              start: "-30% 40%",
              end: '+=300px',
              pin: false,
            }
          })
          .from(biotxt.current, {autoAlpha: 1, duration: 1, ease: 'back.inOut(1.4)'});
        }
      }
    });
 }, []);

 useEffect(() => {
  return () => {
      ScrollTrigger.getAll().forEach(tl => tl.kill());
      setkillTl(killTl);
    };
  }, []);
            
              
    return (
      <>
      <div ref={fadsbio} id="hometl" className="layertwo">
        <div> 
        <div ref={biotxt} className="text">
          <h3>FADS offers students a space to pursue fashion
              related interests outside of their major, with
              the opportunities and professional environment
              to prepare them for creative careers.
              </h3>
          </div>
        </div>
      </div>
      </>
    );
};