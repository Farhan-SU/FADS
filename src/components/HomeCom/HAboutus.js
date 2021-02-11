import React, {useRef,useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/pages.scss'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fadsAbout from '../../assets/images/joinUsHpg.mp4';
;


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HAboutus()  {  

    const abRef = useRef();
    const abtextref = useRef();
    const AboutRef = useRef(); 
    const overlayref = useRef()
    const imgabout = useRef();

    useEffect(() => {
      const elementsToSave = [];
      abRef.current && elementsToSave.push(abRef.current);
      abtextref.current && elementsToSave.push(abtextref.current);
      AboutRef.current && elementsToSave.push(AboutRef.current);
      overlayref.current && elementsToSave.push(overlayref.current);
      imgabout.current && elementsToSave.push(imgabout.current);

      ScrollTrigger.saveStyles(elementsToSave);
  
      ScrollTrigger.matchMedia({
        "(min-width: 800px)": () => {
            let tl = gsap.timeline({
              scrollTrigger: {
                id: 'about-ref',
                trigger: AboutRef.current,
                scrub: 0.1,
                start: "-10% 30%" ,
                end: "bottom bottom",
                once: true,
                toggleActions: "play none play none"
              }
            })
            tl.to(overlayref.current, {duration: 2, x: -1700, autoAlpha: 1, ease: 'sine.in',backgroundColor: "#AC9FB2"})
            tl.from(imgabout.current, {duration: 1, autoAlpha: 0, scale: 1.3, ease: "back.inOut(1.4)"})
        },
        "(max-width: 430px)": () => {
            let smtl = gsap.timeline({
              scrollTrigger: {
                id: 'about-ref',
                trigger: AboutRef.current,
                scrub: 0.2,
                start: "-30% 40%" ,
                end: "100%",
                once: true
              }
            })
            smtl.to(overlayref.current, {duration: 2, x: -700, autoAlpha: 1, ease: 'sine.in'})
            smtl.add("reveal", "+=0.5")
            smtl.from(imgabout.current, {duration: 2, autoAlpha: 0, scale: 0.9, ease: "back.inOut(1.4)"}, 'reveal');
        }
      });
   }, []);

   useEffect(() => {
    return () => {
          ScrollTrigger.getAll().forEach(tl => tl.kill());
          ScrollTrigger.getAll().forEach(smtl => smtl.kill());
        };
    }, []);
                    
    return (
      <>
        <div className="aboutuswrapper" id="about-ref" ref={AboutRef}>
          <div  className="ab-img-con">
              <video className='videoTag' preloaded="true" controls autoPlay loop muted playsInline className='aboutpic'>
                  <source src={fadsAbout} type='video/mp4'/>
                  Sorry! Your browser does not support this video file.
              </video>
              <div ref={overlayref} className='overlay'/>
          </div>
          <div className="ab-text">
            <h2>ABOUT US</h2>
            <h3>Meet the diverse group of career minded 
            individuals at Syracuse University who share 
            a passion for creativity, design, and fashion.</h3>
            <div className="abtLink">
            <Link to="/aboutus">
                <div className="linkbtn">
                <div className="circlelink"/>
                  <p className="linktext">Get to know us &#10230;</p>
                </div>
            </Link>
            </div>
          </div>
        </div>
      </>
    );
};