import React, {useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Galimg1 from '../assets/images/workwear/fuzzyhat.png';
import Galimg2 from '../assets/images/homegal.png';
import '../assets/styles/pages.scss';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HGallery ()  {  

  const tl = useRef();
  const image1 = useRef(null);
  const image2 = useRef(null);
  const containerRef = useRef(null);
  const galleryRef1 = useRef(null);
  const galleryRef2 = useRef(null);
  const textRef = useRef(null)

    useEffect(() =>{
      tl.current = gsap.timeline({
        scrollTrigger: {
          id: 'container-ref',
          trigger: containerRef.current,
          scrub: 0.1,
          start: "0 0" ,
          end: "+400",
          markers: {startColor: "green", endColor: "yellow", fontSize: "14px", indent: 20}
        }
      })
      .from(containerRef.current, {duration: 1.5, autoAlpha: 0, ease: 'power2.inOut'}, "-=1")
      .add('nowstart', "+=0.3")
      .from(galleryRef1.current, {duration: 1.5, autoAlpha: 0, y: 40,ease: 'back.inOut(1.4)'}, "nowstart")
      .from(image1.current, {duration: 1.9, autoAlpha: 0 , x: -350, ease: "circ.out",})
      .from(galleryRef2.current, {duration: 1.5, autoAlpha: 0, y: 40,  ease: 'back.inOut(1.4)'})
      .from(image2.current, {duration: 1.3, autoAlpha: 0 , x: 350, ease: "circ.out"})
      .from(textRef.current, {duration: 3, autoAlpha: 0, delay: 0.8});

      return () => {
        if (ScrollTrigger.getById('container-ref')) {
          ScrollTrigger.getById('container-ref').kill();
        }
        
        tl.current.kill();
      };
      
    }, []);
                       
    return (
      <>
     <div className="layerfour" id="container-ref" ref={containerRef}>
          <div ref={image1} className='gallery-images'>
              <img src={Galimg1} alt="gallery images" className="img1"/>
          </div>

        <div className="gallery">
          <h2 ref={galleryRef1}>Check Out</h2>
          <h2  ref={galleryRef2}>Our work</h2>
          <Link to="/Gallery">
            <h3 className="visit" ref={textRef}>Visit our Gallery</h3>
          </Link>
        </div>

          <div  ref={image2}className='gallery-images'>
            <img src={Galimg2} alt="gallery images" className="img2"/>
          </div>
      </div>
      </>
    );
};