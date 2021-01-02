import React, {useRef,useEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles/pages.scss';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HFadsBio ()  {  

  const tl = useRef();
  const fadsbio = useRef(null);
  const biotxt = useRef(null);
  const biocover = useRef(null);

/*useEffect(() => {      
    gsap.from('.fadsintro', {duration:4, autoAlpha: 0})
}, []);*/

  useEffect(() => {
    tl.current = gsap.timeline({
       scrollTrigger: {
         trigger: fadsbio.current,
         id: "hometl",
         start: "top top",
         end: '+=850',
         pin: biotxt.current,
         pinReparent: true,
         toggleActions: "play pause resume reverse",
         markers: {startColor: "blue", endColor: "red", fontSize: "14px", indent: 20}

       }
     }) 
     .fromTo(biocover.current, {y: 0}, {duration: 1.3, y: 900, ease: 'sine.in'})
     .from(biotxt.current, { opacity: 0, duration: 0.7, x: 10 , ease: 'back.inOut(1.4)'})

     return () => {
      if (ScrollTrigger.getById('hometl')) {
        ScrollTrigger.getById('hometl').kill();
      }
      tl.current.kill();
    }
 }, []);
            
              
    return (
      <>
      <div ref={fadsbio} id="hometl" className="layertwo">
        <div> 
          <div ref={biocover} className="bioreveal"/> 
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