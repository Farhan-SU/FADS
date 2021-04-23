import React, {useRef, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryShows.scss';
import ImgWebp from '../ImgWebp';
import Reliveit from '../../assets/images/reliveit.png';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';
import Tmmrw1w from '../../assets/images/tomorrowland/tomorrowland11.webp';
import Tmmrw1 from '../../assets/images/tomorrowland/tomorrowland11.png';
import Tmmrw2w from '../../assets/images/tomorrowland/tomorrowland6.webp';
import Tmmrw2 from '../../assets/images/tomorrowland/tomorrowland6.png';
import Tmmrw3w from '../../assets/images/tomorrowland/tomorrowland10.webp';
import Tmmrw3 from '../../assets/images/tomorrowland/tomorrowland10.png';
import Tmmrw4w from '../../assets/images/tomorrowland/tomorrowland7.webp';
import Tmmrw4 from '../../assets/images/tomorrowland/tomorrowland7.png';
import Tmmrw5w from '../../assets/images/tomorrowland/tommorrowland1.webp';
import Tmmrw5 from '../../assets/images/tomorrowland/tommorrowland1.png';
import Tmmrw6w from '../../assets/images/tomorrowland/tomorrowland2.webp';
import Tmmrw6 from '../../assets/images/tomorrowland/tomorrowland2.png';
import Tmmrw7w from '../../assets/images/tomorrowland/tommorrowland8.webp';
import Tmmrw7 from '../../assets/images/tomorrowland/tommorrowland8.png';
import Tmmrw8w from '../../assets/images/tomorrowland/tomorrowland5.webp';
import Tmmrw8 from '../../assets/images/tomorrowland/tomorrowland5.png';
import Tmmrw9w from '../../assets/images/tomorrowland/tomorrowland3.webp';
import Tmmrw9 from '../../assets/images/tomorrowland/tomorrowland3.png';
import Tmmrw12w from '../../assets/images/tomorrowland/tomorrowland9.webp';
import Tmmrw12 from '../../assets/images/tomorrowland/tomorrowland9.png';

import TmpDeckW from '../../assets/images/tomorrowland/tmmrwpDeck.webp';
import TmpDecK from '../../assets/images/tomorrowland/tmmrwpDeck.png';
import Reveal from '../Reveal';
import {Video, Transformation} from 'cloudinary-react';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function Tomorrow () {

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
            autoRemoveChildren: true
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
        let timeout = gsap.delayedCall( 0.5, delayedRefresedCall);
        function delayedRefresedCall() {
            ScrollTrigger.refresh();
        };
    }, []);

    return (
        <>
        <SEO  
          pageMeta={{
          title: "Tomorrow Land - Fall 2018",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Tomorrow Land is our Fall 2018 show"
        }}/>
        <div className="yearlyShows">
        <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}><span className="scaleDownTxtTomorrow">Tomorrow Land</span></Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>Fall 2018</Reveal>
            </Col>
         </Row>
         
        <section className="pitchWrap">
        <Row noGutters={true} className="showVideo">
         <Col lg={10} className="videoContainer">
         <Video cloudName="fadscloud" width="100%" 
                        publicId="tmmrShowVid" controls="true" 
                        loading="lazy" 
                        fallbackContent="Your browser does not support HTML5 video tags." >
                    <Transformation format="auto"/>
                </Video>
         </Col>
        </Row>
        </section>

        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioSRef}>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw1w}
                            fallback={Tmmrw1}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel"  ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw2w}
                            fallback={Tmmrw2}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw3w}
                            fallback={Tmmrw3}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw4w}
                            fallback={Tmmrw4}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw5w}
                            fallback={Tmmrw5}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw6w}
                            fallback={Tmmrw6}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw7w}
                            fallback={Tmmrw7}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw8w}
                            fallback={Tmmrw8}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw9w}
                            fallback={Tmmrw9}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw12w}
                            fallback={Tmmrw12}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <>
        <Row className="pDeck">
        <Col lg={12} className="mobileExplorepDeck"><h3>Drag to explore the Program Card</h3></Col>
        <Col lg={12}>
             <ImgWebp
                    src={TmpDeckW}
                    fallback={TmpDecK}
                    alt="Gallery pitch Deck"
                />
        </Col>
        </Row>
        </>
        <div className="endsec">
            <Row noGutters={true} className="imgNext">
                <Col lg={12} className="endSec1">
                    <div className="circusEndSecOnly">
                    <h1>Back to</h1><h2 className="ontop" style={{marginLeft: '1rem'}}> Gallery</h2>
                    </div>
                </Col>
                <Col lg={12} className="endseccontent">
                <img src={Reliveit} alt="relive it again design"/>
                </Col>
            </Row>
            <Row noGutters={true} className="endNext">
            <Col lg={12} className="alignLinkBox">
            <Link className="link" to="/gallery">
            <span className="link__arrow">
                <span></span>
                <span></span>
            </span>
            <span className="link__line"></span>
            </Link>
            </Col>
            </Row>
        </div>
    </div>
    </>
    )
};

export default withRouter(Tomorrow);