import React, {useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/pages.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Galimg1 from '../../assets/images/workwear/fuzzyhat.png';
import Galimg2 from '../../assets/images/sweetEscape/aspen1.png';


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
          scrub: 0.01,
          start: "top 60%",
          end: "=+500px",
          once: true
        }
      })
      .from(galleryRef1.current, {duration: 1.4, autoAlpha: 0, y: 40,ease: 'sine.out'})
      .from(image1.current, {duration: 4, opacity: 0, y: -200, ease: "circ.out",})
      .from(image2.current, {duration: 4, opacity: 0, y: 200, ease: "circ.out"}, "-=2");
    
      return () => {
        if (ScrollTrigger.getById('container-ref')) {
          ScrollTrigger.getById('container-ref').kill();
        } tl.current.kill();
      };
    }, []);          
    return (
      <>
     <div className="layerfour" ref={containerRef}>
        <div ref={image1} className='gallery-images'>
            <img src={Galimg1} alt="gallery images" className="img1"/>
        </div>
        <div className="gallery">
          <div className="galhptxt" ref={galleryRef1}>
            <h2>Check Out</h2>
            <h2>Our work</h2>
          </div>
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