import React, {useRef,useEffect} from 'react';
import {Link} from 'react-router-dom'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import locomotiveScroll from "locomotive-scroll";
import Scrollbar from 'smooth-scrollbar';
import {motion} from 'framer-motion';
import Galimg1 from '../assets/images/fuzzyhat.png';
import Galimg2 from '../assets/images/homegal.png';
import Aboutpic from '../assets/images/fadsfam.png';
import Text from '../components/Textani';
import Footer from '../components/Footer';
import '../assets/styles/pages.scss';
import SEO from '../components/SEO';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
  } 

const Homepg = () => {  
  const tl = useRef();
  const pinthis = useRef();
  const fadsbio = useRef(null);
  const biotxt = useRef(null);
  const biocover = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({
       scrollTrigger: {
        
         trigger: fadsbio.current,
         start: "top top",
         end: '+=950',
         pin: biotxt.current,
         pinReparent: true,
         markers: {startColor: "blue", endColor: "yellow", fontSize: "12px"},
         toggleActions: "play none none reverse"
         
       }
     }) 
     .fromTo(biocover.current, {y: 0}, {duration: 1.3, y: 900, ease: 'sine.in'})
     .from(biotxt.current, { opacity: 0, duration: 0.7, x: 10 , ease: 'back.inOut(1.4)'});
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
          
          trigger: containerRef.current,
          scrub: true,
          start: "top top" ,
          end: "bottom bottom",
          markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }
      })
      .from(containerRef.current, {duration: 1.5, autoAlpha: 0, ease: 'power2.inOut'}, "-=1")
      .add('nowstart', "+=0.3")
      .from(galleryRef1.current, {duration: 1.5, autoAlpha: 0, y: 40,ease: 'back.inOut(1.4)'}, "nowstart")
      .from(image1.current, {duration: 1.9, autoAlpha: 0 , x: -350, ease: "circ.out",})
      .from(galleryRef2.current, {duration: 1.5, autoAlpha: 0, y: 40,  ease: 'back.inOut(1.4)'})
      .from(image2.current, {duration: 1.3, autoAlpha: 0 , x: 350, ease: "circ.out",})
      .from(textRef.current, {duration: 3, autoAlpha: 0, delay: 0.8});

      
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
          trigger: AboutRef.current,
          scrub: true,
          start: "top 5%" ,
          end: "bottom bottom",
          markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }
      })
      .to(AboutRef.current, {duration: 1, ease: 'power1.inOut', autoAlpha: 1} )
      .fromTo(overlayref.current, {duration: 2, y: 0, autoAlpha: 1, backgroundColor: "#907597"}, 
      {duration: 2, y: 900, autoAlpha: 1, ease: 'sine.in',backgroundColor: "#907597"})
      .add("reveal", "+=1")
      .from(abRef.current, {duration: 0.7, autoAlpha: 0, y: 18, ease: 'sine.in'})
      .from(imgabout.current, {duration: 1, autoAlpha: 0, scale: 1.3, ease: "back.inOut(1.4)"}, 'reveal')
      .from(abtextref.current, {duration: 0.7, autoAlpha: 0, yPercent: 10, transformOrigin:"0% 100%", ease: 'power1.inOut', delay: 0.3});
    }, []);

    const agency = useRef(null);
    const agencyhead = useRef(null);
    const agencytxt = useRef(null);

    useEffect(() =>{
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: agency.current,
          scrub: true,
          start: "top top",
          end: '+=970',
          pin: agencyhead.current,
          pinReparent: true,
          pinSpacing: false,
          
          markers: {startColor: "blue", endColor: "yellow", fontSize: "12px"},
          toggleActions: "play none none reverse"
        }
      })
      .from(agency.current, {duration: 0.5})
      .from(agencytxt.current, {duration: 1.5, autoAlpha: 0, ease: 'sine.in'});
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
          end: "bottom bottom",
          markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }
      })
      .from(JoinRef.current, {duration: 1, ease: 'sine.in', backgroundColor: '#1A2632'} )
      .from(joinhead1.current, {duration: 1, autoAlpha: 0, y: 50, ease: 'back.inOut(1.4)'}, '-=0.5')
      .from(joinhead2.current, {duration: 1, autoAlpha: 0, y: 50, ease: 'back.inOut(1.4)'},'-=0.5');
    }, []);
    
  /*kill when the user navigates away*/
  ScrollTrigger.getAll().forEach(tl => tl.kill());

    useEffect(() => {
      ScrollTrigger.getAll().forEach(tl => tl.refresh());
   },[]);
   
   /*enable once the pages loads*/
   ScrollTrigger.getAll().forEach(tl => tl.enable());

    const layerone = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: 0.6,
          duration: 0.3
        }
      }
    }
    const item = {
      hidden: { 
        opacity: 0,
        transition: { ease: 'backIn' } 
        },
      show: { opacity: 1, transition: { duration: 1.4 }}
    }
    return (
    <>
    <SEO
    pageMeta={{
      title: "Home",
      keywords: ["Fashion", "Gallery", "Agency"],
      description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major"
    }}>
      <>
      <motion.div
       className='layerone'
        variants={layerone}
        initial="hidden"
        animate="show"
        >
        <motion.div
          className="fadsintro"
          variants={item}
        >
          <h1>Fashion and Design Society</h1>
        </motion.div>
      </motion.div>
      </>
      <div className="scrollable" data-scrollbar>
      <div className="wrap-overflow">
      <>
      <div ref={fadsbio} className="layertwo">
        <div> 
          <div ref={biocover} className="bioreveal"/> 
          <div className="text">
          <h3 ref={biotxt}><em>FADS offers students a space to pursue fashion
                related interests outside of their major, with
                the opportunities and professional environment
                to prepare them for creative careers.</em>
              </h3>
          </div>
        </div>
        
      </div>
      </>
      <div className="layerfour" ref={containerRef}>
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
        <div className="aboutuswrapper"  ref={AboutRef}>
          <div  className="ab-img-con">
              <img src={Aboutpic} alt="FADS board members" className='aboutpic'/>
              <div ref={overlayref} className='overlay'/>
          </div>
          <div className="ab-text">
            <h2 ref={abRef}>ABOUT US</h2>
            <h3 ref={abtextref}>Meet the diverse group of career minded 
            individuals at Syracuse University who share 
            a passion for creativity, design, and fashion.</h3>
          </div>
        </div>

        <div  ref={agency} className="layerseven">
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
        <>
        <Footer/>
        </>
      </div>
      </div>
      </SEO>
    </>
    );
  };

export default Homepg;
