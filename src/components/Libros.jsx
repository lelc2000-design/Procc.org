import { motion } from 'framer-motion'
import { MdMenuBook, MdDownload, MdShoppingCart } from 'react-icons/md'
import { books } from '../data/books'

const Libros = () => {
  return (
    <section id="libros" className="min-h-screen section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative pt-24 pb-16">
      {/* Verde claro del logo debajo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/40 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        {/* Contenedor Premium con Borde */}
        <div className="section-container-premium p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">LIBROS Y PUBLICACIONES</h2>
          <p className="section-subtitle">
            Obras fundamentales sobre la Metodología ProCC y sus aplicaciones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-premium group hover:shadow-premium-lg transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-procc-primary"
            >
              <div className="relative h-64 bg-gradient-to-br from-procc-primary via-procc-secondary to-procc-green overflow-hidden">
                {book.cover ? (
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Si falla la imagen, mostrar placeholder con gradiente
                      e.target.style.display = 'none'
                      const placeholder = e.target.nextElementSibling
                      if (placeholder) placeholder.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-br from-procc-primary/85 via-procc-secondary/85 to-procc-green/85 flex items-center justify-center">
                  <MdMenuBook className="text-8xl text-white/50" />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-procc-primary">{book.year}</span>
                </div>
              </div>
              
              <div className="p-6 relative">
                {/* Verde claro del logo debajo del texto */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
                
                <div className="mb-2 relative z-10">
                  <span className="text-xs font-semibold text-procc-accent uppercase tracking-wide">
                    {book.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 relative z-10">
                  {book.title}
                </h3>
                <p className="text-procc-primary font-semibold mb-3 relative z-10">
                  {book.author}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 relative z-10">
                  {book.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      className="flex items-center space-x-2 text-procc-primary hover:text-procc-secondary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MdDownload className="text-xl" />
                      <span className="text-sm font-semibold">Descargar</span>
                    </motion.button>
                  </div>
                  <motion.button
                    className="flex items-center space-x-2 bg-procc-primary text-white px-4 py-2 rounded-lg hover:bg-procc-secondary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MdShoppingCart className="text-lg" />
                    <span className="text-sm font-semibold">Comprar</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA para más publicaciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#publicaciones"
            className="inline-block px-8 py-4 bg-procc-primary text-white rounded-full font-semibold text-lg shadow-premium hover:bg-procc-secondary transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todas las Publicaciones →
          </motion.a>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Libros

