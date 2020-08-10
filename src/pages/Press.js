import React, { useState, useEffect, useRef } from "react";
import Layout from '../components/Layout';
import '../assets/styles/pages.scss';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Editorial from './Editorial';


gsap.registerPlugin(ScrollTrigger);

const News = () => {

  return (
    <>
    <Editorial/>
    </>
  );
};
  
export default News;