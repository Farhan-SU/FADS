import React, { Suspense, lazy, useState, useEffect } from 'react';
import {Switch, Route, useLocation, withRouter} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Footer from './components/Footer';
import FooterSM from './components/FooterSM';
import Layout from './components/Layout';
import Splash from './components/Splash';
import './assets/styles/layout.scss';
import './App.css';

const aboutus = lazy(() => import('./pages/Aboutus'));
const homepg = lazy(() => import('./pages/Homepg'));

/*Gallery Routes*/
const gallery = lazy(() => import('./pages/Gallery'));
const editorial = lazy(() => import('./pages/gallery/editorial'));
const shows = lazy(() => import('./pages/gallery/shows'));
const aline = lazy(() => import('./pages/gallery/editorials/aline'));
const jerkFads = lazy(() => import('./pages/gallery/editorials/jerk-fads'));
const winter = lazy(() => import('./pages/gallery/editorials/winter'));
const workWear = lazy(() => import('./pages/gallery/editorials/work-wear-vintage'));
const circus = lazy(() => import('./pages/gallery/shows/circus'));
const thegallery = lazy(() => import('./pages/gallery/shows/thegallery'));
const tomorrow = lazy(() => import('./pages/gallery/shows/tomorrow-land'));

/*Agency Routes*/
const agency = lazy(() => import('./pages/Agency'));
const press = lazy(() => import('./pages/Press'));
const eboard = lazy(() => import('./pages/agency/eboard'));
const fashionD = lazy(() => import('./pages/agency/fashionDesigners'));
const graphicD = lazy(() => import('./pages/agency/graphicDesigners'));
const makeupArtists = lazy(() => import('./pages/agency/makeupArtists'));
const bio = lazy(() => import('./pages/agency/bio'));


function App () {

  const RouteWithLayout = ({ component, ...rest }) => {
    return (
      <>
        <Layout/>
        <Route {...rest} component={component} />
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
        <Route component={component} />
        <footer>
        <Footer/>
        </footer>
      </>
    );
  };

  const [TimePassed, setTimePassed] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setTimePassed(false), 4000)
    return () => clearTimeout(timer);  
  },[]);


  const location = useLocation();

    if (TimePassed) {
        return <Splash/>
    } else {
        return (
          <>
            <div className="routes">
            <Suspense fallback={
              <div class="divLoader">
                <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
                  <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
                    </animateTransform>
                  </path>
                </svg>
              </div>}>
                  
                  <Switch location={location}>
                    <RouteHome exact path="/" component={homepg}/>
                    <RouteWithLayout exact path="/gallery" component={gallery} />  
                    <RouteWithLayout exact path="/gallery/editorial" component={editorial}/>
                    <RouteWithLayout path="/gallery/editorials/aline" component={aline}/>
                    <RouteWithLayout exact path="/gallery/editorials/jerk-fads" component={jerkFads}/>
                    <RouteWithLayout exact path="/gallery/editorials/winter" component={winter}/>
                    <RouteWithLayout exact path="/gallery/editorials/work-wear-vintage" component={workWear}/>
                    <RouteWithLayout exact path="/gallery/shows" component={shows}/>
                    <RouteWithLayout exact path="/gallery/shows/circus" component={circus}/>
                    <RouteWithLayout exact path="/gallery/shows/thegallery" component={thegallery}/>
                    <RouteWithLayout exact path="/gallery/shows/tomorrow-land" component={tomorrow}/>
                    <RouteWithLayout exact path="/agency" component={agency} />
                    <RouteWithLayout exact path="/agency/eboard" component={eboard}/>
                    <RouteWithLayout exact path="/agency/fashionDesigners" component={fashionD}/>
                    <RouteWithLayout exact path="/agency/graphicDesigners" component={graphicD}/>
                    <RouteWithLayout exact path="/agency/makeupArtists" component={makeupArtists}/>
                    <RouteWithLayout path="/agency/bio/:slug" component={bio}/>
                    <RouteWithLayout path="/aboutus" component={aboutus} />
                    <RouteWithLayout path="/press" component={press} />
                  </Switch>
                </Suspense>
            </div>
        </>
        );
    };
 
}

export default withRouter(App);

