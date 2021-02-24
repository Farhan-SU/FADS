import React from "react";
import '../assets/styles/press.scss';
import SEO from '../components/SEO';
import F4Speakers from '../components/F4speakers';
import Reveal from "../components/Reveal";


export default function f4() {

    return (
      <>
      <SEO
      pageMeta={{
        title: "F4 Speakers",
        keywords: ["Fashion", "F4 Speakers", "Agency", "Interviews", "Alumni"],
        description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major."
      }}>
      <>
      <div className="pressWrapper">
      <div className="pressHeader">
      <Reveal wrapperElement="h1" className="introH1" direction="up" >Introducing the</Reveal>
      <div className="headerContent">
        <div className="headerLeftpress">
          <Reveal wrapperElement="h1" direction="up" className="f4h1" delay={0.7}>F*4</Reveal>
        </div>
        <div className="headerRightpress">
          <Reveal wrapperElement="h2" direction="up" className="f4expand" delay={1}>FADS Fashioning Future Fellows</Reveal>
          <p>A Zoom series connecting students to industry leaders when the world is in
            disconnect through industry insights, networking, and mentorship opportunities.
          </p>
        </div>
      </div>
    </div>
      <F4Speakers/>
      </div>
      </>
    </SEO>
      </>
    );
  }