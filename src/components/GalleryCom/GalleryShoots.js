import React, {useRef, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryEditorial.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import Gals1w from '../../assets/images/galleryShoots/galleryEditorial1.webp';
import Gals1 from '../../assets/images/galleryShoots/galleryEditorial1.png';
import Gals2w from '../../assets/images/galleryShoots/galleryEditorial2.webp';
import Gals2 from '../../assets/images/galleryShoots/galleryEditorial2.png';
import Gals3w from '../../assets/images/galleryShoots/galleryEditorial3.webp';
import Gals3 from '../../assets/images/galleryShoots/galleryEditorial3.png';
import Gals4w from '../../assets/images/galleryShoots/galleryEditorial4.webp';
import Gals4 from '../../assets/images/galleryShoots/galleryEditorial4.png';
import Gals5w from '../../assets/images/galleryShoots/galleryEditorial5.webp';
import Gals5 from '../../assets/images/galleryShoots/galleryEditorial5.png';
import Gals6w from '../../assets/images/galleryShoots/galleryEditorial6.webp';
import Gals6 from '../../assets/images/galleryShoots/galleryEditorial6.png';
import Gals7w from '../../assets/images/galleryShoots/galleryEditorial7.webp';
import Gals7 from '../../assets/images/galleryShoots/galleryEditorial7.png';
import Gals8w from '../../assets/images/galleryShoots/galleryEditorial8.webp';
import Gals8 from '../../assets/images/galleryShoots/galleryEditorial8.png';
import Gals9w from '../../assets/images/galleryShoots/galleryEditorial9.webp';
import Gals9 from '../../assets/images/galleryShoots/galleryEditorial9.png';
import Gals10w from '../../assets/images/galleryShoots/galleryEditorial10.webp';
import Gals10 from '../../assets/images/galleryShoots/galleryEditorial10.png';
import Gals11w from '../../assets/images/galleryShoots/galleryEditorial11.webp';
import Gals11 from '../../assets/images/galleryShoots/galleryEditorial11.png';
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
          title: "The Gallery | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Sepetember 2020 editorial photoshoot for The Gallery Fashion Show"
        }}>
        <div className="galleryShows">
            <Row className="spacer">
                <Col lg={12}>
                <Reveal wrapperElement="h1" direction="up" delay={0.1}>The Gallery</Reveal>
                </Col>
                <Col lg={12}>
                <Reveal wrapperElement="h3" direction="up" delay={0.5}>12/2019</Reveal>
                </Col>
            </Row>
         <section className="horizontalWrap">
            <div className="portfolio" ref={portfolioRef}>
            <div className="panel" ref={addGPanels}>
                <div className="panel_item">
                <ImgWebp
                    src={Gals1w}
                    fallback={Gals1}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
                </div>
            </div>
            <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals2w}
                    fallback={Gals2}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals3w}
                    fallback={Gals3}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals4w}
                    fallback={Gals4}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals5w}
                    fallback={Gals5}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
                <div className="panel_item">
                <ImgWebp
                    src={Gals6w}
                    fallback={Gals6}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
                </div>
            </div>
            <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals7w}
                    fallback={Gals7}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals8w}
                    fallback={Gals8}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals8w}
                    fallback={Gals8}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals9w}
                    fallback={Gals9}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals10w}
                    fallback={Gals10}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Gals11w}
                    fallback={Gals11}
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