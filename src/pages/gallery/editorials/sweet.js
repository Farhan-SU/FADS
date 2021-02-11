import React from "react";
import {withRouter} from 'react-router-dom';
import  SweetEscape from '../../../components/GalleryCom/SweetEscape';


const sweet = () => {
    return(
        <>
        <div style={{height: '100%'}}>
        <SweetEscape/>
        </div>
        </>
    )
}

export default withRouter(sweet);