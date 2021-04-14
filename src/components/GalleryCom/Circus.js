import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryShows.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import Reveal from '../Reveal';
import {Row, Col} from 'react-bootstrap';
import Cir1w from '../../assets/images/circus/redboots.webp';
import Cir1 from '../../assets/images/circus/redboots.png';
import Cir2w from '../../assets/images/circus/circus1.webp';
import Cir2 from '../../assets/images/circus/circus1.png';
import Cir3w from '../../assets/images/circus/circus8.webp';
import Cir3 from '../../assets/images/circus/circus8.png';
import Cir4w from '../../assets/images/circus/bw.webp';
import Cir4 from '../../assets/images/circus/bw.webp';
import Cir5w from '../../assets/images/circus/circus4.webp';
import Cir5 from '../../assets/images/circus/circus4.png';
import Cir6w from '../../assets/images/circus/circus3.webp';
import Cir6 from '../../assets/images/circus/circus3.png';
import Cir7w from '../../assets/images/circus/circus2.webp';
import Cir7 from '../../assets/images/circus/circus2.png';
import Cir8w from '../../assets/images/circus/circusline.webp';
import Cir8 from '../../assets/images/circus/circusline.png';
import Cir9w from '../../assets/images/circus/circus6.webp';
import Cir9 from '../../assets/images/circus/circus6.png';
import Cir10w from '../../assets/images/circus/circus7.webp';
import Cir10 from '../../assets/images/circus/circus7.png';

import CirposterW from '../../assets/images/circus/circusposter.webp';
import Cirposter from '../../assets/images/circus/circusposter.png';
import CirpDeckW from '../../assets/images/circus/circusDeck.webp';
import CirpDecK from '../../assets/images/circus/circusDeck.png';
import Circounter3w from '../../assets/images/circus/cirucscounter1.webp';
import Circounter3 from '../../assets/images/circus/cirucscounter1.png';
import Circounter2w from '../../assets/images/circus/circuscounter2.webp';
import Circounter2 from '../../assets/images/circus/circuscounter2.png';
import Circounter1w from '../../assets/images/circus/circuscounter3.webp';
import Circounter1 from '../../assets/images/circus/circuscounter3.png';
import {Video, Transformation} from 'cloudinary-react';
import NextPageGallery from './NextPageGallery';


if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};

function Circus () {
    
    let fashiontl = useRef();
    let portfolioSRef = useRef();
    let panelSRef = useRef();
    panelSRef.current = [];

    useEffect(() => {
        let xendvalue = (portfolioSRef.current.scrollWidth - document.documentElement.clientWidth) * 1.03;
        let panelend =  (Math.abs(xendvalue)) * -1;

        fashiontl.current = gsap.timeline({
            scrollTrigger: {
            id: "circusShow",
            scrub: 1.4,
            trigger: portfolioSRef.current,
            pin: portfolioSRef.current,
            anticipatePin: 1,
            start: 'top top',
            end: xendvalue,
            autoRemoveChildren: true,
            }
        }).fromTo(panelSRef.current, {x : 0}, {x : panelend,  ease: "linear"});
       
        fashiontl.current = panelSRef.current.forEach((el, index) => {
            gsap.fromTo(el, {x : 0}, {x : panelend, ease: "linear"});
        })

          return () => {
            if (ScrollTrigger.getById('circusShow')) {
                ScrollTrigger.getById('circusShow').kill();
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
          title: "Night Circus - Fall 2019 | FADS",
          keywords: ["Fashion", "Cirlery", "Agency", "Models", "Fashion Shows" ],
          description: "Night Circus is our Spring 2019 show"
        }}>
        <div className="yearlyShows">
        <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}>Night Circus</Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>Spring 2019</Reveal>
            </Col>
         </Row>

        <section className="pitchWrap">
        <Row noGutter={false} className="posterWrap">
            <Col md={3} className="promotxt1">
                <h1>Night Circus</h1>
            </Col>
            <Col md={5} className="posterimg">
                <ImgWebp
                    src={CirposterW}
                    fallback={Cirposter}
                    alt="Cirlery editorial shoots"
                />
            </Col>
            <Col md={3} className="promotxt2">
            <h1>Night Circus</h1>
             </Col>
        </Row>

        <Row className="countdown">
            <Col lg={10} className="counterColCircus">
            <ImgWebp
                    src={Circounter3w}
                    fallback={Circounter3}
                    alt="Cirlery pitch Deck"
                    className="countpicCircus"
                />
            </Col>
            <Col lg={10} className="counterColCircus">
            <ImgWebp
                    src={Circounter2w}
                    fallback={Circounter2}
                    alt="Cirlery pitch Deck"
                    className="countpicCircus"
                />
            </Col>
            <Col lg={10} className="counterColCircus">
            <ImgWebp
                    src={Circounter1w}
                    fallback={Circounter1}
                    alt="Cirlery pitch Deck"
                    className="countpicCircus"
                />
            </Col>
        </Row>
        <Row noGutters={true} className="showVideo">
        <Col lg={4} className="vidIntroTxt">
        <h1>Night Circus</h1>
        <h3>An Exhibition</h3>
        <p>Drawing inspiration from the book, Night Circus by Erin Morgenstern, and 
            from the deep reds and stylings of traditional circuses to make models 
            look like fashionable ringmasters.</p>
        </Col>
         <Col lg={7} className="videoContainer">
                <Video cloudName="fadscloud" width="100%" 
                        publicId="CircusShowVid" controls="true" 
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
                            src={Cir1w}
                            fallback={Cir1}
                            alt="picture from Night Circus shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir2w}
                        fallback={Cir2}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir3w}
                        fallback={Cir3}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir4w}
                        fallback={Cir4}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir5w}
                        fallback={Cir5}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                    />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir6w}
                        fallback={Cir6}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir7w}
                        fallback={Cir7}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir8w}
                        fallback={Cir8}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir9w}
                        fallback={Cir9}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir10w}
                        fallback={Cir10}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>

        <Row className="pDeck">
        <Col lg={12} className="mobileExplorepDeck"><h3>Drag to explore the Program Card</h3></Col>
        <Col lg={12}>
             <ImgWebp
                    src={CirpDeckW}
                    fallback={CirpDecK}
                    alt="Cirlery pitch Deck"
                />
        </Col>
        </Row>
        <div className="endsec">
        <div className="circusEndSec">
            <NextPageGallery to='/gallery/shows/tomorrow-land' title1='Tomorrow' title2='Land'/>
        </div>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(Circus);