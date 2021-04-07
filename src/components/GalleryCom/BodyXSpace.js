import React, {useRef, useEffect, useLayoutEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';
import Prev from '../../assets/images/prev.png';
import Bodyspace1w from '../../assets/images/bodyspace/bodyspace.webp';
import Bodyspace1 from '../../assets/images/bodyspace/bodyspace.png';
import Bodyspace2w from '../../assets/images/bodyspace/bodyspace1.webp';
import Bodyspace2 from '../../assets/images/bodyspace/bodyspace1.png';
import Bodyspace3w from '../../assets/images/bodyspace/bodyspace5.webp';
import Bodyspace3 from '../../assets/images/bodyspace/bodyspace5.png';
import Bodyspace4w from '../../assets/images/bodyspace/bodyspace3.webp';
import Bodyspace4 from '../../assets/images/bodyspace/bodyspace3.png';
import Bodyspace5w from '../../assets/images/bodyspace/bodyspace4.webp';
import Bodyspace5 from '../../assets/images/bodyspace/bodyspace4.png';
import Bodyspace6w from '../../assets/images/bodyspace/bodyspace8.webp';
import Bodyspace6 from '../../assets/images/bodyspace/bodyspace8.png';
import Bodyspace7w from '../../assets/images/bodyspace/bodyspace9.webp';
import Bodyspace7 from '../../assets/images/bodyspace/bodyspace9.png';
import Bodyspace8w from '../../assets/images/bodyspace/bodyspace6.webp';
import Bodyspace8 from '../../assets/images/bodyspace/bodyspace6.png';
import Bodyspace9w from '../../assets/images/bodyspace/bodyspace7.webp';
import Bodyspace9 from '../../assets/images/bodyspace/bodyspace7.png';
import Bodyspace10w from '../../assets/images/bodyspace/bodyspace10.webp';
import Bodyspace10 from '../../assets/images/bodyspace/bodyspace10.png';

import Bodyposter from '../../assets/images/bodyspace/bsposter.png';
import Bodyposter1 from '../../assets/images/bodyspace/bsposter1.png';
import BodyosterVid from '../../assets/images/bodyspace/bsPosterVid.mp4';
import BSDeckW from '../../assets/images/bodyspace/bodyspaceDeck.webp';
import BSDecK from '../../assets/images/bodyspace/bodyspaceDeck.png';
import BodymPW from '../../assets/images/the_gallery/galleryShowP.webp';
import BodymP from '../../assets/images/the_gallery/galleryShowP.png';
import BodymPW2 from '../../assets/images/the_gallery/galleryShowP2.webp';
import BodymP2 from '../../assets/images/the_gallery/galleryShowP2.png';
import Gcounter1w from '../../assets/images/the_gallery/counterGroup1.webp';
import Gcounter1 from '../../assets/images/the_gallery/counterGroup1.png';
import Gcounter2w from '../../assets/images/the_gallery/counterGroup2.webp';
import Gcounter2 from '../../assets/images/the_gallery/counterGroup2.png';
import Reveal from '../Reveal';
import BodylerySVid from '../../assets/images/the_gallery/galleryShowVid.mp4';


if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function BodyXSpace () {
 
    let fashiontl = useRef();
    let portfolioSRef = useRef();
    let panelSRef = useRef();
    panelSRef.current = [];

    useEffect(() => {
        let xendvalue = (portfolioSRef.current.scrollWidth - document.documentElement.clientWidth) * 1.04;
        let panelend =  (Math.abs(xendvalue)) * -1;

        fashiontl.current = gsap.timeline({
            scrollTrigger: {
            id: "galleryShow",
            scrub: 1.4,
            trigger: portfolioSRef.current,
            pin: portfolioSRef.current,
            anticipatePin: 1,
            start: 'top top',
            end: xendvalue,
            autoRemoveChildren: true
            }
        }).to(panelSRef.current, {x : panelend,  ease: "linear"});
       
        fashiontl.current = panelSRef.current.forEach((el, index) => {
            gsap.to(el, {x : panelend, ease: "linear"});
        });
        
          return () => {
            if (ScrollTrigger.getById('galleryShow')) {
                ScrollTrigger.getById('galleryShow').kill();
            };
        };
    }, []);

    function addPanels(el) {
        if (el && !panelSRef.current.includes(el)) {
            panelSRef.current.push(el);
        };
    };

    useEffect(() => {
        let timeout = gsap.delayedCall( 0.5, delayedRefresedCall);
        function delayedRefresedCall() {
            ScrollTrigger.refresh();
        };
    });

    return (
        <>
        <SEO  
          pageMeta={{
          title: "Body X Space - Fall 2020",
          keywords: ["Fashion", "Bodylery", "Agency", "Models", "Fashion Shows" ],
          description: "Body X Space is our Fall 2020 show"
        }}>
        <div className="yearlyShows">
         <div className="spacer">
         <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}>Body X Space</Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>Fall 2021</Reveal>
            </Col>
         </Row>
         </div>

         <section className="pitchWrap">
         <Row noGutters={true} className="posterWrapBody">
            <Col md={5} className="posterimg">
                <img src={Bodyposter}/> 
            </Col>
            <Col md={5} className="posterimg">
                <img src={Bodyposter1}/> 
            </Col>
        </Row>

        <Row noGutters={true} className="showVideoBodySpace">
            <Col lg={5} className="videoContainerBody">
            <video autoPlay loop muted playsinline>
                <source src={BodyosterVid} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </Col>
            <Col lg={5} className="vidIntroTxt">
            <h1>This is a conversation between Body & Space</h1>
            <p>You and Your body are active members of what a space could be. 
                The subject of the story becomes an object in space, occupying space,
                obstructing space, shifting space, remaking space, forcing a 
                re-establishment of how we understand bodies in space.</p>
            <div className="bodySpaceLink">
            <a href='https://bodyxspace.squarespace.com/mission' target="blank">
              <div className="linkbtn">
                <div className="circlelink"/>
                <p className="linktext">Our Mission &#10230;</p>
              </div>
            </a>
          </div>
            </Col>
        </Row>
        
        <Row noGutters={true} className="showVideo">
        <Col lg={4} className="vidIntroTxt">
        <h1>Body X Space</h1>
        <h3>A Virtual Exhibition</h3>
        </Col>
         <Col lg={7} className="videoContainer">
         <video width="100%" controls>
            <source src={BodylerySVid} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
         </Col>
        </Row>
        </section>

        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioSRef}>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Bodyspace1w}
                            fallback={Bodyspace1}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Bodyspace2w}
                            fallback={Bodyspace2}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Bodyspace3w}
                            fallback={Bodyspace3}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Bodyspace4w}
                            fallback={Bodyspace4}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Bodyspace5w}
                            fallback={Bodyspace5}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Bodyspace6w}
                            fallback={Bodyspace6}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Bodyspace7w}
                            fallback={Bodyspace7}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Bodyspace8w}
                            fallback={Bodyspace8}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Bodyspace9w}
                            fallback={Bodyspace9}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Bodyspace10w}
                            fallback={Bodyspace10}
                            alt="Bodyspace editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>

        <Row className="pDeck">
             <ImgWebp
                    src={BSDeckW}
                    fallback={BSDecK}
                    alt="Cirlery pitch Deck"
                />
        </Row>

        <div className="endsec">
            <Row noGutters={true} className="imgNext">
                <Col lg={12} className="endSec1">
                    <h1 className="ontop">The</h1><h2>Gallery</h2>
                </Col>
                <Col lg={12} className="endseccontent">
                <img src={Prev} alt="relive it again design"/>
                </Col>
            </Row>
            <Row noGutters={true} className="endNext">
            <Col lg={12} className="alignLinkBox">
            <Link className="link" to="/gallery/shows/the_gallery">
            <span className="link__arrow">
                <span></span>
                <span></span>
            </span>
            <span className="link__line"></span>
            </Link>
            </Col>
            </Row>
        </div>
    </div>
        </SEO>
        </>
    )
};

export default withRouter(BodyXSpace);