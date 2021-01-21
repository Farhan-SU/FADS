import React from 'react';
import {withRouter} from 'react-router-dom';
import MobileAboutFads from './MobileAboutFads';
import AboutFads from './AboutFADS';
import { useMediaQuery } from 'react-responsive';


const WrapAboutPg = () => {  

const isMobile = useMediaQuery({ maxWidth: 495});
const isDesktop = useMediaQuery({minWidth: 852});
const isTablet = useMediaQuery({ minWidth: 550, maxWidth: 850 });
  return(
    <>
    {isDesktop && <AboutFads/>}
    {isMobile && <MobileAboutFads/>}
    {isTablet && <AboutFads/>}
    </>
  )
};

export default withRouter(WrapAboutPg);