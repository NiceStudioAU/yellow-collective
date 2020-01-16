import './style.css'

import React from 'react'

const ScrollArrow = ({ scrollToSection, color }) => {
   return (
      <div className='scroll-wrapper' onClick={() => scrollToSection()}>
         {/* <p className='scroll-text'>Scroll for more</p> */}
         <svg className="scroll-arrow" width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 63.8787V0H33V63.8787L2.56067 33.4393L0.439346 35.5606L34.5 69.6213L68.5607 35.5606L66.4393 33.4393L36 63.8787Z" fill={color} />
         </svg>
      </div>
   )
}

export default ScrollArrow