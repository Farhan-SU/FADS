import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';
import Prev from '../../assets/images/prev.png';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function Circus () {
    
    const fashiontl = useRef();
    const portfolioSRef = useRef();
    const panelSRef = useRef();
    panelSRef.current = [];

    useEffect(() => {  
    
        const xendvalue = (portfolioSRef.current.scrollWidth - document.documentElement.clientWidth) * 1.1;
        const panelend =  Math.abs(xendvalue) * -1;
    
        if (portfolioSRef.current) {
            fashiontl.current = gsap.timeline({
                scrollTrigger: {
                    id: "circusShow",
                    duration: 2,
                    scrub: 1.5,
                    trigger: portfolioSRef.current,
                    pin: true,
                    pinReparent: true,
                    anticipatePin: 1,
                    start: "top top",
                    end: () => xendvalue
                }
            })
            .to(panelSRef.current, {x : () => panelend}, 0);

        } else {
            console.log("OOPS doesnt exist");
        };

            return () => {
                if (ScrollTrigger.getById('circusShow')) {
                ScrollTrigger.getById('circusShow').kill();
                }; 
            };
    },[]);

    useEffect(() => {
        fashiontl.current = panelSRef.current.forEach((el, index) => {
            gsap.from(el, {
                delay: 0.5,
                duration: 1,
                autoAlpha: 0,
                ease: "circ.Inout",
                scale: 0.5,
            });
          });

          return () => {
            if (ScrollTrigger.getById('panelsJerk')) {
            ScrollTrigger.getById('panelsJerk').kill();
            };
        };
    }, []);

    const addPanels = el => {
        if (el && !panelSRef.current.includes(el)) {
            panelSRef.current.push(el);
        };
    };

    return (
        <>
        <SEO  
          pageMeta={{
          title: "Night Circus - Fall 2019 | FADS",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Night Circus is our Spring 2019 show"
        }}>
        <div className="yearlyShows">
         <div className="spacer">
             <div className="circusSpacer">
            <h1>Night Circus <br/> <span>Spring 2019</span></h1>
            </div>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioSRef}>
             <h2>CIRCUS</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../../assets/images/circus/bw.webp')}
                            fallback={require('../../assets/images/circus/bw.png')}
                            alt="picture from Night Circus shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/circus/redboots.webp')}
                            fallback={require('../../assets/images/circus/redboots.png')}
                            alt="picture from Night Circus shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/circus/gold.webp')}
                            fallback={require('../../assets/images/circus/gold.png')}
                            alt="picture from Night Circus shoots"
                            className="panel_img" 
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/circus/reddress.webp')}
                            fallback={require('../../assets/images/circus/reddress.png')}
                            alt="picture from Night Circus shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/circus/pins.webp')}
                            fallback={require('../../assets/images/circus/pins.png')}
                            alt="picture from Night Circus shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/circus/magic.webp')}
                            fallback={require('../../assets/images/circus/magic.png')}
                            alt="picture from Night Circus shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1>Tomorr</h1><h2 className="ontopGshoots">ow</h2>
            </Col>
            <Col lg={12} className="endseccontent">
              <img src={Prev} alt="relive it again design"/>
            </Col>
        </Row>
            <div className="Endnext">
            <div className="winterEndarrow">
            <Link className="link" to="/gallery/shows/tomorrow-land">
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

export default withRouter(Circus);