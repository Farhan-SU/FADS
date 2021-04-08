import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
import EndEsec from '../../assets/images/endE.png';
import EndEsecW from '../../assets/images/endE.webp';
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


if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function NotaDream () {

    const gshowtl = useRef();
    const portfolioRef = useRef();
    const panelRef = useRef();
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
        }).to(panelRef.current, {x : panelend,  ease: "linear"});
       
        gshowtl.current = panelRef.current.forEach((el, index) => {
            gsap.to(el, {x : panelend, ease: "linear"});
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
         <div className="spacer">
            <h1>June <br/>2020</h1>
         </div>
        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioRef}>
             <h2>Not a Dream</h2>
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
        <Row className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1>Work Wear</h1><h2 className="ontop">Vintage</h2>
            </Col>
            <Col lg={12} className="endseccontent">
                <ImgWebp
                    src={EndEsecW}
                    fallback={EndEsec}
                    alt="FADS Logo"
                />
            </Col>
        </Row>
            <Col xs={12} lg={12} className="Endnext">
            <Link className="link" to="/gallery/editorials/work-wear-vintage">
            <span className="link__arrow">
                <span></span>
                <span></span>
            </span>
            <span className="link__line"></span>
            </Link>
            </Col>
        </Row>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(NotaDream);