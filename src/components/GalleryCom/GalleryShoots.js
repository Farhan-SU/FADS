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
import Gals1w from '../../assets/images/galleryShoots/galleryShootA.webp';
import Gals1 from '../../assets/images/galleryShoots/galleryShootA.png';
import Gals2w from '../../assets/images/galleryShoots/galleryShootA2.webp';
import Gals2 from '../../assets/images/galleryShoots/galleryShootA2.png';
import Gals3w from '../../assets/images/galleryShoots/galleryShootA3.webp';
import Gals3 from '../../assets/images/galleryShoots/galleryShootA3.png';
import Gals4w from '../../assets/images/galleryShoots/galleryShootA5.webp';
import Gals4 from '../../assets/images/galleryShoots/galleryShootA5.png';
import Gals5w from '../../assets/images/galleryShoots/galleryShootA4.webp';
import Gals5 from '../../assets/images/galleryShoots/galleryShootA4.png';
import ImgLists from './Imglist';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};


function GalleryShoots () {

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
                    scrub: 3,
                    trigger: portfolioRef.current,
                    pin: true,
                    anticipatePin: 2,
                    start: "top top",
                    end: () => xendvalue
                }
            })
            .to(panelRef.current, {x : () => panelend, ease:"linear"});
        }; 

         return () => {
            if (ScrollTrigger.getById('container')) {
            ScrollTrigger.getById('container').kill();
            };
        };
    },[]);

    useEffect(() => {
        gshowtl.current = panelRef.current.forEach((el) => {
            gsap.from(el, {
                duration: 5,
                ease: "linear",
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
          title: "The Gallery | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Sepetember 2020 editorial photoshoot for The Gallery Fashion Show"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1>12/2019</h1>
         </div>
         <section className="section">
<div className="portfolio" ref={portfolioRef}>
            <div className="panel" ref={addPanels}>
                <div className="panel_item">
                <ImgWebp
                    src={Gals1w}
                    fallback={Gals1}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
                </div>
            </div>
            <div className="panel" ref={addPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals2w}
                    fallback={Gals2}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals3w}
                    fallback={Gals3}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals4w}
                    fallback={Gals4}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals5w}
                    fallback={Gals5}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
    </div>
</section>
        <Row className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1>Not A</h1><h2 className="ontopGshoots">Dream</h2>
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
            <Link className="link" to="/gallery/editorials/halloween">
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

export default withRouter(GalleryShoots);