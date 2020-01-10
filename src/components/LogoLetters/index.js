import './style.css'

import { Back, TweenMax } from "gsap";

import React from 'react'
import { letterNames } from '../../Utils'

const LogoLetters = () => {

   const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return {
         width,
         height
      };
   }
   const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

   React.useEffect(() => {
      function handleResize() {
         setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, [])

   const refs = letterNames.reduce((acc, item) => {
      acc[item] = React.createRef();
      return acc;
   }, {});

   React.useEffect(() => {

      const movementVar = windowDimensions.width > 1100 ? 200 : 100
      Object.values(refs).forEach((item) => {
         if (!item.current) {
            return
         }
         let durationVar = Math.random() * 5
         if (durationVar < 2) {
            durationVar += 1
         }
         TweenMax.to(
            item.current,
            durationVar,
            {
               x: (Math.random() * (movementVar - (movementVar * -1))) + (movementVar * -1),
               y: (Math.random() * (movementVar - (movementVar * -1))) + (movementVar * -1),
               // rotation: -180,
               ease: Back.easeInOut
            })
      })

      setTimeout(() => {
         Object.values(refs).forEach((item) => {
            if (!item.current) {
               return
            }
            TweenMax.to(
               item.current,
               2.5,
               {
                  x: 0,
                  y: 0,
                  // rotation: 180
                  ease: Back.easeInOut
               },
            )
         })
      }, 3500)
   }, [refs, windowDimensions])

   return (
      <div className='logo-page-wrapper'>
         {windowDimensions.width > 1100 ? (
            <>
               <div className='wrapper'>
                  <div className='logo-container'>
                     {/* Y */}
                     <svg ref={refs['yy-base']} className={`multiply yy-base`} width="39" height="116" viewBox="0 0 39 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0384521" width="39" height="115" />
                     </svg>

                     <svg ref={refs['yy-top']} className={`multiply yy-top`} width="115" height="59" viewBox="0 0 115 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M115 0.0384521H0L57.5 58.0385L115 0.0384521Z" />
                     </svg>

                     {/* E */}
                     <svg ref={refs['ye-base']} className={`multiply ye-base`} width="63" height="116" viewBox="0 0 63 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0769 34.6154L39.0769 0H0.615387V115.385H39.0769L39.0769 80.7692C51.822 80.7692 62.1538 70.4373 62.1538 57.6923C62.1538 44.9473 51.822 34.6154 39.0769 34.6154Z" />
                     </svg>
                     <svg ref={refs['ye-top1']} className={`multiply ye-top1`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521H96L0 58.0385V0.0384521Z" />
                     </svg>
                     <svg ref={refs['ye-top2']} className={`multiply ye-top2`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521V58.0385H96L0 0.0384521Z" />
                     </svg>

                     {/* L */}
                     <svg ref={refs['yl1']} className={`multiply yl1`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                     </svg>

                     {/* L */}
                     <svg ref={refs['yl2']} className={`multiply yl2`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                     </svg>

                     {/* O */}
                     <svg ref={refs['yo-base']} className={`multiply yo-base`} width="115" height="116" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="57.5" cy="57.5385" r="57.5" />
                     </svg>
                     <svg ref={refs['yo-top']} className={`multiply yo-top`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                     </svg>

                     {/* w */}
                     <svg ref={refs['yw-base']} className={`multiply yw-base`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77 0.0384521H0L77 115.038V0.0384521Z" />
                     </svg>
                     <svg ref={refs['yw-top']} className={`multiply yw-top`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77 0.0384521H0L77 115.038V0.0384521Z" />
                     </svg>

                     {/* C */}
                     <svg ref={refs['cc1-base']} className={`multiply cc1-base`} width="58" height="116" viewBox="0 0 58 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 57.5385C0 89.2948 25.9675 115.038 58 115.038V0.0384521C25.9675 0.0384521 0 25.7821 0 57.5385Z" />
                     </svg>
                     <svg ref={refs['cc1-top']} className={`multiply cc1-top`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                     </svg>

                     {/* O */}
                     <svg ref={refs['co-base']} className={`multiply co-base`} width="115" height="116" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="57.5" cy="57.5385" r="57.5" />
                     </svg>
                     <svg ref={refs['co-top']} className={`multiply co-top`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                     </svg>

                     {/* L */}
                     <svg ref={refs['cl1']} className={`multiply cl1`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                     </svg>

                     {/* L */}
                     <svg ref={refs['cl2']} className={`multiply cl2`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                     </svg>

                     {/* E */}
                     <svg ref={refs['ce1-base']} className={`multiply ce1-base`} width="63" height="116" viewBox="0 0 63 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0769 34.6154L39.0769 0H0.615387V115.385H39.0769L39.0769 80.7692C51.822 80.7692 62.1538 70.4373 62.1538 57.6923C62.1538 44.9473 51.822 34.6154 39.0769 34.6154Z" />
                     </svg>
                     <svg ref={refs['ce1-top1']} className={`multiply ce1-top1`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521H96L0 58.0385V0.0384521Z" />
                     </svg>
                     <svg ref={refs['ce1-top2']} className={`multiply ce1-top2`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521V58.0385H96L0 0.0384521Z" />
                     </svg>

                     {/* C */}
                     <svg ref={refs['cc2-base']} className={`multiply cc2-base`} width="58" height="116" viewBox="0 0 58 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 57.5385C0 89.2948 25.9675 115.038 58 115.038V0.0384521C25.9675 0.0384521 0 25.7821 0 57.5385Z" />
                     </svg>
                     <svg ref={refs['cc2-top']} className={`multiply cc2-top`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                     </svg>

                     {/* T */}
                     <svg ref={refs['ct-base']} className={`multiply ct-base`} width="39" height="116" viewBox="0 0 39 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0384521" width="39" height="115" />
                     </svg>
                     <svg ref={refs['ct-top']} className={`multiply ct-top`} width="115" height="40" viewBox="0 0 115 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M115 39.0385L-1.70474e-06 39.0385L0 0.0384471L115 0.0384521L115 39.0385Z" />
                     </svg>

                     {/* I */}
                     <svg ref={refs['ci-base']} className={`multiply ci-base`} width="38" height="97" viewBox="0 0 38 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0384521" width="38" height="96" />
                     </svg>
                     <svg ref={refs['ci-top']} className={`multiply ci-top`} width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="19" cy="19.5385" rx="19" ry="19.5" />
                     </svg>

                     {/* V */}
                     <svg ref={refs['cv-base']} className={`multiply cv-base`} width="116" height="97" viewBox="0 0 116 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58 96.0385L0 0.0384521H116L58 96.0385Z" />
                     </svg>
                     <svg ref={refs['cv-top']} className={`multiply cv-top`} width="77" height="58" viewBox="0 0 77 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.5 57.0385L0 0.0384521H77L38.5 57.0385Z" />
                     </svg>

                     {/* E */}
                     <svg ref={refs['ce2-base']} className={`multiply ce2-base`} width="63" height="116" viewBox="0 0 63 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0769 34.6154L39.0769 0H0.615387V115.385H39.0769L39.0769 80.7692C51.822 80.7692 62.1538 70.4373 62.1538 57.6923C62.1538 44.9473 51.822 34.6154 39.0769 34.6154Z" />
                     </svg>
                     <svg ref={refs['ce2-top1']} className={`multiply ce2-top1`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521H96L0 58.0385V0.0384521Z" />
                     </svg>
                     <svg ref={refs['ce2-top2']} className={`multiply ce2-top2`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521V58.0385H96L0 0.0384521Z" />
                     </svg>

                  </div>
               </div>
               <div className='base-letter-wrapper'>
                  <div className='logo-container'>
                     {/* Y */}
                     <svg className={`base-letter yy-base`} width="39" height="116" viewBox="0 0 39 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0384521" width="39" height="115" />
                     </svg>
                     <svg className={`base-letter yy-top`} width="115" height="59" viewBox="0 0 115 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M115 0.0384521H0L57.5 58.0385L115 0.0384521Z" />
                     </svg>

                     {/* E */}
                     <svg className={`base-letter ye-base`} width="63" height="116" viewBox="0 0 63 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0769 34.6154L39.0769 0H0.615387V115.385H39.0769L39.0769 80.7692C51.822 80.7692 62.1538 70.4373 62.1538 57.6923C62.1538 44.9473 51.822 34.6154 39.0769 34.6154Z" />
                     </svg>
                     <svg className={`base-letter ye-top1`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521H96L0 58.0385V0.0384521Z" />
                     </svg>
                     <svg className={`base-letter ye-top2`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521V58.0385H96L0 0.0384521Z" />
                     </svg>

                     {/* L */}
                     <svg className={`base-letter yl1`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                     </svg>

                     {/* L */}
                     <svg className={`base-letter yl2`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                     </svg>

                     {/* O */}
                     <svg className={`base-letter yo-base`} width="115" height="116" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="57.5" cy="57.5385" r="57.5" />
                     </svg>
                     <svg className={`base-letter yo-top`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                     </svg>

                     {/* w */}
                     <svg className={`base-letter yw-base`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77 0.0384521H0L77 115.038V0.0384521Z" />
                     </svg>
                     <svg className={`base-letter yw-top`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77 0.0384521H0L77 115.038V0.0384521Z" />
                     </svg>


                     {/* C */}
                     <svg className={`base-letter cc1-base`} width="58" height="116" viewBox="0 0 58 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 57.5385C0 89.2948 25.9675 115.038 58 115.038V0.0384521C25.9675 0.0384521 0 25.7821 0 57.5385Z" />
                     </svg>
                     <svg className={`base-letter cc1-top`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                     </svg>

                     {/* O */}
                     <svg className={`base-letter co-base`} width="115" height="116" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="57.5" cy="57.5385" r="57.5" />
                     </svg>
                     <svg className={`base-letter co-top`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                     </svg>

                     {/* L */}
                     <svg className={`base-letter cl1`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                     </svg>

                     {/* L */}
                     <svg className={`base-letter cl2`} width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                     </svg>

                     {/* E */}
                     <svg className={`base-letter ce1-base`} width="63" height="116" viewBox="0 0 63 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0769 34.6154L39.0769 0H0.615387V115.385H39.0769L39.0769 80.7692C51.822 80.7692 62.1538 70.4373 62.1538 57.6923C62.1538 44.9473 51.822 34.6154 39.0769 34.6154Z" />
                     </svg>
                     <svg className={`base-letter ce1-top1`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521H96L0 58.0385V0.0384521Z" />
                     </svg>
                     <svg className={`base-letter ce1-top2`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521V58.0385H96L0 0.0384521Z" />
                     </svg>

                     {/* C */}
                     <svg className={`base-letter cc2-base`} width="58" height="116" viewBox="0 0 58 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 57.5385C0 89.2948 25.9675 115.038 58 115.038V0.0384521C25.9675 0.0384521 0 25.7821 0 57.5385Z" />
                     </svg>
                     <svg className={`base-letter cc2-top`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                     </svg>

                     {/* T */}
                     <svg className={`base-letter ct-base`} width="39" height="116" viewBox="0 0 39 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0384521" width="39" height="115" />
                     </svg>
                     <svg className={`base-letter ct-top`} width="115" height="40" viewBox="0 0 115 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M115 39.0385L-1.70474e-06 39.0385L0 0.0384471L115 0.0384521L115 39.0385Z" />
                     </svg>

                     {/* I */}
                     <svg className={`base-letter ci-base`} width="38" height="97" viewBox="0 0 38 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0384521" width="38" height="96" />
                     </svg>
                     <svg className={`base-letter ci-top`} width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="19" cy="19.5385" rx="19" ry="19.5" />
                     </svg>

                     {/* V */}
                     <svg className={`base-letter cv-base`} width="116" height="97" viewBox="0 0 116 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58 96.0385L0 0.0384521H116L58 96.0385Z" />
                     </svg>
                     <svg className={`base-letter cv-top`} width="77" height="58" viewBox="0 0 77 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.5 57.0385L0 0.0384521H77L38.5 57.0385Z" />
                     </svg>

                     {/* E */}
                     <svg className={`base-letter ce2-base`} width="63" height="116" viewBox="0 0 63 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0769 34.6154L39.0769 0H0.615387V115.385H39.0769L39.0769 80.7692C51.822 80.7692 62.1538 70.4373 62.1538 57.6923C62.1538 44.9473 51.822 34.6154 39.0769 34.6154Z" />
                     </svg>
                     <svg className={`base-letter ce2-top1`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521H96L0 58.0385V0.0384521Z" />
                     </svg>
                     <svg className={`base-letter ce2-top2`} width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.0384521V58.0385H96L0 0.0384521Z" />
                     </svg>
                  </div>
               </div>
            </>
         ) : (
               <>
                  <div className='wrapper'>
                     <div className='logo-container-mobile'>
                        {/* Y */}
                        <svg ref={refs['yy-base']} className={`multiply yy-base-mobile`} width="39" height="116" viewBox="0 0 39 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect y="0.0384521" width="39" height="115" />
                        </svg>
                        <svg ref={refs['yy-top']} className={`multiply yy-top-mobile`} width="115" height="59" viewBox="0 0 115 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M115 0.0384521H0L57.5 58.0385L115 0.0384521Z" />
                        </svg>

                        {/* C */}
                        <svg ref={refs['cc1-base']} className={`multiply cc1-base-mobile`} width="58" height="116" viewBox="0 0 58 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M0 57.5385C0 89.2948 25.9675 115.038 58 115.038V0.0384521C25.9675 0.0384521 0 25.7821 0 57.5385Z" />
                        </svg>
                        <svg ref={refs['cc1-top']} className={`multiply cc1-top-mobile`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                        </svg>
                     </div>
                  </div>
                  <div className='base-letter-wrapper'>
                     <div className='logo-container-mobile'>
                        {/* Y */}
                        <svg className={`base-letter yy-base-mobile`} width="39" height="116" viewBox="0 0 39 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect y="0.0384521" width="39" height="115" />
                        </svg>
                        <svg className={`base-letter yy-top-mobile`} width="115" height="59" viewBox="0 0 115 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M115 0.0384521H0L57.5 58.0385L115 0.0384521Z" />
                        </svg>

                        {/* C */}
                        <svg className={`base-letter cc1-base-mobile`} width="58" height="116" viewBox="0 0 58 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M0 57.5385C0 89.2948 25.9675 115.038 58 115.038V0.0384521C25.9675 0.0384521 0 25.7821 0 57.5385Z" />
                        </svg>
                        <svg className={`base-letter cc1-top-mobile`} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                        </svg>
                     </div>
                  </div>
               </>
            )}
      </div>
   )
}

export default LogoLetters