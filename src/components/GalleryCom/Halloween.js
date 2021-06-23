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
                <Reveal wrapperElement="h1" direction="up" delay={0.1}>Halloween</Reveal>
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
<section className="creditsSec">
    <Row noGutters={true} className="credits">
        <Col lg={5} sm={12} className="creditsMember">
                <h2>Videographer</h2>
            <a href="https://fashiondesignsociety.com/agency/bio/jessie-zhai">
                <p className="linkBio">Jessi Zhai &#8594;</p>
            </a>
            <p>Catalina Giraldo</p>
        </Col>
        <Col lg={5} sm={12} className="creditsMember">
            <h2>Makeup Artist</h2>
            <a href="https://fashiondesignsociety.com/agency/bio/annie-grace">
            <p className="linkBio">Anne Horstein  &#8594;</p>
            </a>
        </Col>
        <Col lg={5} sm={12} className="creditsMember">
            <h2>Stylist</h2>
            <a href="https://fashiondesignsociety.com/agency/bio/emily-goldberg">
            <p className="linkBio">Emily Goldberg  &#8594;</p>
            </a>
            <a href="https://fashiondesignsociety.com/agency/bio/jackson-ensley">
            <p className="linkBio">Jackson Ensely  &#8594;</p>
            </a>
            <p>Maya Campos</p>
            <p>Lily Tubman</p>
        </Col>
        <Col lg={5} sm={12} className="creditsMember">
            <h2>Models</h2>
            <a href="https://fashiondesignsociety.com/agency/bio/zuzanna-mlynarczyk">
            <p className="linkBio">Zuzanna Mlynarczyk  &#8594;</p>
            </a>
            <p>Katie Nehring</p>
            <p> Axelle Azoulay</p>
        </Col>
    </Row>
</section>
 
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