import React, {useState, useEffect} from 'react';
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
    modelHeadshot {
      handle
      fileName
      url
    }
  }
}
`;

function ModelsBio(props) {

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
          const [ modelsBio, setModelsBio ] = useState();


          useEffect(() => {
            if(loading === false && data){
                setModelsBio(data);
            }
        }, [loading, data])
    
    if (loading) return <LoadingScreen/>;
    if (error) return <Row className="error-bio">
        <Col lg={12}><h1>Looks Like Something went wrong</h1></Col>
        <Col lg={12}><h3>{error.message}</h3></Col>
        </Row>

    const models = data.modelHome;

    if(data){
      return (
        <SEO
        pageMeta={{
        title: ''+ models.modelName +' | Models',
        keywords: ["Fashion", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "FADS MOdels"
      }}>
        <div className="biowrapper">
            <div className="bio-header">
                <h1>{models.modelName}</h1>
            </div>
            <>
                <Row className="actualbio" noGutters={true}>
                    <Col md={6} className="bioPic">
                        <img src={models.modelHeadshot.url} alt={"picture of" + models.modelsName}/>
                    </Col>
                    <Col md={5} className="biocontent">
                        <div className="desBio">
                        <table>
                            <tr>
                                <td>Height:</td>
                                <td>{models.modelheight}</td>
                            </tr>
                            <tr>
                                <td>Bust: </td>
                                <td>{models.modelBust}</td>
                            </tr>
                            <tr>
                                <td>Waist: </td>
                                <td>{models.modelWaist}</td>
                            </tr>
                            <tr>
                                <td>Hips: </td>
                                <td>{models.modelHips}</td>
                            </tr>
                            <tr>
                                <td>Hair: </td>
                                <td>{models.modelHair}</td>
                            </tr>
                            <tr>
                                <td>Eye: </td>
                                <td>{models.modelEyesColor}</td>
                            </tr>
                            <tr>
                                <td>Shoe Size: </td>
                                <td>{models.modelShoeSize}</td>
                            </tr>
                        </table>
                        </div>
                        <Row className="socialList">
                            <a href={models.modelIg} className="social" target="_blank" rel="noopener noreferrer" >
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
                    {models.modelingWork.map((item) => {
                        return (
                        <ul>
                        <img src={item.url} key={models.id} alt={"Portfolio work by" + models.modelsName}/>
                        </ul>
                        );
                    })}
                  </Slider>
                </div>
                
            </>
        </div>
        </SEO>
      )};
};

export default withRouter(ModelsBio);