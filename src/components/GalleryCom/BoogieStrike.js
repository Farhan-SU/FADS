import React from 'react';
import {withRouter} from 'react-router-dom';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../assets/styles/galleryEditorial.scss';
import ImgWebp from '../ImgWebp';
import SEO from '../SEO';
import { Col, Row } from 'react-bootstrap';
import NextPageGallery from './NextPageGallery';
import Reveal from '../Reveal';
import {Video, Transformation} from 'cloudinary-react';
import BoogieStrike1W from '../../assets/images/boogieStrike/boogiestrike1.webp';
import BoogieStrike1 from '../../assets/images/boogieStrike/boogiestrike1.png';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
};


function BoogieStrike () {

    return (
        <>
        <SEO  
          pageMeta={{
          title: "Boogie Strike | Editorial",
          keywords: ["Fashion", "Gallery", "Agency", "Models", "Fashion Shows" ],
          description: "Sepetember 2020 editorial photoshoot for The Gallery Fashion Show"
        }}>
        <div className="galleryShows">
        <Row className="spacer">
            <Col lg={12}>
            <Reveal wrapperElement="h1" direction="up" delay={0.1}>Boogie Strike</Reveal>
            </Col>
            <Col lg={12}>
            <Reveal wrapperElement="h3" direction="up" delay={0.5}>12/2020</Reveal>
            </Col>
         </Row>
        <div className="wrapperNonHoritzontal">
        <Row className="videoContainerGal">
         <Col lg={10} className="boogieVideo">
         <Video cloudName="fadscloud" width="100%" 
                        publicId="BoogieStrikeVid" controls="true" 
                        loading="lazy" 
                        fallbackContent="Your browser does not support HTML5 video tags." >
                    <Transformation format="auto"/>
                </Video>
         </Col>
         </Row>

            <Row className="boogieImg">
            <Col  lg={10}>
            <ImgWebp
                src={BoogieStrike1W}
                fallback={BoogieStrike1}
                alt="Boggiee Film"
                className="bstrike"       
                />
            </Col>
            </Row>
        </div>
        <div className="endsec">
            <NextPageGallery to='/gallery/editorials/bodyspaceEditorial' title1='Body X' title2='Space'/>
        </div>
    </div>
    </SEO>
    </>
    )
};

export default withRouter(BoogieStrike);