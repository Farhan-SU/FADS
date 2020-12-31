import React, { useRef, useEffect, useState} from 'react';
import { Link, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';
import SEO from "../../components/SEO";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import '../../assets/styles/bio.scss';
import {ReactComponent as Facebook} from '../../assets/images/facebook.svg';
import {ReactComponent as IG} from '../../assets/images/instagram.svg';
import {ReactComponent as Linkedin} from '../../assets/images/linkedin.svg';
import {gsap} from 'gsap';
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

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
          <img src={imageSource} alt="The Plant" draggable="false" />
        </div>
      </div>
    );
  };

export default function Bio(props) {

    const sliderRef = useRef(null);

    useEffect(() => {
        Draggable.create(sliderRef.current, {
          type: "x"
          /*bounds: {
            minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
            maxX: 0
          }*/
        });
      }, []);
    
    console.log(props)

    const { loading, error, data } = useQuery(MEMBER, {
            variables: { slug: props.match.params.slug},
          });
    
    if (loading) return <p>Loading ...</p>;
    if (error) return <div className="error-bio"><h1>{error.message}</h1></div>;

    const member = data.member;
    let bio = null;
    if (member.bio.length > 0) {
      bio = member.bio[0];
    }

      return (
        <SEO
        pageMeta={{
        title: "E-Boards | Agency",
        keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
      }}>
        <div className="biowrapper">
            <div className="bio-header">
                <h1>{member.memberName}</h1>
                <h4>{member.memberPosition}</h4>
                <div className="bannerBio">
                    <img src={bio.bannerimg.url} className="banner-img" alt=""/>
                </div>
            </div>
            <>
                <Row className="actualbio">
                    <Col md={6} className="bioPic">
                        <img src={member.agencyImg.url}/>
                    </Col>
                    <Col md={5} className="biocontent">
                        <h2>About me</h2>
                        <div className="desBio">
                        <p>{ bio.description }</p>
                        </div>
                        <Row style={{width: '84%'}}>
                            <a className='not' href={ bio.facebook } target="_blank" rel="noopener noreferrer" ><Facebook/></a>
                            <a href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><IG/></a>
                            <a href={ bio.linkedIn } target="_blank" rel="noopener noreferrer" ><Linkedin/></a>
                        </Row>
                    </Col>
                </Row>
                <div className="showcase">
                <div id="slider" className="slider" ref={sliderRef}>
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
