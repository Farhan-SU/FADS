import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';
import Prev from '../../assets/images/prev.png';
import Cir1w from '../../assets/images/circus/bw.webp';
import Cir1 from '../../assets/images/circus/bw.png';
import Cir2w from '../../assets/images/circus/redboots.webp';
import Cir2 from '../../assets/images/circus/redboots.png';
import Cir3w from '../../assets/images/circus/gold.webp';
import Cir3 from '../../assets/images/circus/gold.png';
import Cir4w from '../../assets/images/circus/reddress.webp';
import Cir4 from '../../assets/images/circus/reddress.webp';
import Cir5w from '../../assets/images/circus/pins.webp';
import Cir5 from '../../assets/images/circus/pins.png';
import Cir6w from '../../assets/images/circus/magic.webp';
import Cir6 from '../../assets/images/circus/magic.png';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function Circus () {
    
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
        };

            return () => {
                if (ScrollTrigger.getById('circusShow')) {
                ScrollTrigger.getById('circusShow').kill();
                }; 
            };
    },[]);

    useEffect(() => {
        fashiontl.current = panelSRef.current.forEach((el, index) => {
            gsap.from(el, {
                duration: 1,
                autoAlpha: 0.8,
                ease: "circ.Inout"
            });
          });

          return () => {
            if (ScrollTrigger.getById('panelsJerk')) {
            ScrollTrigger.getById('panelsJerk').kill();
            };
        };
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
          title: "Night Circus - Fall 2019 | FADS",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Night Circus is our Spring 2019 show"
        }}>
        <div className="yearlyShows">
         <div className="spacer">
             <div className="circusSpacer">
            <h1>Night Circus <br/> <span>Spring 2019</span></h1>
            </div>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioSRef}>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Cir1w}
                            fallback={Cir1}
                            alt="picture from Night Circus shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir2w}
                        fallback={Cir2}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir3w}
                        fallback={Cir3}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir4w}
                        fallback={Cir4}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir5w}
                        fallback={Cir5}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                        src={Cir6w}
                        fallback={Cir6}
                        alt="picture from Night Circus shoots"
                        className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1>Tomorr</h1><h2 className="ontopGshoots">ow</h2>
            </Col>
            <Col lg={12} className="endseccontent">
              <img src={Prev} alt="relive it again design"/>
            </Col>
        </Row>
            <div className="Endnext">
            <div className="winterEndarrow">
            <Link className="link" to="/gallery/shows/tomorrow-land">
            <span className="link__arrow">
                <span></span>
                <span></span>
            </span>
            <span className="link__line"></span>
            </Link>
            </div>
            </div>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(Circus);