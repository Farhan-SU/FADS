import React from 'react';
import Navbar from '../components/Navbar';
import {withRouter} from "react-router-dom";
import '../assets/styles/layout.scss';
import MobileNav from './MobileNav';


function Layout ({children}){
     return (
      <>
      <MobileNav/>
      <main>
         {children}
      </main>   
      </>
     );
}
export default withRouter(Layout);