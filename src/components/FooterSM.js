import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/layout.scss';
import {ReactComponent as Facebook} from '../assets/images/facebook.svg';
import {ReactComponent as Twitter} from '../assets/images/twitter.svg';
import {ReactComponent as IG} from '../assets/images/instagram.svg';
import {ReactComponent as Linkedin} from '../assets/images/linkedin.svg';


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
            <a className='social-sm except' href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><Facebook/></a>
            <a className='social-sm' href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><Twitter/></a>
            <a className='social-sm' href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><IG/></a>
            <a className='social-sm' href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><Linkedin/></a>
            </Row>
            </Col>
            <Col md={6} className='second-sm'>
            <div className="contact">
                <h3>INQUIRIES at</h3>
                <a key="Email" component="a" href="syracusefads@gmail.com" target="_top">syracusefads@gmail.com</a>
            </div>
            </Col>
        </Row>
        </footer>
        </>
    )
}

export default FooterSM;