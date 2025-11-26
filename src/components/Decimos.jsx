import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MdMenuBook, MdVideoLibrary, MdMic, MdImage, MdNewspaper } from 'react-icons/md'
import { publications, news, podcastEpisodes } from '../data/publications'
import { books } from '../data/books'
import { videos } from '../data/videos'
import { podcasts } from '../data/podcasts'
import { fotografias } from '../data/fotografias'

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
        return <PublicacionesContent />
      case 'libros':
        return <LibrosContent />
      case 'videos':
        return <VideosContent />
      case 'podcasts':
        return <PodcastsContent />
      case 'fotografias':
        return <FotografiasContent />
      default:
        return <PublicacionesContent />
    }
  }

  // Componentes de contenido sin wrapper de sección
  const PublicacionesContent = () => {
    const [activeFilter, setActiveFilter] = useState('Todas')
    const allContent = [...publications, ...news, ...podcastEpisodes].sort((a, b) => {
      const dateA = new Date(a.date || '2000')
      const dateB = new Date(b.date || '2000')
      return dateB - dateA
    })
    const filteredContent = activeFilter === 'Todas' ? allContent : activeFilter === 'Publicaciones' ? publications : activeFilter === 'Noticias' ? news : podcastEpisodes

    return (
      <div>
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {['Todas', 'Publicaciones', 'Noticias', 'Podcasts'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-procc-primary text-white'
                  : 'bg-white text-gray-700 border-2 border-procc-primary/20 hover:border-procc-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card-premium"
            >
              <h3 className="text-xl font-bold text-procc-primary mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.category} • {item.date}</p>
              {item.description && <p className="text-gray-700 text-sm">{item.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  const LibrosContent = () => {
    return (
      <div className="space-y-8">
        {books.map((book, idx) => (
          <motion.article
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-procc-primary mb-2">
              <a href={book.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {book.title}
              </a>
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">{book.author}</span> ({book.year})
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">{book.description}</p>
          </motion.article>
        ))}
      </div>
    )
  }

  const VideosContent = () => {
    return (
      <div className="space-y-8">
        {videos.map((video, idx) => (
          <motion.article
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-procc-primary mb-2">
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {video.title}
              </a>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">{video.description}</p>
            <p className="text-gray-500 text-xs mt-2">
              Categoría: <span className="font-semibold">{video.category}</span> | Año: <span className="font-semibold">{video.date}</span>
            </p>
          </motion.article>
        ))}
      </div>
    )
  }

  const PodcastsContent = () => {
    return (
      <div className="space-y-8">
        {podcasts.map((podcast, idx) => (
          <motion.article
            key={podcast.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-procc-primary mb-2">
              <a href={podcast.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {podcast.title}
              </a>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">{podcast.description}</p>
            <p className="text-gray-500 text-xs mt-2">
              Fecha: <span className="font-semibold">{podcast.date}</span>
            </p>
          </motion.article>
        ))}
      </div>
    )
  }

  const FotografiasContent = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fotografias.map((gallery, idx) => (
          <motion.div
            key={gallery.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="card-premium"
          >
            <h3 className="text-xl font-bold text-procc-primary mb-4">{gallery.title}</h3>
            {gallery.images && gallery.images.length > 0 && (
              <img
                src={gallery.images[0]}
                alt={gallery.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-gray-600 text-sm">{gallery.description}</p>
          </motion.div>
        ))}
      </div>
    )
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

          {/* Contenido de la pestaña activa */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Decimos
