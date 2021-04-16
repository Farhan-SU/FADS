import React, { useRef, useEffect} from 'react';
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
 
const MODELS_BIO = gql`
query ModelHome($slug: String) {
    modelHome(where: {slug: $slug}) {
      id
      modelName
      slug
      modelBios {
        ... on ModelBio {
          modelHeight
          modelBust
          modelWaist
          modelHips
          modelHair
          modelEyesColor
          modelShoeSize
          modelIg
          modelingWork {
            url
          }
        }
      }
      modelHeadshot {
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
  
    const { loading, error, data } = useQuery(MODELS_BIO, {
            variables: { slug: props.match.params.slug},
          });
    
    if (loading) return <LoadingScreen/>;
    if (error) return <div className="error-bio"><h1>{error.message}</h1></div>;

    const modelsH = data.MODELS_BIO;
    let mbio = null;

    if (modelsH.mbio.length > 0) {
      mbio = modelsH.mbio[0];
    }
      return (
        <SEO
        pageMeta={{
        title: ''+ modelsH.modelName +' | Models',
        keywords: ["Fashion", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "FADS MOdels"
      }}>
        <div className="biowrapper">
            <div className="bio-header">
                <h1>{modelsH.modelName}</h1>
            </div>
            <>
                <Row className="actualbio" noGutters={true}>
                    <Col md={6} className="bioPic">
                        <img src={modelsH.modelHeadshot.url} alt={"picture of" + modelsH.modelsName}/>
                    </Col>
                    <Col md={5} className="biocontent">
                        <div className="desBio">
                        <table>
                            <tr>
                                <td>Height: </td>
                                <td>{mbio.modelheight}</td>
                            </tr>
                            <tr>
                                <td>Bust: </td>
                                <td>{mbio.modelBust}</td>
                            </tr>
                            <tr>
                                <td>Waist: </td>
                                <td>{mbio.modelWaist}</td>
                            </tr>
                            <tr>
                                <td>Hips: </td>
                                <td>{mbio.modelHips}</td>
                            </tr>
                            <tr>
                                <td>Hair: </td>
                                <td>{mbio.modelHair}</td>
                            </tr>
                            <tr>
                                <td>Eye: </td>
                                <td>{mbio.modelEyesColor}</td>
                            </tr>
                            <tr>
                                <td>Shoe Size: </td>
                                <td>{mbio.modelShoeSize}</td>
                            </tr>
                        </table>
                        </div>
                        <Row className="socialList">
                            <a href={mbio.modelIg} className="social" target="_blank" rel="noopener noreferrer" >
                              <InstagramIcon className="icon"/>
                            </a>
                        </Row>
                    </Col>
                </Row>
                <div className="portfolioTxt">
                    <h2>Modeling Work</h2>
                </div>
                <div className="showcase">
                  <Slider {...settings}>
                    {mbio.modelingWork.map((item) => {
                        return (
                        <ul>
                        <img src={item.url} key={mbio.id} alt={"Portfolio work by" + modelsH.modelsName}/>
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