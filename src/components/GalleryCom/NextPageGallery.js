import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import '../../assets/styles/galleryShows.scss';
import Prev from '../../assets/images/prev.png';
import {Row, Col} from 'react-bootstrap';

function NextPageGallery (props) {
    const {
        history,
        location,
        match,
        staticContext,
        title1,
        title2,
        to,
        onClick,
        ...rest
      } = props

    return(
        <>
        <Row noGutters={true} className="imgNext">
            <Col lg={12} className="endSec1">
                <div className="circusEndSecOnly">
                <h1 className="ontop">{props.title1}</h1><h2>{props.title2}</h2>
                </div>
            </Col>
            <Col lg={12} className="endseccontent">
            <img src={Prev} alt="relive it again design"/>
            </Col>
        </Row>
        <Row noGutters={true} className="endNext">
        <Col lg={12} className="alignLinkBox">
        <Link {...rest} 
            to={props.to}
            className="link"
            onClick={(event) => {
                onClick && onClick(event)
                history.push(to)
            }} 
        >
        <span className="link__arrow">
            <span></span>
            <span></span>
        </span>
        <span className="link__line"></span>
        </Link>
        </Col>
        </Row>
        </>
    );
};

export default withRouter(NextPageGallery);
