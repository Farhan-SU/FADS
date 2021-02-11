import React, {useRef,useEffect, useState} from 'react';
import '../../assets/styles/pages.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BioTriangle from '../../assets/images/biotriangle.png';

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
              start: "-10% top",
              end: '+=1300px',
              anticipatePin: 2,
              pin: biotxt.current,
              pinSpacing: false,
              toggleActions: "play none play reverse",
            }
          })
          .from(biotxt.current, {opacity: 0, duration: 1, y: 80, ease: 'back.inOut(1.4)'});
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
          .fromTo(biotxt.current, {duration: 1, y: 90, ease: 'back.inOut(1.4)'}, {autoAlpha: 1, y: 40, duration: 0.5});
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
          <h3>
            <em>FADS offers students a space to pursue fashion
                related interests outside of their major, with
                the opportunities and professional environment
                to prepare them for creative careers.</em>
              </h3>
          </div>
        </div>
        
      </div>
      </>
    );
};