import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/layout.scss';
import {ReactComponent as Facebook} from '../assets/images/facebook.svg';
import {ReactComponent as Twitter} from '../assets/images/twitter.svg';
import {ReactComponent as IG} from '../assets/images/instagram.svg';
import {ReactComponent as Linkedin} from '../assets/images/linkedin.svg';


const Footer = () => {             

    return(
        <>
        <footer className="container"> 
        <Row className="footer_row">
            <Col md={4} className='first'>
            <div className="fads">
                <h4>Fashion And Design Society</h4>
                <span><i>Syracuse, NY</i></span>
            </div>
            <Row style={{width: '84%'}}>
            <a className='social not' href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><Facebook/></a>
            <a className='social' href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><Twitter/></a>
            <a className='social' href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><IG/></a>
            <a className='social' href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><Linkedin/></a>
            </Row>
            </Col>
            <Col md={7} className='second'>
            <h1><i>SO HOW CAN WE HELP YOU SHINE?</i></h1>
            <div className="emailus">
                <h3>INQUIRES at</h3>
                <a key="Email" component="a" href="syracusefads@gmail.com" target="_top">syracusefads@gmail.com</a>
            </div>
            </Col>
        </Row>
        </footer>
        </>
    )
}

export default Footer;