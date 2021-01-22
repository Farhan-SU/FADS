import React, { useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import Shows from './Shows';
import MobileShows from './MobileShows';

const WrapShows = () => {

    const isMobile = useMediaQuery({ maxWidth: 495});
    const isDesktop = useMediaQuery({minWidth: 852});
    const isTablet = useMediaQuery({ minWidth: 550, maxWidth: 850 });

    return(
        <>
        {isDesktop && <Shows/>}
        {isMobile && <MobileShows/>}
        {isTablet && <MobileShows/>}
        </>
    )
}

export default WrapShows;