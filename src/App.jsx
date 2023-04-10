import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./component/Header.jsx";
import HeroSection from "./component/HeroSection.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
    </>
  )
}

export default App
