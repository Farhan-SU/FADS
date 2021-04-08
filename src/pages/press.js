import React from "react";
import '../assets/styles/press.scss';
import SEO from '../components/SEO';
import NewsDeck from '../components/NewsCard';


  function press() {

    return (
      <>
      <SEO
      pageMeta={{
        title: "Press",
        keywords: ["Fashion", "News", "Shows"],
        description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major."
      }}>
      <>
      <div className="pressWrapper">
      <NewsDeck/>
      </div>
      </>
    </SEO>
      </>
    );
  }
  
export default press;
