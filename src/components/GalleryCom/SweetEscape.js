import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
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
import NextPageGallery from './NextPageGallery';




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

    function addPanels(el) {
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
          title: "Sweet Escape | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "October 2020 editorial photoshoot"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1 className="longTxtEd">10/2020</h1>
         </div>
        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioRef}>
             <h2 className="biggerport">ESCAPE</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Sweet1w}
                            fallback={Sweet1}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Sweet2w}
                            fallback={Sweet2}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Sweet3w}
                            fallback={Sweet3}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Sweet4w}
                            fallback={Sweet4}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Sweet5w}
                            fallback={Sweet5}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Sweet6w}
                            fallback={Sweet6}
                            alt="The Sweet Escape editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
            <NextPageGallery to='/gallery/editorials/galleryShoots' title1='Not A' title2='Dream'/>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(SweetEscape);