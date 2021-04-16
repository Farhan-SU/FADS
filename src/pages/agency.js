import React, { useRef, useEffect} from 'react';
import { Link, useRouteMatch} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/agency.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import Reveal from "../components/Reveal";
   
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
};

function Agency() {

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
        <div className="experts">
        <Reveal wrapperElement='h1' direction="up">Our</Reveal>
        <Reveal wrapperElement='h1' direction="up" delay={0.7}>Expertise</Reveal>
        </div>
      </div>
      <Row className='agency'> 
      <Link to="/agency/eboard"><Col className="box">
         <h3>E-Board</h3>
        </Col></Link>
        <Link to="/agency/models"><Col className="box">
          <h3>Models</h3>
        </Col></Link>
        <Link to="/agency/fashionDesigners"><Col  className="box">
         <h3>Fashion Designers</h3>
        </Col></Link>
        <Link to="/agency/graphicDesigners"><Col className="box">
         <h3 className="bigTxt">Graphic Designers</h3>
        </Col></Link>
        <Link to="/agency/videoPhoto"><Col className="box">
          <h3 className="bigTxt">Videographers & Photographers</h3>
        </Col></Link>
        <Link to="/agency/makeupArtists"><Col className="box">
         <h3 className="bigTxt">Makeup Artists</h3>
        </Col></Link>
        <Link to="/agency/stylists"><Col className="box">
          <h3>Stylists</h3>
        </Col></Link>
        <Link to="/agency/communcation"><Col className="box">
          <h3>Communication</h3>
        </Col></Link>
        </Row>
    </div>
    </SEO>
    </>
  );
};
export default Agency;
