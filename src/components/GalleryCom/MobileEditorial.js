import React, { useRef, useEffect } from "react";
import {Row, Col} from 'react-bootstrap';
import { NavLink, Link, withRouter} from 'react-router-dom';
import ImgWebp from '../ImgWebp';
import '../../assets/styles/gallery.scss';
import SEO from '../SEO';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
import makeupRight from "../../assets/images/makeup/makeupJerk5.png";
import makeupRightW from "../../assets/images/makeup/makeupJerk5.webp";
import makeupLeft from "../../assets/images/makeup/makeupJerk6.png";
import makeupLeftW from "../../assets/images/makeup/makeupJerk6.webp";
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
                src={RevivalLeftW}
                fallback={RevivalLeft}
                alt="picture from Sweet Escape shoots"
            />
       </Col>
       <Col>
       <ImgWebp
              src={RevivalRightW}
              fallback={RevivalRight}
              alt="picture from Sweet Escape shoots"
            />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
      <Link to="/gallery/editorials/revival">
          <Col>
          <h1>Revival</h1>
          </Col>
          <Col>
          <h3>02/2021</h3>
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
                src={BoogieStrikeLeftW}
                fallback={BoogieStrikeLeft}
                alt="picture from Night Circus shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={BoogieStrikeRightW}
            fallback={BoogieStrikeRight}
            alt="picture from Night Circus shoots"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
      <Link to="/gallery/editorials/boogieStrike">
          <Col>
          <h1>Boogie Strike</h1>
          </Col>
          <Col>
          <h3>03/2020</h3>
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
                src={BodySeditorialLeftW}
                fallback={BodySeditorialLeft}
                alt="picture from Night Circus shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={BodySeditorialRightW}
            fallback={BodySeditorialRight}
            alt="picture from Night Circus shoots"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
      <Link to="/gallery/editorials/bodyspaceEditorial">
          <Col>
          <h1>Body X Space</h1>
          </Col>
          <Col>
          <h3>11/2020</h3>
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
          <h1>Sweet Escape</h1>
          </Col>
          <Col>
          <h3>10/2020</h3>
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
          <h1>Not A Dream</h1>
          </Col>
          <Col>
          <h3>03/2020</h3>
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
          <h1>The Gallery</h1>
          </Col>
          <Col>
          <h3>12/2019</h3>
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
                src={HalloweenEditLeftW}
                fallback={HalloweenEditLeft}
                alt="picture from Night Circus shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={HalloweenEditRightW}
            fallback={HalloweenEditRight}
            alt="picture from Night Circus shoots"
        />
       </Col>
      </Row>
        <div className="circleGallery" ref={showCircle}/>
        <div className="title">
        <Row noGutters={true} className="titleHeader">
        <Link to="/gallery/editorials/halloween">
            <Col>
            <h1>Halloween</h1>
            </Col>
            <Col>
            <h3>10/2019</h3>
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
            <h1>Work<br/>wear Vintage</h1>
            </Col>
            <Col>
            <h3>10/2019</h3>
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
          <h1>Jerk <br/>X FADS</h1>
          </Col>
          <Col>
          <h3>05/2019</h3>
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
                src={equaltimeLeftW}
                fallback={equaltimeLeft}
                alt="picture from Night Circus shoots"
            />
       </Col>
       <Col>
        <ImgWebp
            src={equaltimeRightW}
            fallback={equaltimeRight}
            alt="picture from Night Circus shoots"
        />
       </Col>
      </Row>
      <div className="circleGallery" ref={showCircle}/>
      <div className="title">
      <Row noGutters={true} className="titleHeader">
      <Link to="/gallery/editorials/equalTime">
          <Col>
          <h1>Equal Time</h1>
          </Col>
          <Col>
          <h3>01/2019</h3>
          </Col>
          </Link>
        </Row>
      </div>
      <div className="tlLine"/>
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