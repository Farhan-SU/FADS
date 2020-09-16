import React, { useRef, useEffect } from "react";
import {Row, Col, Collapse} from 'react-bootstrap';
import '../assets/styles/gallery.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from './SEO';

/**images**/
import TheGalLeft from "../assets/images/the_gallery/closeup.jpg";
import TheGalRight from "../assets/images/the_gallery/arch.png";
import CircusLeft from '../assets/images/circus/bw.png';
import CircusRight from '../assets/images/circus/gold.jpg';
import TlandLeft from '../assets/images/tomorrowland/fashionline.jpeg';
import TlandRight from '../assets/images/tomorrowland/mask.jpeg';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  } 

const Shows = () => {
 
    const showtl = useRef();
    const line = React.createRef();

    useEffect(() => {
      gsap.to(line.current.children, { autoAlpha: 1, duration: 1, ease: 'sine.in' });
      showtl.current = ScrollTrigger.batch(line.current.children, {
        scrub: true,
        onEnter: batch =>
          gsap.to(batch, {
            opacity:1,
            duration: 1,
            stagger: { each: 0.20},
            overwrite: true,
            ease: 'sine.in'
          }),
        onLeave: batch => gsap.set(batch, { duration: 0.5, opacity: 0.3, overwrite: true, ease: 'sine.in' }, '-=1.5'),
        onEnterBack: batch => gsap.to(batch, { duration: 1, opacity: 1, stagger: 0.15, overwrite: true, ease: 'sine.in'}),
        onLeaveBack: batch =>  gsap.set(batch, { duration: 1, opacity: 0.5, overwrite: true, ease: 'sine.in'})  
      });
    }, []);

    const sImgLeft = useRef();
    sImgLeft.current = [];

    useEffect(() => {
      showtl.current = sImgLeft.current.forEach((el, index) => {
        gsap.fromTo(el, {
          opacity: 0,
          y: 300,
        }, {
          duration: 1.3, 
          opacity: 1,
          y: 0,
          ease: "circ.out",
          scrollTrigger: {
            trigger: ".sleft",
            trigger: el,
            start: 'top top+=500',
            toggleActions: 'play none none reverse',
            markers: {startColor: "blue", endColor: "yellow", fontSize: "12px"}
          }
        });
      });
    }, []);

    const addSImgRefs = el => {
      if (el && !sImgLeft.current.includes(el)) {
          sImgLeft.current.push(el);
      }
    };

    const sImgRight = useRef();
    sImgRight.current = [];

    useEffect(() => {
      showtl.current = sImgRight.current.forEach((al, index) => {
        gsap.fromTo(al, {
          y: -300,
          opacity: 0
        }, {
          duration: 1,
          opacity: 1, 
          y: 0,
          ease: "circ.out",
          scrollTrigger: {
            trigger: ".sright",
            trigger: al,
            start: 'top top+=100',
            toggleActions: 'play none none reverse',
            markers: {startColor: "red", endColor: "green", fontSize: "12px"}
          }
        });
      });
    }, []);

    const addSImgRefsRight = al => {
      if (al && !sImgRight.current.includes(al)) {
          sImgRight.current.push(al);
      }
    };

    const textRef = useRef();
    textRef.current = [];

    useEffect(() => {
      showtl.current = textRef.current.forEach((text, index) => {
        gsap.fromTo(text, {
          autoAlpha: 0,
        }, {
          duration: 0.5, 
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ".description",
            trigger: text,
            start: 'top top+=600',
            toggleActions: 'play none none reverse',
            markers: {startColor: "orange", endColor: "gray", fontSize: "12px"}
          }
        });
      });
    }, []);

    const addToRefstext = text => {
      if (text && !textRef.current.includes(text)) {
          textRef.current.push(text);
      }
    };

    useEffect(() => {
      ScrollTrigger.getAll().forEach(showtl => showtl.refresh());
    },[]);

    return(
      <>
        <SEO
        pageMeta={{
          title: "Agency",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
          description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
        }}>
      <>
      <div ref={line} className="show-wrapper">
      <Row as="section" className="thegallery">
        <Col md={4}className="sleft">
          <img src={TheGalLeft} alt="jerkphotos" className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row className="header">
          <Col noGutter={true} xs={12}>
          <h3>Spring 2020</h3>
          </Col>
          <Col xs={12}>
          <h1>The Gallery</h1>
          </Col>
        </Row>
          <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div>
        </Col>
        <Col md={4} className="sright">
          <img src={TheGalRight} alt="jerkphotos" className="img2" style={{width: '80%'}}/>
        </Col>
      </Row>

      <Row as="section" className="circus">
        <Col md={4}className="sleft">
          <img src={CircusLeft} ref={addSImgRefs} alt="jerkphotos" className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row ref={addToRefstext} className="header">
          <Col noGutter={true} xs={12}>
          <h3>Spring 2019</h3>
          </Col>
          <Col xs={12}>
          <h1>Circus</h1>
          </Col>
        </Row>
        <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div>
        </Col>
        <Col md={4} className="sright">
          <img src={CircusRight}  ref={addSImgRefsRight} alt="jerkphotos" className="img2"/>
        </Col>
      </Row>

      <Row as='section' className="land">
        <Col md={4}className="sleft">
          <img ref={sImgLeft} src={TlandLeft} alt="jerkphotos" ref={addSImgRefs} className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row ref={addToRefstext} className="header">
          <Col noGutter={true} xs={12}>
           <h3>Spring 2018</h3>
          </Col>
          <Col noGutter={true} xs={12}>
          <h1>Tomorrow<br/>Land</h1>
          </Col>
        </Row>
        </Col>
        <Col md={4} className="sright">
          <img src={TlandRight} alt="jerkphotos" ref={addSImgRefsRight} className="img2"/>
        </Col>
      </Row>
      </div>
      </>
      </SEO>
      </>
    )
}

export default Shows;