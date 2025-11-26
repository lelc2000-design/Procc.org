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
import Videos from './components/Videos'
import Fotografias from './components/Fotografias'
import Podcasts from './components/Podcasts'
import Hablemos from './components/Hablemos'
import Herramientas from './components/Herramientas'
import Blog from './components/Blog'
import Calendario from './components/Calendario'
import Seguridad from './components/Seguridad'
import Comunidad from './components/Comunidad'
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
      // Scroll al top cuando cambia la sección - FORZADO
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, 0)
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

  // Función para renderizar solo la sección activa - CADA UNA INDEPENDIENTE
  const renderSection = () => {
    switch(activeSection) {
      case 'inicio':
        return <Hero />
      case 'somos':
      case 'proyecto':
      case 'metodologia':
      case 'red':
      case 'instituciones':
        return <Somos />
      case 'equipo':
        return <Equipo />
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
        return <Decimos />
      case 'publicaciones':
        return <Publicaciones />
      case 'ultimas-publicaciones':
        return <UltimasPublicaciones />
      case 'libros':
        return <Libros />
      case 'videos':
        return <Videos />
      case 'podcasts':
        return <Podcasts />
      case 'fotografias':
        return <Fotografias />
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
        return <Hablemos />
      case 'herramientas':
        return <Herramientas />
      default:
        return <Hero />
    }
  }

  return (
    <div className="h-screen bg-white overflow-hidden flex flex-col">
      <Header isScrolled={isScrolled} setActiveSection={setActiveSection} />
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative" style={{ scrollBehavior: 'smooth' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full min-h-full"
            onAnimationStart={() => {
              // Forzar scroll al top cuando inicia la animación
              window.scrollTo({ top: 0, behavior: 'instant' })
              document.documentElement.scrollTop = 0
              document.body.scrollTop = 0
            }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
