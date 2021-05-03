import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import '../assets/styles/pgagency.scss';
import SEO from './SEO';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LoadingScreen from './LoadingScreen';
import BioMemberTest from './BioMemberTest';
import { request } from 'graphql-request';

export default function EboardCom() {

  const [members, setMembers] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      const { members } = await request(
      `
        {
          members(where: {committee_contains_some: EBoard}) {
            id
            memberName
            memberPosition
            slug
            committee
            agencyImg {
              url
              id
            }
          }
        }
      `
      );

      setMembers(members);
    };

    fetchMembers();
  }, []);

      return (
        <div className="eboardwrapper">
          {!members ? (
          'Loading'
        ) : (
          <React.Fragment>
            <div className="members">
              {members.map(({ id, memberName, memberPosition, slug, agencyImg,  }) => (
                <div key={members.id} className="members-intro">
                <Link to={`/agency/bio/${members.slug}`} className="memberDes">
                <img src={members.agencyImg.url} alt={members.memberName} className="memImg"/>
                <h2>{members.memberName}</h2>
                <h4>{members.memberPosition}</h4>
                </Link>
                </div>
              ))}
            </div>
          </React.Fragment>
        )}
        </div>
      );
};
