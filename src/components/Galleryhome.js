import React,{ useState, useEffect } from "react";
import '../assets/styles/galleryhome.scss';
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import {ReactComponent as TopRight} from '../assets/images/topright.JPG';
import {ReactComponent as TopLeft} from '../assets/images/topright.JPG';
import {ReactComponent as BottomLeft} from '../assets/images/botleft.JPG';
import {ReactComponent as BottomRight} from '../assets/images/botright.JPG';

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"]; 

const Galleryhome = () => {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 1500);
  }, [colors]);

  return (
    <ul>
      {colors.map(background => (
        <motion.li
          key={background}
          layoutTransition={spring}
          style={{ background }}
        />
      ))}
    </ul>
  );
};



export default Galleryhome;