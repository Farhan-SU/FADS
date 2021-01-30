import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import SEO from '../SEO';

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
                delay: 0.5,
                duration: 1,
                autoAlpha: 0,
                ease: "circ.out",
                scale: 0.5,
            });
          });
    }, []);

    const addPanels = el => {
        if (el && !panelSRef.current.includes(el)) {
            panelSRef.current.push(el);
        };
    };

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
                    <WebpG
                            src={require('../../assets/images/the_gallery/arch.webp')}
                            fallback={require('../../assets/images/the_gallery/arch.png')}
                            alt="FADS Logo"
                            className="panel_img"
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/the_gallery/teal.webp')}
                            fallback={require('../../assets/images/the_gallery/teal.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/the_gallery/jeans.webp')}
                            fallback={require('../../assets/images/the_gallery/jeans.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/the_gallery/blackdress.webp')}
                           fallback={require('../../assets/images/the_gallery/blackdress.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/the_gallery/denim.webp')}
                            fallback={require('../../assets/images/the_gallery/denim.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/the_gallery/glitter.webp')}
                           fallback={require('../../assets/images/the_gallery/glitter.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../../assets/images/the_gallery/design.webp')}
                            fallback={require('../../assets/images/the_gallery/design.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/the_gallery/contjacket.webp')}
                           fallback={require('../../assets/images/the_gallery/contjacket.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../../assets/images/the_gallery/whitedress.webp')}
                            fallback={require('../../assets/images/the_gallery/whitedress.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/the_gallery/closeup.webp')}
                           fallback={require('../../assets/images/the_gallery/closeup.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
            <div className="secContent">
            <h1>Night Circus</h1>   
            <div className="showNxt">
            <Link className="link" to="/gallery/shows/circus" style={{marginLeft: '-4rem'}}>
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