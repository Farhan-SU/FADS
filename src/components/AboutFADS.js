import React from 'react';
import '../assets/styles/aboutus.scss'
import SEO from './SEO';
import Reveal from './Reveal';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutTest () {

    return (
        <>
        <SEO
        pageMeta={{
        title: "Press",
        keywords: ["Fashion", "F4 Speakers", "Agency", "Interviews", "Alumni"],
        description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major."
        }}>
        <div className="wrapabtjoin">
            <div className="firstsec">
                <h1>Our Story</h1>
                    <Reveal className="topright">   
                        <p>
                        The Fashion and Design Society is a diverse group of career minded individuals at
                        Syracuse University who share a passion for creativity, design, and fashion
                        FADS is an open environment for the discussion of new ideas that brings important 
                        concerns of the global fashion industry to the forefront at Syracuse University.
                        </p>
                    </Reveal>
            </div>
            <div className="secondsec">
                <Reveal className="bottomleft">
                    <p>
                    FADS is an open environment for the discussion of
                    new ideas that brings important concerns of the
                    global fashion industry and the changing social
                    climate to the forefront of dialogue at SU.
                    </p>
                    <p>
                    We give our committed members an opportunity
                    to gain real-time experience in fields that are
                    potential career avenues for them in their future.
                    FADS has general member meetings, model training, and fashion design meetings 
                    each week to collaborate with on our work for our shows, photo shoots, and events.
                    </p>
                </Reveal>
                <div className="joinHeader">
                    <h1>Join Us</h1>
                </div>
            </div>
            <div className="thirdsec">
                <div className="joinusText">
                <p>At FADS, you will have the opportunity to work with our team  
                        on projects and shows in a dynamic and energizing environment 
                        that will inspire, challenge and excite you as you develop and 
                        improve on your skills alongside the FADS family.  
                        Explore the positions we offer below.</p>
                </div>
                <div className="revealBox1">
                <Reveal className="exmember">
                <h4>EXECUTIVE BOARD MEMBERS</h4>
                <p>Shape the organization by contributing your unique 
                    skills and vision, while gaining professional 
                    leadership experience.
                </p>
                </Reveal>
                </div>
            </div>
            <div className="fourthsec">
            <div className="revealBox">
                <Reveal className="designers">
                    <h4>Designers</h4>
                    <p>The chance to showcase your designs in a fashion show with trained models,
                        professional photographers and local media coverage. Have your work 
                        photographed for your portfolio.
                    </p>
                </Reveal>
                </div>
                <div className="revealBox">
                <Reveal className="models">
                    <h4>Models</h4>
                    <p>Get training from professional models, the opportunity to be in editorial-style 
                        photoshoots every month, and exposure to model for other SU clubs, local clothing
                        companies, and Syracuse Fashion Week.</p>
                </Reveal>
                </div>
                <div className="revealBox">
                <Reveal className="committee">
                    <h4>Committee Members</h4>
                    <p>Learn about and apply the aspect of fashion they are interested into the organization and production of a fashion show.</p>
                </Reveal>
                </div>
            </div>
            <div className="lastsec">

            </div>
        </div>
        </SEO>
        </>
    )
};
