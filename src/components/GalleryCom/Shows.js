import React, { useRef, useEffect } from "react";
import {withRouter, useHistory, Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../../assets/styles/gallery.scss';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SEO from '../SEO';

/**images**/
import BodySpaceLeft from '../../assets/images/bodyspace/bodyspace.png';
import BodySpaceRight from '../../assets/images/bodyspace/bodyspace1.png';
import TheGalLeft from "../../assets/images/the_gallery/galleryshowpat.png";
import TheGalRight from "../../assets/images/the_gallery/arch.png";
import CircusLeft from '../../assets/images/circus/bw.png';
import CircusRight from '../../assets/images/circus/circus4.png';
import TlandLeft from '../../assets/images/tomorrowland/tomorrowland11.png';
import TlandRight from '../../assets/images/tomorrowland/tomorrowland10.png';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  } 

const Shows = () => {

    const history = useHistory();
    const showtl = useRef();
    const sImgLeft = useRef();
    sImgLeft.current = [];
    const sImgRight = useRef();
    sImgRight.current = [];

    useEffect(() => {
      showtl.current = sImgLeft.current.forEach((el, index) => {
        gsap.fromTo(el, {
          opacity: 0,
          y: 300,
        }, {
          duration: 1.3, 
          opacity: 1,
          y: 0,
          ease: "circ.Inout",
          scrollTrigger: {
            trigger: el,
            start: 'top top+=700',
            toggleActions: 'play none none none'
          }
        });
      });
    }, []);

    function addSImgRefs(el) {
    if (el && !sImgLeft.current.includes(el)) {
      sImgLeft.current.push(el);
    }
  }

    useEffect(() => {
      showtl.current = sImgRight.current.forEach((al, index) => {
        gsap.fromTo(al, {
          y: -300,
          opacity: 0
        }, {
          duration: 1,
          opacity: 1, 
          y: 0,
          ease: "circ.Inout",
          scrollTrigger: {
            trigger: al,
            start: 'top top+=200',
            toggleActions: 'play none none none'
          }
        });
      });
    }, []);

    function addSImgRefsRight(al) {
    if (al && !sImgRight.current.includes(al)) {
      sImgRight.current.push(al);
    }
  }

    return(
      <>
        <SEO
        pageMeta={{
          title: "Shows | FADS Gallery",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
          description: "Our bi-annual fashion shows. All the pieces are made from scratch by our fashion and design students"
        }}>
      <>
      <div className="show-wrapper">
        
      <Row as="section" className="sectionBox">
        <Col md={4}className="sleft">
          <img src={BodySpaceLeft} alt="jerkphotos" className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row className="header">
          <Link to="/gallery/shows/bodyxspace" onClick={() => history.push("/gallery/shows/bodyxspace")}>
          <Col md={12}>
          <h1>Body X Space</h1>
          </Col>
          <Col md={12}>
          <h3>Fall 2021</h3>
          </Col>
          </Link>
        </Row>
          <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div>
        </Col>
        <Col md={4} className="sright">
          <img src={BodySpaceRight} alt="jerkphotos" className="img2" style={{width: '80%'}}/>
        </Col>
      </Row>

      <Row as="section" className="sectionBox">
        <Col md={4}className="sleft">
          <img src={TheGalLeft} ref={addSImgRefs} alt="jerkphotos" className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row className="header">
          <Link to="/gallery/shows/thegallery" onClick={() => history.push("/gallery/shows/thegallery")}>
          <Col md={12}>
          <h1>The Gallery</h1>
          </Col>
          <Col md={12}>
          <h3>Spring 2020</h3>
          </Col>
          </Link>
        </Row>
          <div className="svg-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5" height="281" viewBox="0 0 1.5 281">
              <line y2="281" transform="translate(0.75)" fill="none" stroke="#907597" stroke-width="1.5"/>
            </svg>
          </div>
        </Col>
        <Col md={4} className="sright">
          <img src={TheGalRight} ref={addSImgRefsRight} alt="jerkphotos" className="img2" style={{width: '80%'}}/>
        </Col>
      </Row>

      <Row as="section" className="sectionBox">
        <Col md={4}className="sleft">
          <img src={CircusLeft} ref={addSImgRefs} alt="jerkphotos" className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row className="header">
        <Link  to="/gallery/shows/circus" onClick={() => history.push("/gallery/shows/circus")}>
          <Col md={12}>
          <h1>Night Circus</h1>
          </Col>
          <Col  md={12}>
          <h3>Spring 2019</h3>
          </Col>
          </Link>
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

      <Row as='section' className="sectionBox">
        <Col md={4}className="sleft">
          <img src={TlandLeft} alt="jerkphotos" ref={addSImgRefs} className="img1"/>
        </Col>
        <Col md={4} className="description">
        <Row className="header">
        <Link  to="/gallery/shows/tomorrow-land" onClick={() => history.push("/gallery/shows/tomorrow-land")}>
          <Col md={12} className="tmrLg">
          <h1 style={{fontSize: '2.75rem'}}>Tomorrow<br/>Land</h1>
          </Col>
          <Col  md={12}>
           <h3>Spring 2018</h3>
          </Col>
        </Link>
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

export default withRouter(Shows);