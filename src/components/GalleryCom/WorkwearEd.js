import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import EndEsec from '../../assets/images/endE.png';
import EndEsecW from '../../assets/images/endE.webp';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';


if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function JerkEd () {

    const gshowtl = useRef();
    const portfolioRef = useRef();
    const panelRef = useRef();
    panelRef.current = [];

    useEffect(() => {  
    
        const xendvalue = (portfolioRef.current.scrollWidth - document.documentElement.clientWidth) * 1.1;
        const panelend =  Math.abs(xendvalue) * -1;
    
        if (portfolioRef.current) {
            gshowtl.current = gsap.timeline({
                scrollTrigger: {
                    id: "containerWork",
                    duration: 2,
                    scrub: 1.5,
                    trigger: portfolioRef.current,
                    pin: true,
                    pinReparent: true,
                    anticipatePin: 1,
                    start: "top top",
                    end: () => xendvalue
                }
            })
            .to(panelRef.current, {x : () => panelend}, 0);

        } else {
            console.log("OOPS doesnt exist");
        };

            return () => {
                if (ScrollTrigger.getById('containerWork')) {
                ScrollTrigger.getById('containerWork').kill();
                }
            };
    },[]);

    useEffect(() => {
        gshowtl.current = panelRef.current.forEach((el, index) => {
            gsap.from(el, {
                delay: 0.5,
                duration: 1,
                autoAlpha: 0,
                ease: "circ.Inout",
                scale: 0.5,
            });
          });
    }, []);

    const addPanels = el => {
        if (el && !panelRef.current.includes(el)) {
            panelRef.current.push(el);
        };
    };


    return (
        <>
          <SEO  
          pageMeta={{
          title: "Work Wear Vintage | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Our May 2019 editorial photoshoot"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1 className="longTxtEd">September<br/>2019</h1>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2 className="wwv">WORK WEAR VINTAGE</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../../assets/images/workwear/doubles.webp')}
                            fallback={require('../../assets/images/workwear/doubles.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                        </div>
                    </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/workwear/fuzzyhat.webp')}
                            fallback={require('../../assets/images/workwear/fuzzyhat.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/workwear/blazer.webp')}
                            fallback={require('../../assets/images/workwear/blazer.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/workwear/stripes.webp')}
                            fallback={require('../../assets/images/workwear/stripes.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/workwear/fullshot.webp')}
                            fallback={require('../../assets/images/workwear/fullshot.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/workwear/plaid.webp')}
                            fallback={require('../../assets/images/workwear/plaid.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/workwear/suit.webp')}
                            fallback={require('../../assets/images/workwear/suit.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/workwear/student.webp')}
                            fallback={require('../../assets/images/workwear/student.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/workwear/plaidshoot.webp')}
                            fallback={require('../../assets/images/workwear/plaidshoot.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1 className="winterh1">Winter</h1>
            </Col>
             <Col lg={12} className="endseccontent">
                <WebpG
                    src={EndEsecW}
                    fallback={EndEsec}
                    alt="FADS Logo"
                />
            </Col>
        </Row>
            <div className="Endnext">
            <Link className="link" to="/gallery/editorials/winter">
            <span className="link__arrow">
                <span></span>
                <span></span>
            </span>
            <span className="link__line"></span>
            </Link>
            </div>
        </div>
    </div>
    </SEO>
        </>
    )
};

export default withRouter(JerkEd);