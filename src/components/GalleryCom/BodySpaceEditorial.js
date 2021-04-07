import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
import EndEsec from '../../assets/images/endE.png';
import EndEsecW from '../../assets/images/endE.webp';
import Prev from '../../assets/images/prev.png';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import Bsedit1w from '../../assets/images/bodyspaceeditorial/bodysedit1.webp';
import Bsedit1 from '../../assets/images/bodyspaceeditorial/bodysedit1.png';
import Bsedit2w from '../../assets/images/bodyspaceeditorial/bodysedit2.webp';
import Bsedit2 from '../../assets/images/bodyspaceeditorial/bodysedit2.png';
import Bsedit3w from '../../assets/images/bodyspaceeditorial/bodysedit3.webp';
import Bsedit3 from '../../assets/images/bodyspaceeditorial/bodysedit3.png';
import Bsedit4w from '../../assets/images/bodyspaceeditorial/bodysedit4.webp';
import Bsedit4 from '../../assets/images/bodyspaceeditorial/bodysedit4.png';
import Bsedit5w from '../../assets/images/bodyspaceeditorial/bodysedit5.webp';
import Bsedit5 from '../../assets/images/bodyspaceeditorial/bodysedit5.png';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};


function BodySpaceEditorial() {

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

    function addGPanels(el) {
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
          title: "The Gallery | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Sepetember 2020 editorial photoshoot for The Gallery Fashion Show"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1>12/2019</h1>
         </div>
         <section className="horizontalWrap">
            <div className="portfolio" ref={portfolioRef}>
            <div className="panel" ref={addGPanels}>
                <div className="panel_item">
                <ImgWebp
                    src={Bsedit1w}
                    fallback={Bsedit1}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
                </div>
            </div>
            <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Bsedit2w}
                    fallback={Bsedit2}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Bsedit3w}
                    fallback={Bsedit3}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Bsedit4w}
                    fallback={Bsedit4}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Bsedit5w}
                    fallback={Bsedit5}
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

export default withRouter(BodySpaceEditorial);