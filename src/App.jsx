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
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Detectar hash en URL
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'inicio'
      setActiveSection(hash)
      // Scroll al top cuando cambia la sección
      window.scrollTo(0, 0)
    }

    // Inicializar con el hash actual
    handleHashChange()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Función para renderizar solo la sección activa
  const renderSection = () => {
    switch(activeSection) {
      case 'inicio':
        return <Hero />
      case 'somos':
      case 'proyecto':
      case 'metodologia':
      case 'red':
      case 'equipo':
      case 'instituciones':
        return <Somos />
      case 'estamos':
      case 'andalucia':
      case 'aragon':
      case 'galicia':
      case 'madrid':
      case 'pais-vasco':
      case 'argentina':
        return <Estamos />
      case 'hacemos':
      case 'formacion':
      case 'intervencion':
      case 'atencion':
      case 'supervision':
      case 'asesoria':
        return <Hacemos />
      case 'decimos':
      case 'publicaciones':
      case 'libros':
      case 'videos':
      case 'podcasts':
      case 'fotografias':
        return <Decimos />
      case 'blog':
        return <Blog />
      case 'calendario':
        return <Calendario />
      case 'comunidad':
        return <Comunidad />
      case 'seguridad':
        return <Seguridad />
      case 'contacto':
      case 'hablemos':
        return <Herramientas />
      default:
        return <Hero />
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header isScrolled={isScrolled} setActiveSection={setActiveSection} />
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[calc(100vh-5rem)]"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
