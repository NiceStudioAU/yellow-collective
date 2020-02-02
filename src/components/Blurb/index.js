import './style.css'

import React from 'react'

const Blurb = () => {
   return (
      <div className="blurb-container">
         <div className='blurb-text-wrapper'>
            <h3 className='blurb-heading'>The Yellow Collective are a group of Imagineers.</h3>
            <p className='blurb-text'>They work across a wide range of mediums and physical areas that all require creative input to succeed.</p>
         </div>
         <div className='blurb-boxes'>
            <div className='blurb-box' style={{ backgroundColor: '#3db6e9', border: '2px solid #3db6e9' }}>
               <div className="blurb-box-title" style={{ backgroundColor: '#3db6e9', color: '#fcfcea' }}>
                  <h3 className='blurb-category'>Brands</h3>
               </div>
               <ul className='blurb-category-text'>
                  <li>Brand development</li>
                  <li>Brand profiling and strategy</li>
                  <li>Brand names</li>
                  <li>Corporate communications workshops</li>
               </ul>
               {/* <div className="shadow"></div> */}
            </div>
            <div className='blurb-box' style={{ backgroundColor: '#fdba2a', border: '2px solid #fdba2a' }}>
               <div className="blurb-box-title" style={{ backgroundColor: '#fdba2a', color: '#fcfcea' }}>
                  <h3 className='blurb-category'>Communications</h3>
               </div>
               <ul className='blurb-category-text'>
                  <li>Marketing strategy</li>
                  <li>Advertising</li>
                  <li>Web and App concepts and development</li>
                  <li>Digital Communications</li>
               </ul>
               {/* <div className="shadow"></div> */}
            </div>
            <div className='blurb-box' style={{ backgroundColor: '#DC438B', border: '2px solid #DC438B' }}>
               <div className="blurb-box-title" style={{ backgroundColor: '#DC438B', color: '#fcfcea' }}>
                  <h3 className='blurb-category'>Architectural Styling</h3>
               </div>
               <ul className='blurb-category-text'>
                  <li>Room layout and furnishing</li>
                  <li>Pre-sale house styling</li>
                  <li>Better living reports</li>
               </ul>
               {/* <div className="shadow"></div> */}
            </div>
            <div className='blurb-box' style={{ backgroundColor: '#4e873b', border: '2px solid #4e873b' }}>
               <div className="blurb-box-title" style={{ backgroundColor: '#4e873b', color: '#fcfcea' }}>
                  <h3 className='blurb-category'>Fund Raising</h3>
               </div>
               <ul className='blurb-category-text'>
                  <li>Start-up strategies</li>
                  <li>Marketing due diligence</li>
                  <li>Company Profile presentations</li>
               </ul>
               {/* <div className="shadow"></div> */}
            </div>
         </div>
      </div>
   )
}

export default Blurb