import React, {useRef, useEffect} from 'react';
import { withRouter} from 'react-router-dom';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryShows.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';

import RevivalPoster1 from '../../assets/images/revival-poster1.jpg';
import RevivalPoster2 from '../../assets/images/revival-poster2.jpg';
import RevivalShowProgram from '../../assets/images/revivalShowProgram.png';
import Reveal from '../Reveal';
import {Video, Transformation} from 'cloudinary-react';
import NextPageGallery from './NextPageGallery';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function RevivalShow () {
 
    let fashiontl = useRef();
    let portfolioSRef = useRef();
    let panelSRef = useRef();
    panelSRef.current = [];

    useEffect(() => {
        let xendvalue = (portfolioSRef.current.scrollWidth - document.documentElement.clientWidth) * 1.04;
        let panelend =  (Math.abs(xendvalue)) * -1;

        fashiontl.current = gsap.timeline({
            scrollTrigger: {
            id: "galleryShow",
            scrub: 1.4,
            trigger: portfolioSRef.current,
            pin: portfolioSRef.current,
            anticipatePin: 1,
            start: 'top top',
            end: xendvalue,
            autoRemoveChildren: true,
            markers: true
            }
        }).fromTo(panelSRef.current, {x : 0}, {x : panelend,  ease: "linear"});
       
        fashiontl.current = panelSRef.current.forEach((el, index) => {
            gsap.fromTo(el, {x : 0}, {x : panelend, ease: "linear"});
        });
        
        return () => {
            if (ScrollTrigger.getById('galleryShow')) {
                ScrollTrigger.getById('galleryShow').kill();
            };
        };
    }, []);

    function addPanels(el) {
        if (el && !panelSRef.current.includes(el)) {
            panelSRef.current.push(el);
        };
    };

    useEffect(() => {
        let timeout = gsap.delayedCall( 2, delayedRefresedCall);
        function delayedRefresedCall() {
            ScrollTrigger.refresh();
        };
    }, []);


    return (
        <>
        <SEO  
          pageMeta={{
          title: "Revival - Spring 2021",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "The Gallery is our Fall 2019 show"
        }}/>
        <div className="yearlyShows">
         <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}>Revival</Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>Spring 2021</Reveal>
            </Col>
         </Row>
         
         <section className="pitchWrap">
         <Row noGutters={true} className="posterWrapBody">
            <Col md={5} className="posterimg">
                <img src={RevivalPoster1}/> 
            </Col>
            <Col md={5} className="posterimg">
                <img src={RevivalPoster2}/> 
            </Col>
        </Row>

        <Row noGutters={true} className="showVideoBodySpace">
            <Col lg={6} className="videoContainerBody">
            <Video cloudName="fadscloud" width="100%" 
                publicId="revival/revivialTeaser_ujkvtr" controls="true" 
                loading="lazy" fallbackContent="Your browser does not support HTML5 video tags." >
                <Transformation format="auto"/>
            </Video>
            </Col>
            <Col lg={5} className="vidIntroTxt">
            <h1>Revival</h1>
            <p>Where 16th century regal influences meet rebellious punk subculture. Revival reflects the current renaissance; the dismantling of archaic structures and views, people questioning norms & knowing the old world order is over.</p>
            <div className="bodySpaceLink">
            <a href='https://www.instagram.com/tv/COt153TAmQf/' target="blank">
              <div className="linkbtn">
                <div className="circlelink"/>
                <p className="linktext">Full Show here &#10230;</p>
              </div>
            </a>
          </div>
            </Col>
        </Row>
        </section>

        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioSRef}>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969032/revival/revival7_zarqoc.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969031/revival/revival5_a5lpsa.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969031/revival/revival4_rufbiz.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969031/revival/revival3_sgdhfg.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969031/revival/revival16_pgmanh.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969034/revival/revival32_e6lkt5.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969033/revival/revival29_tnhma0.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                        <div className="panel_item">
                        <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969033/revival/revival27_Land_ccwkcq.jpg" alt="revival Picture" className="panel_img"/>
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969031/revival/revival8_n29xqr.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969031/revival/revival2_cyrhf6.jpg" alt="revival Picture" className="panel_img"/>
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969031/revival/revival15_zd384e.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969033/revival/revival14_pvjgja.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969032/revival/revival10_rmi1zs.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969032/revival/revival18_e06pck.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969034/revival/revival37_gm9if4.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969034/revival/revival31_juafw1.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969033/revival/revival13_gfq4r8.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969032/revival/revival9_q0cnfn.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969031/revival/revival17_ayl1k6.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969033/revival/revival21_rcwq8b.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969033/revival/revival23_tt5pmn.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969033/revival/revival24_axcavc.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969033/revival/revival22_yhfgqv.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <img src="https://res.cloudinary.com/fadscloud/image/upload/q_auto/v1623969033/revival/revival25_fmuvsk.jpg" alt="revival Picture" className="panel_img"/>
                    </div>
                </div>
            </div>
        </section>
        <>
        <Row className="pDeck">
        <Col lg={12} className="mobileExplorepDeck"><h3>Drag to explore the Program Card</h3></Col>
        <Col lg={12}>
        <img src={RevivalShowProgram} alt="showProgram"/>
        </Col>
        </Row>
        </>
        <div className="endsec">
            <NextPageGallery to='/gallery/shows/bodyxspace' title1='Body X' title2='Space'/>
        </div>
    </div>
        </>
    )
};

export default withRouter(RevivalShow);
