import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
import EndEsec from '../../assets/images/endE.png';
import EndEsecW from '../../assets/images/endE.webp';
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
import Jerk5w from '../../assets/images/jerk/jerkfads.webp';
import Jerk5 from '../../assets/images/jerk/jerkfads.png';
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
    
        const xendvalue = (portfolioRef.current.scrollWidth - document.documentElement.clientWidth) * 1.1;
        const panelend =  Math.abs(xendvalue) * -1;
    
        if (portfolioRef.current) {
            gshowtl.current = gsap.timeline({
                scrollTrigger: {
                    id: "containerJerk",
                    duration: 3,
                    scrub: 2,
                    trigger: portfolioRef.current,
                    pin: true,
                    pinReparent: true,
                    anticipatePin: 1,
                    start: "top top",
                    end: () => xendvalue
                }
            })
            .to(panelRef.current, {x : () => panelend}, 0);

        } else {
            console.log("OOPS doesnt exist");
        };

            return () => {
                if (ScrollTrigger.getById('containerJerk')) {
                ScrollTrigger.getById('containerJerk').kill();
                };
            };
    },[]);

    useEffect(() => {
        gshowtl.current = panelRef.current.forEach((el, index) => {
            gsap.from(el, {
              duration: 1,
              autoAlpha: 0.8,
              ease: "circ.Inout",
            });
          });
    }, []);

    function addPanels(el) {
        if (el && !panelRef.current.includes(el)) {
            panelRef.current.push(el);
        };
    }


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
            <h1>April <br/>2019</h1>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2 className="biggerport">JERK</h2>
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
                        src={Jerk5w}
                        fallback={Jerk5}
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
        <div className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1>Wint</h1><h2 className="ontop">er</h2>
            </Col>
            <Col lg={12} className="endseccontent">
                <ImgWebp
                    src={EndEsecW}
                    fallback={EndEsec}
                    alt="FADS Logo"
                />
            </Col>
        </Row>
        
            <div className="Endnext">
            <Link className="link" to="/gallery/editorials/winter">
            <span className="link__arrow">
                <span></span>
                <span></span>
            </span>
            <span className="link__line"></span>
            </Link>
            </div>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(JerkEd);