import React, { Suspense, lazy, useState, useEffect } from 'react';
import {Switch, Route, useLocation, BrowserRouter } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Spinner from 'react-bootstrap/Spinner';
import Footer from './components/Footer';
import FooterSM from './components/FooterSM';
import Layout from './components/Layout';
import Splash from './components/Splash';
import './assets/styles/layout.scss';
import './App.css';

const aboutus = lazy(() => import('./pages/aboutus'));
const gallery = lazy(() => import('./pages/gallery'));
const editorial = lazy(() => import('./pages/gallery/editorial'));
const shows = lazy(() => import('./pages/gallery/shows'));
const homepg = lazy(() => import('./pages/homepg'));
const agency = lazy(() => import('./pages/agency'));
const press = lazy(() => import('./pages/press'));


function App () {

  const RouteWithLayout = ({ component, ...rest }) => {
    return (
      <>
        <Layout/>
        <Route {...rest} render={ () => React.createElement(component) } />
        <footer>
        <FooterSM/>
        </footer>
      </>
    );
  };
  const RouteHome = ({ component}) => {
    return (
      <>
        <Layout/>
        <Route render={ () => React.createElement(component) } />
        <footer>
        <Footer/>
        </footer>
      </>
    );
  };

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
            <div className="routes">
            {transitions.map(({ item : location, props, key }) => (
              <animated.div key={key} style={props}>
    
                <Suspense fallback={<div>
                                      <Spinner className="spinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                      </Spinner>
                                    </div>}>
    
                  <Switch location={location}>
                    <RouteHome key="1" exact path="/" component={homepg} />
                    <RouteWithLayout key="2" exact path="/gallery" component={gallery} />  
                    <RouteWithLayout key="3" exact path="/gallery/editorial" component={editorial}/>
                    <RouteWithLayout key="4" exact path="/gallery/shows" component={shows}/>
                    <RouteWithLayout key="5" path="/aboutus" component={aboutus} />
                    <RouteWithLayout key="6" path="/agency" component={agency} />
                    <RouteWithLayout key="7" path="/press" component={press} />
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

