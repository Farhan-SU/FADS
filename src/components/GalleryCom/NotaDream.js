import React, {useRef, useEffect} from 'react';
import { withRouter} from 'react-router-dom';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryEditorial.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import Dream1w from '../../assets/images/makeup/makeupJerk1.webp';
import Dream1 from '../../assets/images/makeup/makeupJerk1.png';
import Dream2w from '../../assets/images/makeup/makeupJerk2.webp';
import Dream2 from '../../assets/images/makeup/makeupJerk2.png';
import Dream3w from '../../assets/images/makeup/makeupJerk3.webp';
import Dream3 from '../../assets/images/makeup/makeupJerk3.png';
import Dream4w from '../../assets/images/makeup/makeupJerk4.webp';
import Dream4 from '../../assets/images/makeup/makeupJerk4.png';
import Dream5w from '../../assets/images/makeup/makeupJerk5.webp';
import Dream5 from '../../assets/images/makeup/makeupJerk5.png';
import Dream6w from '../../assets/images/makeup/makeupJerk6.webp';
import Dream6 from '../../assets/images/makeup/makeupJerk6.png';
import NextPageGallery from './NextPageGallery';
import Reveal from '../Reveal';


if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function NotaDream () {

    let gshowtl = useRef();
    let portfolioRef = useRef();
    let panelRef = useRef();
    panelRef.current = [];

    useEffect(() => {
        let xendvalue = (portfolioRef.current.scrollWidth - document.documentElement.clientWidth) * 1.04;
        let panelend =  (Math.abs(xendvalue)) * -1;

        gshowtl.current = gsap.timeline({
            scrollTrigger: {
            id: "gallery",
            scrub: 1.4,
            trigger: portfolioRef.current,
            pin: portfolioRef.current,
            anticipatePin: 1,
            start: 'top top',
            end: xendvalue,
            autoRemoveChildren: true
            }
        }).fromTo(panelRef.current, {x : 0}, {x : panelend,  ease: "linear"});
       
        gshowtl.current = panelRef.current.forEach((el, index) => {
            gsap.fromTo(el, {x : 0}, {x : panelend, ease: "linear"});
        });
        
          return () => {
            if (ScrollTrigger.getById('gallery')) {
                ScrollTrigger.getById('gallery').kill();
            };
        };
    }, []);

    function addPanels(el) {
        if (el && !panelRef.current.includes(el)) {
            panelRef.current.push(el);
        };
    };

    useEffect(() => {
        let timeoutGallery = gsap.delayedCall( 0.5, delayedRefresedCall);
        function delayedRefresedCall() {
            ScrollTrigger.refresh();
        };
    }, []);

    return (
        <>
        <SEO  
          pageMeta={{
          title: "Not a Dream | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "June 2020 editorial photoshoot"
        }}>
        <div className="galleryShows">
        <Row className="spacer">
                <Col lg={12}>
                <Reveal wrapperElement="h1" direction="up" delay={0.1}>Not a Dream</Reveal>
                </Col>
                <Col lg={12}>
                <Reveal wrapperElement="h3" direction="up" delay={0.5}>6/2020</Reveal>
                </Col>
            </Row>
        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioRef}>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Dream1w}
                            fallback={Dream1}
                            alt="Makeup x Jerk editorial shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Dream2w}
                            fallback={Dream2}
                            alt="Makeup x Jerk editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Dream3w}
                            fallback={Dream3}
                            alt="Makeup x Jerk editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Dream4w}
                            fallback={Dream4}
                            alt="Makeup x Jerk editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Dream5w}
                            fallback={Dream5}
                            alt="Makeup x Jerk editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Dream6w}
                            fallback={Dream6}
                            alt="Makeup x Jerk editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
            <NextPageGallery to="/gallery/editorials/galleryShoots" title1='The' title2='Gallery'/>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(NotaDream);