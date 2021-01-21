import React, {useRef, useEffect} from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryDetail.scss';
import WebpG from '../ImgWebp';
import SEO from '../SEO';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
function Tomorrow () {
    
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
            } 
        };
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
          title: "Tomorrow Land - Fall 2018",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Tomorrow Land is our Fall 2018 show"
        }}></SEO>
        <div className="yearlyShows">
         <div className="spacer">
             <div className="tomorrowSpacer">
            <h1 contentEditable="false" role='textbox' aria-multiline='false' style={{position: 'relative', top: '-2.5rem'}}>
                Tomorrow Land <br/> <span>Fall 2018</span>
            </h1>
            </div>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioSRef}>
             <h2 ref={parallaxRef}>Tomorrow</h2>
                    <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../../assets/images/tomorrowland/fashionline.webp')}
                            fallback={require('../../assets/images/tomorrowland/fashionline.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                             src={require('../../assets/images/tomorrowland/space.webp')}
                             fallback={require('../../assets/images/tomorrowland/space.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                             src={require('../../assets/images/tomorrowland/people.webp')}
                             fallback={require('../../assets/images/tomorrowland/people.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/tomorrowland/netmask.webp')}
                           fallback={require('../../assets/images/tomorrowland/mask.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" id="landscape" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/tomorrowland/walk.webp')}
                           fallback={require('../../assets/images/tomorrowland/walk.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                           src={require('../../assets/images/tomorrowland/mask.webp')}
                           fallback={require('../../assets/images/tomorrowland/mask.png')}
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
            <h1>Back to Gallery</h1>   
            <div className="showNxt">
            <NavLink className="link" exact to="/gallery">
            <span className="link__arrow">
                <span></span>
                <span></span>
            </span>
            <span className="link__line"></span>
            </NavLink>
            </div>
            </div>
        </div>
    </div>
        </>
    )
};

export default withRouter(Tomorrow);