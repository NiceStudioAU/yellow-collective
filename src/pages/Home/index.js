import './style.css'

import Definition from '../../components/Definition'
import Draggable from "gsap/Draggable"
import Header from '../../components/Header'
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
         <Header />
         <div className='home-section'>
            <LogoLetters />
            {/* <ScrollArrow scrollToSection={() => scrollToSection('one')} color='#000' /> */}
         </div>
         <div className='home-section' ref={sectionRefs['one']} style={{ backgroundColor: '#fdba2a' }}>
            <Definition />
            <ScrollArrow scrollToSection={() => scrollToSection('two')} color='#fff' />
         </div>
         <div className='home-section' ref={sectionRefs['two']} style={{ backgroundColor: '#4e873b' }}>
            <Definition />
            <ScrollArrow scrollToSection={() => scrollToSection('three')} color='#fff' />
         </div>
         <div className='home-section' ref={sectionRefs['three']} style={{ backgroundColor: '#3DB6E9' }}>
            <Definition />
            <ScrollArrow scrollToSection={() => scrollToSection('four')} color='#fff' />
         </div>
         <div className='home-section' ref={sectionRefs['four']} style={{ backgroundColor: '#fcfcea' }}>
            <Definition />
            <ScrollArrow scrollToSection={() => scrollToSection('five')} color='#000' />
         </div>
         <div className='home-section' ref={sectionRefs['five']} style={{ backgroundColor: '#DC438B' }}>
            <Definition />
            <ScrollArrow scrollToSection={() => scrollToSection('six')} color='#fff' />
         </div>
         <div className='home-section' ref={sectionRefs['six']} style={{ backgroundColor: '#d32c1c' }}>
            <Definition />
         </div>
      </>
   )
}

export default Homepage

// #4e873b green
// #d32c1c red

// DC438B pink