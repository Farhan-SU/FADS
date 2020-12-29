import React, {useRef, useEffect, useState} from 'react';
import { Link, useRouteMatch} from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles/galleryDetail.scss';
import WebpG from './ImgWebp';
import { Row } from 'react-bootstrap';
import workEnd from '../assets/images/workEnd.png';
import workEndWeb from '../assets/images/workEnd.webp';


if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};
  
export default function JerkEd () {
    
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
            .to(parallaxRef.current, {x: 100, duration: 0.5, opacity: 0.8, ease: 'sine.in'})
            .to(panelRef.current, {x : () => panelend}, 0);

        } else {
            console.log("OOPS doesnt exist");
        };

            return () => {
                if (ScrollTrigger.getById('containerWork')) {
                ScrollTrigger.getById('containerWork').kill();
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
                id: 'panelsWork',
                trigger: portfolioRef.current,
                trigger: el
              }
            });
          });

          return () => {
            if (ScrollTrigger.getById('panelsWork')) {
            ScrollTrigger.getById('panelsWork').kill();
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
        .from(nextArrow.current, {duration: 1, autoAlpha: 0, ease: 'sine.in'});
  
        return () => {
          if (ScrollTrigger.getById('arrow')) {
            ScrollTrigger.getById('arrow').kill();
          }gshowtl.current.kill();
        };    
      }, []);
  

    return (
        <>
        <div className="galleryShows">
         <div className="spacer">
            <h1 contentEditable role='textbox' aria-multiline='false'>September<br/>2019</h1>
            <h3></h3>
         </div>
        <section className="section">
        <div className="portfolio" ref={portfolioRef}>
             <h2 ref={parallaxRef} className="wwv">WORK WEAR VINTAGE</h2>
                    <div className="panel" ref={addPanels}>
                        <div className="panel_item">
                        <WebpG
                            src={require('../assets/images/workwear/doubles.webp')}
                            fallback={require('../assets/images/workwear/doubles.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '90%'}}
                        />
                        </div>
                    </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/workwear/fuzzyhat.webp')}
                            fallback={require('../assets/images/workwear/fuzzyhat.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '90%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/workwear/blazer.webp')}
                            fallback={require('../assets/images/workwear/blazer.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '90%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/workwear/stripes.webp')}
                            fallback={require('../assets/images/workwear/stripes.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '90%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/workwear/fullshot.webp')}
                            fallback={require('../assets/images/workwear/fullshot.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '90%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/workwear/plaid.webp')}
                            fallback={require('../assets/images/workwear/plaid.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '90%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/workwear/suit.webp')}
                            fallback={require('../assets/images/workwear/suit.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '90%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/workwear/student.webp')}
                            fallback={require('../assets/images/workwear/student.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '90%'}}
                        />
                    </div>
                </div>
                <div className="panel" ref={addPanels}>
                    <div className="panel_item">
                    <WebpG
                            src={require('../assets/images/workwear/plaidshoot.webp')}
                            fallback={require('../assets/images/workwear/plaidshoot.png')}
                            alt="FADS Logo"
                            className="panel_img"
                            style={{width: '100%'}}
                        />
                    </div>
                </div>
            </div>
        </section>
        <div className="endsec" ref={arrow}>
        <div className="imgNext">
            <div className="worksec">
            <WebpG
                src={workEndWeb}
                fallback={workEnd}
                alt="FADS Logo"
                style={{width: '48%'}}
                />
            </div>
        </div>
            <div className="Endnext" ref={nextArrow}>
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
        </>
    )
};
