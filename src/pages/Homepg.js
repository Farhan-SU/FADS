import React, {useEffect, useRef} from 'react';
import '../assets/styles/pages.scss';
import SEO from '../components/SEO';
import {Row, Col} from 'react-bootstrap'
import HFadsBio from '../components/HomeCom/HFadsBio';
import HGallery from '../components/HomeCom/HGallery';
import HAboutus from '../components/HomeCom/HAboutus';
import HAgency from '../components/HomeCom/HAgency';
import Button from '../components/Button';
import Facebook from '../assets/images/fbHome.png';
import Instagram from '../assets/images/igHome.png';
import LinkedIn from '../assets/images/linkedinHome.png';
import WebpG from '../components/ImgWebp';
import socialH from '../assets/images/socialH.svg';
import socialHW from '../assets/images/socialH.webp';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 


export default function Homepg ()  {  
  
  const HomePgBgWrapper = useRef();
  const HomePgBgWrapperTwo = useRef();

    useEffect(() =>{
      const colorChange = gsap.timeline({defaults: {duration: 1, ease: "linear", }})
      colorChange
      .fromTo(HomePgBgWrapper.current, { backgroundColor: "#e9dfee"}, { backgroundColor: "#796986"})
      .to(HomePgBgWrapper.current, { backgroundColor: "#644a5d"})
      .to(HomePgBgWrapper.current, { backgroundColor: "#61526d"})
      .to(HomePgBgWrapper.current, { backgroundColor: "#1a2632"})
      .to(HomePgBgWrapper.current, { backgroundColor: "#1a2632"});
    
      ScrollTrigger.create({
        trigger: HomePgBgWrapper.current,
        id: 'homepgwrapperbg',
        start: "top 30%",
        end: HomePgBgWrapper.current.offsetHeight,
        scrub: 0.5,
        animation: colorChange,
        toggleActions: "play none play reverse"
      });
      return () => {
        if (ScrollTrigger.getById('homepgwrapperbg')) {
          ScrollTrigger.getById('homepgwrapperbg').kill();
        }
      };
      
    }, []);

 return (
    <>
    <SEO
    pageMeta={{
      title: "Home",
      keywords: ["Fashion", "Gallery", "Agency"],
      description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major"
    }}>
    <>
    <div className="wrapMobileStyle">
     <div className="gsapcolorchange" ref={HomePgBgWrapper}>
    <div className="layerone">
        <Row className="fadsintro">
          <Col className="firstcol" md={8}>
          <h1>Fashion and <br/>Design <br/>Society</h1>
          </Col>
          <Col className="secondcol" md={4}>
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
    </SEO>
    </>
    );
};