import { useState } from 'react'
import './App.css'
import './styles/global.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Form from './components/form/Form.jsx'
import ImageGallery from './components/ImageGallery.jsx'
import DonationCounter from './components/DonationCounter.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Seam from './components/Seam.jsx'
import seamHero from './assets/seam-hero.svg?react'
import seamForm from './assets/seam-form.svg?react'
import seamVerticalLeft from './assets/seam-vertical-left.svg?react'
import seamAbout from './assets/seam-about.svg?react'
import seamFooter from './assets/seam-footer.svg?react'

function App() {
  return (
    <>
      {/* Sections only */}
      <Header />
      <Hero />
      <Form />
      <Seam SVG={seamForm} />
      <ImageGallery />
      <Seam SVG={seamVerticalLeft} />
      <DonationCounter />
      <Seam SVG={seamAbout} />
      <About />
      <Seam SVG={seamFooter} />
      <Footer />

    </>
  )
}

export default App