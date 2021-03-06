import React, {useRef, useEffect, useLayoutEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryEditorial.scss';
import ImgWebp from '../ImgWebp';
import SEO from "../SEO";
import { Col, Row } from 'react-bootstrap';
import Jerk1w from '../../assets/images/jerk/solei.webp';
import Jerk1 from '../../assets/images/jerk/solei.png';
import Jerk2w from '../../assets/images/jerk/flowers.webp';
import Jerk2 from '../../assets/images/jerk/flowers.png';
import Jerk3w from '../../assets/images/jerk/flower2.webp';
import Jerk3 from '../../assets/images/jerk/flower2.png';
import Jerk4w from '../../assets/images/jerk/skull.webp';
import Jerk4 from '../../assets/images/jerk/skull.png';
import Jerk6w from '../../assets/images/jerk/threeppl.webp';
import Jerk6 from '../../assets/images/jerk/threeppl.png';
import Jerk7w from '../../assets/images/jerk/jerkshirtless.webp';
import Jerk7 from '../../assets/images/jerk/jerkshirtless.png';
import Jerk8w from '../../assets/images/jerk/tree3.webp';
import Jerk8 from '../../assets/images/jerk/tree3.png';
import Jerk9w from '../../assets/images/jerk/jolly.webp';
import Jerk9 from '../../assets/images/jerk/jolly.png';
import Jerk10w from '../../assets/images/jerk/pinkpants.webp';
import Jerk10 from '../../assets/images/jerk/pinkpants.png';
import NextPageGallery from './NextPageGallery';
import Reveal from '../Reveal';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function JerkEd () {
    
        
    const gshowtl = useRef();
    const portfolioRef = useRef();
    const panelRef = useRef();
    panelRef.current = [];


    useEffect(() => {
        let xendvalue = (portfolioRef.current.scrollWidth - document.documentElement.clientWidth) * 1.05;
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
        let timeoutGallery = gsap.delayedCall( 0.5, delayedRefresedCall);
        function delayedRefresedCall() {
            ScrollTrigger.refresh();
        };
    }, []);


    return (
        <>
        <SEO  
          pageMeta={{
          title: "Jerk X Fads | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Our April 2019 editorial photoshoot in collaboration with Jerk Magazine"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}>Jerk X FADS</Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>04/2019</Reveal>
            </Col>
         </Row>
         </div>
        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioRef}>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Jerk1w}
                            fallback={Jerk1}
                            alt="Jerk Photoshoot"
                            className="panel_img"
                        />
                        </div>
                    </div>

                    <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Jerk2w}
                            fallback={Jerk2}
                            alt="Jerk Photoshoot"
                            className="panel_img"
                        />
                    </div>
                    </div>

                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Jerk3w}
                            fallback={Jerk3}
                            alt="Jerk Photoshoot"
                            className="panel_img"
                        />
                    </div>
                    </div>

                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Jerk4w}
                            fallback={Jerk4}
                            alt="Jerk Photoshoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Jerk7w}
                        fallback={Jerk7}
                        alt="Jerk Photoshoot"
                        className="panel_img"
                        />
                    </div>
                </div>
                
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Jerk8w}
                        fallback={Jerk8}
                        alt="Jerk Photoshoot"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Jerk9w}
                        fallback={Jerk9}
                        alt="Jerk Photoshoot"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Jerk6w}
                            fallback={Jerk6}
                            alt="Jerk Photoshoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Jerk10w}
                        fallback={Jerk10}
                        alt="Jerk Photoshoot"
                        className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
<section className="creditsSec">
   <Row noGutters={true} className="credits">
       <Col lg={5} sm={12} className="creditsMember">
               <h2>Videographers</h2>
           <a href="https://fashiondesignsociety.com/agency/bio/jessie-zhai">
               <p className="linkBio">Jessi Zhai &#8594;</p>
           </a>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Clothing</h2>
           <p>Boom Babies</p>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Makeup Artist</h2>
           <p>Angelee Clause</p>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Stylist</h2>
           <a href="https://fashiondesignsociety.com/agency/bio/aanya-singh">
           <p className="linkBio">Aanya Singh  &#8594;</p>
           </a>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
         <h2>Photographer</h2>
           <p>Sam Bloom</p>
           <p>Sam Berlin</p>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Models</h2>
           <a href="https://fashiondesignsociety.com/agency/bio/aanya-singh">
           <p className="linkBio">Aanya Singh  &#8594;</p>
           </a>
           <p>Aspen Taylor</p>
           <p>Soli Rhodes</p>
       </Col>
   </Row>
</section>
        <div className="endsec">
        <NextPageGallery to='/gallery/editorials/equalTime' title1='Equal' title2='Time'/>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(JerkEd);