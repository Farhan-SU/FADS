import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import '../../assets/styles/pgagency.scss';
import SEO from '../../components/SEO';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LoadingScreen from '../../components/LoadingScreen';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../../components/Reveal';

gsap.registerPlugin(ScrollTrigger);

const MEMBERS = gql`
query{
  members{
    id
    memberName
    memberPosition
    slug
    agencyImg {
      url
    }
  }
}
`;

export default function Eboard() {
 
  const { loading, error, data } = useQuery(MEMBERS);
  const [ Eboard, setEboard ] = useState();


  useEffect(() => {
    if(loading === false && data){
        setEboard(data);
    }
}, [loading, data])


  if (error) {
    return <><div className="error-bio"><h1>{error.message}</h1></div></>;
  }
  if (loading) {
    return (
      <div className="loading">
        <LoadingScreen/>
      </div>
    )
  }
  if (data) {

    /*const name = data.members.filter((memberName) => data.members === memberName);
    console.log(name);*/

      return (
        <SEO
        pageMeta={{
        title: "E-Board | Agency",
        keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
      }}>
      <div className="eboardwrapper">
      <Reveal wrapperElement="h1" direction="up">E-Board</Reveal>
        <div className="members">
          {data.members.map(member => (
            <div key={member.id} className="member-intro">
               {/*image goes below this comment*/}
               <img src={member.agencyImg.url} alt={member.memberName} className="memImg"/>
               <Link to={`/agency/bio/${member.slug}`} className="memberDes">
              <h2>{member.memberName}</h2>
              <h4><em>{member.memberPosition}</em></h4>
              </Link>
            </div>
          ))}
        </div>
        </div>
        </SEO>
      );
  }
};
