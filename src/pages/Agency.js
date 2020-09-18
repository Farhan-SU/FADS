import React, { useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/agency.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FooterSM from '../components/FooterSM';
import SEO from '../components/SEO';
   
gsap.registerPlugin(ScrollTrigger);

function Agency() {

  const sl = useRef();
  const agencyReveal = React.createRef();

  useEffect(() => {
    gsap.set(agencyReveal.current.children, { y: 150 });
    sl.current = ScrollTrigger.batch(agencyReveal.current.children, {
      scrub: true,
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.20},
          overwrite: true,
          ease: 'sine.in',
          markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }),
      onLeave: batch => gsap.set(batch, { duration: 1, opacity: 0, y: -150, overwrite: true, ease: 'sine.in' }),
      onEnterBack: batch => gsap.to(batch, { duration: 1, opacity: 1, y: 0, stagger: 0.15, overwrite: true, ease: 'sine.in'}),
      onLeaveBack: batch =>  gsap.set(batch, { duration: 1, opacity: 0.5, y: 150, overwrite: true, ease: 'sine.in', delay: 1 })  
    });
  }, []);

  return (
    <>
     <SEO
      pageMeta={{
      title: "Agency",
      keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
      description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
    }}>
    <div className="agency-home">
      <div className="intro-a">
        <h1>Our Expertise</h1>
      </div>
      <Row className='agency'ref={agencyReveal}> 
        <Col className="box">
          <Link to="/Aboutus"><h3>E-Board</h3></Link>
        </Col>
        <Col className="box">
          <Link to="/Aboutus"><h3>Models</h3></Link>
        </Col>
        <Col className="box">
          <Link to="/Aboutus"><h3 style={{marginTop: '-1.5rem'}}>Fashion Designers</h3></Link>
        </Col>
        <Col className="box">
          <Link to="/Aboutus"><h3 style={{marginTop: '-1.5rem'}}>Graphic Designers</h3></Link>
        </Col>
        <Col className="box">
          <Link to="/Aboutus"><h3 style={{marginTop: '-2.3rem'}}>Videographers & Photographers</h3></Link>
        </Col>
        <Col className="box">
          <Link to="/Aboutus"><h3>Makeup Artists</h3></Link>
        </Col>
        <Col className="box">
          <Link to="/Aboutus"><h3>Stylists</h3></Link>
        </Col>
        <Col className="box">
          <Link to="/Aboutus"><h3>Communication</h3></Link>
        </Col>
        <Col className="box">
          <Link to="/Aboutus"><h3>Set Design</h3></Link>
        </Col>
        </Row>
    </div>
    </SEO>
    </>
  );
};
export default Agency;
