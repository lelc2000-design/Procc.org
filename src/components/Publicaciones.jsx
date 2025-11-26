import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdNewspaper, MdCalendarToday, MdPerson, MdArrowForward, MdFilterList } from 'react-icons/md'
import { publications, news, podcastEpisodes } from '../data/publications'

const Publicaciones = () => {
  const [activeFilter, setActiveFilter] = useState('Todas')
  
  const allContent = [...publications, ...news, ...podcastEpisodes].sort((a, b) => {
    const dateA = new Date(a.date || '2000')
    const dateB = new Date(b.date || '2000')
    return dateB - dateA
  })

  const filteredContent = activeFilter === 'Todas' 
    ? allContent 
    : activeFilter === 'Publicaciones'
    ? publications
    : activeFilter === 'Noticias'
    ? news
    : podcastEpisodes

  return (
    <section id="publicaciones" className="min-h-screen section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative pt-24 pb-16">
      {/* Verde claro del logo debajo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/40 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contenedor Premium con Borde */}
        <div className="section-container-premium p-8 md:p-12 mb-8">
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
            <MdNewspaper className="text-5xl text-procc-primary" />
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-procc-primary to-transparent"></div>
          </div>
          <h2 className="section-title text-gradient mb-4">PUBLICACIONES Y NOTICIAS</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Explora todas nuestras publicaciones, artículos, noticias y recursos educativos ordenados y desarrollados
          </p>
        </motion.div>

        {/* Filtros Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-600 font-semibold mb-2 w-full justify-center">
            <MdFilterList className="text-procc-primary" />
            <span>Filtrar por:</span>
          </div>
          {['Todas', 'Publicaciones', 'Noticias', 'Podcasts'].map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-procc-primary text-white shadow-lg scale-105'
                  : 'bg-white text-procc-primary border-2 border-procc-primary hover:bg-procc-light'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Publicaciones Ultra Premium */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredContent.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="card-premium group hover:shadow-premium-lg transition-all duration-300 overflow-hidden bg-white border-2 border-gray-200 hover:border-procc-primary"
              >
                {/* Imagen Premium con overlay */}
                <div className="relative h-56 bg-gradient-to-br from-procc-primary via-procc-secondary to-procc-green overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
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
                    <span className="text-xs font-bold text-procc-primary uppercase tracking-wide">{item.category}</span>
                  </div>
                  
                  {/* Badge de fecha */}
                  <div className="absolute top-4 left-4 bg-procc-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white">{item.date}</span>
                  </div>
                </div>

                {/* Contenido Premium */}
                <div className="p-6 relative">
                  {/* Verde claro del logo debajo del texto */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    {item.authors && (
                      <div className="flex items-center gap-2 mb-3">
                        <MdPerson className="text-procc-primary text-sm" />
                        <span className="text-xs text-gray-600 font-medium">
                          {item.authors.join(', ')}
                          {item.authorsOrg && ` - ${item.authorsOrg}`}
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-procc-primary transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="text-procc-primary font-semibold text-sm mb-3 italic">{item.subtitle}</p>
                    )}

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-procc-primary font-semibold hover:text-procc-secondary transition-colors group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span>Leer más</span>
                      <MdArrowForward className="text-lg group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Publicaciones', count: publications.length },
            { label: 'Noticias', count: news.length },
            { label: 'Podcasts', count: podcastEpisodes.length },
            { label: 'Total', count: allContent.length },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-4xl font-bold text-procc-primary mb-2">{stat.count}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
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
      </div>
    </section>
  )
}

export default Publicaciones
