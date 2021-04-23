import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import '../../assets/styles/pgagency.scss';
import SEO from '../../components/SEO';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LoadingScreen from '../../components/LoadingScreen';

const MODELS = gql`
query{
    modelHomes {
        id
        modelName
        slug
        modelHeadshot {
          url
          id
        }
      }
  }
  
`;

export default function Models() {
 
  const { loading, error, data } = useQuery(MODELS);
  const [ models, setModels ] = useState();


  useEffect(() => {
    if(loading === false && data){
        setModels(data);
    }
}, [loading, data])

if (loading) return <LoadingScreen/>;
if (error) return <div className="error-bio"><h1>{error.message}</h1></div>;
  if (data) {
      return (
        <SEO
        pageMeta={{
        title: "Models | Agency",
        keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
      }}>
      <div className="eboardwrapper">
      <div className="positionIntro">
      <h1>Models</h1>
      </div>
        <div className="members">
          {data.modelHomes.map(model => (
            <div key={model.id} className="models-intro">
               {/*image goes below this comment*/}
               <Link to={`/agency/models_bio/${model.slug}`} className="memberDes">
               <img src={model.modelHeadshot.url} alt={model.modelName} className="modelImg"/>
              <h2>{model.modelName}</h2>
              </Link>
            </div>
          ))}
        </div>
        </div>
        </SEO>
      );
  }
};
