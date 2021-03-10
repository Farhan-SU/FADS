import React, {useRef, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
import Reliveit from '../../assets/images/reliveit.png';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';
import Tmmrw1w from '../../assets/images/tomorrowland/fashionline.webp';
import Tmmrw1 from '../../assets/images/tomorrowland/fashionline.png';
import Tmmrw2w from '../../assets/images/tomorrowland/space.webp';
import Tmmrw2 from '../../assets/images/tomorrowland/space.png';
import Tmmrw3w from '../../assets/images/tomorrowland/people.webp';
import Tmmrw3 from '../../assets/images/tomorrowland/people.png';
import Tmmrw4w from '../../assets/images/tomorrowland/netmask.webp';
import Tmmrw4 from '../../assets/images/tomorrowland/netmask.png';
import Tmmrw5w from '../../assets/images/tomorrowland/walk.webp';
import Tmmrw5 from '../../assets/images/tomorrowland/walk.png';
import Tmmrw6w from '../../assets/images/tomorrowland/mask.webp';
import Tmmrw6 from '../../assets/images/tomorrowland/mask.png';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function Tomorrow () {
    
    const fashiontl = useRef();
    const portfolioSRef = useRef();
    const panelSRef = useRef();
    panelSRef.current = [];

    useEffect(() => {  
    
        const xendvalue = (portfolioSRef.current.scrollWidth - document.documentElement.clientWidth) * 1.1;
        const panelend =  Math.abs(xendvalue) * -1;
    
        if (portfolioSRef.current) {
            fashiontl.current = gsap.timeline({
                scrollTrigger: {
                    id: "circusShow",
                    duration: 2,
                    scrub: 1.5,
                    trigger: portfolioSRef.current,
                    pin: true,
                    pinReparent: true,
                    anticipatePin: 1,
                    start: "top top",
                    end: () => xendvalue
                }
            })
            .to(panelSRef.current, {x : () => panelend}, 0);

        } else {
            console.log("OOPS doesnt exist");
            alert("Something went wrong! Please refresh the page")
        };

            return () => {
                if (ScrollTrigger.getById('circusShow')) {
                ScrollTrigger.getById('circusShow').kill();
                } 
            };
    },[]);

    useEffect(() => {
        fashiontl.current = panelSRef.current.forEach((el, index) => {
            gsap.from(el, {
                duration: 1,
                autoAlpha: 0.8,
                ease: "circ.Inout",
            });
          });
    }, []);

    function addPanels(el) {
        if (el && !panelSRef.current.includes(el)) {
            panelSRef.current.push(el);
        };
    }

    return (
        <>
        <SEO  
          pageMeta={{
          title: "Tomorrow Land - Fall 2018",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Tomorrow Land is our Fall 2018 show"
        }}></SEO>
        <div className="yearlyShows">
         <div className="spacer">
             <div className="tomorrowSpacer">
            <h1 className="tmmrwsh1">Tomorrow Land <br/> <span>Fall 2018</span>
            </h1>
            </div>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioSRef}>
             <h2>Tomorrow</h2>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw1w}
                            fallback={Tmmrw1}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw2w}
                            fallback={Tmmrw2}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw3w}
                            fallback={Tmmrw3}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            style={{width: '100%'}}
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
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw5w}
                            fallback={Tmmrw5}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Tmmrw6w}
                            fallback={Tmmrw6}
                            alt="Tommorrow Land Show"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1>Back to</h1><h2 style={{marginLeft: '1rem'}}> Gallery</h2>
            </Col>
            <Col lg={12} className="endseccontent">
              <img src={Reliveit} alt="relive it again design"/>
            </Col>
        </Row>
            <div className="Endnext">
            <Link className="link" to="/gallery">
            <span className="link__arrow">
                <span></span>
                <span></span>
            </span>
            <span className="link__line"></span>
            </Link>
            </div>
        </div>
    </div>
        </>
    )
};

export default withRouter(Tomorrow);