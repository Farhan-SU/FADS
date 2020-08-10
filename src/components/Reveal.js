import React, { useRef, useEffect} from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles/pages.scss';

gsap.registerPlugin(ScrollTrigger);

const Reveal = (props) => {

    const wrapperRef = useRef();
    const tl = React.createRefRef();
    
    useEffect(() =>{
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          scrub: true,
          start: "top 30%" ,
          end: "bottom 100%",
        }
      })
      .from(wrapperRef.current, {duration: 1, autoAlpha: 0, transformOrigin: '200px left'})
      .to(wrapperRef.current, { duration: 1, autoAlpha: 1, transformOrigin: '200px left'})
    }, []);
    
    return <div ref={wrapperRef}>{props.children}</div>

}
export default Reveal;

