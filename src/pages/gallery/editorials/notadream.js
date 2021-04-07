import React from "react";
import {withRouter} from 'react-router-dom';
import  NotaDream from '../../../components/GalleryCom/NotaDream';


const notadream = () => {
    return(
        <>
        <NotaDream/>
        </>
    )
}

export default withRouter(notadream);