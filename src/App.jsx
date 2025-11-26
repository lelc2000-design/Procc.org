import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Somos from './components/Somos'
import Equipo from './components/Equipo'
import Libros from './components/Libros'
import Estamos from './components/Estamos'
import Hacemos from './components/Hacemos'
import Decimos from './components/Decimos'
import Publicaciones from './components/Publicaciones'
import UltimasPublicaciones from './components/UltimasPublicaciones'
import Herramientas from './components/Herramientas'
import Blog from './components/Blog'
import Calendario from './components/Calendario'
import Seguridad from './components/Seguridad'
import Comunidad from './components/Comunidad'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Somos />
        <Equipo />
        <Estamos />
        <Hacemos />
        <Decimos />
        <Libros />
        <UltimasPublicaciones />
        <Publicaciones />
        <Blog />
        <Calendario />
        <Comunidad />
        <Seguridad />
        <Herramientas />
      </main>
      <Footer />
    </div>
  )
}

export default App
