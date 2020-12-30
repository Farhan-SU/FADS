import React from "react";
import { Col, Row, CardDeck, Card } from "react-bootstrap";
/*import '../assets/styles/press.scss';*/
import SEO from '../components/SEO';
import F4Speakers from '../components/F4speakers';
import NewsDeck from '../components/NewsCard';
import Bio from "../components/Bio";

  function press() {

    return (
      <>
      <Bio/>
      {/***
      <SEO
      pageMeta={{
        title: "Press",
        keywords: ["Fashion", "F4 Speakers", "Agency", "Interviews", "Alumni"],
        description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major."
      }}>
      <>
      <div className="pressPage">
      <F4Speakers/>
      <NewsDeck/>
      </div>
      </>
    </SEO>***/}
      </>
    );
  }
  
export default press;