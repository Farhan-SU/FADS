import React from 'react';
import '../assets/styles/pages.scss';
import SEO from '../components/SEO';
import {Row, Col} from 'react-bootstrap'
import HFadsBio from '../components/HomeCom/HFadsBio';
import HGallery from '../components/HomeCom/HGallery';
import HAboutus from '../components/HomeCom/HAboutus';
import HAgency from '../components/HomeCom/HAgency';
import HJoinus from '../components/HomeCom/HJoinus';
import Button from '../components/Button';


export default function Homepg ()  {  
  
 return (
    <>
    <SEO
    pageMeta={{
      title: "Home",
      keywords: ["Fashion", "Gallery", "Agency"],
      description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major"
    }}>
    <>
    <div className="wrapMobileStyle">
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
    <HFadsBio/>
    <HGallery/>
    <HAboutus/>
    <HAgency/>
    <HJoinus/>
    </div>
    </>  
    </SEO>
    </>
    );
};