import React, {useRef, useEffect, useLayoutEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';
import Prev from '../../assets/images/prev.png';
import Gallery1w from '../../assets/images/the_gallery/galleryshowpat.webp';
import Gallery1 from '../../assets/images/the_gallery/galleryshowpat.png';
import Gallery2w from '../../assets/images/the_gallery/arch.webp';
import Gallery2 from '../../assets/images/the_gallery/arch.png';
import Gallery3w from '../../assets/images/the_gallery/thegalleryshootaanya.webp';
import Gallery3 from '../../assets/images/the_gallery/thegalleryshootaanya.png';
import Gallery4w from '../../assets/images/the_gallery/thegalleryShowAb.webp';
import Gallery4 from '../../assets/images/the_gallery/thegalleryShowAb.png';
import Gallery5w from '../../assets/images/the_gallery/denim.webp';
import Gallery5 from '../../assets/images/the_gallery/denim.png';
import Gallery6w from '../../assets/images/the_gallery/design.webp';
import Gallery6 from '../../assets/images/the_gallery/design.png';
import Gallery7w from '../../assets/images/the_gallery/whitedress.webp';
import Gallery7 from '../../assets/images/the_gallery/whitedress.png';
import Gallery8w from '../../assets/images/the_gallery/contjacket.webp';
import Gallery8 from '../../assets/images/the_gallery/contjacket.png';
import Gallery9w from '../../assets/images/the_gallery/galleryshowzu.webp';
import Gallery9 from '../../assets/images/the_gallery/galleryshowzu.png';
import Gallery10w from '../../assets/images/the_gallery/thegalleryshootb.webp';
import Gallery10 from '../../assets/images/the_gallery/thegalleryshootb.png';
import Gallery11w from '../../assets/images/the_gallery/thegalleryshootcl.webp';
import Gallery11 from '../../assets/images/the_gallery/thegalleryshootcl.png';
import Gallery12w from '../../assets/images/the_gallery/thegallery3.webp';
import Gallery12 from '../../assets/images/the_gallery/thegallery3.png';

import GalposterW from '../../assets/images/the_gallery/galleryshowposter.webp';
import Galposter from '../../assets/images/the_gallery/galleryshowposter.png';
import GalpDeckW from '../../assets/images/the_gallery/gallerypdeck.webp';
import GalpDecK from '../../assets/images/the_gallery/gallerypdeck.png';
import GalmPW from '../../assets/images/the_gallery/galleryShowP.webp';
import GalmP from '../../assets/images/the_gallery/galleryShowP.png';
import GalmPW2 from '../../assets/images/the_gallery/galleryShowP2.webp';
import GalmP2 from '../../assets/images/the_gallery/galleryShowP2.png';
import Gcounter1w from '../../assets/images/the_gallery/counterGroup1.webp';
import Gcounter1 from '../../assets/images/the_gallery/counterGroup1.png';
import Gcounter2w from '../../assets/images/the_gallery/counterGroup2.webp';
import Gcounter2 from '../../assets/images/the_gallery/counterGroup2.png';
import Reveal from '../Reveal';
import {Video, Transformation} from 'cloudinary-react';
import NextPageGallery from './NextPageGallery';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function TheGallery () {
 
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
    }, []);


    return (
        <>
        <SEO  
          pageMeta={{
          title: "The Gallery - Fall 2019",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "The Gallery is our Fall 2019 show"
        }}/>
        <div className="yearlyShows">
         <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}>The Gallery</Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>Fall 2019</Reveal>
            </Col>
         </Row>
         
        <section className="pitchWrap">
        <Row noGutters={true} className="posterWrap">
            <Col md={3} className="promotxt1">
                <h1>The Gallery</h1>
            </Col>
            <Col md={5} className="posterimg">
                <ImgWebp
                    src={GalposterW}
                    fallback={Galposter}
                    alt="Gallery editorial shoots"
                />
            </Col>
            <Col md={3} className="promotxt2">
                <h1>The Gallery</h1>
             </Col>
        </Row>
        <Row noGutters={true} className="pDuo">
            <Col lg={3} className="duoCol">
            <ImgWebp
                    src={GalmPW}
                    fallback={GalmP}
                    alt="Gallery editorial shoots"
                />
            </Col>
            <Col lg={3} className="duoCol">
            <ImgWebp
                    src={GalmPW2}
                    fallback={GalmP2}
                    alt="Gallery editorial shoots"
                />
            </Col>
        </Row>
        
        <Row className="countdown">
            <Col lg={6} className="counterCol">
            <ImgWebp
                    src={Gcounter1w}
                    fallback={Gcounter1}
                    alt="Gallery pitch Deck"
                    className="countpic"
                />
            </Col>
            <Col lg={6} className="counterCol">
            <ImgWebp
                    src={Gcounter2w}
                    fallback={Gcounter2}
                    alt="Gallery pitch Deck"
                    className="countpic"
                />
            </Col>
        </Row>
        <Row noGutters={true} className="showVideo">
        <Col lg={4} className="vidIntroTxt">
        <h1>The Gallery</h1>
        <h3>An Exhibition</h3>
        <p>The show is an exhibition that emphasizes the 
            idea that fashion and art are synonymous. Creativity 
            and compositional intent shines through each aspect of 
            the production from the hand-painted runway to vibrant 
            makeup to the deconstructed classical music.</p>
        </Col>
         <Col lg={7} className="videoContainer">
         <Video cloudName="fadscloud" width="100%" 
                        publicId="galleryShowVid" controls="true" 
                        loading="lazy" 
                        fallbackContent="Your browser does not support HTML5 video tags." >
                    <Transformation format="auto"/>
                </Video>
         </Col>
        </Row>
        </section>

        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioSRef}>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery1w}
                            fallback={Gallery1}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery2w}
                            fallback={Gallery2}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery12w}
                            fallback={Gallery12}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery3w}
                            fallback={Gallery3}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery4w}
                            fallback={Gallery4}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery5w}
                            fallback={Gallery5}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery6w}
                            fallback={Gallery6}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Gallery7w}
                            fallback={Gallery7}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery8w}
                            fallback={Gallery8}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Gallery10w}
                            fallback={Gallery10}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery9w}
                            fallback={Gallery9}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery11w}
                            fallback={Gallery11}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <>
        <Row className="pDeck">
             <ImgWebp
                    src={GalpDeckW}
                    fallback={GalpDecK}
                    alt="Gallery pitch Deck"
                />
        </Row>
        </>
        <div className="endsec">
            <NextPageGallery to='/gallery/shows/circus' title1='Night' title2='Circus'/>
        </div>
    </div>
        </>
    )
};

export default withRouter(TheGallery);
