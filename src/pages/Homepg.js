import React, {useRef,useEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles/pages.scss';
import SEO from '../components/SEO';
import {Row, Col} from 'react-bootstrap'
import HFadsBio from '../components/HFadsBio';
import HGallery from '../components/HGallery';
import HAboutus from '../components/HAboutus';
import HAgency from '../components/HAgency';
import HJoinus from '../components/HJoinus';
import Button from '../components/Button';



if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}; 

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
    </>  
    </SEO>
    </>
    );
};