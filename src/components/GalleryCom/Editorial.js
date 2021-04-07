import React, { useRef, useEffect } from "react";
import {Row, Col} from 'react-bootstrap';
import { Link, withRouter} from 'react-router-dom';
import '../../assets/styles/gallery.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../SEO';


/**Images*/
import RevivalLeft from '../../assets/images/revival/revival3.png';
import RevivalRight from '../../assets/images/revival/revival5.png';
import RevivalLeftW from '../../assets/images/revival/revival3.webp';
import RevivalRightW from '../../assets/images/revival/revival5.webp';
/***/
import BoogieStrikeLeft from '../../assets/images/boogieStrike/cover1boogie.png';
import BoogieStrikeLeftW from '../../assets/images/boogieStrike/cover1boogie.webp';
import BoogieStrikeRight from '../../assets/images/boogieStrike/cover2boogie.png';
import BoogieStrikeRightW from '../../assets/images/boogieStrike/cover2boogie.webp';
/***/
import BodySeditorialLeft from '../../assets/images/bodyspaceeditorial/bodysedit1.png';
import BodySeditorialLeftW from '../../assets/images/bodyspaceeditorial/bodysedit1.webp';
import BodySeditorialRight from '../../assets/images/bodyspaceeditorial/bodysedit2.png';
import BodySeditorialRightW from '../../assets/images/bodyspaceeditorial/bodysedit2.webp';
/***/
import HalloweenEditRight from "../../assets/images/halloweenEdit/cover2.png";
import HalloweenEditLeft from "../../assets/images/halloweenEdit/cover1.png";
import HalloweenEditRightW from "../../assets/images/halloweenEdit/cover2.webp";
import HalloweenEditLeftW from "../../assets/images/halloweenEdit/cover1.webp";
/***/
import JerkRight from "../../assets/images/jerk/solei.png";
import JerkLeft from "../../assets/images/jerk/jerkfads.png";
import JerkRightW from "../../assets/images/jerk/solei.webp";
import JerkLeftW from "../../assets/images/jerk/jerkfads.webp";
/***/
import VintageLeft from '../../assets/images/workwear/fuzzyhat.png';
import VintageRight from '../../assets/images/workwear/suit.png';
import VintageLeftW from '../../assets/images/workwear/fuzzyhat.webp';
import VintageRightW from '../../assets/images/workwear/suit.webp';
/***/
import gallerySRight from "../../assets/images/galleryShoots/galleryEditorial9.png";
import gallerySRightW from "../../assets/images/galleryShoots/galleryEditorial9.webp";
import gallerySLeft from "../../assets/images/galleryShoots/galleryEditorial11.png";
import gallerySLeftW from "../../assets/images/galleryShoots/galleryEditorial11.webp";
/***/
import makeupRight from "../../assets/images/makeup/makeupJerk6.png";
import makeupRightW from "../../assets/images/makeup/makeupJerk6.webp";
import makeupLeft from "../../assets/images/makeup/makeupJerk2.png";
import makeupLeftW from "../../assets/images/makeup/makeupJerk2.webp";
/***/
import SweetLeft from '../../assets/images/sweetEscape/aanya3.png';
import SweetLeftW from '../../assets/images/sweetEscape/aanya3.webp';
import SweetRight from '../../assets/images/sweetEscape/aspen1.png';
import SweetRightW from '../../assets/images/sweetEscape/aspen1.png';
/** */
import equaltimeLeft from '../../assets/images/equaltime/equaltime5.png';
import equaltimeLeftW from '../../assets/images/equaltime/equaltime5.webp';
import equaltimeRight from '../../assets/images/equaltime/equaltime1.png';
import equaltimeRightW from '../../assets/images/equaltime/equaltime1.webp';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  } 

