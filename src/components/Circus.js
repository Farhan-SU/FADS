import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles/galleryDetail.scss';
import WebpG from './ImgWebp';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function Circus () {
    
    const fashiontl = useRef();
    const portfolioSRef = useRef();
    const parallaxRef = useRef();
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
            .to(parallaxRef.current,{x: 80, duration: 0.4, opacity: 0.3, ease: 'sine.in'})
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
                trigger: portfolioSRef.current,
                trigger: el
              }
            });
          });

          return () => {
            if (ScrollTrigger.getById('panelsJerk')) {
            ScrollTrigger.getById('panelsJerk').kill();
            };
            fashiontl.current.kill();
        };
    }, []);

    const addPanels = el => {
        if (el && !panelSRef.current.includes(el)) {
            panelSRef.current.push(el);
        };
    };

    return (
        <>
        <div className="yearlyShows">
         <div className="spacer">
             <div className="circusSpacer">
            <h1 contentEditable="false" role='textbox' aria-multiline='false'>
                Night Circus <br/> <span>Spring 2019</span>
            </h1>
            </div>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioSRef}>
             <h2 ref={parallaxRef}>CIRCUS</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../assets/images/circus/bw.webp')}
                            fallback={require('../assets/images/circus/bw.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/circus/redboots.webp')}
                            fallback={require('../assets/images/circus/redboots.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/circus/gold.webp')}
                            fallback={require('../assets/images/circus/gold.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/circus/reddress.webp')}
                            fallback={require('../assets/images/circus/reddress.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/circus/pins.webp')}
                            fallback={require('../assets/images/circus/pins.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/circus/magic.webp')}
                            fallback={require('../assets/images/circus/magic.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec">
            <div className="secContent">
            <h1>The Gallery</h1>   
            <div className="showNxt">
            <Link className="link" to="/gallery/shows/thegallery.js">
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
        </>
    )
};

export default withRouter(Circus);