import React, {useRef,useEffect, useState} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/pages.scss';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
}; 

export default function HFadsBio ()  {  
  
  const [killTl, setkillTl] = useState(false);
  const fadsbio = useRef(null);
  const biotxt = useRef(null);

  useEffect(() => {
    let elementsToSave = [];
    biotxt.current && elementsToSave.push(biotxt.current);
    ScrollTrigger.saveStyles(elementsToSave);

    ScrollTrigger.matchMedia({
      "(min-width: 800px)": () => {
        if (!killTl) {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: fadsbio.current,
              id: "hometl",
              start: "top 10%",
              end: '+=1000px',
              anticipatePin: 1,
              pin: biotxt.current,
              pinReparent: true,
              pinSpacing: false,
              toggleActions: "play pause reverse reverse",
            }
          })
          tl.fromTo(biotxt.current, { autoAlpha: 0, duration: 1, x: -80, y: 100, ease: 'back.inOut(1.4)'}, { autoAlpha: 1, duration: 1, x: 80, y: 100})
        }
      },
      "(max-width: 400px)": () => {
        if (!killTl) {
          let smtl = gsap.timeline({
            scrollTrigger: {
              trigger: fadsbio.current,
              id: "hometlMobile",
              start: "top 40%",
              end: '+=1000px',
              pin: false,
              toggleActions: "play pause reverse reverse",
            }
          })
          smtl.fromTo(biotxt.current, { autoAlpha: 0, duration: 1, y: 30, ease: 'back.inOut(1.4)'}, { autoAlpha: 1, y: 0, duration: 1})
        }
      }
    });
 }, []);

 useEffect(() => {
  return () => {
      ScrollTrigger.getAll().forEach(tl => tl.kill());
      ScrollTrigger.getAll().forEach(smtl => smtl.kill());
      setkillTl(killTl);
    };
  }, []);
            
              
    return (
      <>
      <div ref={fadsbio} id="hometl" className="layertwo">
        <div> 
        <div className="text">
          <h3 ref={biotxt} contentEditable="false" role='textbox' aria-multiline='true'>
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