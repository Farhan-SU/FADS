import React from "react";
import { Col, Row } from "react-bootstrap";
import '../assets/styles/press.scss';
import diane from '../assets/images/diane.png';
import ashley from '../assets/images/ashley.png';
import erin from '../assets/images/erin.png';
import shantanu from '../assets/images/shantanu.png';
import salehe from '../assets/images/salehe.png';

const F4speakers = () => {

  return (
    <>
    <div className="pressWrapper">
      <div className="pressHeader"/>
      <div className="f4bg">
      <div className="F4speakers">
        <h4>Latest Speakers</h4>
        <Row className="speakerposters">
          <Col md className="poster">
           <a href="https://www.instagram.com/syracusefads/">
             <img src={diane} alt="Diane Mills F4 Poster that links to the Interviews"/>
           </a>
          </Col>
          <Col md className="poster">
          <a href="https://www.instagram.com/tv/CDzHrwig4Zd/?utm_source=ig_web_copy_link" target="_blank">
             <img src={ashley} alt="Ashley De Rosa F4 Poster that links to the Interviews"/>
           </a>
          </Col>
          <Col md className="poster">
          <a href="https://www.instagram.com/tv/CDZDLzsARpv/?utm_source=ig_web_copy_link" target="_blank">
             <img src={shantanu} alt="Shantanu and Nikhil F4 Poster that links to the Interviews"/>
           </a>
          </Col>
          <Col md className="poster">
          <a href="https://www.instagram.com/tv/CDH0tg-jjAy/?utm_source=ig_web_copy_link" target="_blank">
             <img src={erin} alt="Erin Reimel F4 Poster that links to the Interviews"/>
           </a>
          </Col>
          <Col md className="poster">
          <a href="https://www.instagram.com/tv/CC4UDF_MBfS/?utm_source=ig_web_copy_link" target="_blank">
             <img src={salehe} alt="Salehe Bembury F4 Poster that links to the Interviews"/>
           </a>
          </Col>
          <Col md className="poster">
            <div className="tuned">
            <h2>Stay tuned for more!</h2>
            </div>
          </Col>
        </Row>
      </div>
      </div>
    </div>
    </>
  );
};
  
export default F4speakers;