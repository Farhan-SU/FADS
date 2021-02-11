import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import EndEsec from '../../assets/images/endE.png';
import EndEsecW from '../../assets/images/endE.webp';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import Vintage1w from '../../assets/images/workwear/doubles.webp';
import Vintage1 from '../../assets/images/workwear/doubles.png';
import Vintage2w from '../../assets/images/workwear/fuzzyhat.webp';
import Vintage2 from '../../assets/images/workwear/fuzzyhat.png';
import Vintage3w from '../../assets/images/workwear/blazer.webp';
import Vintage3 from '../../assets/images/workwear/blazer.png';
import Vintage4w from '../../assets/images/workwear/stripes.webp';
import Vintage4 from '../../assets/images/workwear/stripes.png';
import Vintage5w from '../../assets/images/workwear/fullshot.webp';
import Vintage5 from '../../assets/images/workwear/fullshot.png';
import Vintage6w from '../../assets/images/workwear/plaid.webp';
import Vintage6 from '../../assets/images/workwear/plaid.png';
import Vintage7w from '../../assets/images/workwear/suit.webp';
import Vintage7 from '../../assets/images/workwear/suit.png';
import Vintage8w from '../../assets/images/workwear/student.webp';
import Vintage8 from '../../assets/images/workwear/student.png';
import Vintage9w from '../../assets/images/workwear/plaidshoot.webp';
import Vintage9 from '../../assets/images/workwear/plaidshoot.png';


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
                    id: "containerWork",
                    duration: 2,
                    scrub: 1.5,
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
                if (ScrollTrigger.getById('containerWork')) {
                ScrollTrigger.getById('containerWork').kill();
                }
            };
    },[]);

    useEffect(() => {
        gshowtl.current = panelRef.current.forEach((el, index) => {
            gsap.from(el, {
                duration: 1,
                autoAlpha: 0.8,
                ease: "circ.Inout"
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
          title: "Work Wear Vintage | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Our May 2019 editorial photoshoot"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1 className="longTxtEd">September<br/>2019</h1>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2 className="wwv">WORK WEAR VINTAGE</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={Vintage1w}
                            fallback={Vintage1}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                        </div>
                    </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Vintage2w}
                            fallback={Vintage2}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Vintage3w}
                            fallback={Vintage3}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Vintage4w}
                            fallback={Vintage4}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Vintage5w}
                            fallback={Vintage5}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Vintage6w}
                            fallback={Vintage6}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Vintage7w}
                            fallback={Vintage7}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Vintage8w}
                            fallback={Vintage8}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={Vintage9w}
                            fallback={Vintage9}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
        <Row className="imgNext">
            <Col lg={12} className="endSec1">
                <h1 className="winterh1">Winter</h1>
            </Col>
             <Col lg={12} className="endseccontent">
                <WebpG
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