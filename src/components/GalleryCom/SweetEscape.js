import React, {useRef, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import SEO from '../SEO';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryEditorial.scss';
import ImgWebp from '../ImgWebp';
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
import Reveal from '../Reveal';
import { Col, Row } from 'react-bootstrap';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function SweetEscape () {

    let gshowtl = useRef();
    let portfolioRef = useRef();
    let panelRef = useRef();
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

    function addPanels(el) {
        if (el && !panelRef.current.includes(el)) {
            panelRef.current.push(el);
        };
    };

    useEffect(() => {
        let timeoutGallery = gsap.delayedCall( 1.5, delayedRefresedCall);
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
        <Row className="spacer">
                <Col lg={12}>
                <Reveal wrapperElement="h1" direction="up" delay={0.1}>Sweet Escape</Reveal>
                </Col>
                <Col lg={12}>
                <Reveal wrapperElement="h3" direction="up" delay={0.5}>10/20</Reveal>
                </Col>
            </Row>
        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioRef}>
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
        <section className="creditsSec">
   <Row noGutters={true} className="credits">
       <Col lg={5} sm={12} className="creditsMember">
               <h2>Photographer</h2>
           <a href="https://fashiondesignsociety.com/agency/bio/jessie-zhai">
               <p className="linkBio">Jessi Zhai &#8594;</p>
           </a>
           <h3>Photo Assistant</h3>
           <h4>Nicole Hopwood</h4>
           <h4>Sydney May</h4>
           <h4>Paola Manzano</h4>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Stylist</h2>
           <a href="https://fashiondesignsociety.com/agency/bio/adore-ellis">
           <p className="linkBio">Adore Ellis  &#8594;</p>
           </a>
           <a href="https://fashiondesignsociety.com/agency/bio/aanya-singh">
           <p className="linkBio">Aanya Singh  &#8594;</p>
           </a>
           <h3>Styling Assistant</h3>
           <a href="https://fashiondesignsociety.com/agency/bio/jackson-ensley">
           <p className="linkBio" style={{fontSize: '1.1rem'}}>Jackson Ensely  &#8594;</p>
           </a>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Videographer</h2>
           <p>Jennifer Levin</p>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Makeup Artist</h2>
           <p>Joelle Wright</p>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Clothing</h2>
           <p>Boom Babies</p>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Models</h2>
           <a href="https://fashiondesignsociety.com/agency/bio/aanya-singh">
           <p className="linkBio">Aanya Singh  &#8594;</p>
           </a>
           <a href="https://fashiondesignsociety.com/agency/bio/zuzanna-mlynarczyk">
           <p className="linkBio">Zuzanna Mlynarczyk  &#8594;</p>
           </a>
           <p>Aspen Taylor</p>
       </Col>
   </Row>
</section>
        <div className="endsec">
            <NextPageGallery to='/gallery/editorials/notadream' title1='Not A' title2='Dream'/>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(SweetEscape);