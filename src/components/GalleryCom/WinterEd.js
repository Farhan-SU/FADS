import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import Reliveit from '../../assets/images/reliveit.png';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';
import Winter1w from '../../assets/images/winter/curve.webp';
import Winter1 from '../../assets/images/winter/curve.png';
import Winter2w from '../../assets/images/winter/trees.webp';
import Winter2 from '../../assets/images/winter/trees.png';
import Winter3w from '../../assets/images/winter/sky.webp';
import Winter3 from '../../assets/images/winter/sky.png';
import Winter4w from '../../assets/images/winter/cone.webp';
import Winter4 from '../../assets/images/winter/cone.png';
import Winter5w from '../../assets/images/winter/snow.webp';
import Winter5 from '../../assets/images/winter/snow.png';


if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function WinterEd () {
   
    const gshowtl = useRef();
    const portfolioRef = useRef();
    const panelRef = useRef();
    panelRef.current = [];

    useEffect(() => {  
    
        const xendvalue = (portfolioRef.current.scrollWidth - document.documentElement.clientWidth) * 1.04;
        const panelend =  Math.abs(xendvalue) * -1;
    
        if (portfolioRef.current) {
            gshowtl.current = gsap.timeline({
                scrollTrigger: {
                    id: "containerWinter",
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
                if (ScrollTrigger.getById('containerWinter')) {
                ScrollTrigger.getById('containerWinter').kill();
                }
            };
    },[]);

    useEffect(() => {
        gshowtl.current = panelRef.current.forEach((el, index) => {
            gsap.from(el, {
                duration: 1,
                autoAlpha: 0.8,
                ease: "circ.Inout",
            });
          });

          return () => {
            if (ScrollTrigger.getById('panels')) {
            ScrollTrigger.getById('panels').kill();
            }
        };
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
          title: "Winter | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Our December 2018 editorial photoshoot"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1 className="longTxtEd">December<br/>2018</h1>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2>Winter</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={Winter1w}
                            fallback={Winter1}
                            alt="Winter editorial shoot"
                            className="panel_img"
                        />
                        </div>
                    </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Winter2w}
                            fallback={Winter2}
                            alt="Winter editorial shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Winter3w}
                            fallback={Winter3}
                            alt="Winter editorial shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Winter4w}
                            fallback={Winter4}
                            alt="Winter editorial shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Winter5w}
                            fallback={Winter5}
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
                <h1>Back to</h1><h2 className="ontop">Gallery</h2>
            </Col>
            <Col lg={12} className="endseccontent">
              <img src={Reliveit} alt="relive it again design"/>
            </Col>
        </Row>
            <div className="Endnext">
            <div className="winterEndarrow">
            <Link className="link" to="/gallery">
            <span className="link__arrow">
                <span></span>
                <span></span>
            </span>
            <span className="link__line"></span>
            </Link>
            </div>
            </div>
        </div>
    </div>
    </SEO>
        </>
    )
};

export default withRouter(WinterEd);