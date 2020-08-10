import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import '../assets/styles/fadsbio.scss';
import Reveal from '../components/Reveal';

function Fadsbio() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(400px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(400px) rotateX(180deg)', color: '#502473' },
      { transform: 'perspective(400px) rotateX(0deg)' },
    ],
    leave: [{ color: '#DAA9FA' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#7900FF' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['FADS INTRO LIKE ']), 2500))
    ref.current.push(setTimeout(() => set(['BRAND MESSAGE' , 'Values', 'Ethics']), 4000))
    ref.current.push(setTimeout(() => set(['What FADS IS', 'and what we', 'DO']), 7000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div className="wrapper">
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}
export default Fadsbio;