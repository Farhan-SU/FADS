import React, { useRef, useEffect, lazy, Suspense} from 'react';
import {Row, Col} from 'react-bootstrap';
import Layout from '../components/Layout'
import '../assets/styles/gallery.scss';
import { Route, Link, Switch, useLocation} from 'react-router-dom';

const Editorial = lazy(() => import('./Editorial'));
const Shows = lazy(() => import('./Shows'));
 
const Gallery = () => {
  
  const location = useLocation();

  return (
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
    <Suspense>
    <Switch location={location}>
        <Route path="/Editorial" component={Editorial}/>
        <Route path="/Shows" component={Shows}/>
    </Switch>
    </Suspense>
  </>
  );
};
 
export default Gallery; 