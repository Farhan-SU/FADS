import React from 'react';
import '../assets/styles/layout.scss';
import {Container, Row} from 'react-bootstrap'

export default class SplashScreen extends React.PureComponent {
    
    render() {
        return (
        <Container fluid="true">
           <div className="splashwrapper">
            <Row>
                <div>
                    <video className="splash" autoPlay loop muted>
                    <source src={require('../assets/images/FadsLogo.mp4')} type="video/mp4" alt="logo"/>
                </video>
                </div>
            </Row>
           </div>
        </Container>
        );
    }
}
    
