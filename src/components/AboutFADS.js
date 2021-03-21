import React from 'react';
import '../assets/styles/aboutus.scss'
import SEO from './SEO';
import Reveal from './Reveal';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Row, Col} from 'react-bootstrap';
import ImgWebp from './ImgWebp';
import membersCom from '../assets/images/memberscom.png';
import execCom from '../assets/images/exec.png';
import modelCom from '../assets/images/modelcom.png';
import designersCom from '../assets/images/designerscom.png';

gsap.registerPlugin(ScrollTrigger);

export default function AboutTest () {

    return (
        <>
        <SEO
        pageMeta={{
        title: "Press",
        keywords: ["Fashion", "F4 Speakers", "Agency", "Interviews", "Alumni"],
        description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major."
        }}>
        <div className="wrapabtjoin">
            <Row className="abtheader">
                <Col lg={12}>
                <Reveal wrapperElement="h2" direction="up">A fashion collective</Reveal>
                </Col>
                <Col lg={12}>
                <Reveal wrapperElement="h2" direction="up" delay={0.8}>and creative network agency</Reveal>
                </Col>
            </Row>
            <div className="abtdes">
                <div className="destext">
                 <p>
                 The Fashion and Design Society is a diverse group of career minded individuals at
                 Syracuse University who share a passion for creativity, design, and fashion
                 FADS is an open environment for the discussion of new ideas that brings important 
                 concerns of the global fashion industry to the forefront at Syracuse University.
                <br/>
                <br/>
                 FADS is an open environment for the discussion of
                new ideas that brings important concerns of the
                global fashion industry and the changing social
                climate to the forefront of dialogue at SU.
              <br/>
              <br/>
                We give our committed members an opportunity
                to gain real-time experience in fields that are
                potential career avenues for them in their future.
                FADS has general member meetings, model training, and fashion design meetings 
                each week to collaborate with on our work for our shows, photo shoots, and events.
                </p>
            </div>
            </div>
        <div className="joinHeader">
            <h1>Join Us</h1>
            <p>At FADS, you will have the opportunity to work with our team  on projects and shows in 
                a dynamic and energizing environment that will inspire, challenge and excite you as you 
                develop and improve on your skills alongside the FADS family.  Explore the positions we 
                offer below.
            </p>

        </div>
        <Row noGutter={true} className="comitWrap">
        <Col md={6} className="comitBox">
        <div className="exec">
            <h2>EXECUTIVE BOARD MEMBERS</h2>
            <p>Shape the organization by contributing your unique skills and vision, while gaining 
               professional leadership experience</p>
        </div>
        <div className="figurecom">
            <ImgWebp
                src={execCom}
                fallback={execCom}
                className="imgfig"
                alt="3D illustration by by Cabeza Patata at https://theinspirationgrid.com/spotify-premium-campaign-by-cabeza-patata/"
            />
        </div>
        </Col>
        <Col md={6} className="comitBox">
        <div className="design">
            <h2>DESIGNERS</h2>
            <p>The chance to showcase your designs in a fashion show with trained models, professional 
                photographers and local media coverage. Have your work photographed for your portfolio</p>
        </div>
        <div className="figurecom">
            <ImgWebp
                src={designersCom}
                fallback={designersCom}
                className="imgfig"
                alt="3D illustration by ZHUAIRUI2011 on Behance at https://www.behance.net/gallery/93743927/Color-Fantasy"
            />
        </div>
        </Col>
        <Col md={6} className="comitBox">
        <div className="models">
            <h2 >MODELS</h2>
            <p>Get training from professional models, the opportunity to be in editorial-style photoshoots
               every month, and exposure to model for other SU clubs, local clothing companies, and Syracuse
            Fashion Week</p>
        </div>
        <div className="figurecom">
            <ImgWebp
                src={modelCom}
                fallback={modelCom}
                className="imgfig"
                alt="3D illustration by ZHUAIRUI2011 on Behance at https://www.behance.net/gallery/93743927/Color-Fantasy"
            />
        </div>
        </Col>
        <Col md={6} className="comitBox">
        <div className="members">
            <h2>COMMITTEE MEMBERS</h2>
            <p>Learn about and apply the aspect of fashion they are interested into the organization
                and production of a fashion show</p>
        </div>
        <div className="figurecom">
            <ImgWebp
                src={membersCom}
                fallback={membersCom}
                className="imgfig"
                alt="3D illustration by ZHUAIRUI2011 on Behance at  https://www.behance.net/gallery/100089591/3D-fashion-Summer-shows"
            />
        </div>
        </Col>
        </Row>
          
        </div>
        </SEO>
        </>
    )
};
