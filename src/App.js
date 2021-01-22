import React, {Suspense, lazy} from 'react';
import {Switch, Route, useLocation, withRouter} from "react-router-dom";
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import './App.scss';
import './assets/styles/layout.scss';

const aboutus = lazy(() => import('./pages/aboutus'));
const homepg = lazy(() => import('./pages/homepg'));

/*Gallery Routes*/
const gallery = lazy(() => import('./pages/gallery'));
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
const agency = lazy(() => import('./pages/agency'));
const press = lazy(() => import('./pages/press'));
const eboard = lazy(() => import('./pages/agency/eboard'));
const fashionD = lazy(() => import('./pages/agency/fashionDesigners'));
const graphicD = lazy(() => import('./pages/agency/graphicDesigners'));
const makeupArtists = lazy(() => import('./pages/agency/makeupArtists'));
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

  /*const [TimePassed, setTimePassed] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setTimePassed(false), 4000)
    return () => clearTimeout(timer);  
  },[]);*/
  
  let location = useLocation();

        return (
          <>
            <div className="routes">
            <Suspense fallback={<LoadingScreen/>}>
                  <Switch location={location}>
                    <RouteWithLayout exact path="/gallery/editorials/aline" component={aline}/>
                    <RouteWithLayout exact path="/gallery/editorials/jerk-fads" component={jerkFads}/>
                    <RouteWithLayout exact path="/gallery/editorials/winter" component={winter}/>
                    <RouteWithLayout exact path="/gallery/editorials/work-wear-vintage" component={workWear}/>
                    <RouteWithLayout exact path="/gallery/shows/circus" component={circus}/>
                    <RouteWithLayout exact path="/gallery/shows/thegallery" component={thegallery}/>
                    <RouteWithLayout exact path="/gallery/shows/tomorrow-land" component={tomorrow}/>
                    <RouteWithLayout exact path="/gallery" component={gallery} />  
                    <RouteWithLayout exact path="/gallery/editorial" component={editorial}/>
                    <RouteWithLayout exact path="/gallery/shows" component={shows}/>
                    <RouteWithLayout path="/agency/bio/:slug" component={bio}/>
                    <RouteWithLayout exact path="/agency/eboard" component={eboard}/>
                    <RouteWithLayout exact path="/agency/fashionDesigners" component={fashionD}/>
                    <RouteWithLayout exact path="/agency/graphicDesigners" component={graphicD}/>
                    <RouteWithLayout exact path="/agency/makeupArtists" component={makeupArtists}/>
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

