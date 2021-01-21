import React, {useRef,useEffect, useState} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fadsAbout from '../../assets/images/joinUsHpg.mp4';
import '../../assets/styles/pages.scss';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
}; 

export default function HFadsBio ()  {  
  
  const [killTl, setkillTl] = useState(false);
  const tl = useRef();
  const smtl = useRef();
  const fadsbio = useRef(null);
  const biotxt = useRef(null);

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
              start: "top top",
              end: '+=1000px',
              anticipatePin: 2,
              pin: biotxt.current,
              pinReparent: true,
              pinSpacing: false,
              toggleActions: "play none play reverse"
            }
          })
          .fromTo(biotxt.current, { autoAlpha: 0, duration: 1, y: 50, ease: 'back.inOut(1.4)'}, { autoAlpha: 1, y: 0, duration: 1});
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
          .fromTo(biotxt.current, {autoAlpha: 0, duration: 0.5, y: 90, ease: 'back.inOut(1.4)'}, {autoAlpha: 1, y: 40, duration: 0.5});
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
        <div className="text">
          <h3 ref={biotxt} as="img">
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