import React, { useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import Editorial from './Editorial';
import MobileEditorial from './MobileEditorial';

const WrapEditorial = () => {

    const isMobile = useMediaQuery({ maxWidth: 495});
    const isDesktop = useMediaQuery({minWidth: 852});
    const isTablet = useMediaQuery({ minWidth: 550, maxWidth: 850 });

    return(
        <>
        {isDesktop && <Editorial/>}
        {isMobile && <MobileEditorial/>}
        {isTablet && <MobileEditorial/>}
        </>
    )
}

export default WrapEditorial;