import React, { useState } from 'react';
import {NavLink, Link, withRouter, useHistory} from "react-router-dom";
import {Row, Col} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import '../assets/styles/layout.scss';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';
import ImgWepb from './ImgWebp';
import navLogo from '../assets/images/navLogo.gif';
import navLogoWeb from '../assets/images/navLogo.webp';


function Navbar() {
  const history = useHistory();

  function goHome() {
  history.goBack("/");
  }

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 150;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';


  return (
      <Row className='navwrapper'>
        <div className={`header ${shadowStyle} ${hiddenStyle}`}>
          <Link to="/" exact onClick={goHome}>
            <Col md={true} md={5} className="logoCol">
              <ImgWepb
                src={navLogoWeb}
                fallback={navLogo}
                alt="FADS Logo"
                style={{width: '50%'}}
              />
            </Col>
          </Link>
          <Col md={true} md={5} className="linkList">
          <Nav className='nav'>
            <Nav.Item>
                 <NavLink to="/Gallery" exact className="navlinks" activeStyle={{fontWeight: "bold",color: "red"}}>Gallery</NavLink>
            </Nav.Item>

            <Nav.Item>
                  <NavLink to="/Aboutus" exact className="navlinks">About Us</NavLink>
            </Nav.Item>
            
            <Nav.Item>
                  <NavLink to="/Agency" className="navlinks">Agency</NavLink>
            </Nav.Item>
            
            <Nav.Item>
                  <NavLink to="/Press" exact className="navlinks">Press</NavLink>
            </Nav.Item>
          </Nav>
          </Col>
          </div>
          </Row>
  );
}

export default withRouter(Navbar);

