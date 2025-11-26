import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MdMenuBook, MdVideoLibrary, MdMic, MdImage, MdNewspaper } from 'react-icons/md'
import Publicaciones from './Publicaciones'
import Libros from './Libros'
import Videos from './Videos'
import Podcasts from './Podcasts'
import Fotografias from './Fotografias'

const Decimos = () => {
  const [activeTab, setActiveTab] = useState('publicaciones')

  useEffect(() => {
    // Leer tab desde sessionStorage si viene del menú
    const storedTab = sessionStorage.getItem('decimos_tab')
    if (storedTab) {
      setActiveTab(storedTab)
      sessionStorage.removeItem('decimos_tab')
    } else {
      // Detectar hash en URL
      const hash = window.location.hash.replace('#', '')
      const validTabs = ['publicaciones', 'libros', 'videos', 'podcasts', 'fotografias']
      if (validTabs.includes(hash)) {
        setActiveTab(hash)
      }
    }
  }, [])

  const tabs = [
    { id: 'publicaciones', name: 'Publicaciones', icon: <MdNewspaper /> },
    { id: 'libros', name: 'Libros', icon: <MdMenuBook /> },
    { id: 'videos', name: 'Videos', icon: <MdVideoLibrary /> },
    { id: 'podcasts', name: 'Podcasts', icon: <MdMic /> },
    { id: 'fotografias', name: 'Fotografías', icon: <MdImage /> },
  ]

  const renderTabContent = () => {
    switch(activeTab) {
      case 'publicaciones':
        return <Publicaciones />
      case 'libros':
        return <Libros />
      case 'videos':
        return <Videos />
      case 'podcasts':
        return <Podcasts />
      case 'fotografias':
        return <Fotografias />
      default:
        return <Publicaciones />
    }
  }


  return (
    <section id="decimos" className="min-h-screen section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative pt-24 pb-16">
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-container-premium p-8 md:p-12">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="section-title text-gradient mb-6">DECIMOS</h1>
            <p className="section-subtitle max-w-4xl mx-auto">
              Explora nuestras publicaciones, libros, videos, podcasts y recursos educativos
            </p>
          </motion.div>

          {/* Pestañas */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b-2 border-procc-primary/20 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-procc-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-procc-light hover:text-procc-primary border-2 border-procc-primary/20'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Contenido de la pestaña activa - USAR COMPONENTES COMPLETOS */}
          <div className="relative -mx-8 md:-mx-12">
            <div className="px-0">
              {renderTabContent()}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Decimos
