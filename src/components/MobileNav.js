import React, { useState, useRef, useEffect } from 'react';
import {NavLink, withRouter, useHistory} from "react-router-dom";
import '../assets/styles/Mobilenav.scss';
import navLogo from '../assets/images/navLogo.gif';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {ReactComponent as Facebook} from '../assets/images/facebook.svg';
import {ReactComponent as IG} from '../assets/images/instagram.svg';
import {ReactComponent as Linkedin} from '../assets/images/linkedin.svg';

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
  const navContent = useRef(null);
  const [menuOpen, setmenuOpen] = useState(false);

  const homeSm = useRef(null);
  const gallerySm = useRef(null);
  const aboutSm = useRef(null);
  const agencySm = useRef(null);
  const pressSm = useRef(null);
  const info = useRef(null);
  const socialSm = useRef(null);

  useEffect(() => {
    smNavTl.current = gsap.timeline({paused: true,  defaults: { duration: 1, ease: "expo.out" }})
    .fromTo(nav.current, {opacity: 0}, {opacity: 1})
    .fromTo(navContent.current, {opacity: 0, y: 200}, {opacity: 1, y: 0, display: 'grid'})
    .fromTo([homeSm.current, gallerySm.current, aboutSm.current, agencySm.current, pressSm.current],
      {opacity: 0},
      {opacity: 1,
      stagger: {
        each: .3,
      }
    }, "-=1")
    .fromTo(info.current, {duration: 1, opacity: 0, y: 60, ease: "sine.inOut"}, {opacity: 1, y: 0, delay: 0.1, ease: "sine.inOut"}, "-=0.9")
    .fromTo(socialSm.current, {duration: 0.5, opacity: 0, y: 80, ease: "sine.inOut"}, {duration: 0.5, opacity: 1, y: 0, ease: "sine.inOut"})
    .reverse();
  }, []);

  useEffect(() => {
    smNavTl.current.reversed(!menuOpen);
  }, [menuOpen]);

  function toggleNav() {
    setmenuOpen(!menuOpen);
  }

  const openClass = menuOpen ? 'open' : "";
  
  return (
    <>
    <div className="mobilenavWrapper">
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
      <nav className="nav" ref={nav}>
        <div className="nav-content" ref={navContent}>
          <div className="nav-inner">
            <ul className="nav-items">
              <NavLink to="/" exact="true" className="nav-item" ref={homeSm} onClick={goHome} activeStyle={{color: "#ffe2bc"}}><li>Home</li></NavLink>
              <NavLink to="/Gallery" exact="true" className="nav-item" ref={gallerySm} activeStyle={{color: "#ffe2bc"}}><li>Gallery</li></NavLink>
              <NavLink to="/Aboutus" exact="true" className="nav-item" ref={aboutSm} activeStyle={{color: "#ffe2bc"}}><li>About Us</li></NavLink>
              <NavLink to="/Agency" exact="true" className="nav-item" ref={agencySm} activeStyle={{color: "#ffe2bc"}}><li>Agency</li></NavLink>
              <NavLink to="/Press" exact="true" className="nav-item" ref={pressSm} activeStyle={{color: "#ffe2bc"}}><li>Press</li></NavLink>
            </ul>
  
            <ul className="nav-info" ref={info}>
              <li className="nav-info-item"><em>Fashion And Design Society</em></li>
              <li className="nav-info-item"><em>Syracuse, NY</em></li> 
              <li className="nav-info-item">Collaboration or Inquires:</li> 
              <li className="nav-info-item">
              <a key="Email" component="a" href="mailto:syracusefads@gmail.com" target="_blank">syracusefads@gmail.com</a></li>  
            </ul>
            <div className="smNavsocial" ref={socialSm}>
              <a className='smSocial' href="https://www.facebook.com/syracusefads" target="_blank" rel="noopener noreferrer" ><Facebook/></a>
              <a className='smSocial' href="https://www.instagram.com/fashiondesignsociety/" target="_blank" rel="noopener noreferrer" ><IG/></a>
              <a className='smSocial' href="https://www.linkedin.com/company/fashion-and-design-society/" target="_blank" rel="noopener noreferrer" ><Linkedin/></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
};

export default withRouter(MobileNav);

