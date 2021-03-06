import React from 'react';
import '../assets/styles/aboutus.scss'
import SEO from './SEO';
import Reveal from './Reveal';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Row, Col} from 'react-bootstrap';
import membersCom from '../assets/images/committees.jpg';
import execCom from '../assets/images/executiveboardmembers.jpg';
import modelCom from '../assets/images/models.jpg';
import designersCom from '../assets/images/designers.jpg';
import FADSBg from '../assets/images/abtdesimg.png';
import FADSBgM from '../assets/images/mobileAbt.png'; 

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
                <Reveal wrapperElement="h2" direction="up" delay={1}>& creative network agency</Reveal>
                </Col>
            </Row>
            <div className="abtdes">
                <div className="destext">
                 <p>
                 The Fashion and Design Society is a diverse group of career minded individuals at
                 Syracuse University who share a passion for creativity, design, and fashion
                <br/>
                <br/>
                FADS is an open environment for the discussion of
                new ideas that brings important concerns of the
                global fashion industry and the changing social
                climate to the forefront of dialogue at Syracuse University
              <br/>
              <br/>
                We give our committed members an opportunity
                to gain real-time experience in fields that are
                potential career avenues for them in their future.
                FADS has general member meetings, model training, and fashion design meetings 
                each week to collaborate with on our work for our shows, photo shoots, and events
                </p>
            </div>
            <div className="fadsBgAbt">
                <img src={FADSBg} alt=""/>
            </div>
            </div>
        <Row className="joinHeader">
            <Col lg={12}><h2>Join Us</h2></Col>
            <Col lg={12}>
            <p>At FADS, you will have the opportunity to work with our team  on projects and shows in 
                a dynamic and energizing environment that will inspire, challenge and excite you as you 
                develop and improve on your skills alongside the FADS family.  Explore the positions we 
                offer below.
            </p>
            </Col>
        </Row>
        <Row noGutters={true} className="comitWrap">
        <Col md={6} className="comitBox">
        <div className="exec">
            <h2>EXECUTIVE BOARD MEMBERS</h2>
            <p>Shape the organization by contributing your unique skills and vision, while gaining 
               professional leadership experience</p>
        </div>
        <div className="figurecom">
        <img src={execCom} className="imgfig" alt="members illustration"/>
        </div>
        </Col>
        <Col md={6} className="comitBox">
        <div className="design">
            <h2>DESIGNERS</h2>
            <p>The chance to showcase your designs in a fashion show with trained models, professional 
                photographers and local media coverage. Have your work photographed for your portfolio</p>
        </div>
        <div className="figurecom">
        <img src={designersCom} className="imgfig" alt="members illustration"/>
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
        <img src={modelCom} className="imgfig" alt="members illustration"/>
        </div>
        </Col>
        <Col md={6} className="comitBox">
        <div className="members">
            <h2>COMMITTEE MEMBERS</h2>
            <p>Learn about and apply the aspect of fashion they are interested into the organization
                and production of a fashion show</p>
        </div>
        <div className="figurecom">
        <div className="figurecom">
            <img src={membersCom} className="imgfig" alt="members illustration"/>
        </div>
        </div>
        </Col>
        </Row>
          
        </div>
        </SEO>
        </>
    )
};
