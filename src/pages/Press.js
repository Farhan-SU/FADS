import React from "react";
import '../assets/styles/press.scss';
import { Col, Row, CardDeck, Card } from "react-bootstrap";
/*import '../assets/styles/press.scss';*/
import SEO from '../components/SEO';
import F4Speakers from '../components/F4speakers';
import NewsDeck from '../components/NewsCard';
import LoadingScreen from '../components/LoadingScreen';


  function press() {

    return (
      <>
      <SEO
      pageMeta={{
        title: "Press",
        keywords: ["Fashion", "F4 Speakers", "Agency", "Interviews", "Alumni"],
        description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major."
      }}>
      <>
      <div className="pressWrapper">
      <div className="pressHeader">
      <h1 className="introH1">Introducing the</h1>
      <div className="headerContent">
        <div className="headerLeftpress">
          <h1 className="f4h1">F*4</h1>
        </div>
        <div className="headerRightpress">
          <h2 className="f4expand">FADS Fashioning Future Fellow</h2>
          <p>A Zoom series connecting students to industry leaders when the world is in
            disconnect through industry insights, networking, and mentorship opportunities.
          </p>
        </div>
      </div>
    </div>
      <F4Speakers/>
      <NewsDeck/>
      </div>
      </>
    </SEO>
      </>
    );
  }
  
export default press;