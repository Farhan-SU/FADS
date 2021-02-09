import React from "react";
import {withRouter} from 'react-router-dom';
import  Halloween from '../../../components/GalleryCom/Halloween';


const halloween = () => {
    return(
        <>
        <div style={{height: '100%'}}>
        <Halloween/>
        </div>
        </>
    )
}

export default withRouter(halloween);