import { motion } from 'framer-motion'
import { videos } from '../data/videos'

const Videos = () => {
  return (
    <section id="videos" className="min-h-[calc(100vh-5rem)] section-padding bg-white relative pt-24 pb-16 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="section-container-premium p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="section-title text-gradient mb-4">Video</h2>
            <p className="text-gray-500 uppercase text-sm mb-2">ARCHIVO</p>
          </motion.div>

          {/* Lista de videos - Estilo simple como la página original */}
          <div className="space-y-8">
            {videos.map((video, idx) => (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                <p className="text-gray-700 leading-relaxed">
                  {video.description}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Botón de búsqueda como en la página original */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
      </div>
    </section>
  )
}

export default Videos
