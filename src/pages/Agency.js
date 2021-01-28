import React, { useRef, useEffect} from 'react';
import { Link, useRouteMatch} from 'react-router-dom';
import Reveal from '../components/Reveal';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/agency.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
   
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
};

function Agency() {

  let { path, url } = useRouteMatch();
  console.log({url, path});

  const sl = useRef();
  const agencyReveal = useRef();

  useEffect(() => {
    gsap.set(agencyReveal.current.children, { y: 150 });
    sl.current = ScrollTrigger.batch(agencyReveal.current.children, {
      onEnter: batch =>
        gsap.to(batch, {
          id: "agencyref",
          opacity: 1,
          y: 0,
          stagger: { each: 0.20},
          overwrite: true,
          ease: 'sine.in'
        }),
      onLeave: batch => gsap.set(batch, { duration: 1, opacity: 0, y: -150, overwrite: true, ease: 'sine.in' }),
      onEnterBack: batch => gsap.to(batch, { duration: 1, opacity: 1, y: 0, stagger: 0.15, overwrite: true, ease: 'sine.in'}),
      onLeaveBack: batch =>  gsap.set(batch, { duration: 1, opacity: 0.9, y: 150, overwrite: true, ease: 'sine.in', delay: 0.4 })
    } 
    );
  }, []);

  useEffect(() => {
    if (ScrollTrigger.getById('agencyref')) {
      ScrollTrigger.getById('agencyref').kill();
      sl.current.kill();
    };
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
        <div className="experts">
        <h1>Our Expertise</h1>
        <Reveal><h3>We are more than just, we are also a fashion and digital creative agency. 
          We have some of the most talented individuals on our team. From designers, 
          photographers, models, to set designers, makeup artists, and more. Meet the members of each of our team and get to 
          know them and their work.</h3></Reveal>
        </div>
      </div>
      <Row className='agency'ref={agencyReveal}> 
      <Link to="./agency/eboard"><Col className="box">
         <h3>E-Board</h3>
        </Col></Link>
        <Link to="./agency/models"><Col className="box">
          <h3>Models</h3>
        </Col></Link>
        <Link to="./agency/fashionDesigners"><Col  className="box">
         <h3 className="bigTxt">Fashion Designers</h3>
        </Col></Link>
        <Link to="./agency/graphicDesigners"><Col className="box">
         <h3 className="bigTxt">Graphic Designers</h3>
        </Col></Link>
        <Link to="./agency/videoPhoto"><Col className="box">
          <h3 className="bigTxt">Videographers & Photographers</h3>
        </Col></Link>
        <Link to="./agency/makeupArtists"><Col className="box">
         <h3 className="bigTxt">Makeup Artists</h3>
        </Col></Link>
        <Link to="/Aboutus"><Col className="box">
          <h3>Stylists</h3>
        </Col></Link>
        <Link to="/Aboutus"><Col className="box">
          <h3>Communication</h3>
        </Col></Link>
        <Link to="/Aboutus"><Col className="box">
          <h3>Set Design</h3>
        </Col></Link>
        </Row>
    </div>
    </SEO>
    </>
  );
};
export default Agency;
