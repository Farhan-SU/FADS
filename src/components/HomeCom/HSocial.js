import React from 'react';
import { Row, Col} from 'react-bootstrap';
import '../../assets/styles/pages.scss';

export default function HSocial()  {  
                    
    return (
      <>
      <Row className="hpsocialWrap">  
        <Col xs={4} className="socialHome">
            <a href="https://www.facebook.com/syracusefads" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/fbHome.png')} alt="facebook icon"/>
            <h3>@Syracusefads</h3></a>
        </Col> 
        <Col xs={4} className="socialHome"> 
            <a href="https://www.instagram.com/fashiondesignsociety/" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/igHome.png')} alt="instagram icon"/>
            <h3>@fashiondesignsociety</h3></a>
        </Col>
        <Col xs={4} className="socialHome"> 
            <a href="https://www.linkedin.com/company/fashion-and-design-society/" target="_blank" rel="noopener noreferrer">
            <img src={require('../../assets/images/linkedinHome.png')} alt="LinkedIn icon"/>
            <h3>@fashion-and-design-society</h3></a>
        </Col>
      </Row>
      </>
    );
};