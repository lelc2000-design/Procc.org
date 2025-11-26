import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdImage, MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { fotografias } from '../data/fotografias'

const Fotografias = () => {
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <section id="fotografias" className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white relative pt-24 pb-16">
      {/* Verde claro del logo debajo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Contenedor Premium con Borde */}
        <div className="section-container-premium p-8 md:p-12">
          {/* Header Premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-procc-primary to-transparent"></div>
              <MdImage className="text-5xl text-procc-primary" />
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-procc-primary to-transparent"></div>
            </div>
            <h2 className="section-title text-gradient mb-4">FOTOGRAFÍAS</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Consulta las mejores fotogalerías de los encuentros de ProCC
            </p>
          </motion.div>

          {/* Grid de Galerías Ultra Premium */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fotografias.map((galeria, idx) => (
              <motion.article
                key={galeria.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="card-premium group hover:shadow-premium transition-all duration-300 overflow-hidden bg-white cursor-pointer"
                onClick={() => {
                  setSelectedGallery(galeria)
                  setSelectedImageIndex(0)
                }}
              >
                {/* Imagen Premium con overlay */}
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
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Badge de categoría */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-xs font-bold text-procc-primary uppercase tracking-wide">{galeria.category}</span>
                  </div>
                  
                  {/* Badge de fecha */}
                  <div className="absolute top-4 left-4 bg-procc-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white">{galeria.date}</span>
                  </div>

                  {/* Indicador de galería */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                    <MdImage className="text-lg" />
                    <span className="text-sm font-semibold">{galeria.images?.length || 0} fotos</span>
                  </div>
                </div>

                {/* Contenido Premium */}
                <div className="p-6 relative">
                  {/* Verde claro del logo debajo del texto */}
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

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-procc-primary mb-2">{fotografias.length}</div>
              <div className="text-sm text-gray-600 font-medium">Galerías disponibles</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Galería */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className="p-6 bg-gradient-to-r from-procc-primary to-procc-secondary text-white flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedGallery.title}</h3>
                  <p className="text-white/90 text-sm">{selectedGallery.images?.length || 0} fotos</p>
                </div>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <MdClose className="text-2xl" />
                </button>
              </div>

              {/* Imagen actual */}
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

                {/* Navegación */}
                {selectedGallery.images && selectedGallery.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImageIndex((prev) => 
                        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
                      )}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                    >
                      <MdChevronLeft className="text-2xl text-procc-primary" />
                    </button>
                    <button
                      onClick={() => setSelectedImageIndex((prev) => 
                        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
                      )}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                    >
                      <MdChevronRight className="text-2xl text-procc-primary" />
                    </button>
                  </>
                )}

                {/* Indicador de imagen */}
                {selectedGallery.images && selectedGallery.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                    {selectedImageIndex + 1} / {selectedGallery.images.length}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Fotografias


