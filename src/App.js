import React, { Suspense, lazy, useState, useEffect } from 'react';
import {Switch, Route, useLocation, BrowserRouter } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Spinner from 'react-bootstrap/Spinner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Splash from './components/Splash';
import './assets/styles/layout.scss';
import './App.css';

const Aboutus = lazy(() => import('./pages/aboutus'));
const Gallery = lazy(() => import('./pages/gallery'));
const Editorial = lazy(() => import('./pages/editorial'));
const Shows = lazy(() => import('./pages/shows'));
const Homepg = lazy(() => import('./pages/homepg'));
const Agency = lazy(() => import('./pages/agency'));
const Press = lazy(() => import('./pages/press'));


function App () {

  const [TimePassed, setTimePassed] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setTimePassed(true), 6000)
 
    return () => clearTimeout(timer);  
  },[TimePassed]);


  const location = useLocation();

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100% ,0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0% ,0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50% ,0, 0)' }
  })

    if (!TimePassed) {
        return <Splash/>
    } else {
        return (
          <>
          <Navbar/>
          <Layout/>
            <div className="routes">
            {transitions.map(({ item : location, props, key }) => (
              <animated.div key={key} style={props}>
    
                <Suspense fallback={<div>
                                      <Spinner className="spinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                      </Spinner>
                                    </div>}>
    
                  <Switch location={location}>
                
                    <Route exact path="/" component={Homepg} />
                    <Route path="/gallery" component={Gallery} />  
                    <Route path="/gallery/editorial" component={Editorial} exact/>
                    <Route path="/aboutus" component={Aboutus} />
                    <Route path="/agency" component={Agency} />
                    <Route path="/press" component={Press} />
                  </Switch>
                </Suspense>
              </animated.div>
            ))}
            </div>
        </>
        );
    };
 
}

export default App;

