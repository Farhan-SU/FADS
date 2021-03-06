import React, { useState, useRef, useEffect } from 'react';
import {NavLink, withRouter, useHistory} from "react-router-dom";
import '../assets/styles/Mobilenav.scss';
import navLogo from '../assets/images/navLogo.gif';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Facebook from '../assets/images/fbHome.png';
import Instagram from '../assets/images/igHome.png';
import LinkedIn from '../assets/images/linkedinHome.png';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
}; 

function MobileNav() {
  
  const history = useHistory();
  
    function goHome() {
    history.push("/");
    }

  const smNavTl = useRef(null);
  const nav = useRef(null);
  const navwrap = useRef(null);
  const navContent = useRef(null);
  const [menuOpen, setmenuOpen] = useState(false);
  const showmenu = false;

  const homeSm = useRef(null);
  const gallerySm = useRef(null);
  const aboutSm = useRef(null);
  const agencySm = useRef(null);
  const pressSm = useRef(null);
  const ffour = useRef(null);
  const info = useRef(null);
  const socialSm = useRef(null);

  const intialheightNav = window.innerHeight/8.5;
  const openheightNav = window.innerHeight * 1.02;


  useEffect(() => {
    gsap.set(navwrap.current, {height: intialheightNav});
    smNavTl.current = gsap.timeline({paused: true,  defaults: { duration: 1, ease: "sine.inOut" }})
    .fromTo(navwrap.current, {height: intialheightNav}, {height: openheightNav})
    .fromTo(nav.current, {autoAlpha: 0}, {autoAlpha: 1}, '-=0.8')
    .fromTo(navContent.current, {autoAlpha: 0, y: 200}, {autoAlpha: 1, y: 0, display: 'grid'})
    .fromTo([homeSm.current, gallerySm.current, aboutSm.current, agencySm.current, pressSm.current, ffour.current],
      {autoAlpha: 0, y: 40}, {autoAlpha: 1, y: 0, stagger: {each: 0.32}}, "-=1")
    .fromTo(info.current, {duration: 1, autoAlpha: 0, y: 60}, {autoAlpha: 1, y: 0}, "-=0.9")
    .fromTo(socialSm.current, {duration: 0.5, autoAlpha: 0, y: 80}, {duration: 0.5, autoAlpha: 1, y: 0}, "-=0.7")
    .reverse();
  }, []);


  useEffect(() => {
    smNavTl.current.reversed(!menuOpen);
  }, [menuOpen]);

  function toggleNav() {
    setmenuOpen(!menuOpen);
  }
  

  const openClass = menuOpen ? 'open' : "";
  const showClass = showmenu ? 'showmenu' : "";
  
  return (
    <>
    <div className="mobilenavWrapper" ref={navwrap}>
      <div className="smLogo"> 
      <NavLink to="/" exact>
        <img src={navLogo} alt="fads logo"/> 
      </NavLink> 
      </div>
      <div className={`burger ${openClass}`} onClick={toggleNav}>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
      <nav className={`nav ${showClass}`} ref={nav}>
        <div className="nav-content" ref={navContent}>
          <div className="nav-inner">
            <ul className="nav-items">
              <NavLink to="/" exact className="nav-item" ref={homeSm} onClick={toggleNav} activeStyle={{color: "#ffe2bc"}}><li>Home</li></NavLink>
              <NavLink to="/gallery" className="nav-item" ref={gallerySm} onClick={toggleNav} activeStyle={{color: "#ffe2bc"}}><li>Gallery</li></NavLink>
              <NavLink to="/aboutus" exact  className="nav-item" ref={aboutSm} onClick={toggleNav} activeStyle={{color: "#ffe2bc"}}><li>About Us</li></NavLink>
              <NavLink to="/agency" className="nav-item" ref={agencySm} onClick={toggleNav} activeStyle={{color: "#ffe2bc"}}><li>Agency</li></NavLink>
              <NavLink to="/press" exact className="nav-item" ref={pressSm} onClick={toggleNav} activeStyle={{color: "#ffe2bc"}}><li>Press</li></NavLink>
              <NavLink to="/f4" exact className="nav-item" ref={ffour} onClick={toggleNav} activeStyle={{color: "#ffe2bc"}}><li>F4 Speakers</li></NavLink>
            </ul>
  
            <ul className="nav-info" ref={info}>
              <li className="nav-info-item"><em>Fashion And Design Society</em></li>
              <li className="nav-info-item"><em>Syracuse, NY</em></li> 
              <li className="nav-info-item">Inquires at:</li> 
              <li className="nav-info-item">
              <a key="Email" component="a" href="mailto:syracusefads@gmail.com" target="_blank" rel="noopener noreferrer">syracusefads@gmail.com</a></li>  
            </ul>
            <div className="smNavsocial" ref={socialSm}>
              <a className='smSocial' href="https://www.facebook.com/syracusefads" target="_blank" rel="noopener noreferrer" >
                <img src={Facebook} alt="facebook icon"/>
              </a>
              <a className='smSocial' href="https://www.instagram.com/fashiondesignsociety/" target="_blank" rel="noopener noreferrer" >
                <img src={Instagram} alt="Instagram Icon"/>
              </a>
              <a className='smSocial' href="https://www.linkedin.com/company/fashion-and-design-society/" target="_blank" rel="noopener noreferrer" >
               <img src={LinkedIn} alt="LinkedIn Icon"/>
              </a>
            </div> 
          </div>
        </div>
      </nav>
    </div>
    </>
  )
};

export default withRouter(MobileNav);

