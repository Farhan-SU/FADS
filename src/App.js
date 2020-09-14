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

const Aboutus = lazy(() => import('./pages/Aboutus'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Editorial = lazy(() => import('./pages/Editorial'));
const Shows = lazy(() => import('./pages/Shows'));
const Homepg = lazy(() => import('./pages/Homepg'));
const Agency = lazy(() => import('./pages/Agency'));
const Press = lazy(() => import('./pages/Press'));


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
                    <Route path="/Gallery" component={Gallery} />  
                    <Route path="/Gallery/Editorial" component={Editorial} exact/>
                    <Route path="/Aboutus" component={Aboutus} />
                    <Route path="/Agency" component={Agency} />
                    <Route path="/Press" component={Press} />
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

