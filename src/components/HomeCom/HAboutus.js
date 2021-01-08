import React, {useRef,useEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fadsFam from '../../assets/images/fadsfam.mp4';
import '../../assets/styles/pages.scss';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HAboutus()  {  
    
    const tl = useRef();
    const abRef = useRef(null);
    const abtextref = useRef(null);
    const AboutRef = useRef(null); 
    const overlayref = useRef(null)
    const imgabout = useRef(null);
  
   useEffect(() =>{
        tl.current = gsap.timeline({
          scrollTrigger: {
            id: 'about-ref',
            trigger: AboutRef.current,
            scrub: true,
            start: "top 50%" ,
            end: "bottom bottom",
            markers: {startColor: "orange", endColor: "yellow", fontSize: "12px"}
          }
        })
        .fromTo(overlayref.current, {duration: 2, y: 0, autoAlpha: 1, backgroundColor: "#AC9FB2"}, 
        {duration: 2, x: -1700, autoAlpha: 1, ease: 'sine.in',backgroundColor: "#AC9FB2"})
        .add("reveal", "+=1")
        .from(abRef.current, {duration: 1, autoAlpha: 0, y: 18, ease: 'sine.in'})
        .from(imgabout.current, {duration: 1, autoAlpha: 0, scale: 1.3, ease: "back.inOut(1.4)"}, 'reveal')
        .from(abtextref.current, {duration: 0.7, autoAlpha: 0, yPercent: 10, transformOrigin:"0% 100%", ease: 'power1.inOut', delay: 0.3});
  
        return () => {
          if (ScrollTrigger.getById('about-ref')) {
            ScrollTrigger.getById('about-ref').kill();
          }
          tl.current.kill();
        };
      }, []);


                       
    return (
      <>
        <div className="aboutuswrapper" id="about-ref" ref={AboutRef}>
          <div  className="ab-img-con">
              <video className='videoTag' autoPlay loop muted className='aboutpic'>
                  <source src={fadsFam} type='video/mp4' className='aboutpic'/>
              </video>
              <div ref={overlayref} className='overlay'/>
          </div>
          <div className="ab-text">
            <h2 ref={abRef} contentEditable="false" role='textbox' aria-multiline='false'>ABOUT US</h2>
            <h3 ref={abtextref}>Meet the diverse group of career minded 
            individuals at Syracuse University who share 
            a passion for creativity, design, and fashion.</h3>
          </div>
        </div>
      </>
    );
};