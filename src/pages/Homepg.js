import React, {useRef,useEffect} from 'react';
import {Link} from 'react-router-dom'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Galimg1 from '../assets/images/workwear/fuzzyhat.png';
import Galimg2 from '../assets/images/homegal.png';
import Aboutpic from '../assets/images/fadsfam.gif';
import Text from '../components/Textani';
import '../assets/styles/pages.scss';
import SEO from '../components/SEO';
import Button from '../components/Button'
import {Row, Col} from 'react-bootstrap'

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  } 

  export default function Homepg ()  {  

  const tl = useRef();
  const fadsbio = useRef(null);
  const biotxt = useRef(null);
  const biocover = useRef(null);


  useEffect(() => {
    tl.current = gsap.timeline({
       scrollTrigger: {
         trigger: fadsbio.current,
         id: "hometl",
         start: "top top",
         end: '+=850',
         pin: biotxt.current,
         pinReparent: true,
         toggleActions: "play pause resume reverse"
       }
     }) 
     .fromTo(biocover.current, {y: 0}, {duration: 1.3, y: 900, ease: 'sine.in'})
     .from(biotxt.current, { opacity: 0, duration: 0.7, x: 10 , ease: 'back.inOut(1.4)'})

     return () => {
      if (ScrollTrigger.getById('hometl')) {
        ScrollTrigger.getById('hometl').kill();
      }
      tl.current.kill();
    }
 }, []);
            
              
  {/* Gallery Animation */}

  const image1 = useRef(null);
  const image2 = useRef(null);
  const containerRef = useRef(null);
  const galleryRef1 = useRef(null);
  const galleryRef2 = useRef(null);
  const textRef = useRef(null)

    useEffect(() =>{
      tl.current = gsap.timeline({
        scrollTrigger: {
          id: 'container-ref',
          trigger: containerRef.current,
          scrub: 0.1,
          start: "0 0" ,
          end: "+400",
        }
      })
      .from(containerRef.current, {duration: 1.5, autoAlpha: 0, ease: 'power2.inOut'}, "-=1")
      .add('nowstart', "+=0.3")
      .from(galleryRef1.current, {duration: 1.5, autoAlpha: 0, y: 40,ease: 'back.inOut(1.4)'}, "nowstart")
      .from(image1.current, {duration: 1.9, autoAlpha: 0 , x: -350, ease: "circ.out",})
      .from(galleryRef2.current, {duration: 1.5, autoAlpha: 0, y: 40,  ease: 'back.inOut(1.4)'})
      .from(image2.current, {duration: 1.3, autoAlpha: 0 , x: 350, ease: "circ.out"})
      .from(textRef.current, {duration: 3, autoAlpha: 0, delay: 0.8});

      return () => {
        if (ScrollTrigger.getById('container-ref')) {
          ScrollTrigger.getById('container-ref').kill();
        }
        
        tl.current.kill();
      };
      
    }, []);

  {/* About Us Animation */}

  const abRef = useRef(null);
  const abtextref = useRef(null);
  const AboutRef = useRef(null); 
  const overlayref = useRef(null)
  const imgabout = useRef(null);

 useEffect(() =>{
      tl.current = gsap.timeline({
        scrollTrigger: {
          id: 'about-ref',
          trigger: AboutRef.current,
          scrub: true,
          start: "top 9%" ,
          end: "bottom bottom"
        }
      })
      .fromTo(overlayref.current, {duration: 2, y: 0, autoAlpha: 1, backgroundColor: "#AC9FB2"}, 
      {duration: 2, x: -1700, autoAlpha: 1, ease: 'sine.in',backgroundColor: "#AC9FB2"})
      .add("reveal", "+=1")
      .from(abRef.current, {duration: 0.7, autoAlpha: 0, y: 18, ease: 'sine.in'})
      .from(imgabout.current, {duration: 1, autoAlpha: 0, scale: 1.3, ease: "back.inOut(1.4)"}, 'reveal')
      .from(abtextref.current, {duration: 0.7, autoAlpha: 0, yPercent: 10, transformOrigin:"0% 100%", ease: 'power1.inOut', delay: 0.3});

      return () => {
        if (ScrollTrigger.getById('about-ref')) {
          ScrollTrigger.getById('about-ref').kill();
        }
        tl.current.kill();
      };
    }, []);

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


  {/* Join Animation */}
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
    <SEO
    pageMeta={{
      title: "Home",
      keywords: ["Fashion", "Gallery", "Agency"],
      description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major"
    }}>
      <div className="layerone">
        <Row className="fadsintro">
          <Col className="firstcol" md={8}>
          <h1>Fashion and <br/>Design <br/>Society</h1>
          </Col>
          <Col className="secondcol" md={4}>
          <Button/>
          </Col>
        </Row>
      </div>
  
      <div className="scrollable" data-scrollbar>
      <div className="wrap-overflow">
      <>
      <div ref={fadsbio} id="hometl" className="layertwo">
        <div> 
          <div ref={biocover} className="bioreveal"/> 
          <div className="text">
          <h3 ref={biotxt} contentEditable="false" role='textbox' aria-multiline='true'>
            <em>FADS offers students a space to pursue fashion
                related interests outside of their major, with
                the opportunities and professional environment
                to prepare them for creative careers.</em>
              </h3>
          </div>
        </div>
        
      </div>
      </>
      <div className="layerfour" id="container-ref" ref={containerRef}>
          <div ref={image1} className='gallery-images'>
              <img src={Galimg1} alt="gallery images" className="img1"/>
          </div>

        <div className="gallery">
          <h2 ref={galleryRef1}>Check Out</h2>
          <h2  ref={galleryRef2}>Our work</h2>
          <Link to="/Gallery">
            <h3 className="visit" ref={textRef}>Visit our Gallery</h3>
          </Link>
        </div>

          <div  ref={image2}className='gallery-images'>
            <img src={Galimg2} alt="gallery images" className="img2"/>
          </div>
      </div>
        <div className="aboutuswrapper" id="about-ref" ref={AboutRef}>
          <div  className="ab-img-con">
              <img src={Aboutpic} alt="FADS board members" className='aboutpic'/>
              <div ref={overlayref} className='overlay'/>
          </div>
          <div className="ab-text">
            <h2 ref={abRef} contentEditable="false" role='textbox' aria-multiline='false'>ABOUT US</h2>
            <h3 ref={abtextref}>Meet the diverse group of career minded 
            individuals at Syracuse University who share 
            a passion for creativity, design, and fashion.</h3>
          </div>
        </div>

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

        <div className="layersix"  ref={JoinRef}>
            <div className='jointxt'>
              <h2 ref={joinhead1}>JOIN The</h2>
              <h2 ref={joinhead2}>Team</h2>
            </div>

            <div className='joincomit'>
              <Text/>
            </div>
        </div>
      </div>
      </div>
      </SEO>
    </>
    );
};