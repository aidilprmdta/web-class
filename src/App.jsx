import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import WelcomeScreen from './WelcomeScreen'
import Home from "./pages/Home"
import About from "./pages/About"
import Portofolio from './pages/Portofolio'
import Contact from './pages/Contact'
import NotFound from './pages/404'
import Navbar from './components/Navbar'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    AOS.init({ once: true })

    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (showWelcome) {
    return <WelcomeScreen />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
