import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import '../../assets/styles/pages.scss';


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

export default function HAgency()  {  
   
  useEffect(() =>{
    let tl = gsap.timeline();
      tl.to('.marquee', {
        duration: 16,
        ease: "none",
        x: "-=4855",
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % 4855)
        },
        repeat: -1,
        yoyo: true
      });
      }, []);

 
    return (
      <>
        <div className="layerseven" id="agency">
          <div className="agencyHead">
            <h2>Have a project?</h2>
            <h5>We have some of the most talented individuals that can help you bring you ideas to life. Meet our team of:</h5>
          </div>

          <div className='marqueewrapper' >
            <div className="marquee">
            <div className="mtext"><h2>Fashion Designers/</h2></div>
            <div className="mtext"><h2>Graphic Designers/</h2></div>
            <div className="mtext"><h2>Web Designer/</h2></div>
            <div className="mtext"><h2>Videographers/</h2></div>
            </div>
          </div>
          <div className='marqueewrapper'>
            <div className="marquee"> 
            <div className="mtext"><h2>Photographers/</h2></div>
            <div className="mtext"><h2>Models/</h2></div>
            <div className="mtext"><h2>Set Design/</h2></div>
            <div className="mtext"><h2>Makeup Artist/</h2></div>
            <div className="mtext"><h2>Stylist/</h2></div>
            <div className="mtext"><h2>Communication/</h2></div>
            </div>
          </div>
          
            <div className="agencyLink">
              <Link to="/agency">
                <div className="linkbtn">
                  <div className="circlelink"/>
                  <p className="linktext">How can we help you? &#10230;</p>
                </div>
              </Link>
            </div>
        </div>

      </>
    );
};