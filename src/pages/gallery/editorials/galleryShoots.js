import React from "react";
import {withRouter} from 'react-router-dom';
import GalleryShoots from '../../../components/GalleryCom/GalleryShoots';


const galleryShoots = () => {
    return(
        <>
        <div style={{height: '100%'}}>
        <GalleryShoots/>
        </div>
        </>
    )
}

export default withRouter(galleryShoots);