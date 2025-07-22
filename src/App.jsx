import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Portofolio from './pages/Portofolio';
import Contact from './pages/Contact';
import NotFound from './pages/404';
import Navbar from './components/Navbar';
import WelcomeScreen from './pages/WelcomeScreen';

function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      {!entered && <WelcomeScreen onEnter={() => setEntered(true)} />}
      {entered && (
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
      )}
    </>
  )
}

export default App
