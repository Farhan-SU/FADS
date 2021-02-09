import React, {Suspense, lazy} from 'react';
import {Switch, Route, useLocation} from "react-router-dom";
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import './App.scss';
import './assets/styles/layout.scss';
import AnimatedCursor from "react-animated-cursor";
import { useMediaQuery } from 'react-responsive';

const aboutus = lazy(() => import('./pages/aboutus'));
const homepg = lazy(() => import('./pages/homepg'));

/*Gallery Routes*/
/*Editorial*/
const gallery = lazy(() => import('./pages/gallery'));
const editorial = lazy(() => import('./pages/gallery/editorial'));
const shows = lazy(() => import('./pages/gallery/shows'));
const aline = lazy(() => import('./pages/gallery/editorials/aline'));
const jerkFads = lazy(() => import('./pages/gallery/editorials/jerk-fads'));
const winter = lazy(() => import('./pages/gallery/editorials/winter'));
const workWear = lazy(() => import('./pages/gallery/editorials/work-wear-vintage'));
const galleryShoots = lazy(() => import('./pages/gallery/editorials/galleryShoots'));
const halloween = lazy(() => import('./pages/gallery/editorials/halloween'));
const makeupJ = lazy(() => import('./pages/gallery/editorials/makeupJ'));
/*Shows*/
const circus = lazy(() => import('./pages/gallery/shows/circus'));
const thegallery = lazy(() => import('./pages/gallery/shows/thegallery'));
const tomorrow = lazy(() => import('./pages/gallery/shows/tomorrow-land'));



/*Agency Routes*/
const agency = lazy(() => import('./pages/agency'));
const press = lazy(() => import('./pages/press'));
const eboard = lazy(() => import('./pages/agency/eboard'));
/*const fashionD = lazy(() => import('./pages/agency/fashionDesigners'));
const graphicD = lazy(() => import('./pages/agency/graphicDesigners'));
const makeupArtists = lazy(() => import('./pages/agency/makeupArtists'));*/
const bio = lazy(() => import('./pages/agency/bio'));


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

  /*const [TimePassed, setTimePassed] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setTimePassed(false), 4000)
    return () => clearTimeout(timer);  
  },[]);*/
  
  let location = useLocation();

        return (
          <>
          <Desktop><AnimatedCursor
            innerSize={10}
            outerSize={14}
            color='191, 112, 244'
            outerAlpha={0.2}
            innerScale={0.5}
            outerScale={4}/></Desktop>
  
            <div className="routes">
            <Suspense fallback={<LoadingScreen/>}>
                  <Switch location={location}>
                    <RouteWithLayout exact path="/gallery/editorials/aline" component={aline}/>
                    <RouteWithLayout exact path="/gallery/editorials/jerk-fads" component={jerkFads}/>
                    <RouteWithLayout exact path="/gallery/editorials/winter" component={winter}/>
                    <RouteWithLayout exact path="/gallery/editorials/work-wear-vintage" component={workWear}/>
                    <RouteWithLayout exact path="/gallery/editorials/galleryShoots" component={galleryShoots}/>
                    <RouteWithLayout exact path="/gallery/editorials/halloween" component={halloween}/>
                    <RouteWithLayout exact path="/gallery/editorials/makeupJ" component={makeupJ}/>
                    <RouteWithLayout exact path="/gallery/shows/circus" component={circus}/>
                    <RouteWithLayout exact path="/gallery/shows/thegallery" component={thegallery}/>
                    <RouteWithLayout exact path="/gallery/shows/tomorrow-land" component={tomorrow}/>
                    <RouteWithLayout exact path="/gallery" component={gallery} />  
                    <RouteWithLayout exact path="/gallery/editorial" component={editorial}/>
                    <RouteWithLayout exact path="/gallery/shows" component={shows}/>
                    <RouteWithLayout path="/agency/bio/:slug" component={bio}/>
                    <RouteWithLayout exact path="/agency/eboard" component={eboard}/>
                    <RouteWithLayout exact path="/agency/fashionDesigners" component={eboard}/>
                    <RouteWithLayout exact path="/agency/graphicDesigners" component={eboard}/>
                    <RouteWithLayout exact path="/agency/makeupArtists" component={eboard}/>
                    <RouteWithLayout exact path="/agency" component={agency} />
                    <RouteWithLayout exact path="/aboutus" component={aboutus} />
                    <RouteWithLayout exact path="/press" component={press} />
                    <RouteWithLayout exact path="/" component={homepg}/>
                    <RouteWithLayout exact path="*" component={homepg}/>
                  </Switch>
                </Suspense>
            </div>

        </>
        );
 
}

export default App;

