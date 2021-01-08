import React, { useRef, useEffect } from "react";
import {Row, Col} from 'react-bootstrap';
import { Link, withRouter, useHistory} from 'react-router-dom';
import '../../assets/styles/gallery.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../SEO';


/**Images*/
import AlineLeft from '../../assets/images/aline/nojacket.png';
import AlineRight from '../../assets/images/aline/jacket.png';
import JerkLeft from "../../assets/images/jerk/solei.png";
import JerkRight from "../../assets/images/jerk/jerkfads.png";
import VintageLeft from '../../assets/images/workwear/fuzzyhat.png';
import VintageRight from '../../assets/images/workwear/suit.png';
import WinterLeft from "../../assets/images/winter/sky.png";
import WinterRight from "../../assets/images/winter/curve.png";


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  } 

const Editorial = () => {
 
    const edtl = useRef();
    const line = useRef();

    useEffect(() => {
      gsap.to(line.current.children, { autoAlpha: 1, duration: 2, ease: 'sine.in' });
      edtl.current = ScrollTrigger.batch(line.current.children, {
        scrub: true,
        onEnter: batch =>
          gsap.to(batch, {
            id: "boxs",
            autoAlpha: 1, 
            duration: 1,
            stagger: { each: 0.20},
            overwrite: true,
            ease: 'sine.in'
          }),
        onLeave: batch => gsap.set(batch, { duration: 1, autoAlpha: 0.1, overwrite: true, ease: 'sine.in' }, '-=1.5'),
        onEnterBack: batch => gsap.to(batch, { duration: 1, opacity: 1, stagger: 0.15, overwrite: true, ease: 'sine.in'}),
        onLeaveBack: batch =>  gsap.set(batch, { duration: 1,  autoAlpha: 0.1, overwrite: true, ease: 'sine.in'}) 
      });
    }, []);

    const images = useRef();
    images.current = [];

    useEffect(() => {
      edtl.current = images.current.forEach((el) => {
        gsap.fromTo(el, {
          opacity: 0,
          y: 300,
        }, {
          duration: 1.3, 
          opacity: 1,
          y: 0,
          ease: "circ.out",
          scrollTrigger: {
            id: 'edit-left',
            trigger: el,
            start: 'top top+=500',
            toggleActions: 'play none none reverse'
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
      edtl.current = imagesright.current.forEach((al) => {
        gsap.fromTo(al, {
          y: -300,
          opacity: 0
        }, {
          duration: 1,
          opacity: 1, 
          y: 0,
          ease: "circ.out",
          scrollTrigger: {
            id: 'edit-right',
            trigger: al,
            start: 'top top+=100',
            toggleActions: 'play none none reverse'
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
      edtl.current = textRef.current.forEach((text) => {
        gsap.fromTo(text, {
          autoAlpha: 0,
        }, {
          duration: 0.5, 
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: 'edit-txt',
            trigger: text,
            start: 'top top+=600',
            toggleActions: 'play none none reverse',
          }
        });
      });
    }, []);

    const addToRefstext = text => {
      if (text && !textRef.current.includes(text)) {
          textRef.current.push(text);
      }
    };

    return(
      <>
        <SEO
        pageMeta={{
          title: "Editorial | FADS Gallery",
          keywords: ["Fashion", "Gallery", "Editorial" ],
          description: "Here at FADS, we have montly photoshoots with our Models and crew"
        }}>
      <>
      <div ref={line} className="editorialwrapper">
      <Row as="section" className="aline">
        <Col md={4}className="left">
          <img src={AlineLeft} alt="jerkphotos" className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row className="header">
        <Link to="/gallery/editorials/aline">
          <Col xs={12}>
          <h3>May 2019</h3>
          </Col>
          <Col xs={12}>
          <h1>Aline</h1>
          </Col>
          </Link>
        </Row>
          <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div>
        </Col>
        <Col md={4} className="right">
          <img src={AlineRight} alt="jerkphotos" className="img2"/>
        </Col>
      </Row>

      <Row as="section" className="jerk">
        <Col md={4}className="left">
          <img src={JerkLeft} ref={addToRefs} alt="jerkphotos" className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row ref={addToRefstext} className="header">
        <Link to="/gallery/editorials/jerk-fads">
          <Col xs={12}>
          <h3>April 2019</h3>
          </Col>
          <Col xs={12}>
          <h1>JERK X FADS</h1>
          </Col>
          </Link>
        </Row>
        <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div>
        </Col>
        <Col md={4} className="right">
          <img src={JerkRight}  ref={addToRefsright} alt="jerkphotos" className="img2"/>
        </Col>
      </Row>

      <Row as='section' className="vintage">
        <Col md={4}className="left">
          <img src={VintageLeft} alt="jerkphotos" ref={addToRefs} className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row ref={addToRefstext} className="vintage-header">
        <Link to="/gallery/editorials/work-wear-vintage">
          <Col xs={12}>
           <h3>Sept 2019</h3>
          </Col>
          <Col xs={12}>
          <h1>Work<br/>wear Vintage</h1>
          </Col>
        </Link>
        </Row>
        <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div>
        </Col>
        <Col md={4} className="right">
          <img src={VintageRight} alt="jerkphotos" ref={addToRefsright} className="exception-img2"/>
        </Col>
      </Row>

      <Row className="winter">
        <Col md={4}className="left">
          <img src={WinterLeft} alt="jerkphotos" ref={addToRefs}className="img1"/>
        </Col>
        <Col md={4}>
        <Row className="description">
        <Row ref={addToRefstext} className="header">
          <Link to="/gallery/editorials/winter">
            <Col xs={12}>
              <h3>December 2018</h3>
            </Col>
            <Col xs={12}>
              <h1>Winter</h1>
            </Col>
          </Link>
        </Row>
        </Row>
        </Col>
        <Col md={4} className="right">
          <img src={WinterRight} alt="jerkphotos" ref={addToRefsright} className="img2"/>
        </Col>
      </Row>
      </div>
      </>
      </SEO>
      </>
    )
}

export default withRouter(Editorial);