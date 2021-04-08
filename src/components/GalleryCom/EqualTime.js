import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import EtEdit1w from '../../assets/images/equaltime/equaltime1.webp';
import EtEdit1 from '../../assets/images/equaltime/equaltime1.png';
import EtEdit2w from '../../assets/images/equaltime/equaltime2.webp';
import EtEdit2 from '../../assets/images/equaltime/equaltime2.png';
import EtEdit3w from '../../assets/images/equaltime/equaltime3.webp';
import EtEdit3 from '../../assets/images/equaltime/equaltime3.png';
import EtEdit4w from '../../assets/images/equaltime/equaltime4.webp';
import EtEdit4 from '../../assets/images/equaltime/equaltime4.png';
import EtEdit5w from '../../assets/images/equaltime/equaltime5.webp';
import EtEdit5 from '../../assets/images/equaltime/equaltime5.png';
import EtEdit6w from '../../assets/images/equaltime/equaltime6.webp';
import EtEdit6 from '../../assets/images/equaltime/equaltime6.png';
import EtEdit7w from '../../assets/images/equaltime/equaltime7.webp';
import EtEdit7 from '../../assets/images/equaltime/equaltime7.png';
import EtEdit8w from '../../assets/images/equaltime/equaltime8.webp';
import EtEdit8 from '../../assets/images/equaltime/equaltime8.png';
import EtEdit9w from '../../assets/images/equaltime/equaltime9.webp';
import EtEdit9 from '../../assets/images/equaltime/equaltime9.png';
import NextPageGallery from './NextPageGallery';
import Reveal from '../Reveal';

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
          title: "Equal Time | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Sepetember 2020 editorial photoshoot for The Gallery Fashion Show"
        }}>
        <div className="galleryShows">
        <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}>Equal Time</Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>1/2019</Reveal>
            </Col>
         </Row>
         <section className="horizontalWrap">
            <div className="portfolio" ref={portfolioRef}>
            <div className="panel" ref={addGPanels}>
                <div className="panel_item">
                <ImgWebp
                    src={EtEdit1w}
                    fallback={EtEdit1}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
                </div>
            </div>
            <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={EtEdit2w}
                    fallback={EtEdit2}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={EtEdit3w}
                    fallback={EtEdit3}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={EtEdit4w}
                    fallback={EtEdit4}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={EtEdit5w}
                    fallback={EtEdit5}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
                <div className="panel_item">
                <ImgWebp
                    src={EtEdit6w}
                    fallback={EtEdit6}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
                </div>
            </div>
            <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={EtEdit7w}
                    fallback={EtEdit7}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={EtEdit8w}
                    fallback={EtEdit8}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={EtEdit8w}
                    fallback={EtEdit8}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={EtEdit9w}
                    fallback={EtEdit9}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
    </div>
    </section>
        <div className="endsec">
            <NextPageGallery to='/gallery/editorials/halloween' title1='Halloween' title2=''/>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(GalleryShoots);