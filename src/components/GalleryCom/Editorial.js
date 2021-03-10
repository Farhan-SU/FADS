import React, { useRef, useEffect } from "react";
import {Row, Col} from 'react-bootstrap';
import { Link, withRouter} from 'react-router-dom';
import '../../assets/styles/gallery.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../SEO';
import ImgWebp from '../ImgWebp';

/**Images*/
import AlineLeft from '../../assets/images/aline/nojacket.png';
import AlineRight from '../../assets/images/aline/jacket.png';
import AlineLeftW from '../../assets/images/aline/nojacket.webp';
import AlineRightW from '../../assets/images/aline/jacket.webp';
import JerkRight from "../../assets/images/jerk/solei.png";
import JerkLeft from "../../assets/images/jerk/jerkfads.png";
import JerkRightW from "../../assets/images/jerk/solei.webp";
import JerkLeftW from "../../assets/images/jerk/jerkfads.webp";
import VintageLeft from '../../assets/images/workwear/fuzzyhat.png';
import VintageRight from '../../assets/images/workwear/suit.png';
import VintageLeftW from '../../assets/images/workwear/fuzzyhat.webp';
import VintageRightW from '../../assets/images/workwear/suit.webp';
import WinterRight from "../../assets/images/winter/sky.png";
import WinterLeft from "../../assets/images/winter/curve.png";
import WinterRightW from "../../assets/images/winter/sky.webp";
import WinterLeftW from "../../assets/images/winter/curve.webp";
import gallerySRight from "../../assets/images/galleryShoots/galleryShootA4.png";
import gallerySRightW from "../../assets/images/galleryShoots/galleryShootA4.webp";
import gallerySLeft from "../../assets/images/galleryShoots/galleryShootA.png";
import gallerySLeftW from "../../assets/images/galleryShoots/galleryShootA.webp";
import makeupRight from "../../assets/images/makeup/makeupJerk6.png";
import makeupRightW from "../../assets/images/makeup/makeupJerk6.webp";
import makeupLeft from "../../assets/images/makeup/makeupJerk2.png";
import makeupLeftW from "../../assets/images/makeup/makeupJerk2.webp";
import SweetLeft from '../../assets/images/sweetEscape/aanya3.png';
import SweetLeftW from '../../assets/images/sweetEscape/aanya3.webp';
import SweetRight from '../../assets/images/sweetEscape/aspen1.png';
import SweetRightW from '../../assets/images/sweetEscape/aspen1.png';



if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  } 

