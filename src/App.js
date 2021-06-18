import React, {Suspense, lazy} from 'react';
import {Switch, Route, useLocation} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import './App.scss';
import './assets/styles/layout.scss';
import AnimatedCursor from "react-animated-cursor";
import { useMediaQuery } from 'react-responsive';

const homepg = lazy(() => import("./pages/homepg"));
const aboutus = lazy(() => import('./pages/aboutus'));
const press = lazy(() => import('./pages/press'));
const f4 = lazy(() => import(/* webpackPrefetch: true */ './pages/f4'));

/*Gallery Routes Main*/
const gallery = lazy(() => import('./pages/gallery'));
const editorial = lazy(() => import('./pages/gallery/editorial'));
const shows = lazy(() => import('./pages/gallery/shows'));
/*Editorial*/
const jerkFads = lazy(() => import('./pages/gallery/editorials/jerk-fads'));
const workWear = lazy(() => import('./pages/gallery/editorials/work-wear-vintage'));
const galleryShoots = lazy(() => import('./pages/gallery/editorials/galleryShoots'));
const sweet = lazy(() => import('./pages/gallery/editorials/sweet'));
const notadream = lazy(() => import('./pages/gallery/editorials/notadream'));
const bodyspaceEditorial = lazy(() => import('./pages/gallery/editorials/bodyspaceEditorial'));
const boogieStrike = lazy(() => import('./pages/gallery/editorials/boogieStrike'));
const revival = lazy(() => import('./pages/gallery/editorials/revival'));
const equalTime = lazy(() => import('./pages/gallery/editorials/equalTime'));
const halloween = lazy(() => import('./pages/gallery/editorials/halloween'));

/*Shows*/
const bodyxspace = lazy(() => import('./pages/gallery/shows/bodyxspace'));
const circus = lazy(() => import('./pages/gallery/shows/circus'));
const thegallery = lazy(() => import('./pages/gallery/shows/thegallery'));
const tomorrow = lazy(() => import('./pages/gallery/shows/tomorrow-land'));
const revival_show = lazy(() => import('./pages/gallery/shows/revival_show'));



/*Agency Routes*/
const agency = lazy(() => import('./pages/agency'));
/*const eboard = lazy(() => {
  return Promise.all([
    import("./pages/agency/eboard"),
    new Promise(resolve => setTimeout(resolve, 600))
  ])
  .then(([moduleExports]) => moduleExports);
});*/
const eboard = lazy(() => import('./pages/agency/eboard'));
const fashionD = lazy(() => import('./pages/agency/fashionDesigners'));
const graphicD = lazy(() => import('./pages/agency/graphicDesigners'));
const makeupArtists = lazy(() => import('./pages/agency/makeupArtists'));
const videoPhoto = lazy(() => import('./pages/agency/videoPhoto'));
const stylists = lazy(() => import('./pages/agency/stylists'));
const communication = lazy(() => import('./pages/agency/communication'));
const models = lazy(() => import('./pages/agency/models'));
const bio = lazy(() => import('./pages/agency/bio'));
const models_bio = lazy(() => import('./pages/agency/models_bio'));

function App () {

  const RouteWithLayout = ({ component, ...rest }) => {
    return (
      <>
        <Layout>
        <Route {...rest} component={component} />
        </Layout>
      </>
    );
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
 
        return (
          <>
          <ScrollToTop/>
            <div className="routes">
            <Suspense fallback={<LoadingScreen/>}>
                  <Switch>
                    <RouteWithLayout exact path="/gallery/editorials/jerk-fads" component={jerkFads}/>
                    <RouteWithLayout exact path="/gallery/editorials/work-wear-vintage" component={workWear}/>
                    <RouteWithLayout exact path="/gallery/editorials/galleryShoots" component={galleryShoots}/>
                    <RouteWithLayout exact path="/gallery/editorials/sweet" component={sweet}/>
                    <RouteWithLayout exact path="/gallery/editorials/notadream" component={notadream}/>
                    <RouteWithLayout exact path="/gallery/editorials/bodyspaceEditorial" component={bodyspaceEditorial}/>
                    <RouteWithLayout exact path="/gallery/editorials/boogieStrike" component={boogieStrike}/>
                    <RouteWithLayout exact path="/gallery/editorials/revival" component={revival}/>
                    <RouteWithLayout exact path="/gallery/editorials/equalTime" component={equalTime}/>
                    <RouteWithLayout exact path="/gallery/editorials/halloween" component={halloween}/>
                    <RouteWithLayout exact path="/gallery/shows/bodyxspace" component={bodyxspace}/>
                    <RouteWithLayout exact path="/gallery/shows/circus" component={circus}/>
                    <RouteWithLayout exact path="/gallery/shows/thegallery" component={thegallery}/>
                    <RouteWithLayout exact path="/gallery/shows/tomorrow-land" component={tomorrow}/>
                    <RouteWithLayout exact path="/gallery/shows/revival_show" component={revival_show}/>
                    <RouteWithLayout exact path="/gallery" component={gallery} />  
                    <RouteWithLayout exact path="/gallery/editorial" component={editorial}/>
                    <RouteWithLayout exact path="/gallery/shows" component={shows}/>
                    <RouteWithLayout path="/agency/bio/:slug" component={bio}/>
                    <RouteWithLayout path="/agency/models_bio/:slug" component={models_bio}/>
                    <RouteWithLayout exact path="/agency/eboard" component={eboard}/>
                    <RouteWithLayout exact path="/agency/models" component={models}/>
                    <RouteWithLayout exact path="/agency/fashionDesigners" component={fashionD}/>
                    <RouteWithLayout exact path="/agency/graphicDesigners" component={graphicD}/>
                    <RouteWithLayout exact path="/agency/makeupArtists" component={makeupArtists}/>
                    <RouteWithLayout exact path="/agency/videoPhoto" component={videoPhoto}/>
                    <RouteWithLayout exact path="/agency/stylists" component={stylists}/>
                    <RouteWithLayout exact path="/agency/communication" component={communication}/>
                    <RouteWithLayout exact path="/agency" component={agency} />
                    <RouteWithLayout exact path="/aboutus" component={aboutus} />
                    <RouteWithLayout exact path="/press" component={press} />
                    <RouteWithLayout exact path="/f4" component={f4} />
                    <RouteWithLayout exact path="/" component={homepg}/>
                    <RouteWithLayout exact path="*" component={homepg}/>
                  </Switch>
                </Suspense>
            </div>

        </>
        );
 
}

export default App;

