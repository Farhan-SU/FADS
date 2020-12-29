import React from 'react';
import '../assets/styles/layout.scss';
import {Container, Row} from 'react-bootstrap'
import ImgWepb from './ImgWebp';
import navLogo from '../assets/images/navLogo.gif';
import navLogoWeb from '../assets/images/navLogo.webp';

export default class SplashScreen extends React.PureComponent {
    
    render() {
        return (
        <Container fluid="true">
            <Row className="splashwrapper">
                <ImgWepb
                src={navLogoWeb}
                fallback={navLogo}
                alt="FADS Logo"
                style={{width: '100%'}}
              />
            </Row>
        </Container>
        );
    }
}
    
