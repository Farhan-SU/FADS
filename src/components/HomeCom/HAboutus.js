import React, {useRef,useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/pages.scss'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import joinFadsvid from '../../assets/images/fadsfam.mp4';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HAboutus()  {  

    const aboutRef = useRef(); 
    const overlayref = useRef()

    useEffect(() => {
      const elementsToSave = [];
      aboutRef.current && elementsToSave.push(aboutRef.current);
      overlayref.current && elementsToSave.push(overlayref.current);

      ScrollTrigger.saveStyles(elementsToSave);
  
      ScrollTrigger.matchMedia({
        "(min-width: 800px)": () => {
          gsap.set(overlayref.current, {width: 0});
            const tl = gsap.timeline({
              scrollTrigger: {
                id: 'about-ref',
                trigger: aboutRef.current,
                scrub: 0.01,
                start: "top-=10% 90%" ,
                end: "bottom bottom",
                once: true,
                toggleActions: "play none play none"
              }
            })
            .to(overlayref.current, {duration: 1, width:'100%', ease: 'sine.in'});
        },
        "(max-width: 430px)": () => {
          gsap.set(overlayref.current, {width: 0});
            const smtl = gsap.timeline({
              scrollTrigger: {
                id: 'about-ref',
                trigger: aboutRef.current,
                scrub: 0.2,
                start: "-30% 40%" ,
                end: "100%",
                once: true
              }
            })
            .to(overlayref.current, {duration: 0.5, width:'100%', ease: 'sine.in'});
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
        <div className="aboutuswrapper" id="about-ref" ref={aboutRef}>
          <div  className="ab-img-con" ref={overlayref}>
              <video className='videoTag' controls autoPlay loop muted playsInline>
                  <source src='https://res.cloudinary.com/fadscloud/video/upload/v1617763685/fadsfam.mp4' type='video/mp4'/>
                  Sorry! Your browser does not support this video file.
              </video>
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