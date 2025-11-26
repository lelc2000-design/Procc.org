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

  // Componentes de contenido COMPLETOS sin wrapper de sección
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
        {/* Filtros Premium */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {['Todas', 'Publicaciones', 'Noticias', 'Podcasts'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-procc-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-procc-primary/20 hover:border-procc-primary hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid de Publicaciones COMPLETO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card-premium group hover:shadow-premium transition-all duration-300"
            >
              {item.image && (
                <div className="relative h-48 mb-4 overflow-hidden rounded-t-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {item.category && (
                    <span className="px-3 py-1 bg-procc-light text-procc-primary rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  )}
                  {item.date && (
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <MdCalendarToday className="text-sm" />
                      {item.date}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-procc-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                )}
                {item.authors && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MdPerson className="text-procc-primary" />
                    <span>{item.authors.join(', ')}</span>
                  </div>
                )}
                {item.link && (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-procc-primary font-semibold hover:text-procc-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Leer más</span>
                    <MdArrowForward />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón ver todas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://www.procc.org/publicaciones/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-procc-primary to-procc-secondary text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-procc-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todas las Publicaciones en el Sitio Oficial →
          </motion.a>
        </motion.div>
      </div>
    )
  }

  const LibrosContent = () => {
    return (
      <div>
        <div className="mb-8">
          <p className="text-gray-500 uppercase text-sm mb-4 text-center">ARCHIVO</p>
        </div>
        <div className="space-y-8">
          {books.map((book, idx) => (
            <motion.article
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-procc-primary transition-colors">
                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {book.title}
                </a>
              </h3>
              {book.author && (
                <p className="text-gray-700 text-sm mb-2">
                  <span className="font-semibold">{book.author}</span>
                  {book.year && <span> ({book.year})</span>}
                </p>
              )}
              {book.description && (
                <p className="text-gray-700 leading-relaxed">
                  {book.description}
                </p>
              )}
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <a
            href="#publicaciones"
            className="inline-block px-6 py-3 bg-procc-primary text-white rounded-lg font-semibold hover:bg-procc-secondary transition-colors"
          >
            ¿BUSCAS ALGUNA PUBLICACIÓN? ENCUÉNTRALA PINCHANDO AQUÍ
          </a>
        </motion.div>
      </div>
    )
  }

  const VideosContent = () => {
    return (
      <div>
        <div className="mb-8">
          <p className="text-gray-500 uppercase text-sm mb-4 text-center">ARCHIVO</p>
        </div>
        <div className="space-y-8">
          {videos.map((video, idx) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-procc-primary transition-colors">
                <a 
                  href={video.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {video.title}
                </a>
              </h3>
              {video.description && (
                <p className="text-gray-700 leading-relaxed">
                  {video.description}
                </p>
              )}
              {(video.category || video.date) && (
                <p className="text-gray-500 text-sm mt-2">
                  {video.category && <span className="font-semibold">{video.category}</span>}
                  {video.category && video.date && <span> • </span>}
                  {video.date && <span>{video.date}</span>}
                </p>
              )}
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <a
            href="#publicaciones"
            className="inline-block px-6 py-3 bg-procc-primary text-white rounded-lg font-semibold hover:bg-procc-secondary transition-colors"
          >
            ¿BUSCAS ALGUNA PUBLICACIÓN? ENCUÉNTRALA PINCHANDO AQUÍ
          </a>
        </motion.div>
      </div>
    )
  }

  const PodcastsContent = () => {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast, idx) => (
            <motion.article
              key={podcast.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="card-premium group hover:shadow-premium transition-all duration-300 overflow-hidden bg-white"
            >
              {/* Imagen Premium con overlay */}
              <div className="relative h-56 bg-gradient-to-br from-procc-primary via-procc-secondary to-procc-green overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                    <MdMic className="text-6xl text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-procc-primary uppercase tracking-wide">{podcast.category}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-procc-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white">{podcast.date}</span>
                  </div>
                  {podcast.duration && (
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-procc-primary">{podcast.duration}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-procc-primary transition-colors leading-tight">
                    {podcast.title}
                  </h3>
                  {podcast.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {podcast.description}
                    </p>
                  )}
                  {podcast.link && (
                    <motion.a
                      href={podcast.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-procc-primary font-semibold hover:text-procc-secondary transition-colors group/link"
                      whileHover={{ x: 5 }}
                    >
                      <MdVideoLibrary className="text-lg" />
                      <span>Escuchar podcast</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-procc-primary mb-2">{podcasts.length}</div>
            <div className="text-sm text-gray-600 font-medium">Podcasts disponibles</div>
          </div>
        </motion.div>
      </div>
    )
  }

  const FotografiasContent = () => {
    const [selectedGallery, setSelectedGallery] = useState(null)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotografias.map((galeria, idx) => (
            <motion.article
              key={galeria.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="card-premium group hover:shadow-premium transition-all duration-300 overflow-hidden bg-white cursor-pointer"
              onClick={() => {
                setSelectedGallery(galeria)
                setSelectedImageIndex(0)
              }}
            >
              <div className="relative h-56 bg-gradient-to-br from-procc-primary via-procc-secondary to-procc-green overflow-hidden">
                {galeria.images && galeria.images[0] ? (
                  <img
                    src={galeria.images[0]}
                    alt={galeria.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-procc-primary uppercase tracking-wide">{galeria.category}</span>
                </div>
                <div className="absolute top-4 left-4 bg-procc-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-white">{galeria.date}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <MdImage className="text-lg" />
                  <span className="text-sm font-semibold">{galeria.images?.length || 0} fotos</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-procc-primary transition-colors leading-tight">
                    {galeria.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {galeria.description}
                  </p>
                  <div className="text-procc-primary font-semibold text-sm">
                    Ver galería →
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-procc-primary mb-2">{fotografias.length}</div>
            <div className="text-sm text-gray-600 font-medium">Galerías disponibles</div>
          </div>
        </motion.div>

        {/* Modal de Galería */}
        {selectedGallery && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 bg-gradient-to-r from-procc-primary to-procc-secondary text-white flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedGallery.title}</h3>
                  <p className="text-white/90 text-sm">{selectedGallery.images?.length || 0} fotos</p>
                </div>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="relative h-[60vh] bg-gray-900 flex items-center justify-center">
                {selectedGallery.images && selectedGallery.images[selectedImageIndex] ? (
                  <img
                    src={selectedGallery.images[selectedImageIndex]}
                    alt={`${selectedGallery.title} - ${selectedImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-white text-xl">Imagen no disponible</div>
                )}
                {selectedGallery.images && selectedGallery.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImageIndex((prev) => 
                        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
                      )}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setSelectedImageIndex((prev) => 
                        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
                      )}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                    >
                      →
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                      {selectedImageIndex + 1} / {selectedGallery.images.length}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </>
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

          {/* Contenido de la pestaña activa - CONTENIDO COMPLETO */}
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
