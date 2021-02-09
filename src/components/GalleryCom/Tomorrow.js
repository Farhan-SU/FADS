import React, {useRef, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import Reliveit from '../../assets/images/reliveit.png';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function Tomorrow () {
    
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
            alert("Something went wrong! Please refresh the page")
        };

            return () => {
                if (ScrollTrigger.getById('circusShow')) {
                ScrollTrigger.getById('circusShow').kill();
                } 
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
          title: "Tomorrow Land - Fall 2018",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Tomorrow Land is our Fall 2018 show"
        }}></SEO>
        <div className="yearlyShows">
         <div className="spacer">
             <div className="tomorrowSpacer">
            <h1 className="tmmrwsh1">Tomorrow Land <br/> <span>Fall 2018</span>
            </h1>
            </div>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioSRef}>
             <h2>Tomorrow</h2>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/tomorrowland/fashionline.webp')}
                            fallback={require('../../assets/images/tomorrowland/fashionline.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                             src={require('../../assets/images/tomorrowland/space.webp')}
                             fallback={require('../../assets/images/tomorrowland/space.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                             src={require('../../assets/images/tomorrowland/people.webp')}
                             fallback={require('../../assets/images/tomorrowland/people.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/tomorrowland/netmask.webp')}
                           fallback={require('../../assets/images/tomorrowland/mask.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/tomorrowland/walk.webp')}
                           fallback={require('../../assets/images/tomorrowland/walk.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/tomorrowland/mask.webp')}
                           fallback={require('../../assets/images/tomorrowland/mask.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
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
        </>
    )
};

export default withRouter(Tomorrow);