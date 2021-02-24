import React from 'react';
import {withRouter} from 'react-router-dom';
import BioMembers from '../../components/BioMembers';

function Bio () {  
  return (
     <>
     <BioMembers/>
     </>  
     );
 };
export default withRouter(Bio);