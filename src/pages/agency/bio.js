import React, { useRef, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../../assets/styles/bio.scss';
import SEO from "../../components/SEO";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {gsap} from 'gsap';
import { Draggable } from "gsap/Draggable";
import LoadingScreen from '../../components/LoadingScreen';
import Facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import LinkedIn from '../../assets/images/linkedin.png';
import Slider from "react-slick";



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

function Bio(props) {

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
    centerMode: false,
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
            </div>
            <>
                <Row className="actualbio" noGutters={true}>
                    <Col md={6} className="bioPic">
                        <img src={member.agencyImg.url} alt={"picture of" + member.memberName}/>
                    </Col>
                    <Col md={5} className="biocontent">
                        <div className="desBio">
                        <p>{ bio.description }</p>
                        </div>
                        <Row style={{width: '84%', height: '100%'}}>
                            <a className='not' href={ bio.facebook } target="_blank" rel="noopener noreferrer" >
                              <img src={Facebook} alt="Facebook Icon" className="fb"/>
                            </a>
                            <a href={bio.ig} target="_blank" rel="noopener noreferrer" >
                              <img src={instagram} alt="Facebook Icon" className="social"/>
                            </a>
                            <a href={ bio.linkedIn } target="_blank" rel="noopener noreferrer" >
                             <img src={LinkedIn} alt="Facebook Icon" className="social"/>
                            </a>
                        </Row>
                    </Col>
                </Row>
                <div className="portfolioTxt">
                    <h2>Some of my most memorable work</h2>
                    <a href={bio.portfolioLink} target="_blank" rel="noopener noreferrer">
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
                    {bio.showcase.map((item) => {
                        return (
                        <ul>
                        <img src={item.url} key={bio.id} alt={"Portfolio work by" + member.memberName}/>
                        </ul>
                        );
                    })}
                  </Slider>
                </div>
                
            </>
        </div>
        </SEO>
      );
};

export default withRouter(Bio);