import { motion } from 'framer-motion'
import { MdNewspaper, MdCalendarToday, MdTrendingUp } from 'react-icons/md'
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
    <section id="ultimas-publicaciones" className="section-padding bg-gradient-to-b from-green-50/50 via-white to-white">
      <div className="max-w-7xl mx-auto">
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
              className="card-premium group hover:shadow-premium transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-procc-primary to-procc-secondary flex items-center justify-center">
                    <MdNewspaper className="text-2xl text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <MdCalendarToday className="text-procc-primary text-xs" />
                    <span className="text-xs text-gray-500">{item.date}</span>
                    <span className="text-xs text-procc-primary font-semibold">{item.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-procc-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-procc-primary text-sm font-semibold hover:text-procc-secondary transition-colors"
                  >
                    Leer más →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UltimasPublicaciones

