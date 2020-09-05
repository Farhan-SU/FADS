import React, { useState, useEffect, useRef } from "react";
import Layout from '../components/Layout';
import '../assets/styles/pages.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Editorial from './Editorial';


const News = () => {

  return (
    <>
    <div style={{height: '100%'}}>
    <Editorial/>
    </div>
    </>
  );
};
  
export default News;