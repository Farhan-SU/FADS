import React, { useRef, useEffect} from 'react';
import { Link, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../../assets/styles/pgagency.scss';
import SEO from '../../components/SEO';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const FADS_EBOARD = gql`
  {
    users{
       id
       name
       status
    }
  }
`
  
function Eboard() {

  let { path, url } = useRouteMatch();
  console.log({url, path});

  return (
    <>
     <SEO
      pageMeta={{
      title: "E-Board | Agency",
      keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
      description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
    }}>
    <div className="eboardwrapper">
        <h1>E-Board</h1>
    </div>
    </SEO>
    </>
  );
};
export default Eboard;
