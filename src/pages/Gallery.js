import React, {lazy, Suspense} from 'react';
import {Row, Col} from 'react-bootstrap';
import '../assets/styles/gallery.scss';
import { Link, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import SEO from '../components/SEO';


const editorial = lazy(() => import('./gallery/editorial'));
const shows = lazy(() => import('./gallery/shows'));
 
export default function Gallery () {
  let { path, url } = useRouteMatch();
  console.log({url, path});

  return (
  <>
  <SEO
    pageMeta={{
      title: "Gallery",
      keywords: ["Fashion", "Gallery", "Agency"],
      description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major"
    }}>
  <>
      <Row className="wrapper">
        <Col md={6} className='editorial'>
        <Link to="./gallery/editorial">
          <div className="linkbox">
          <h1>EDITORIAL</h1>
          </div>
        </Link>
        </Col>
      
        <Col md={6} className="shows">
        <Link to="./gallery/shows">
        <div className="linkbox">
          <h1>SHOWS</h1>
        </div>
        </Link>
        </Col>
    </Row>   
  </>
  </SEO>
  </>
  );
};
 