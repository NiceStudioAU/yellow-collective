import './style.css'

import Plx from 'react-plx';
import React from 'react'

const parallaxData = [
   {
      start: '.def-title',
      duration: '50vh',
      properties: [
         {
            startValue: 5,
            endValue: -5,
            unit: 'vh',
            property: 'translateY'
         }, {
            startValue: 0,
            endValue: 1,
            property: 'opacity'
         }
      ],
      easing: 'easeOut'
   }
];

const Definition = () => {
   return (
      <div className="def-container">
         <div className='text-wrapper'>
            <Plx
               className='MyAwesomeParallax'
               parallaxData={parallaxData}
            >
               <h2 className="def-title">Imagineer</h2>
               <h3 className="def-spelling">[ ih-maj-uh-neer ]</h3>
               <h3 className='def-subheading'>(noun)</h3>
               <p className='def-body'>A person who devises and implements a new or highly imaginative concept or technology. The term was created by Walt Disney to describe the people who devise the attractions in Walt Disney theme parks.</p>
            </Plx>
         </div>
         <div className='def-right'>
            <svg className='def-circle' viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="57.5" cy="57.5385" r="57.5" />
            </svg>
            <svg className="def-shape2" viewBox="0 0 683 683" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M682.604 341.698V683H341.509C341.44 683 341.371 683 341.302 683C341.233 683 341.165 683 341.096 683H0V341.698C0 153.202 152.806 0.39563 341.302 0.39563C529.798 0.39563 682.604 153.202 682.604 341.698Z" />
            </svg>
         </div>
      </div>
   )
}

export default Definition