import React, {useRef, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryEditorial.scss';
import ImgWebp from '../ImgWebp';
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
import NextPageGallery from './NextPageGallery';
import Reveal from '../Reveal';



if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function JerkEd () {

    let gshowtl = useRef();
    let portfolioRef = useRef();
    let panelRef = useRef();
    panelRef.current = [];

    useEffect(() => {
        let xendvalue = (portfolioRef.current.scrollWidth - document.documentElement.clientWidth) * 1.04;
        let panelend =  (Math.abs(xendvalue)) * -1;

        gshowtl.current = gsap.timeline({
            scrollTrigger: {
            id: "wwvTl",
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
            if (ScrollTrigger.getById('wwvTl')) {
                ScrollTrigger.getById('wwvTl').kill();
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
          title: "Work Wear Vintage | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Our May 2019 editorial photoshoot"
        }}>
        <div className="galleryShows">
            <Row className="spacer">
                <Col lg={12}>
                <Reveal wrapperElement="h1" direction="up" delay={0.1}>Work wear Vintage</Reveal>
                </Col>
                <Col lg={12}>
                <Reveal wrapperElement="h3" direction="up" delay={0.5}>09/19</Reveal>
                </Col>
            </Row>
        <section className="horizontalWrap">
        <div className="portfolio" ref={portfolioRef}>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <ImgWebp
                            src={Vintage1w}
                            fallback={Vintage1}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                        </div>
                    </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Vintage2w}
                            fallback={Vintage2}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Vintage3w}
                            fallback={Vintage3}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Vintage4w}
                            fallback={Vintage4}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Vintage5w}
                            fallback={Vintage5}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Vintage6w}
                            fallback={Vintage6}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Vintage7w}
                            fallback={Vintage7}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Vintage8w}
                            fallback={Vintage8}
                            alt="Work Wear Vintage Shoot"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <ImgWebp
                            src={Vintage9w}
                            fallback={Vintage9}
                            alt="Work Wear Vintage Shoot"
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
           <p>Sam Bloom</p>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Clothing</h2>
           <p>Boom Babies</p>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Styling</h2>
           <a href="https://fashiondesignsociety.com/agency/bio/aanya-singh">
           <p className="linkBio">Aanya Singh  &#8594;</p>
           </a>
           <a href="https://fashiondesignsociety.com/agency/bio/jackson-ensley">
           <p className="linkBio">Jackson Ensely  &#8594;</p>
           </a>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Makeup Artist</h2>
           <a href="https://fashiondesignsociety.com/agency/bio/annie-grace">
            <p className="linkBio">Anne Horstein  &#8594;</p>
            </a>
           <p>Angelee Clause</p>
       </Col>
       <Col lg={5} sm={12} className="creditsMember">
           <h2>Models</h2>
           <p>Joelle Wright</p>
           <p>Caroline Crouch</p>
           <p>Izmalia Sougoufara</p>
           <p>Caroline Francis</p>
       </Col>
   </Row>
</section>


        <div className="endsec">
            <NextPageGallery to='/gallery/editorials/jerk-fads' title1='Jerk X' title2='FADS'/>
        </div>
    </div>
    </SEO>
        </>
    )
};

export default withRouter(JerkEd);