import React, { useRef, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/bio.scss';
import SEO from "./SEO";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LoadingScreen from './LoadingScreen';
import Slider from "react-slick";
import {ReactComponent as EmailIcon} from '../assets/images/instagramDark.svg';
import {ReactComponent as InstagramIcon} from '../assets/images/instagramDark.svg';
import {ReactComponent as LinkedInIcon} from '../assets/images/linkedinDark.svg';
import { useParams } from 'react-router-dom';

function Bio({ members }){
    const { slug } = useParams();
    const member = members.find((member) => member.slug === slug);

    let settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        focusOnSelect: false,
        autoplaySpeed: 1500,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        className: "sliderBio",
        responsive: [
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

      return (
        <SEO
        pageMeta={{
        title: ''+ member.memberName +' | E-Board',
        keywords: ["Fashion", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "Bio of eboard member"
      }}>
        <div className="biowrapper">
            <div className="bio-header">
                <h1>{member.memberName}</h1>
                <h4>{member.memberPosition}</h4>
            </div>
            <>
                <Row className="actualbio" noGutters={true}>
                    <Col md={6} className="bioPic">
                        <img src={member.agencyImg.url} alt={"picture of" + member.memberName}/>
                    </Col>
                    <Col md={5} className="biocontent">
                        <div className="desBio">
                        <p>{member.bio.description }</p>
                        </div>
                        <Row className="socialList">
                            <a className="social" id="not" href={member.bio.facebook} target="_blank" rel="noopener noreferrer" >
                              <EmailIcon className="icon"/>
                            </a>
                            <a href={member.bio.ig} className="social" target="_blank" rel="noopener noreferrer" >
                              <InstagramIcon className="icon"/>
                            </a>
                            <a href={member.bio.linkedIn} className="social" target="_blank" rel="noopener noreferrer" >
                              <LinkedInIcon className="icon"/>
                            </a>
                        </Row>
                    </Col>
                </Row>
                <div className="portfolioTxt">
                    <h2>Noteable Work</h2>
                    <a href={member.bio.portfolioLink} target="_blank" rel="noopener noreferrer">
                    <div className="bioBttn">
                    <div className="biolinkbtn">
                      <div className="biocirclelink"/>
                      <p className="biolinktext">View my full portfolio &#10230;</p>
                    </div>
                    </div>
                    </a>
                </div>
                <div className="showcase">
                  <Slider {...settings}>
                    {member.bio.showcase.map((item) => {
                        return (
                        <ul>
                        <img src={item.url} key={member.bio.id} alt={"Portfolio work by" + member.memberName}/>
                        </ul>
                        );
                    })}
                  </Slider>
                </div>
                
            </>
        </div>
        </SEO>
      )
};
 
export default withRouter(Bio);