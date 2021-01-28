import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import jerkEnd from '../../assets/images/jerkEnd.png';
import jerkEndWeb from '../../assets/images/jerkEnd.webp';
import SEO from "../SEO";

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function JerkEd () {
    
    const gshowtl = useRef();
    const portfolioRef = useRef();
    const parallaxRef = useRef();
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
            gsap.fromTo(el, {
              autoAlpha: 0,
              scale: 0.7
            }, {
              duration: 1,
              autoAlpha: 1,
              scale: 1,
              ease: "circ.out",
              scrollTrigger: {
                id: 'panelsJerk',
                trigger: portfolioRef.current,
                trigger: el
              }
            });
          });

          return () => {
            if (ScrollTrigger.getById('panelsJerk')) {
            ScrollTrigger.getById('panelsJerk').kill();
            };
        };
    }, []);

    const addPanels = el => {
        if (el && !panelRef.current.includes(el)) {
            panelRef.current.push(el);
        };
    };


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
             <h2 ref={parallaxRef}>JERK</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../../assets/images/jerk/solei.webp')}
                            fallback={require('../../assets/images/jerk/solei.webp')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                        </div>
                    </div>

                    <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/flowers.webp')}
                            fallback={require('../../assets/images/jerk/flowers.png')}
                            alt="FADS Logo"
                            className="panel_img"  
                        />
                    </div>
                    </div>

                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/flower2.webp')}
                            fallback={require('../../assets/images/jerk/flower2.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                    </div>

                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/skull.webp')}
                            fallback={require('../../assets/images/jerk/skull.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>

                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/jerkfads.webp')}
                            fallback={require('../../assets/images/jerk/jerkfads.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>

                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/threeppl.webp')}
                            fallback={require('../../assets/images/jerk/threeppl.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>

                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/jerkshirtless.webp')}
                            fallback={require('../../assets/images/jerk/jerkshirtless.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/tree3.webp')}
                            fallback={require('../../assets/images/jerk/tree3.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>

                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/jolly.webp')}
                            fallback={require('../../assets/images/jerk/jolly.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/pinkpants.webp')}
                            fallback={require('../../assets/images/jerk/pinkpants.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/jerk/twopants.webp')}
                            fallback={require('../../assets/images/jerk/twopants.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
        <div className="imgNext">
            <WebpG
                src={jerkEndWeb}
                fallback={jerkEnd}
                alt="FADS Logo"
                style={{width: '75%'}}
                />
        </div>
            <div className="Endnext">
            <Link className="link" to="/gallery/editorials/work-wear-vintage">
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