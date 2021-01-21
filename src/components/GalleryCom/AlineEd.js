import React, {useRef, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import alineEnd from '../../assets/images/alineEnd.png';
import alineEndWeb from '../../assets/images/alineEnd.webp';
import SEO from '../SEO';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function AlineEd () {

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
                    id: "container",
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
            .to(parallaxRef.current, {x: 100, duration: 0.5, opacity: 0.8, ease: 'sine.in'})
            .to(panelRef.current, {x : () => panelend}, 0);

        } else {
            console.log("OOPS doesnt exist");
        };

            return () => {
                if (ScrollTrigger.getById('container')) {
                ScrollTrigger.getById('container').kill();
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
                id: 'panels',
                trigger: portfolioRef.current,
                trigger: el
              }
            });
          });

          return () => {
            if (ScrollTrigger.getById('panels')) {
            ScrollTrigger.getById('panels').kill();
            };
        };
    }, []);

    const addPanels = el => {
        if (el && !panelRef.current.includes(el)) {
            panelRef.current.push(el);
        };
    };


    const arrow = useRef();
    const nextArrow = useRef();

    useEffect(() =>{
        gshowtl.current = gsap.timeline({
          scrollTrigger: {
            id: "arrow",
            trigger: arrow.current,
            start: "top 20%",
            end: "+=200px",
            scrub: true,
            toggleActions: "play none none pause",
          }
        })
        .from(nextArrow.current, {duration: 1, opacity: 0, ease: 'sine.in'});
  
        return () => {
          if (ScrollTrigger.getById('arrow')) {
            ScrollTrigger.getById('arrow').kill();
          }
        };    
      }, []);
  

    return (
        <>
        <SEO  
          pageMeta={{
          title: "Aline | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Our May 2019 editorial photoshoot"
        }}>
        <div className="galleryShows">
         <div className="spacer">
            <h1 contentEditable role='textbox' aria-multiline='false'>MAY <br/>2019</h1>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2 ref={parallaxRef}>Aline</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../../assets/images/aline/nojacket.webp')}
                            fallback={require('../../assets/images/aline/nojacket.png')}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                        </div>
                    </div>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/aline/fulljacket.webp')}
                            fallback={require('../../assets/images/aline/fulljacket.png')}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/aline/red.webp')}
                            fallback={require('../../assets/images/aline/red.png')}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/aline/jacket.webp')}
                            fallback={require('../../assets/images/aline/jacket.png')}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/aline/standred.webp')}
                            fallback={require('../../assets/images/aline/standred.png')}
                            alt="Aline editorial shoots"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec" ref={arrow}>
        <div className="imgNext">
            <WebpG
                src={alineEndWeb}
                fallback={alineEnd}
                alt="navigation button to aline end"
                style={{width: '75%'}}
                />
        </div>
            <div className="Endnext" ref={nextArrow}>
            <Link className="link" to="/gallery/editorials/jerk-fads">
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

export default withRouter(AlineEd);