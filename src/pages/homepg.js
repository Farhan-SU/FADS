import React, {useEffect, useRef} from 'react';
import '../assets/styles/pages.scss';
import SEO from '../components/SEO';
import HomepgWrap from '../components/HomeCom/HomepgWrap';


export default function Homepg ()  {  
  
 return (
    <>
    <SEO
    pageMeta={{
      title: "Home",
      keywords: ["Fashion", "Gallery", "Agency"],
      description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major"
    }}>
    <>
    <HomepgWrap/>
    </>  
    </SEO>
    </>
    );
};
