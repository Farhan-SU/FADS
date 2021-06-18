import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/gallery.scss';
import { NavLink} from 'react-router-dom';
import SEO from '../components/SEO';

export default function Gallery () {
 
  return (
  <>  
  <SEO
    pageMeta={{
      title: "Gallery",
      keywords: ["Fashion", "Gallery", "Agency"],
      description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major"
    }}>
  <>
      <Row className="wrapper">
        <Col xs={12} md={6} className='editorial'>
        <NavLink exact to="/gallery/editorial">
          <div className="linkbox">
          <h1>EDITORIAL</h1>
          </div>
        </NavLink>
        </Col>
        <Col xs={12} md={6} className="shows">
        <NavLink exact to="/gallery/shows">
        <div className="linkbox">
          <h1>SHOWS</h1>
        </div>
        </NavLink>
        </Col>
    </Row>   
  </>
  </SEO>
  </>
  );
};
 
