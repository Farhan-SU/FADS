import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import winterEndWeb from '../../assets/images/winterEnd.webp';
import winterEnd from '../../assets/images/winterEnd.png';
import SEO from '../SEO';


if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function WinterEd () {
   
    const gshowtl = useRef();
    const portfolioRef = useRef();
    const panelRef = useRef();
    panelRef.current = [];

    useEffect(() => {  
    
        const xendvalue = (portfolioRef.current.scrollWidth - document.documentElement.clientWidth) * 1.04;
        const panelend =  Math.abs(xendvalue) * -1;
    
        if (portfolioRef.current) {
            gshowtl.current = gsap.timeline({
                scrollTrigger: {
                    id: "containerWinter",
                    duration: 2,
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
                if (ScrollTrigger.getById('containerWinter')) {
                ScrollTrigger.getById('containerWinter').kill();
                }
            };
    },[]);

    useEffect(() => {
        gshowtl.current = panelRef.current.forEach((el, index) => {
            gsap.from(el, {
                delay: 0.5,
                duration: 1,
                autoAlpha: 0,
                ease: "circ.Inout",
                scale: 0.5,
            });
          });

          return () => {
            if (ScrollTrigger.getById('panels')) {
            ScrollTrigger.getById('panels').kill();
            }
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
          title: "Winter | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Our December 2018 editorial photoshoot"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1 className="winterDec">December<br/>2018</h1>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2>Winter</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../../assets/images/winter/curve.webp')}
                            fallback={require('../../assets/images/winter/curve.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                        </div>
                    </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/winter/trees.webp')}
                            fallback={require('../../assets/images/winter/trees.png')}
                            alt="FADS Logo"
                            className="panel_img"
                           
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/winter/sky.webp')}
                            fallback={require('../../assets/images/winter/sky.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/winter/cone.webp')}
                            fallback={require('../../assets/images/winter/cone.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/winter/snow.webp')}
                            fallback={require('../../assets/images/winter/snow.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
        <div className="imgNext">
            <div className="winterEndsec">
            <WebpG
                src={winterEndWeb}
                fallback={winterEnd}
                alt="FADS Logo"
                style={{width: '70%'}}
                />
        </div>
        </div>
            <div className="Endnext">
            <div className="winterEndarrow">
            <Link className="link" to="/gallery/editorial">
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

export default withRouter(WinterEd);