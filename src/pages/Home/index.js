import { Back, TweenMax } from 'gsap'

import Definition from '../../components/Definition'
import Draggable from "gsap/Draggable"
import Header from '../../components/Header'
import LogoLetters from '../../components/LogoLetters'
import React from 'react'
import ScrollArrow from '../../components/ScrollArrow'
import { letterClasses } from '../../Utils'

const Homepage = () => {

   const moveLabelref = React.useRef(() => React.createRef())
   const makeDraggable = () => {
      for (let i = 0; i < letterClasses.length; i++) {
         const element = letterClasses[i];
         Draggable.create(element, {
            type: 'x,y',
            bounds: ".App",
            throwProps: true,
         });
      }
   }

   React.useEffect(() => {
      makeDraggable()

      TweenMax.to(
         moveLabelref.current,
         1.3,
         {
            scale: 3,
            ease: Back.easeInOut,
            yoyo: true,
         }
      )

      setTimeout(() => {
         TweenMax.to(
            moveLabelref.current,
            2.5,
            {
               scale: 1,
               opacity: 0,
               ease: Back.easeInOut
            },
         )
      }, 1300)
   }, [])


   return (
      <>
         <Header />
         <LogoLetters />
         <ScrollArrow />
         <Definition />
      </>
   )
}

export default Homepage