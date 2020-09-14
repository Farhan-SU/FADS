import React, { useRef, useEffect, lazy, Suspense} from 'react';
import {Row, Col} from 'react-bootstrap';
import Layout from '../components/Layout'
import '../assets/styles/gallery.scss';
import { Route, Link, Switch, useLocation} from 'react-router-dom';
import SEO from '../components/SEO';
import FooterSM from '../components/FooterSM';

const Editorial = lazy(() => import('./Editorial'));
const Shows = lazy(() => import('./Shows'));
 
const Gallery = () => {
  
  const location = useLocation();

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
        <Link to="/Editorial">
          <div className="linkbox">
          <h1 className="">EDITORIAL</h1>
          </div>
        </Link>
        </Col>
      
        <Col md={6} className="shows">
        <Link to="/Shows">
        <div className="linkbox">
          <h1 className="expand-column-content">SHOWS</h1>
        </div>
        </Link>
        </Col>
    </Row>
    <>
      <footer style={{marginTop: '-1.6rem'}}>
      <FooterSM/>
      </footer>
    </>
    <Suspense>
    <Switch location={location}>
    <Route path="/Gallery/Editorial" component={Editorial} exact/>
        <Route path="/Shows" component={Shows}/>
    </Switch>
    </Suspense>
  </>
  </SEO>
  </>
  );
};
 
export default Gallery; 