import { motion } from 'framer-motion'
import { MdNewspaper, MdCalendarToday, MdTrendingUp, MdArrowForward } from 'react-icons/md'
import { publications, news } from '../data/publications'

const UltimasPublicaciones = () => {
  const latest = [...publications, ...news]
    .sort((a, b) => {
      const dateA = new Date(a.date || '2000')
      const dateB = new Date(b.date || '2000')
      return dateB - dateA
    })
    .slice(0, 6)

  return (
    <section id="ultimas-publicaciones" className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
      {/* Verde claro del logo debajo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/40 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contenedor Premium con Borde */}
        <div className="section-container-premium p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MdTrendingUp className="text-4xl text-procc-primary" />
            <h2 className="section-title text-gradient">ÚLTIMAS PUBLICACIONES</h2>
          </div>
          <p className="section-subtitle">
            Las publicaciones y noticias más recientes de ProCC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-premium group hover:shadow-premium-lg transition-all duration-300 bg-white overflow-hidden border-2 border-gray-200 hover:border-procc-primary"
            >
              {/* Imagen */}
              <div className="relative h-40 bg-gradient-to-br from-procc-primary to-procc-secondary overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-xs font-bold text-procc-primary">{item.category}</span>
                </div>
              </div>

              <div className="p-5 relative">
                {/* Verde claro del logo debajo del texto */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
                
                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <MdCalendarToday className="text-procc-primary text-xs" />
                  <span className="text-xs text-gray-500 font-medium">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-procc-primary transition-colors relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3 relative z-10">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-procc-primary text-sm font-semibold hover:text-procc-secondary transition-colors relative z-10"
                >
                  <span>Leer más</span>
                  <MdArrowForward className="text-sm" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Link a todas las publicaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#publicaciones"
            className="inline-flex items-center space-x-2 text-procc-primary font-semibold hover:text-procc-secondary transition-colors"
            whileHover={{ x: 5 }}
          >
            <span>Ver todas las publicaciones</span>
            <MdArrowForward className="text-lg" />
          </motion.a>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default UltimasPublicaciones
