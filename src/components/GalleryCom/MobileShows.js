import React, { useRef, useEffect } from "react";
import {Row, Col} from 'react-bootstrap';
import { Link, withRouter, useHistory} from 'react-router-dom';
import ImgWebp from '../ImgWebp';
import '../../assets/styles/gallery.scss';
import SEO from '../SEO';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

/**Images*/
import BodySpaceLeft from '../../assets/images/bodyspace/bodyspace1.png';
import BodySpaceLeftW from '../../assets/images/bodyspace/bodyspace1.webp';
import BodySpaceRight from '../../assets/images/bodyspace/bodyspace.png';
import BodySpaceRightW from '../../assets/images/bodyspace/bodyspace.webp';
import TheGalLeft from "../../assets/images/the_gallery/galleryshowpat.png";
import TheGalLeftW from "../../assets/images/the_gallery/galleryshowpat.webp";
import TheGalRight from "../../assets/images/the_gallery/arch.png";
import TheGalRightW from "../../assets/images/the_gallery/arch.webp";
import CircusLeft from '../../assets/images/circus/bw.png';
import CircusLeftW from '../../assets/images/circus/bw.webp';
import CircusRight from '../../assets/images/circus/circus4.png';
import CircusRightW from '../../assets/images/circus/circus4.webp';
import TlandLeft from '../../assets/images/tomorrowland/tomorrowland11.png';
import TlandLeftW from '../../assets/images/tomorrowland/tomorrowland11.webp';
import TlandRight from '../../assets/images/tomorrowland/tomorrowland10.png';
import TlandRightW from '../../assets/images/tomorrowland/tomorrowland10.webp';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals('ScrollTrigger', ScrollTrigger)
    } 

const MobileShow = () => {
    let history = useHistory();
    let showtl = useRef();
    let circleRef = useRef();
    circleRef.current = [];

    useEffect(() => {
      showtl.current = circleRef.current.forEach((circle) => {
        gsap.fromTo(circle, {
           duration: 1, autoAlpha: 0, ease: 'sine.in',
        }, {
          autoAlpha: 1,
          scrollTrigger: {
            id: 'mobileEdit',
            trigger: circle,
            start: '-90% 10%',
            once: true,
            toggleActions: 'play none none none',
          }
        });
      });
    }, []);

    function showCircle(circle) {
    if (circle && !circleRef.current.includes(circle)) {
      circleRef.current.push(circle);
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
      <div className="show-wrapperSM">
        <Row className="introE">
            <Col xs={12}><h1>Shows</h1></Col>
            <Col xs={12}><p>Click on each names to view our fashion shows</p></Col>
        </Row>

      <section className="showSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={BodySpaceLeft}
                fallback={BodySpaceLeftW}
                alt="BodyXSpace Fashion Show"
            />
       </Col>
       <Col>
        <ImgWebp
            src={BodySpaceRight}
            fallback={BodySpaceRightW}
            alt="The Gallery Fashion Show"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
         <Link to="/gallery/shows/bodyxspace"  onClick={() => history.push("/gallery/shows/thegallery")}>  
          <Col>
          <h1>Body X Space</h1>
          </Col>
          <Col>
          <h3>Fall 2021</h3>
          </Col>
          </Link>
        </Row>
      </div>
      <div className="tlLine"/>
      </section>

      <section className="showSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={TheGalLeftW}
                fallback={TheGalLeft}
                alt="The Gallery Fashion Show"
            />
       </Col>
       <Col>
        <ImgWebp
            src={TheGalRightW}
            fallback={TheGalRight}
            alt="The Gallery Fashion Show"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
         <Link to="/gallery/shows/thegallery"  onClick={() => history.push("/gallery/shows/thegallery")}>  
          <Col>
          <h1>The Gallery</h1>
          </Col>
          <Col>
          <h3>Spring 2019</h3>
          </Col>
          </Link>
        </Row>
      </div>
      <div className="tlLine"/>
      </section>
    
      <section className="showSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={CircusLeftW}
                fallback={CircusLeft}
                alt="picture from Night Circus show"
            />
       </Col>
       <Col>
        <ImgWebp
            src={CircusRightW}
            fallback={CircusRight}
            alt="picture from Night Circus show"
        />
       </Col>
      </Row>
        <div className="circleGallery" ref={showCircle}/>
        <div className="title">
        <Row noGutters={true} className="titleHeader">
        <Link to="/gallery/shows/circus" onClick={() => history.push("/gallery/shows/circus")}>
            <Col>
            <h1>Night Circus</h1>
            </Col>
            <Col>
            <h3>Spring 2019</h3>
            </Col>
            </Link>
            </Row>
        </div>
        <div className="tlLine"/>
      </section>

      <section className="showSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={TlandLeftW}
                fallback={TlandLeft}
                alt="picture from Tomorrow Land show"
            />
       </Col>
       <Col>
        <ImgWebp
            src={TlandRightW}
            fallback={TlandRight}
            alt="picture from Tomorrow Land show"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
      <Link to="/gallery/shows/tomorrow-land" onClick={() => history.push("/gallery/shows/tomorrow-land")}>
          <Col md={12}>
          <h1 className="scaleDowntxtShow">Tomorrow <br/> Land</h1>
          </Col>
          <Col md={12}>
          <h3>Spring 2018</h3>
          </Col>
          </Link>
        </Row>
      </div>
      </section>

        <Row className="navEdShow">
         <Link to="/gallery/shows">
            <Col className="nvLinkbox">
            <h5>Editorial &#62;</h5>
            </Col>
        </Link>
        </Row>
      </div>
      </>
      </SEO>
      </>
    )
}

export default withRouter(MobileShow);