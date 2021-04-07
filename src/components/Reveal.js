import React, { useRef, useEffect} from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
};

const Reveal = ({
  children,
  wrapperElement = "div",
  direction = null,
  delay = 0,
  ...props
}) => {
  const Component = wrapperElement;
  let compRef = useRef(null);
  const distance = 100;

  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    let revealTl = gsap.timeline();
    revealTl.from(compRef.current, {
      ease: 'expo.InOut',
      duration: 1.2,
      opacity: 0,
      delay,
      ...fadeDirection,
    });
    revealTl.restart(true, false);
  }, []);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default Reveal;

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  duration: PropTypes.number,
  distance: PropTypes.number,
};
Reveal.defaultProps = {
  direction : null,
  duration : 1.2,
  distance : 100,
};
