import './style.css'

import { Back, TweenMax } from "gsap";

import React from 'react'

const ScrollArrow = ({ scrollToSection, color, fadeIn }) => {
   const arrowRef = React.useRef(() => React.createRef())
   React.useEffect(() => {
      if (!!fadeIn) {
         setTimeout(() => {
            TweenMax.fromTo(arrowRef.current, 2, { opacity: 0 }, { opacity: 1, ease: Back.easeInOut })
         }, 3000)
      }
   }, [fadeIn])
   return (
      <div className={!!fadeIn ? 'scroll-wrapper fade-in' : 'scroll-wrapper'} onClick={() => scrollToSection()} ref={arrowRef}>
         <svg className="scroll-arrow" width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 63.8787V0H33V63.8787L2.56067 33.4393L0.439346 35.5606L34.5 69.6213L68.5607 35.5606L66.4393 33.4393L36 63.8787Z" fill={color} />
         </svg>
      </div>
   )
}

export default ScrollArrow