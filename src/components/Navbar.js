import React, { useState } from 'react';
import {NavLink, Link, withRouter, useHistory} from "react-router-dom";
import {Row, Col} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import '../assets/styles/layout.scss';
import ImgWepb from './ImgWebp';
import navLogo from '../assets/images/navLogo.gif';
import navLogoWeb from '../assets/images/navLogo.webp';


function Navbar() {

  let history = useHistory();
  function goHome() {
    history.push("/");
  };

  return (
      <Row className='navwrapper'>
            <Col lg={6} className="logoCol">
            <NavLink className="logoNavBox" exact to="/" onClick={goHome}>
              <ImgWepb
                src={navLogoWeb}
                fallback={navLogo}
                alt="FADS Logo"
                className="navLogo"
              />
            </NavLink>
            </Col>
            <Col lg={5} className="linkCol">
              <Row noGutters={true}>
                <Col data-order="1">
                  <NavLink to="/gallery" exact className="navlinks" activeStyle={{color: "#875dfa"}}>Gallery</NavLink>
                </Col>
                <Col data-order="2">
                  <NavLink to="/aboutus" exact className="navlinks" activeStyle={{color: "#875dfa"}}>About Us</NavLink>
                </Col>
                <Col data-order="3">
                  <NavLink to="/agency" className="navlinks" activeStyle={{color: "#875dfa"}}>Agency</NavLink>
                </Col>
                <Col data-order="4">
                  <NavLink to="/press" exact className="navlinks" activeStyle={{color: "#875dfa"}}>Press</NavLink>
                </Col>
                <Col data-order="5">
                  <NavLink to="/f4" className="navlinks" id="f4nav" activeStyle={{color: "#875dfa"}}>F*4</NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
  );
}

export default withRouter(Navbar);

