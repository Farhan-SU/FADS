import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import '../../assets/styles/pgagency.scss';
import SEO from '../../components/SEO';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LoadingScreen from '../../components/LoadingScreen';

const MEMBERS = gql`
query{
  members(where: {committee_contains_some: Stylists}, orderBy: displayOrder_ASC) {
    id
    memberName
    memberPosition
    slug
    committee
    agencyImg {
      url
    }
  }
}
`;

export default function MakeupArtists() {
 
  const { loading, error, data } = useQuery(MEMBERS);
  const [ stylists, setStylists ] = useState();


  useEffect(() => {
    if(loading === false && data){
        setStylists(data);
    }
}, [loading, data])

if (loading) return <LoadingScreen/>;
if (error) return <div className="error-bio"><h1>{error.message}</h1></div>;
  if (data) {
      return (
        <SEO
        pageMeta={{
        title: "Stylists | Agency",
        keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
      }}>
      <div className="eboardwrapper">
      <div className="positionIntro">
      <h1>Stylists</h1>
      </div>
        <div className="members">
          {data.members.map(member => (
            <div key={member.id} className="member-intro">
              <Link to={`/agency/bio/${member.slug}`} className="memberDes">
               <img src={member.agencyImg.url} alt={member.memberName} className="memImg"/>
              <h2>{member.memberName}</h2>
              <h4>{member.memberPosition}</h4>
              </Link>
            </div>
          ))}
        </div>
        </div>
        </SEO>
      );
  }
};
