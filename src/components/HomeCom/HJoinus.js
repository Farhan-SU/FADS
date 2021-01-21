import React, {useRef,useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/pages.scss';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Row, Col} from 'react-bootstrap';
import joinFadsvid from '../../assets/images/fadsfam.mp4';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HJoinus()  {  

    const tl = useRef();
    const JoinRef = useRef(null)
    const joinhead1 = useRef(null);
    const [killTl, setkillTl] = useState(false);

        useEffect(() => {
          let elementsToSave = [];
          joinhead1.current && elementsToSave.push(joinhead1.current);
          ScrollTrigger.saveStyles(elementsToSave);

          ScrollTrigger.matchMedia({
            "(min-width: 800px)": function() {
              if (!killTl) {
                tl.current = gsap.timeline({
                  scrollTrigger: {
                    id: 'joinUS',
                    trigger: JoinRef.current,
                    scrub: 0.1,
                    once: true,
                    start: "top top",
                    end: "bottom bottom",
                  }
                })
                .from(joinhead1.current, {duration: 1.3, autoAlpha: 0, y: 50, ease: 'back.inOut(1.4)'})
              }
            },
            "(max-width: 430px)": function() {
              if (!killTl) {
                tl.current = gsap.timeline({
                  scrollTrigger: {
                    id: 'joinUSmobile',
                    trigger: JoinRef.current,
                    scrub: 0.1,
                    once: true,
                    start: "-40% top",
                    end: "bottom bottom",
                  }
                })
                .from(joinhead1.current, {duration: 1, autoAlpha: 0, y: 50, ease: 'back.inOut(1.4)'})
              }
            }
          });
      }, []);

      useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach(tl => tl.kill());
            setkillTl(killTl);
          };
        }, []);
                  
              
   
    return (
      <>
        <div className="layersix"  ref={JoinRef}>
        <div  className="vidwrapper">
              <video preloaded="true" autoPlay loop muted playsInline className='aboutpic'>
                  <source src={joinFadsvid} type='video/mp4' className='joinvid'/>
              </video>
          </div> 
          <div className="clipwrapper">
          <Row className="invite">
            <Col md={6} sm={12} className="invitetext" ref={joinhead1}>
            <h3>Become apart of the family. Applications are open every semester. Be on the lookout for applications and model call on our Instagram page.</h3>
            </Col>
            <Col md={4} sm={12}>
            <div className="joinLink">
            <Link to="/aboutus">
                <div className="linkbtn">
                  <div className="circlelink"/>
                  <p className="linktext">Explore our positions &#10230;</p>
                </div>
            </Link>
          </div>
            </Col>
          </Row>
        </div></div>
      </>
    );
};