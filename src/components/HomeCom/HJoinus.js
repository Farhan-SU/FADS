import React, {useRef,useEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Text from '../Textani';
import '../../assets/styles/pages.scss';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HJoinus()  {  

    const tl = useRef();
    const JoinRef = useRef(null)
    const joinhead1 = useRef(null);
    const joinhead2 = useRef(null);
  
   useEffect(() =>{
        tl.current = gsap.timeline({
          scrollTrigger: {
            trigger: JoinRef.current,
            scrub: true,
            start: "top 10%" ,
            end: "bottom bottom"
          }
        })
        .from(JoinRef.current, {duration: 1, ease: 'sine.in', backgroundColor: '#1A2632'} )
        .from(joinhead1.current, {duration: 1, autoAlpha: 0, y: 50, ease: 'back.inOut(1.4)'}, '-=0.5')
        .from(joinhead2.current, {duration: 1, autoAlpha: 0, y: 50, ease: 'back.inOut(1.4)'},'-=0.5');
      }, []);
  
      useEffect(() => () => {
        // all garbage cleanup all goes in a single useEffect for when component leaves
        if (tl.current) {
          tl.current.kill();
        }
      });
   
    return (
      <>
        <div className="layersix"  ref={JoinRef}>
            <div className='jointxt'>
              <h2 ref={joinhead1}>JOIN The</h2>
              <h2 ref={joinhead2}>Team</h2>
            </div>

            <div className='joincomit'>
              <Text/>
            </div>
        </div>
      </>
    );
};