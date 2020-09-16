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

const aboutus = lazy(() => import('./pages/aboutus'));
const gallery = lazy(() => import('./pages/gallery'));
const editorial = lazy(() => import('./pages/gallery/editorialpg'));
const shows = lazy(() => import('./pages/gallery/showspg'));
const homepg = lazy(() => import('./pages/homepg'));
const agency = lazy(() => import('./pages/agency'));
const press = lazy(() => import('./pages/press'));


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
                
                    <Route exact path="/" component={homepg} />
                    <Route path="/gallery" component={gallery} />  
                    <Route path="/gallery/editorialpg" component={editorial} exact/>
                    <Route path="/gallery/showspg" component={shows} exact/>
                    <Route path="/aboutus" component={aboutus} />
                    <Route path="/agency" component={agency} />
                    <Route path="/press" component={press} />
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

