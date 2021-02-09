import React, {useRef,useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/pages.scss';
import {Row, Col} from 'react-bootstrap';
import joinFadsvid from '../../assets/images/fadsfam.mp4';

export default function HJoinus()  {  
   
    return (
      <>
        <div className="layersix">
        <div  className="vidwrapper">
              <video preloaded="true" autoPlay loop muted playsInline className='aboutpic'>
                  <source src={joinFadsvid} type='video/mp4' className='joinvid'/>
              </video>
          </div> 
          <div className="clipwrapper">
          <Row className="invite">
            <Col md={6} sm={12} className="invitetext">
            <h3>Become apart of the family. Applications are open every semester. Be on the lookout for applications and model call on our Instagram page.</h3>
            </Col>
            <Col md={4} sm={12}>
            <div className="joinLink">
            <Link to="/aboutus">
                <div className="linkbtn">
                  <div className="circlelink"/>
                  <p className="linktext">Explore our positions &#10230;</p>
                </div>
            </Link>
          </div>
            </Col>
          </Row>
        </div></div>
      </>
    );
};