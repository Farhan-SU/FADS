import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import SEO from '../SEO';
import EndEsec from '../../assets/images/endE.png';
import EndEsecW from '../../assets/images/endE.webp';
import { Col, Row } from 'react-bootstrap';
import Aline1w from '../../assets/images/aline/nojacket.webp';
import Aline1 from '../../assets/images/aline/nojacket.png';
import Aline2w from '../../assets/images/aline/fulljacket.webp';
import Aline2 from '../../assets/images/aline/fulljacket.png';
import Aline3w from '../../assets/images/aline/red.webp';
import Aline3 from '../../assets/images/aline/red.png';
import Aline4w from '../../assets/images/aline/jacket.webp';
import Aline4 from '../../assets/images/aline/jacket.png';
import Aline5w from '../../assets/images/aline/standred.webp';
import Aline5 from '../../assets/images/aline/standred.webp';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function AlineEd () {

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
                    id: "container",
                    duration: 2,
                    scrub: 2,
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
                if (ScrollTrigger.getById('container')) {
                ScrollTrigger.getById('container').kill();
                };
            };
    },[]);

    useEffect(() => {
        gshowtl.current = panelRef.current.forEach((el, index) => {
            gsap.from(el, {
                duration: 1,
                autoAlpha: 0.8,
                ease: "circ.Inout"
            });
          });
    }, []);

    function addPanels(el) {
        if (el && !panelRef.current.includes(el)) {
            panelRef.current.push(el);
        };
    }


    return (
        <>
        <SEO  
          pageMeta={{
          title: "Aline | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Our May 2019 editorial photoshoot"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1>Aline<br/>8/2019</h1>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2>Aline</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={Aline1w}
                            fallback={Aline1}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Aline2w}
                            fallback={Aline2}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Aline3w}
                            fallback={Aline3}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Aline4w}
                            fallback={Aline4}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Aline5w}
                            fallback={Aline5}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
            </div>
        </section>
        <Row className="endsec">
            <Row className="imgNext">
                <Col lg={12} className="endSec1">
                    <h1>Jerk X</h1><h2 className="ontop">FADS</h2>
                </Col>
                <Col lg={12} className="endseccontent">
                    <WebpG
                        src={EndEsecW}
                        fallback={EndEsec}
                        alt="FADS Logo"
                    />
                </Col>
            </Row>
            <Col xs={12} lg={12} className="Endnext">
            <Link className="link" to="/gallery/editorials/jerk-fads">
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

export default withRouter(AlineEd);