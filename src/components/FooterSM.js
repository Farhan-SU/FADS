import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/layout.scss';
import Facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import LinkedIn from '../assets/images/linkedin.png';


const FooterSM = () => {             

    return(
        <>
        <footer className="container-sm"> 
        <Row className="footer_row-sm">
            <Col md={6} className='first-sm'>
            <div className="fads">
                <h4>Fashion And Design Society</h4>
                <span><i>Syracuse, NY</i></span>
            </div>
            <Row className="media">
            <Col xs={4} className="linkbox">
                <a className='social-sm except' href="https://www.facebook.com/syracusefads" target="_blank" rel="noopener noreferrer" >
                <img src={Facebook} alt="facebook icon"/>
                </a>
            </Col>
            <Col xs={4} className="linkbox">
                <a className='social-sm' href="https://www.instagram.com/fashiondesignsociety/" target="_blank" rel="noopener noreferrer" >
                <img src={instagram} alt="Instagram Icon"/>
                </a>
            </Col>
            <Col xs={4} className="linkbox">
                <a className='social-sm' href="https://www.linkedin.com/company/fashion-and-design-society/" target="_blank" rel="noopener noreferrer" >
                <img src={LinkedIn} alt="LinkedIn Icon"/>
                </a>
            </Col>
            </Row>
            </Col>
            <Col md={6} className='second-sm'>
            <div className="contact">
                <h3>INQUIRIES at</h3>
                <a key="Email" component="a" href="mailto:syracusefads@gmail.com" target="_blank">syracusefads@gmail.com</a>
            </div>
            </Col>
        </Row>
        </footer>
        </>
    )
}

export default FooterSM;