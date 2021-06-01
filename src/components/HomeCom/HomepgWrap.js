import React, {useEffect, useRef} from 'react';
import '../../assets/styles/pages.scss';
import {Row, Col} from 'react-bootstrap'
import HFadsBio from './HFadsBio';
import HGallery from './HGallery';
import HAboutus from './HAboutus';
import HAgency from './HAgency';
import Button from '../IntroButton';
import Facebook from '../../assets/images/fbHome.png';
import Instagram from '../../assets/images/igHome.png';
import LinkedIn from '../../assets/images/linkedinHome.png';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HomepgWrap ()  {  
  
  const homePgBgWrapper = useRef();
  const arrowHpg = useRef();

    useEffect(() =>{
      let endColorchange = homePgBgWrapper.current.offsetHeight;
      const colorChange = gsap.timeline({defaults: {duration: 1, ease: "linear", }})
      colorChange
      .fromTo(arrowHpg.current, {opacity: 1},{duration: 0.8,opacity: 0, y: -200, ease: "back.inOut(1.4)"}, "-=1.5")
      .fromTo(homePgBgWrapper.current, { backgroundColor: "#e8e0f0"}, { backgroundColor: "#867794"}, "-=1.6")
      .to(homePgBgWrapper.current, { backgroundColor: "#644a5d"})
      .to(homePgBgWrapper.current, { backgroundColor: "#61526d"})
      .to(homePgBgWrapper.current, { backgroundColor: "#170524"})
      .to(homePgBgWrapper.current, { backgroundColor: "#170524"});
    
      ScrollTrigger.create({
        trigger: homePgBgWrapper.current,
        id: 'homepgwrapperbg',
        start: "top top",
        end: endColorchange,
        scrub: 0.01,
        animation: colorChange,
        toggleActions: "play none play reverse"
      });
      return () => {
        if (ScrollTrigger.getById('homepgwrapperbg')) {
          ScrollTrigger.getById('homepgwrapperbg').kill();
        } 
      };
    },[]);

 return (
    <>
    <div className="wrapMobileStyle">
    <div className="gsapcolorchange" ref={homePgBgWrapper}>
    <div className="layerone">
        <Row className="fadsintro">
          <Col className="firstcol" md={8}>
          <h1>Fashion and <br/>Design <br/>Society</h1>
          </Col>
          <Col ref={arrowHpg} className="secondcol" md={4}>
          <Button/>
          </Col>
        </Row>
    </div>
    <HFadsBio/>
    <HGallery/>
    <HAboutus/>
    <HAgency/>
    </div>
    <>
      <Row className="hpsocialWrap">  
        <Col xs={4} className="socialHome">
            <a href="https://www.facebook.com/syracusefads" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="facebook icon"/>
            <h3>@Syracusefads</h3></a>
        </Col> 
        <Col xs={4} className="socialHome"> 
            <a href="https://www.instagram.com/fashiondesignsociety/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="instagram icon"/>
            <h3>@fashiondesignsociety</h3></a>
        </Col>
        <Col xs={4} className="socialHome"> 
            <a href="https://www.linkedin.com/company/fashion-and-design-society/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn icon"/>
            <h3>@fashion-and-design-society</h3></a>
        </Col>
      </Row>
      </>
      </div>
    </>  
    );
};