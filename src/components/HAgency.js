import React, {useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles/pages.scss';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HAgency()  {  

    const tl = useRef();
    const agency = useRef(null);
    const agencyhead = useRef(null);
    const agencytxt = useRef(null);

    useEffect(() =>{
      tl.current = gsap.timeline({
        scrollTrigger: {
          id: "agency",
          trigger: agency.current,
          scrub: true,
          start: "top top",
          end: '+=970',
          pin: agencyhead.current,
          pinReparent: true,
          pinSpacing: false,
          toggleActions: "play none none reverse"
        }
      })
      .from(agency.current, {duration: 0.5})
      .from(agencytxt.current, {duration: 1.5, autoAlpha: 0, ease: 'sine.in'});

      return () => {
        if (ScrollTrigger.getById('agency')) {
          ScrollTrigger.getById('agency').kill();
        }tl.current.kill();
      };    
    }, []);
      
    return (
      <>
        <div  ref={agency} className="layerseven" id="agency">
            <div className="agencylist">
                <h3>Our team</h3>
                <ul>
                <li >MODELS</li>
                <li>Fashion Designers</li>
                <li>Graphic Designers</li>
                <li>Videographers</li>
                <li>Photographers</li>
                <li>Makeup Artist</li>
                <li>Stylist</li>
                <li>Communication</li>
                </ul>  
            </div>
            <div className="agencytxt">
                <h2 ref={agencyhead}>We Collaborate Fearlessly</h2>
                <Link to="/Agency">
                <p ref={agencytxt}><em>How can we help you?</em></p>
                </Link>
            </div>
        </div>
      </>
    );
};