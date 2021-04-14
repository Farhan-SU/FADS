import React, {useRef, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryEditorial.scss';
import ImgWebp from '../ImgWebp';
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
import NextPageGallery from './NextPageGallery';
import Reveal from '../Reveal';

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
        }).fromTo(panelRef.current, {x : 0}, {x : panelend,  ease: "linear"});
       
        gshowtl.current = panelRef.current.forEach((el, index) => {
            gsap.fromTo(el, {x : 0}, {x : panelend, ease: "linear"});
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
          title: "Body X Space | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Sepetember 2020 editorial photoshoot for The Gallery Fashion Show"
        }}>
        <div className="galleryShows">
        <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}>Body X Space</Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>11/20</Reveal>
            </Col>
         </Row>
         
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

        <div className="endsec">
            <NextPageGallery to='/gallery/editorials/sweet' title1='Sweet' title2='Escape'/>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(BodySpaceEditorial);