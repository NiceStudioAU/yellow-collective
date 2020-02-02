import './style.css'

import Blurb from '../../components/Blurb'
import Boxes from '../../components/Boxes'
import Definition from '../../components/Definition'
import Draggable from "gsap/Draggable"
import Form from '../../components/Form'
import Header from '../../components/Form'
import LogoLetters from '../../components/LogoLetters'
import React from 'react'
import ScrollArrow from '../../components/ScrollArrow'
import { letterClasses } from '../../Utils'

const Homepage = () => {

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

   const sectionRefs = ['one', 'two', 'three', 'four', 'five', 'six'].reduce((acc, item) => {
      acc[item] = React.createRef();
      return acc;
   }, {});

   const scrollToSection = (section) => {
      window.scrollTo({
         left: 0,
         top: sectionRefs[section].current.offsetTop,
         behavior: 'smooth'
      })
   }

   React.useEffect(() => {
      makeDraggable()
   }, [])

   return (
      <>
         {/* Animation */}
         <div className='home-section'>
            <LogoLetters />
            <ScrollArrow scrollToSection={() => scrollToSection('one')} color='#fff' fadeIn={true} />
         </div>

         {/* Definition */}
         <div className='home-section' ref={sectionRefs['one']} style={{ backgroundColor: '#fdba2a' }}>
            <Definition />
            <ScrollArrow scrollToSection={() => scrollToSection('two')} color='#fdba2a' />
         </div>

         {/* Yellow Collective are.... 6 Boxes */}
         <div className='home-section' ref={sectionRefs['two']} style={{ backgroundColor: '#fcfcea' }}>
            {/* <Blurb /> */}
            <Boxes />
            <ScrollArrow scrollToSection={() => scrollToSection('three')} color='#fff' />
         </div>
         <div className='home-section' ref={sectionRefs['three']} style={{ backgroundColor: '#fff' }}>
            <Form />
         </div>
      </>
   )
}

export default Homepage

            // 4e873b green
            // d32c1c red
            // fdba2a yellow
            // DC438B pink
            // fcfcea cream
// 3db6e9 blue