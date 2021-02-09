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
  
function MakeupJerk () {

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
          title: "Aline | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Our Sepetember 2020 editorial photoshoot"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1>June <br/>2020</h1>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2>Makeup</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../../assets/images/makeup/makeupJerk1.webp')}
                            fallback={require('../../assets/images/makeup/makeupJerk1.png')}
                            alt="Makeup x Jerk editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                       src={require('../../assets/images/makeup/makeupJerk2.webp')}
                       fallback={require('../../assets/images/makeup/makeupJerk2.png')}
                       alt="Makeup x Jerk editorial shoots"
                       className="panel_img"
                       style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                       src={require('../../assets/images/makeup/makeupJerk3.webp')}
                       fallback={require('../../assets/images/makeup/makeupJerk3.png')}
                       alt="Makeup x Jerk editorial shoots"
                       className="panel_img"
                       style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                         src={require('../../assets/images/makeup/makeupJerk4.webp')}
                         fallback={require('../../assets/images/makeup/makeupJerk4.png')}
                         alt="Makeup x Jerk editorial shoots"
                         className="panel_img"
                         style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                         src={require('../../assets/images/makeup/makeupJerk5.webp')}
                         fallback={require('../../assets/images/makeup/makeupJerk5.png')}
                         alt="Makeup x Jerk editorial shoots"
                         className="panel_img"
                         style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                         src={require('../../assets/images/makeup/makeupJerk6.webp')}
                         fallback={require('../../assets/images/makeup/makeupJerk6.png')}
                         alt="Makeup x Jerk editorial shoots"
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
                <h1>Not a</h1><h2 className="ontop">Dream</h2>
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
            <Link className="link" to="/gallery/editorials/aline">
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

export default withRouter(MakeupJerk);