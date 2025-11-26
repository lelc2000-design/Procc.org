import { motion } from 'framer-motion'
import { MdNewspaper, MdCalendarToday, MdPerson, MdArrowForward } from 'react-icons/md'
import { publications, news, podcastEpisodes } from '../data/publications'

const Publicaciones = () => {
  const allContent = [...publications, ...news, ...podcastEpisodes].sort((a, b) => {
    const dateA = new Date(a.date || '2000')
    const dateB = new Date(b.date || '2000')
    return dateB - dateA
  })

  return (
    <section id="publicaciones" className="section-padding bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">PUBLICACIONES Y NOTICIAS</h2>
          <p className="section-subtitle">
            Explora todas nuestras publicaciones, artículos, noticias y recursos educativos
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['Todas', 'Publicaciones', 'Noticias', 'Podcasts'].map((filter) => (
            <motion.button
              key={filter}
              className="px-6 py-2 rounded-full border-2 border-procc-primary text-procc-primary font-semibold hover:bg-procc-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Publicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allContent.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-premium group hover:shadow-premium transition-all duration-300 overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative h-48 bg-gradient-to-br from-procc-primary to-procc-secondary overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-br from-procc-primary/80 to-procc-secondary/80 flex items-center justify-center">
                  <MdNewspaper className="text-6xl text-white/30" />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-procc-primary">{item.category}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MdCalendarToday className="text-procc-primary text-sm" />
                  <span className="text-xs text-gray-500">{item.date}</span>
                  {item.authors && (
                    <>
                      <span className="text-gray-300">•</span>
                      <MdPerson className="text-procc-primary text-sm" />
                      <span className="text-xs text-gray-500">{item.authors.length} autor{item.authors.length > 1 ? 'es' : ''}</span>
                    </>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-procc-primary transition-colors">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="text-procc-primary font-semibold text-sm mb-2">{item.subtitle}</p>
                )}

                {item.authors && (
                  <p className="text-sm text-gray-600 mb-3">
                    {item.authors.join(', ')}
                    {item.authorsOrg && ` - ${item.authorsOrg}`}
                  </p>
                )}

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-procc-primary font-semibold hover:text-procc-secondary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Leer más</span>
                  <MdArrowForward className="text-lg" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
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
            className="inline-block px-8 py-4 bg-procc-primary text-white rounded-full font-semibold text-lg shadow-premium hover:bg-procc-secondary transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todas las Publicaciones en el Sitio Oficial →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Publicaciones

