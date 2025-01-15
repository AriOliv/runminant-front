import React from 'react'
import { Page } from '@geist-ui/core'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Advantages from './components/Advantages'
import Stats from './components/Stats'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <Hero />
        <Features />
        <Advantages />
        <Stats />
        <Integrations />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
