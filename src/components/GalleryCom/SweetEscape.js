import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import EndEsec from '../../assets/images/endE.png';
import EndEsecW from '../../assets/images/endE.webp';
import Sweet1w from '../../assets/images/sweetEscape/aanya2.webp';
import Sweet1 from '../../assets/images/sweetEscape/aanya2.png';
import Sweet2w from '../../assets/images/sweetEscape/aspen2.webp';
import Sweet2 from '../../assets/images/sweetEscape/aspen2.png';
import Sweet3w from '../../assets/images/sweetEscape/aanya3.webp';
import Sweet3 from '../../assets/images/sweetEscape/aanya3.png';
import Sweet4w from '../../assets/images/sweetEscape/aspen1.webp';
import Sweet4 from '../../assets/images/sweetEscape/aspen1.png';
import Sweet5w from '../../assets/images/sweetEscape/zu1.webp';
import Sweet5 from '../../assets/images/sweetEscape/zu1.png';
import Sweet6w from '../../assets/images/sweetEscape/zu2.webp';
import Sweet6 from '../../assets/images/sweetEscape/zu2.png';




if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function SweetEscape () {

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

    const addPanels = el => {
        if (el && !panelRef.current.includes(el)) {
            panelRef.current.push(el);
        };
    };


    return (
        <>
        <SEO  
          pageMeta={{
          title: "Sweet Escape | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "October 2020 editorial photoshoot"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1 className="longTxtEd">10/2020</h1>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2 className="biggerport">ESCAPE</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={Sweet1w}
                            fallback={Sweet1}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Sweet2w}
                            fallback={Sweet2}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Sweet3w}
                            fallback={Sweet3}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Sweet4w}
                            fallback={Sweet4}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Sweet5w}
                            fallback={Sweet5}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Sweet6w}
                            fallback={Sweet6}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <Row className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1>Not a</h1><h2 className="ontopD"> Dream</h2>
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
            <Link className="link" to="/gallery/editorials/makeupJ">
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

export default withRouter(SweetEscape);