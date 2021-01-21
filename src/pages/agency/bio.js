import React, { useRef, useEffect, useState} from 'react';
import { Link, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';
import SEO from "../../components/SEO";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {ReactComponent as Facebook} from '../../assets/images/facebook.svg';
import {ReactComponent as IG} from '../../assets/images/instagram.svg';
import {ReactComponent as Linkedin} from '../../assets/images/linkedin.svg';
import {gsap} from 'gsap';
import { Draggable } from "gsap/Draggable";
import LoadingScreen from '../../components/LoadingScreen';
import '../../assets/styles/bio.scss';

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable); 
};

const MEMBER = gql`
query Member($slug: String) {
  member(where: {slug: $slug}) {
    id
    memberName
    memberPosition
    slug
    bio {
      ... on Bio {
        description
        bannerimg {
          url
        }
        position
        facebook
        linkedIn
        portfolioLink
        ig
        showcase {
          url
        }
      }
    }
    agencyImg {
      handle
      fileName
      url
    }
  }
}
`;

const Slide = ({ imageSource }) => {
  return (
    <div className="slide">
      <div className="preview">
        <img src={imageSource} alt="Some work done by this person" draggable="true" />
      </div>
    </div>
  );
};

export default function Bio(props) {
 

   const sliderRef = useRef();

   useEffect(() => {
    console.log(sliderRef.current);
    Draggable.create(sliderRef.current, {
      type: "x, y",
      dragClickables:true
      /*bounds: {
        minX: -sliderRef.current.clientWidth + window.innerWidth * 1.1,
        maxX: 0
      }*/
    });
  }, []);

    const { loading, error, data } = useQuery(MEMBER, {
            variables: { slug: props.match.params.slug},
          });
    
    if (loading) return <LoadingScreen/>;
    if (error) return <div className="error-bio"><h1>{error.message}</h1></div>;

    const member = data.member;
    let bio = null;

    if (member.bio.length > 0) {
      bio = member.bio[0];
    }
      return (
        <SEO
        pageMeta={{
        title: ''+ member.memberName +' | E-Board',
        keywords: ["Fashion", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: bio.description
      }}>
        <div className="biowrapper">
            <div className="bio-header">
                <h1>{member.memberName}</h1>
                <h4>{member.memberPosition}</h4>
                <div className="bannerBio">
                    <img src={bio.bannerimg.url} className="banner-img" alt={"Cropped picture only showing the eyes of" + member.memberName}/>
                </div>
            </div>
            <>
                <Row className="actualbio">
                    <Col md={6} className="bioPic">
                        <img src={member.agencyImg.url}/>
                    </Col>
                    <Col md={5} className="biocontent">
                        <div className="desBio">
                        <p>{ bio.description }</p>
                        </div>
                        <Row style={{width: '84%', height: '100%'}}>
                            <a className='not' href={ bio.facebook } target="_blank" rel="noopener noreferrer" ><Facebook/></a>
                            <a href={bio.ig} target="_blank" rel="noopener noreferrer" ><IG/></a>
                            <a href={ bio.linkedIn } target="_blank" rel="noopener noreferrer" ><Linkedin/></a>
                        </Row>
                    </Col>
                </Row>
                <div className="portfolioTxt">
                    <h2>Some of my most memorable work</h2>
                    <a href={bio.portfolioLink} target="_blank" rel="noopener noreferrer">
                    <div className="bioBttn">
                      <div class="arrow">
                        <div class="arrow-top"></div>
                        <div class="arrow-bottom"></div>
                      </div> 
                      <span class="linktext">View my full portfolio</span>
                    </div>
                    </a>
                </div>
                <div className="showcase">
                  <div className="slider" ref={sliderRef}>
                    {bio.showcase.map((item, index) => {
                        return (
                        <Slide key={index} imageSource={item.url} />
                        );
                    })}
                  </div>
                </div>
                
            </>
        </div>
        </SEO>
      );
};