import React, {useRef, useEffect} from 'react';
import { withRouter} from 'react-router-dom';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryEditorial.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import Revi1w from '../../assets/images/revival/revival1.webp';
import Revi1 from '../../assets/images/revival/revival1.png';
import Revi2w from '../../assets/images/revival/revival2.webp';
import Revi2 from '../../assets/images/revival/revival2.png';
import Revi3w from '../../assets/images/revival/revival3.webp';
import Revi3 from '../../assets/images/revival/revival3.png';
import Revi4w from '../../assets/images/revival/revival4.webp';
import Revi4 from '../../assets/images/revival/revival4.png';
import Revi5w from '../../assets/images/revival/revival5.webp';
import Revi5 from '../../assets/images/revival/revival5.png';
import NextPageGallery from './NextPageGallery';
import Reveal from '../Reveal';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};

function Revival () {

    let gshowtl = useRef();
    let portfolioRef = useRef();
    let panelRef = useRef();
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
          title: "Revival | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Sepetember 2020 editorial photoshoot for The Gallery Fashion Show"
        }}>
        <div className="galleryShows">
        <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}>Revival</Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>03/2021</Reveal>
            </Col>
         </Row>
         <section className="horizontalWrap">
            <div className="portfolio" ref={portfolioRef}>
            <div className="panel" ref={addGPanels}>
                <div className="panel_item">
                <ImgWebp
                    src={Revi1w}
                    fallback={Revi1}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
                </div>
            </div>
            <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Revi2w}
                    fallback={Revi2}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Revi3w}
                    fallback={Revi3}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" id='landscape' ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Revi4w}
                    fallback={Revi4}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
        <div className="panel" ref={addGPanels}>
            <div className="panel_item">
            <ImgWebp
                    src={Revi5w}
                    fallback={Revi5}
                    alt="The Gallery editorial shoots"
                    className="panel_img"
                />
            </div>
        </div>
    </div>
</section>
        <div className="endsec">
            <NextPageGallery to='/gallery/editorials/boogieStrike' title1='Boogie' title2='Strike'/>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(Revival);