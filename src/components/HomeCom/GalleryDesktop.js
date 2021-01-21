import React, {useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/pages.scss';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Galimg1 from '../../assets/images/workwear/fuzzyhat.png';
import Galimg2 from '../../assets/images/homegal.png';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function GalleryDesktop ()  {  

  const tl = useRef();
  const image1 = useRef();
  const image2 = useRef();
  const containerRef = useRef();
  const galleryRef1 = useRef();
  const galleryRef2 = useRef();

    useEffect(() =>{
      tl.current = gsap.timeline({
        scrollTrigger: {
          id: 'container-ref',
          trigger: containerRef.current,
          scrub: 0.1,
          start: "top 50%",
          end: "=+400"
        }
      })
      .from(galleryRef1.current, {duration: 1.5, autoAlpha: 0, y: 40,ease: 'back.inOut(1.4)'})
      .from(image1.current, {duration: 1.9, autoAlpha: 0 , x: -350, ease: "circ.out",})
      .from(galleryRef2.current, {duration: 1.6, autoAlpha: 0, y: 40,  ease: 'back.inOut(1.4)'}, '-=0.8')
      .from(image2.current, {duration: 1.3, autoAlpha: 0 , x: 350, ease: "circ.out"}, '-=0.7');

      return () => {
        if (ScrollTrigger.getById('container-ref')) {
          ScrollTrigger.getById('container-ref').kill();
        } tl.current.kill();
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
          <div className="galLink">
            <Link to="/gallery">
                <div className="linkbtn">
                  <div className="circlelink"/>
                  <p className="linktext">View our gallery &#10230;</p>
                </div>
            </Link>
          </div>
        </div>
          <div  ref={image2}className='gallery-images'>
            <img src={Galimg2} alt="gallery images" className="img2"/>
          </div>
      </div>
      </>
    );
};