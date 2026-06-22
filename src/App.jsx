import { useState, useEffect } from 'react'
import heroImg from './assets/logo.png'
import './App.css'

import Hero from './components/Hero'
import Home from './components/Home'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <div className="loading-screen">
          {/* Replace with your logo image when uploaded */}
          <img src={heroImg} alt="AuraGene Logo" className="loading-logo" />
        </div>
      ) : (
        <>
          <Hero />
          <Home />
        </>
      )}
    </div>
  )
}

export default App
