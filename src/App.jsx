import { useState, useEffect } from 'react'
import heroImg from './assets/logo.png'
import './App.css'
import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutFunc from './components/About'
import ContactFunc from './components/Contact'
import ProjectFunc from './components/Project'
import ServicesFunc from './components/Services'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={heroImg} alt="AuraGene Logo" className="loading-logo" />
      </div>
    )
  }

  return (
    
    <BrowserRouter>
      {/* ✅ Hero always visible */}
      <Hero />

      {/* ✅ Only page content changes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutFunc />} />
        <Route path="/services" element={<ServicesFunc />} />
        <Route path="/projects" element={<ProjectFunc />} />
        <Route path="/contact" element={<ContactFunc />} />
      </Routes>

      <Analytics />
    </BrowserRouter>
  )
}

export default App
