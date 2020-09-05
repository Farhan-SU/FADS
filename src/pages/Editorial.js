import React, { useRef, useEffect } from "react";
import {Row, Col, Collapse} from 'react-bootstrap';
import JerkLeft from "../assets/images/jerk.png";
import JerkRight from "../assets/images/jerkfads.png";
import Line from '../assets/images/gallery-line.svg'
import '../assets/styles/gallery.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  } 

const Editorial = () => {
 
    const edtl = useRef();
    const line = React.createRef();

    useEffect(() => {
      gsap.set(line.current.children, { opacity: 0.5, duration: 1, ease: 'sine.in' });
      edtl.current = ScrollTrigger.batch(line.current.children, {
        scrub: true,
        onEnter: batch =>
          gsap.to(batch, {
            autoAlpha: 1,
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

    const images = useRef();
    images.current = [];

    useEffect(() => {
      edtl.current = images.current.forEach((el, index) => {
        gsap.fromTo(el, {
          opacity: 0,
          y: 300,
        }, {
          duration: 1.3, 
          opacity: 1,
          y: 0,
          ease: "circ.out",
          scrollTrigger: {
            trigger: ".left",
            trigger: el,
            start: 'top top+=500',
            toggleActions: 'play none none reverse',
            markers: {startColor: "blue", endColor: "yellow", fontSize: "12px"}
          }
        });
      });
    }, []);

    const addToRefs = el => {
      if (el && !images.current.includes(el)) {
          images.current.push(el);
      }
    };

    const imagesright = useRef();
    imagesright.current = [];

    useEffect(() => {
      edtl.current = imagesright.current.forEach((al, index) => {
        gsap.fromTo(al, {
          y: -300,
          opacity: 0
        }, {
          duration: 1,
          opacity: 1, 
          y: 0,
          ease: "circ.out",
          scrollTrigger: {
            trigger: ".right",
            trigger: al,
            start: 'top top+=100',
            toggleActions: 'play none none reverse',
            markers: {startColor: "red", endColor: "green", fontSize: "12px"}
          }
        });
      });
    }, []);

    const addToRefsright = al => {
      if (al && !imagesright.current.includes(al)) {
          imagesright.current.push(al);
      }
    };

    const textRef = useRef();
    textRef.current = [];

    useEffect(() => {
      edtl.current = textRef.current.forEach((text, index) => {
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
      ScrollTrigger.getAll().forEach(edtl => edtl.refresh());
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
      <div ref={line} className="editorialwrapper">
      <Row className="jerk">
        <Col md={4}className="left">
          <img src={JerkLeft} alt="jerkphotos" className="img1"/>
        </Col>
        <Col md={4} className="description">
        <div className="jerk-header">
          <h3>April 2018</h3>
          <h1>JERK X FADS</h1>
          <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
        </Col>
        <Col md={4} className="right">
          <img src={JerkRight} alt="jerkphotos" className="img2"/>
        </Col>
      </Row>
      <Row className="circus">
        <Col md={4}className="left">
          <img ref={images} src={JerkLeft} alt="jerkphotos" ref={addToRefs} className="img1"/>
        </Col>
        <Col md={4} className="description">
        <div ref={addToRefstext} className="circus-header">
        <h3>Feb 2019</h3>
          <h1>CIRCUS</h1>
          <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
        </Col>
        <Col md={4} className="right">
          <img src={JerkRight} alt="jerkphotos" ref={addToRefsright} className="img2"/>
        </Col>
      </Row>
      <Row className="circus">
        <Col md={4}className="left">
          <img src={JerkLeft} alt="jerkphotos" ref={addToRefs}className="img1"/>
        </Col>
        <Col md={4} className="description">
        <div ref={addToRefstext} className="circus-header">
        <h3>Feb 2019</h3>
          <h1>CIRCUS</h1>
          {/* <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div> */}
        </div>
        </Col>
        <Col md={4} className="right">
          <img src={JerkRight} alt="jerkphotos" ref={addToRefsright} className="img2"/>
        </Col>
      </Row>
      </div>
      </>
      </SEO>
      </>
    )
}

export default Editorial;