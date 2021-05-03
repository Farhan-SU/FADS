import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/bio.scss';
import SEO from "./SEO";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LoadingScreen from './LoadingScreen';
import Slider from "react-slick";
import {ReactComponent as InstagramIcon} from '../assets/images/instagramDark.svg';
 
const MODELS_BIO = gql`
query ModelHome($slug: String) {
  modelHome(where: {slug: $slug}) {
    id
    modelName
    slug
    modelBios {
      id
      modelHeight
      modelBust
      modelWaist
      modelHips
      modelHair
      modelEyesColor
      modelShoeSize
      modelIg
      modelingWork {
        id
        url
      }
    }
    modelHeadshot {
      id
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
    const [modelsBio, setModelsBio ] = useState();


    useEffect(() => {
      if(loading === false && data){
        setModelsBio(data);
      }
    }, [loading, data])
    
    if (loading) return <LoadingScreen/>;
    if (error) return <Row className="error-bio">
        <Col lg={12}><h1>Looks Like Something went wrong</h1></Col>
        <Col lg={12} style={{fontSize: '1rem'}}><h3>{error.message}</h3></Col>
        </Row>

    const models = data.modelHome;

    if(data){
      return (
        <SEO
        pageMeta={{
        title: 'Models | Models',
        keywords: ["Fashion", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "FADS MOdels"
      }}>
        <div className="biowrapper">
            <Row className="bio-header">
              <Col><h1>{models.modelName}</h1></Col>
            </Row>
            <>
                <Row className="actualbio" noGutters={true}>
                    <Col md={6} className="bioPic">
                        <img src={models.modelHeadshot.url} alt={"picture of" + models.modelsName}/>
                    </Col>
                    <Col md={5} className="modelcontent">
                    {data.modelHome.modelBios.map(modelInfo => (
                        <div className="modelBioC">
                        <tr className="modelBioC">
                              <td><h2>Height:</h2></td>
                              <td>{modelInfo.modelBust}</td>
                          </tr>
                          <tr className="measurements">
                              <td><h2>Bust:</h2></td>
                              <td>{modelInfo.modelBust}</td>
                          </tr>
                          <tr className="measurements">
                              <td><h2>Waist:</h2></td>
                              <td>{modelInfo.modelWaist}</td>
                          </tr>
                          <tr className="measurements">
                              <td><h2>Hips:</h2></td>
                              <td>{modelInfo.modelHips}</td>
                          </tr>
                          <tr className="measurements">
                              <td><h2>Hair:</h2></td>
                              <td>{modelInfo.modelHair}</td>
                          </tr>
                          <tr className="measurements">
                              <td><h2>Eye:</h2></td>
                              <td>{modelInfo.modelEyesColor}</td>
                          </tr>
                          <tr className="measurements">
                              <td><h2>Shoe Size:</h2></td>
                              <td>{modelInfo.modelShoeSize}</td>
                          </tr>
                          <div className="socialListModels">
                            <a href={modelInfo.modelIg} className="social" target="_blank" rel="noopener noreferrer" >
                              <InstagramIcon className="icon"/>
                            </a>
                          </div>
                        </div>
                    ))}
                    </Col>
                </Row>

                <div className="portfolioTxt">
                    <h2>Modeling Work</h2>
                </div>
                <div className="showcase">
                {data.modelHome.modelBios.map(modelshow => (
                      <div className="showcaseImg">
                        <Slider {...settings}>
                        <img src={modelshow.modelingWork[0].url} alt=""/>
                        <img src={modelshow.modelingWork[1].url} alt=""/>
                        <img src={modelshow.modelingWork[2].url} alt=""/>
                        <img src={modelshow.modelingWork[3].url} alt=""/>
                        </Slider>
                      </div>
                    ))}    
                </div>
                
            </>
        </div>
        </SEO>
      )};
};

export default withRouter(ModelsBio);