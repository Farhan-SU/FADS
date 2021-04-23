import React from 'react';
import {withRouter} from 'react-router-dom';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryEditorial.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import halloweenEdit1w from '../../assets/images/halloweenEdit/cover1.webp';
import halloweenEdit1 from '../../assets/images/halloweenEdit/cover1.png';
import halloweenEdit2w from '../../assets/images/halloweenEdit/cover2.webp';
import halloweenEdit2 from '../../assets/images/halloweenEdit/cover2.png';
import NextPageGallery from './NextPageGallery';
import Reveal from '../Reveal';
import {Video, Transformation} from 'cloudinary-react';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};

function Halloween () {

    return (
        <>
        <SEO  
          pageMeta={{
          title: "Halloween | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Sepetember 2020 editorial photoshoot for The Gallery Fashion Show"
        }}>
        <div className="galleryShows">
            <Row className="spacer">
                <Col lg={12} className="scaleDownTxt">
                <Reveal wrapperElement="h1" direction="up" delay={0.1} style={{fontSize: '2.5rem'}}>Halloween</Reveal>
                </Col>
                <Col lg={12}>
                <Reveal wrapperElement="h3" direction="up" delay={0.5}>12/2020</Reveal>
                </Col>
            </Row>
        <div className="wrapperNonHoritzontal">
        <Row className="videoContainerGal">
         <Col lg={10} className="halloweenVideo">
            <Video cloudName="fadscloud" width="100%" 
                publicId="HalloweenVid1" controls={true} 
                loading="lazy" 
                fallbackContent="Your browser does not support HTML5 video tags." >
                <Transformation format="auto"/>
                <Transformation background="#fbfbfb"/>
            </Video>
         </Col>
         </Row>

        <Row noGutters={true} className="Halloween">
            <Col lg={4}>
            <Video cloudName="fadscloud" width="100%" 
                publicId="HalloweenVid2" autoPlay="true" controls="false" 
                loading="lazy" 
                fallbackContent="Your browser does not support HTML5 video tags." >
                <Transformation format="auto"/>
                <Transformation background="#fbfbfb"/>
            </Video>
            </Col>
    
            <Col lg={7}>
            <Video cloudName="fadscloud" width="100%" 
                publicId="HalloweenVid3" autoPlay="true" controls="false" 
                loading="lazy" 
                fallbackContent="Your browser does not support HTML5 video tags." >
                <Transformation format="auto"/>
                <Transformation background="#fbfbfb"/>
            </Video>
            </Col>
        </Row>

        <Row noGutters={true} className="bothImages">
        <Col lg={4} className="underImg">
            <ImgWebp
                src={halloweenEdit1w}
                fallback={halloweenEdit1}
                alt="Boggiee Film"
                className="halloween2"       
                />
            </Col>
            <Col lg={4} className="underImg">
                <ImgWebp
                src={halloweenEdit2w}
                fallback={halloweenEdit2}
                alt="Boggiee Film"
                className="halloween1"       
                />
            </Col>
        </Row>
        </div>
        <div className="endsec">
        <div className="halloweenEndSec">
            <NextPageGallery to='/gallery/editorials/work-wear-vintage' title1='Work Wear' title2='Vintage'/>
        </div>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(Halloween);