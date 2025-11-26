import { motion } from 'framer-motion'
import { MdMic, MdPlayArrow, MdCalendarToday, MdAccessTime } from 'react-icons/md'
import { podcasts } from '../data/podcasts'

const Podcasts = () => {
  return (
    <section id="podcasts" className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white relative pt-24 pb-16">
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
              <MdMic className="text-5xl text-procc-primary" />
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-procc-primary to-transparent"></div>
            </div>
            <h2 className="section-title text-gradient mb-4">PODCASTS</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Serie de podcasts como "Ayudando a crecer" en Alto Gredos sobre temas de crianza y desarrollo comunitario
            </p>
          </motion.div>

          {/* Grid de Podcasts Ultra Premium */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map((podcast, idx) => (
              <motion.article
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="card-premium group hover:shadow-premium transition-all duration-300 overflow-hidden bg-white"
              >
                {/* Imagen Premium con overlay */}
                <div className="relative h-56 bg-gradient-to-br from-procc-primary via-procc-secondary to-procc-green overflow-hidden">
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icono de podcast */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                      <MdMic className="text-6xl text-white" />
                    </div>
                  </div>
                  
                  {/* Badge de categoría */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-xs font-bold text-procc-primary uppercase tracking-wide">{podcast.category}</span>
                  </div>
                  
                  {/* Badge de fecha y duración */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-procc-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <MdCalendarToday className="text-xs text-white" />
                      <span className="text-xs font-semibold text-white">{podcast.date}</span>
                    </div>
                    {podcast.duration && (
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <MdAccessTime className="text-xs text-procc-primary" />
                        <span className="text-xs font-semibold text-procc-primary">{podcast.duration}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contenido Premium */}
                <div className="p-6 relative">
                  {/* Verde claro del logo debajo del texto */}
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

                    <motion.a
                      href={podcast.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-procc-primary font-semibold hover:text-procc-secondary transition-colors group/link"
                      whileHover={{ x: 5 }}
                    >
                      <MdPlayArrow className="text-lg" />
                      <span>Escuchar podcast</span>
                    </motion.a>
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
              <div className="text-4xl font-bold text-procc-primary mb-2">{podcasts.length}</div>
              <div className="text-sm text-gray-600 font-medium">Podcasts disponibles</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Podcasts