const Editorial = () => {
 
    const edtl = useRef();
    const images = useRef();
    images.current = [];
    const imagesright = useRef();
    imagesright.current = [];

    useEffect(() => {
      edtl.current = images.current.forEach((el) => {
        gsap.fromTo(el, {
          opacity: 0,
          y: 300}, {
          duration: 1, 
          opacity: 1,
          y: 0,
          ease: "circ.Inout",
          scrollTrigger: {
            id: 'edit-left',
            trigger: el,
            start: '10% top+=700',
            toggleActions: 'play none none none',
          }
        });
      });
    }, []);

    const addToRefs = el => {
      if (el && !images.current.includes(el)) {
          images.current.push(el);
      }
    };

    useEffect(() => {
      edtl.current = imagesright.current.forEach((al) => {
        gsap.fromTo(al, {
          y: -300,
          opacity: 0
        }, {
          duration: 1,
          opacity: 1, 
          y: 0,
          ease: "circ.Inout",
          scrollTrigger: {
            id: 'edit-right',
            trigger: al,
            start: 'top top+=200',
            toggleActions: 'play none none none',
          }
        });
      });
    }, []);

    const addToRefsright = al => {
      if (al && !imagesright.current.includes(al)) {
          imagesright.current.push(al);
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
      <div className="editorialwrapper">
      <Row as="section" className="sectionBox">
        <Col md={4} className="left">
         <picture className="img1">
          <source srcset={SweetLeftW} alt="Sweet Escape shoots" type="image/webp"/>
          <source srcset={SweetLeft} alt="Sweet Escape  shoots"  type="image/png"/>
          <img src={SweetLeft} alt="Sweet Escape  shoots"/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row className="header">
        <Link to="/gallery/editorials/sweet">
          <Col xs={12}>
          <h1>Sweet Escape</h1>
          </Col>
          <Col xs={12}>
          <h3>10/2020</h3>
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
        <picture className="img2">
          <source srcset={SweetRightW} alt="Sweet Escape shoots" type="image/webp"/>
          <source srcset={SweetRight} alt="Sweet Escape  shoots"  type="image/png"/>
          <img src={SweetRight} alt="Sweet Escape shoots"/>
        </picture>
        </Col>
      </Row>

      <Row as="section" className="sectionBox">
        <Col md={4} className="left">
        <picture className="img1">
          <source srcset={gallerySLeftW} alt="gallery shoots" type="image/webp"/>
          <source srcset={gallerySLeft} alt="gallery shoots"  type="image/png"/>
          <img src={gallerySLeft} alt="gallery shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
        <Link to="/gallery/editorials/galleryShoots">
          <Col xs={12}>
          <h1>The Gallery</h1>
          </Col>
          <Col xs={12}>
          <h3>12/2019</h3>
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
          <picture className="img2">
          <source srcset={gallerySRightW} alt="gallery shoots" type="image/webp"/>
          <source srcset={gallerySRight} alt="gallery shoots" type="image/png"/>
          <img src={gallerySRight} ref={addToRefsright} alt="gallery shoots"/>
        </picture>
        </Col>
      </Row>

      <Row as="section" className="sectionBox">
        <Col md={4} className="left">
          <picture className="img1">
          <source srcset={makeupLeftW} alt="makeup shoots" type="image/webp"/>
          <source srcset={makeupLeft} alt="makeup shoots" type="image/png"/>
          <img src={makeupLeft} alt="makeup shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
        <Link to="/gallery/editorials/notadream">
          <Col xs={12}>
          <h1>Not A Dream</h1>
          </Col>
          <Col xs={12}>
          <h3>03/2020</h3>
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
          <picture className="img2">
          <source srcset={makeupRightW} alt="makeup shoots" type="image/webp"/>
          <source srcset={makeupRight} alt="makeup shoots" type="image/png"/>
          <img src={makeupRight} alt="makeup shoots" ref={addToRefsright}/>
        </picture>
        </Col>
      </Row>

      <Row as='section' className="sectionBox">
        <Col md={4}className="left">
          <picture className="img1">
          <source srcset={VintageLeftW} alt="work wear vintage shoots" type="image/webp"/>
          <source srcset={VintageLeft} alt="work wear vintage shoots" type="image/png"/>
          <img src={VintageLeft} alt="makeup shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="vintage-header">
        <Link to="/gallery/editorials/work-wear-vintage">
          <Col xs={12}>
          <h1>Work<br/>wear Vintage</h1>
          </Col>
          <Col xs={12}>
           <h3>10/2019</h3>
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
          <picture className="exception-img2">
          <source srcset={VintageRightW} alt="work wear vintage shoots" type="image/webp"/>
          <source srcset={VintageRight} alt="work wear vintage shoots" type="image/png"/>
          <img src={VintageRight} alt="makeup shoots" ref={addToRefsright} className="biggerImg2"/>
        </picture>
        </Col>
      </Row>

      <Row as="section" className="sectionBox">
        <Col md={4}className="left">
          <picture className="img1">
          <source srcset={AlineLeftW} alt="Aline shoots" type="image/webp"/>
          <source srcset={AlineLeft} alt="Aline shoots" type="image/png"/>
          <img src={AlineLeft} alt="Aline shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
        <Link to="/gallery/editorials/aline">
          <Col xs={12}>
            <h1>Aline</h1>
          </Col>
          <Col xs={12}>
            <h3>05/2019</h3>
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
          <picture className="img2">
          <source srcset={AlineRightW} alt="Aline shoots" type="image/webp"/>
          <source srcset={AlineRight} alt="Aline shoots" type="image/png"/>
          <img src={AlineRight} alt="Aline shoots" ref={addToRefsright}/>
        </picture>
        </Col>
      </Row>

      <Row as="section" className="sectionBox">
        <Col md={4}className="left">
          <picture className="img1">
          <source srcset={JerkLeftW} alt="Jerk shoots" type="image/webp"/>
          <source srcset={JerkLeft} alt="Jerk shoots" type="image/png"/>
          <img src={JerkLeft} alt="Jerk shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
        <Link to="/gallery/editorials/jerk-fads">
          <Col xs={12}>
          <h1>JERK X FADS</h1>
          </Col>
          <Col xs={12}>
          <h3>05/2019</h3>
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
          <picture className="img2">
          <source srcset={JerkRightW} alt="Jerk shoots" type="image/webp"/>
          <source srcset={JerkRight} alt="Jerk shoots" type="image/png"/>
          <img src={JerkRight} alt="Jerk shoots" ref={addToRefsright}/>
        </picture>
        </Col>
      </Row>

      <Row as='section' className="sectionBox">
        <Col md={4}className="left">
          <picture className="img1">
          <source srcset={WinterLeftW} alt="Jerk shoots" type="image/webp"/>
          <source srcset={WinterLeft} alt="Jerk shoots" type="image/png"/>
          <img src={WinterLeft} alt="Jerk shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4}>
        <Row className="description">
        <Row  className="header">
          <Link to="/gallery/editorials/winter">
            <Col xs={12}>
              <h1>Winter</h1>
            </Col>
            <Col xs={12}>
              <h3>12/2018</h3>
            </Col>
          </Link>
        </Row>
        </Row>
        </Col>
        <Col md={4} className="right">
          <picture className="img2">
          <source srcset={WinterRightW} alt="Jerk shoots" type="image/webp"/>
          <source srcset={WinterRight} alt="Jerk shoots" type="image/png"/>
          <img src={WinterRight} alt="Jerk shoots"ref={addToRefsright}/>
        </picture>
        </Col>
      </Row>
      </div>
      </>
      </SEO>
      </>
    )
}

export default withRouter(Editorial);