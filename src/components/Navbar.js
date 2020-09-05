import React, { useState } from 'react';
import {Link, withRouter, useHistory} from "react-router-dom";
import {Row, Col} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import '../assets/styles/layout.scss';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';


function Navbar() {

  let history = useHistory();

  function goHome() {
    history.goBack("/");
  }

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 100;
  const TIMEOUT_DELAY = 500;

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
      <Row>
       <div className='navwrapper'>
        <div className={`header ${shadowStyle} ${hiddenStyle}`}>
          <Link to="/" onClick={goHome}>
            <Col md={5}>
              <video autoPlay loop  className='logo'> 
              <source src={require('../assets/images/logoonly.mp4')} type='video/mp4'/>
              </video>
            </Col>
          </Link>
          <Col md={7}>
          <Nav className='nav' activeKey="/home">
            <Nav.Item>
                 <Link to="/Gallery" className="navlinks" >Gallery</Link>
            </Nav.Item>

            <Nav.Item>
                  <Link to="/Aboutus"  className="navlinks">About Us</Link>
            </Nav.Item>
            
            <Nav.Item>
                  <Link to="/Agency" className="navlinks">Agency</Link>
            </Nav.Item>

            <Nav.Item>
                  <Link to="/Press" className="navlinks">Press</Link>
            </Nav.Item>
          </Nav>
          </Col>
          </div>
          </div>
          </Row>
  );
}

export default withRouter(Navbar);

