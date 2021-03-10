import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import {Row, Col} from 'react-bootstrap';
import Prev from '../../assets/images/prev.png';
import Gallery1w from '../../assets/images/the_gallery/arch.webp';
import Gallery1 from '../../assets/images/the_gallery/arch.png';
import Gallery2w from '../../assets/images/the_gallery/teal.webp';
import Gallery2 from '../../assets/images/the_gallery/teal.png';
import Gallery3w from '../../assets/images/the_gallery/jeans.webp';
import Gallery3 from '../../assets/images/the_gallery/jeans.png';
import Gallery4w from '../../assets/images/the_gallery/blackdress.webp';
import Gallery4 from '../../assets/images/the_gallery/blackdress.png';
import Gallery5w from '../../assets/images/the_gallery/denim.webp';
import Gallery5 from '../../assets/images/the_gallery/denim.png';
import Gallery6w from '../../assets/images/the_gallery/glitter.webp';
import Gallery6 from '../../assets/images/the_gallery/glitter.png';
import Gallery7w from '../../assets/images/the_gallery/design.webp';
import Gallery7 from '../../assets/images/the_gallery/design.png';
import Gallery8w from '../../assets/images/the_gallery/contjacket.webp';
import Gallery8 from '../../assets/images/the_gallery/contjacket.png';
import Gallery9w from '../../assets/images/the_gallery/whitedress.webp';
import Gallery9 from '../../assets/images/the_gallery/whitedress.png';
import Gallery10w from '../../assets/images/the_gallery/closeup.webp';
import Gallery10 from '../../assets/images/the_gallery/closeup.png';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function TheGallery () {
 
    const fashiontl = useRef();
    const portfolioSRef = useRef();
    const panelSRef = useRef();
    panelSRef.current = [];

    useEffect(() => {  
    
        const xendvalue = (portfolioSRef.current.scrollWidth - document.documentElement.clientWidth) * 1.05;
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
                ease: "circ.Inout",
                scale: 0.5
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
          title: "The Gallery - Fall 2019",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "The Gallery is our Fall 2019 show"
        }}>
        <div className="yearlyShows">
         <div className="spacer">
             <div className="gallerySpacer">
            <h1>The Gallery<br/><span>Fall 2019</span></h1>
            </div>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioSRef}>
             <h2>Gallery</h2>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery1w}
                            fallback={Gallery1}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery2w}
                            fallback={Gallery2}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery3w}
                            fallback={Gallery3}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery4w}
                            fallback={Gallery4}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery5w}
                            fallback={Gallery5}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery6w}
                            fallback={Gallery6}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Gallery7w}
                            fallback={Gallery7}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery8w}
                            fallback={Gallery8}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Gallery9w}
                            fallback={Gallery9}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Gallery10w}
                            fallback={Gallery10}
                            alt="Gallery editorial shoots"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1>The</h1><h2 className="ontop">Circus</h2>
            </Col>
            <Col lg={12} className="endseccontent">
              <img src={Prev} alt="relive it again design"/>
            </Col>
        </Row>
            <div className="Endnext">
            <div className="winterEndarrow">
            <Link className="link" to="/gallery/shows/circus">
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

export default withRouter(TheGallery);