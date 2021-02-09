import React, {useRef,useEffect} from 'react';
import '../../assets/styles/pages.scss';
import {Link} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Galimg1 from '../../assets/images/workwear/fuzzyhat.png';
import Galimg2 from '../../assets/images/homegal.png';
import { Col, Row } from 'react-bootstrap';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function GalleryMobile ()  {  

  const smtl = useRef();
  const containerRefSM = useRef();
  const galleryRef1SM = useRef();
  const galleryRef2SM = useRef();

    useEffect(() =>{
      smtl.current = gsap.timeline({
        scrollTrigger: {
          id: 'container-refSM',
          trigger: containerRefSM.current,
          scrub: 0.1,
          start: "-25% 50%",
          end: "=+100",
        }
      })
      .from(galleryRef1SM.current, {duration: 1, autoAlpha: 0, y: 40,ease: 'back.inOut(1.4)'},'-=0.8' )
      .from(galleryRef2SM.current, {duration: 1, autoAlpha: 0, y: 40,  ease: 'back.inOut(1.4)'})

      return () => {
        if (ScrollTrigger.getById('container-refSM')) {
          ScrollTrigger.getById('container-refSM').kill();
        } smtl.current.kill();
      };
      
    }, []);
                     
    return (
      <>
     <div className="layerfourSM" ref={containerRefSM}>
       <Row className="galtop">
         <Col xs={8}>
            <img src={Galimg1} alt="gallery images" className="img1SM"/>
         </Col>
         <Col xs={4}>
         <h2 ref={galleryRef1SM} className="forMobile1">Check Out</h2>
         </Col>
       </Row>

       <Row className="galbottom">
        <Col xs={4}>
         <h2  ref={galleryRef2SM} className="forMobile2">Our work</h2>
         </Col>
         <Col xs={8}>
           <img src={Galimg2} alt="gallery images" className="img2SM"/>
         </Col>
       </Row>

        <div className="galLink">
          <Link to="/gallery">
              <div className="linkbtn">
                <div className="circlelink"/>
                  <p className="linktext">View our gallery &#10230;</p>
              </div>
          </Link>
        </div>

      </div>
      </>
    );
};