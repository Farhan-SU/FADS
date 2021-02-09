import React from "react";
import {withRouter} from 'react-router-dom';
import  MakeupJerk from '../../../components/GalleryCom/MakeupJerk';


const makeupJ = () => {
    return(
        <>
        <div style={{height: '100%'}}>
        <MakeupJerk/>
        </div>
        </>
    )
}

export default withRouter(makeupJ);