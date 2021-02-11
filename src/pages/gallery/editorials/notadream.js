import React from "react";
import {withRouter} from 'react-router-dom';
import  NotaDream from '../../../components/GalleryCom/NotaDream';


const notadream = () => {
    return(
        <>
        <div style={{height: '100%'}}>
        <NotaDream/>
        </div>
        </>
    )
}

export default withRouter(notadream);