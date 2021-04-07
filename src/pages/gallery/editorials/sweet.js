import React from "react";
import {withRouter} from 'react-router-dom';
import  SweetEscape from '../../../components/GalleryCom/SweetEscape';


const sweet = () => {
    return(
        <>
        <SweetEscape/>
        </>
    )
}

export default withRouter(sweet);