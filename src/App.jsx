import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import ProductTour from './Components/ProductTour'
import ProductTourEditor from './Components/Editor'

function App() {
  return (
    <>
    <Header></Header>
    <HeroSection></HeroSection>
    <ProductTour></ProductTour>
    <ProductTourEditor></ProductTourEditor>
    </>
  )
}

export default App
