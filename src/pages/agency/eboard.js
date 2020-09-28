import React, { useRef, useEffect, useState} from 'react';
import { Link, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../../assets/styles/pgagency.scss';
import SEO from '../../components/SEO';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import GCMSImg from 'graphcms-image';

const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckf8z1uao08mm01wghz4k17at/master';

const MEMBERS = gql`
query{
  members{
    id
    memberName
    memberPosition
    agencyImg {
      id,
      url
    }
  }
}
`;

export default function Eboard() {
  const { loading, error, data } = useQuery(MEMBERS);
  const [ Eboard, setEboard ] = useState(undefined);

  useEffect(() => {
    if(loading === false && data){
        setEboard(data);
    }
}, [loading, data])


  if (error) {
    return <>{`Error! ${error.message}`}</>;
  }
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }
  if (data) {
      return (
        <SEO
        pageMeta={{
        title: "E-Board | Agency",
        keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
      }}>
      <div className="eboardwrapper">
      <h1>E-Board</h1>
        <div className="members">
          {data.members.map(member => (
            <div key={member.memberName} className="member-intro">
               {/*image goes below this comment*/}
               <img src={member.agencyImg.url} alt={member.memberName} style={{ margin: '0 auto 2rem auto', maxWidth: '80%' }}/>
              <h2>{member.memberName}</h2>
              <h4><em>{member.memberPosition}</em></h4>
            </div>
          ))}
        </div>
        </div>
        </SEO>
      );
  }
};
