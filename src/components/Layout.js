import React from 'react';
import Navbar from '../components/Navbar';
import {withRouter} from "react-router-dom";
import '../assets/styles/layout.scss';
import MobileNav from './MobileNav';
import FooterSM from './FooterSM';
import { useMediaQuery } from 'react-responsive';

function Layout(props) {
   const isMobile = useMediaQuery({ maxWidth: 495});
   const isDesktop = useMediaQuery({minWidth: 852});
   const isTablet = useMediaQuery({ minWidth: 550, maxWidth: 850 });

   return (
      <>
     <> 
    {isDesktop && <Navbar/>}
    {isMobile && <MobileNav/>}
    {isTablet && <MobileNav/>}
    </>
      <main>
         {props.children}
      </main>  
   <>
      <footer>
        <FooterSM/>
      </footer></>
      </>
   );
 };
 export default withRouter(Layout);