import React, { useRef, useEffect } from "react";
import {Row, Col} from 'react-bootstrap';
import { NavLink, Link, withRouter} from 'react-router-dom';
import ImgWebp from '../ImgWebp';
import '../../assets/styles/gallery.scss';
import SEO from '../SEO';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

const MobileEditorial = () => {
    const edtl = useRef();
    const circleRef = useRef();
    circleRef.current = [];

    useEffect(() => {
      edtl.current = circleRef.current.forEach((circle) => {
        gsap.fromTo(circle, {
           duration: 1, autoAlpha: 0, ease: 'sine.in',
        }, {
          autoAlpha: 1,
          scrollTrigger: {
            id: 'mobileEdit',
            trigger: circle,
            start: '-97% 15%',
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
      <div className="editorialwrapperSM">
        <Row className="introE">
            <Col xs={12}><h1>Editorial</h1></Col>
            <Col xs={12}><p>Click on each names to view the photoshoot</p></Col>
        </Row>
      <section className="editorialSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={SweetLeftW}
                fallback={SweetLeft}
                alt="picture from Sweet Escape shoots"
            />
       </Col>
       <Col>
       <ImgWebp
              src={SweetRightW}
              fallback={SweetRight}
              alt="picture from Sweet Escape shoots"
            />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
        <Link to="/gallery/editorials/sweet">
          <Col>
          <h3>10/2020</h3>
          </Col>
          <Col>
          <h1>Sweet Escape</h1>
          </Col>
          </Link>
        </Row>
      </div>
      <div className="tlLine"/>
      </section>

      <section className="editorialSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={makeupLeftW}
                fallback={makeupLeft}
                alt="picture from Night Circus shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={makeupRightW}
            fallback={makeupRight}
            alt="picture from Night Circus shoots"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
        <Link to="/gallery/editorials/notadream">
          <Col>
          <h3>03/2020</h3>
          </Col>
          <Col>
          <h1>Not A Dream</h1>
          </Col>
          </Link>
        </Row>
      </div>
      <div className="tlLine"/>

      </section>
      <section className="editorialSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={gallerySLeftW}
                fallback={gallerySLeft}
                alt="picture from The Gallery shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={gallerySRightW}
            fallback={gallerySRight}
            alt="picture from the Gallery shoots"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
        <Link to="/gallery/editorials/galleryShoots">
          <Col>
          <h3>12/2019</h3>
          </Col>
          <Col>
          <h1>The Gallery</h1>
          </Col>
          </Link>
        </Row>
      </div>
      <div className="tlLine"/>
      </section>

      <section className="editorialSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={VintageLeftW}
                fallback={VintageLeft}
                alt="picture from Night Circus shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={VintageRightW}
            fallback={VintageRight}
            alt="picture from Night Circus shoots"
        />
       </Col>
      </Row>
        <div className="circleGallery" ref={showCircle}/>
        <div className="title">
        <Row noGutters={true} className="titleHeader">
            <Link to="/gallery/editorials/work-wear-vintage">
            <Col>
            <h3>10/2019</h3>
            </Col>
            <Col>
            <h1>Work<br/>wear Vintage</h1>
            </Col>
            </Link>
            </Row>
        </div>
        <div className="tlLine"/>
      </section>

      <section className="editorialSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={AlineLeftW}
                fallback={AlineLeft}
                alt="picture from Night Circus shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={AlineRightW}
            fallback={AlineRight}
            alt="picture from Night Circus shoots"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
        <Link to="/gallery/editorials/aline">
          <Col>
          <h3>05/2019</h3>
          </Col>
          <Col>
          <h1>Aline</h1>
          </Col>
          </Link>
        </Row>
      </div>
      <div className="tlLine"/>
      </section>
  
      <section className="editorialSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={JerkLeftW}
                fallback={JerkLeft}
                alt="picture from Night Circus shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={JerkRightW}
            fallback={JerkRight}
            alt="picture from Night Circus shoots"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
        <Link to="/gallery/editorials/jerk-fads">
          <Col>
          <h3>05/2019</h3>
          </Col>
          <Col>
          <h1>Jerk <br/>X FADS</h1>
          </Col>
          </Link>
        </Row>
      </div>
      <div className="tlLine"/>
      </section>
      <section className="editorialSection">
      <Row noGutters={true} className="imgContainer">
       <Col>
            <ImgWebp
                src={WinterLeftW}
                fallback={WinterLeft}
                alt="picture from Night Circus shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={WinterRightW}
            fallback={WinterRight}
            alt="picture from Night Circus shoots"
        />
       </Col>
      </Row>
        <div className="circleGallery" ref={showCircle}/>
        <div className="title">
        <Row noGutters={true} className="titleHeader">
            <Link to="/gallery/editorials/winter">
            <Col>
            <h3>12/2018</h3>
            </Col>
            <Col>
            <h1>Winter</h1>
            </Col>
            </Link>
            </Row>
        </div>
      </section>
        <Row className="navEdShow">
         <NavLink to="/gallery/shows">
            <Col className="nvLinkbox">
            <h5>FADS Fashion Shows &#62;</h5>
            </Col>
        </NavLink>
        </Row>
      </div>
      </>
      </SEO>
      </>
    )
}

export default withRouter(MobileEditorial);