const Editorial = () => {
  
    const edtl = useRef();
    const imagesLft = useRef();
    imagesLft.current = [];
    const imagesright = useRef();
    imagesright.current = [];

    useEffect(() => {
      edtl.current = imagesLft.current.forEach((el, index) => {
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


    function addToRefs(el) {
      if (el && !imagesLft.current.includes(el)) {
        imagesLft.current.push(el);
      }
    }

    useEffect(() => {
      edtl.current = imagesright.current.forEach((al, index) => {
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
            toggleActions: 'play none none none',
          }
        });
      });
    }, []);

    function addToRefsright(al) {
      if (al && !imagesright.current.includes(al)) {
        imagesright.current.push(al);
      }
    }

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
        <Col md={4}className="left">
          <picture className="img1">
          <source srcset={RevivalLeftW} alt="Revival shoots" type="image/webp"/>
          <source srcset={RevivalLeft} alt="Revival shoots" type="image/png"/>
          <img src={RevivalLeft} alt="Revival shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
          <Link to="/gallery/editorials/revival">
            <Col md={12}>
              <h1>Revival</h1>
            </Col>
            <Col md={12}>
              <h3>03/2021</h3>
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
          <source srcset={RevivalRightW} alt="Revival shoots" type="image/webp"/>
          <source srcset={RevivalRight} alt="Revival shoots" type="image/png"/>
          <img src={RevivalRight} alt="Revival shoots" ref={addToRefsright}/>
        </picture>
        </Col>
      </Row>

      <Row as="section" className="sectionBox">
        <Col md={4}className="left">
          <picture className="img1">
            <source srcset={BoogieStrikeLeftW} alt="BoogieStrike shoots" type="image/webp"/>
            <source srcset={BoogieStrikeLeft} alt="BoogieStrike shoots" type="image/png"/>
            <img src={BoogieStrikeLeft} alt="BoogieStrike shoots" ref={addToRefs}/>
          </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
        <Link to="/gallery/editorials/revival">
          <Col md={12}>
            <h1>Boogie Strike</h1>
          </Col>
          <Col md={12}>
            <h3>12/2020</h3>
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
          <source srcset={BoogieStrikeRightW} alt="BoogieStrike shoots" type="image/webp"/>
          <source srcset={BoogieStrikeRight} alt="BoogieStrike shoots" type="image/png"/>
          <img src={BoogieStrikeRight} alt="BoogieStrike shoots" ref={addToRefsright}/>
        </picture>
        </Col>
      </Row>

      <Row as="section" className="sectionBox">
        <Col md={4}className="left">
          <picture className="img1">
          <source srcset={BodySeditorialLeftW} alt="Revival shoots" type="image/webp"/>
          <source srcset={BodySeditorialLeft} alt="Revival shoots" type="image/png"/>
          <img src={BodySeditorialLeft} alt="Revival shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
        <Link to="/gallery/editorials/bodyspaceEditorial">
          <Col md={12}>
            <h1>Body X Space</h1>
          </Col>
          <Col md={12}>
            <h3>11/2020</h3>
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
          <source srcset={BodySeditorialRightW} alt="Revival shoots" type="image/webp"/>
          <source srcset={BodySeditorialRight} alt="Revival shoots" type="image/png"/>
          <img src={BodySeditorialRight} alt="Revival shoots" ref={addToRefsright}/>
        </picture>
        </Col>
      </Row>

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
          <Col md={12}>
          <h1>Sweet Escape</h1>
          </Col>
          <Col md={12}>
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
          <source srcset={makeupLeftW} alt="makeup shoots" type="image/webp"/>
          <source srcset={makeupLeft} alt="makeup shoots" type="image/png"/>
          <img src={makeupLeft} alt="makeup shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
        <Link to="/gallery/editorials/notadream">
          <Col md={12}>
          <h1>Not A Dream</h1>
          </Col>
          <Col md={12}>
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
          <Col md={12}>
          <h1>The Gallery</h1>
          </Col>
          <Col md={12}>
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

      <Row as='section' className="sectionBox">
        <Col md={4}className="left">
          <picture className="img1">
          <source srcset={HalloweenEditLeftW} alt="Jerk shoots" type="image/webp"/>
          <source srcset={HalloweenEditLeft} alt="Jerk shoots" type="image/png"/>
          <img src={HalloweenEditLeft} alt="Jerk shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4}>
        <Row className="description">
        <Row  className="header">
          <Link to="/gallery/editorials/halloween">
            <Col md={12}>
              <h1>Halloween</h1>
            </Col>
            <Col md={12}>
              <h3>12/2018</h3>
            </Col>
          </Link>
        </Row>
        </Row>
        </Col>
        <Col md={4} className="right">
          <picture className="img2">
          <source srcset={HalloweenEditRightW} alt="Jerk shoots" type="image/webp"/>
          <source srcset={HalloweenEditRight} alt="Jerk shoots" type="image/png"/>
          <img src={HalloweenEditRight} alt="Jerk shoots"ref={addToRefsright}/>
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
          <Col md={12}>
          <h1>Work<br/>wear Vintage</h1>
          </Col>
          <Col md={12}>
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
          <source srcset={JerkLeftW} alt="Jerk shoots" type="image/webp"/>
          <source srcset={JerkLeft} alt="Jerk shoots" type="image/png"/>
          <img src={JerkLeft} alt="Jerk shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
        <Link to="/gallery/editorials/jerk-fads">
          <Col md={12}>
          <h1>JERK X FADS</h1>
          </Col>
          <Col md={12}>
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
          <source srcset={JerkRightW} alt="Jerk shoots"/>
          <source srcset={JerkRight} alt="Jerk shoots"/>
          <img src={JerkRight} alt="Jerk shoots" ref={addToRefsright}/>
        </picture>
        </Col>
      </Row>

      <Row as="section" className="sectionBox">
        <Col md={4}className="left">
          <picture className="img1">
          <source srcset={equaltimeLeftW}/>
          <source srcset={equaltimeLeft}/>
          <img src={equaltimeLeft} alt="equaltime shoots" ref={addToRefs}/>
        </picture>
        </Col>
        <Col md={4} className="description">
        <Row  className="header">
        <Link to="/gallery/editorials/revival">
          <Col md={12}>
            <h1>Boogie Strike</h1>
          </Col>
          <Col md={12}>
            <h3>12/2020</h3>
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
          <source srcset={equaltimeRightW} alt="equaltime shoots" type="image/webp"/>
          <source srcset={equaltimeRight} alt="equaltime shoots" type="image/png"/>
          <img src={equaltimeRight} alt="equaltime shoots" ref={addToRefsright}/>
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