import './style.css'

import React from 'react'

const Boxes = () => {
   return (
      <div className="boxes-container">
         <div className='boxes-text-wrapper'>
            <h3 className='boxes-heading'>The Yellow Collective are a group of Imagineers.</h3>
            <p className='boxes-text'>They work across a wide range of mediums and physical areas that all require creative input to succeed.</p>
         </div>
         <div className='boxes-boxes'>
            <div className='boxes-box'>
               <div className='boxes-icon'>
                  <svg viewBox="0 0 482 700" fill="none" xmlns="http://www.w3.org/2000/svg" className='boxes-svg'>
                     <rect y="240.829" width="481.657" height="459.172" fill="#FDBA2A" />
                     <g style={{ mixBlendMode: 'multiply' }}>
                        <circle cx="240.828" cy="240.828" r="240.828" fill="#DC438B" />
                     </g>
                  </svg>
               </div>
               <div className='boxes-box-text-wrapper'>
                  <h3 className='boxes-category'>Brands</h3>
                  <p className='boxes-category-text'>Brand development, brand profiling and strategy as well as coporate communications workshops.</p>
               </div>
            </div>
            <div className='boxes-box'>
               <div className='boxes-icon'>
                  <svg viewBox="0 0 647 700" fill="none" xmlns="http://www.w3.org/2000/svg" className='boxes-svg'>
                     <path d="M646.438 140.37L323.219 700L0 140.37H646.438Z" fill="#3DB6E9" />
                     <g style={{ mixBlendMode: 'multiply' }}>
                        <path d="M547.625 0L323.219 388.786L98.8125 0H547.625Z" fill="#FDBA2A" />
                     </g>
                  </svg>
               </div>
               <div className='boxes-box-text-wrapper'>
                  <h3 className='boxes-category'>Communications</h3>
                  <p className='boxes-category-text'>Marketing strategy, advertising, digital communications and web and app concepts and development.</p>
               </div>
            </div>
            <div className='boxes-box'>
               <div className='boxes-icon'>
                  <svg viewBox="0 0 525 700" fill="none" xmlns="http://www.w3.org/2000/svg" className='boxes-svg'>
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M349.751 0.000116878L349.751 700C156.566 699.866 0.000111794 543.217 9.49028e-05 350C7.80112e-05 156.783 156.566 0.134472 349.751 0.000116878Z" fill="#FDBA2A" />
                     <g style={{ mixBlendMode: 'multiply' }}>
                        <rect x="175" y="175" width="350" height="350" fill="#DC438B" />
                     </g>
                  </svg>
               </div>
               <div className='boxes-box-text-wrapper'>
                  <h3 className='boxes-category'>Architectural Styling</h3>
                  <p className='boxes-category-text'>Room layout and furnishing, pre-sale house styling and better living reports.</p>
               </div>
            </div>
            <div className='boxes-box'>
               <div className='boxes-icon'>
                  <svg className='boxes-svg' viewBox="0 0 846 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="350" cy="350" r="350" fill="#3DB6E9" />
                     <g style={{ mixBlendMode: 'multiply' }}>
                        <circle cx="603.335" cy="457.661" r="242.058" fill="#FDBA2A" />
                     </g>
                  </svg>
               </div>
               <div className='boxes-box-text-wrapper'>
                  <h3 className='boxes-category'>Fund Raising</h3>
                  <p className='boxes-category-text'>Start-up strategies, marketing due diligence and company Profile presentations.</p>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Boxes