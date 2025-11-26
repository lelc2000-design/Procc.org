import { motion } from 'framer-motion'
import { MdKeyboardArrowDown, MdPlayCircle } from 'react-icons/md'
import { books } from '../data/books'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Fondo con libros - Efecto Parallax Premium */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='books' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='%23ffffff' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23books)'/%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Libros flotantes decorativos */}
        <div className="absolute inset-0">
          {books.slice(0, 6).map((book, idx) => (
            <motion.div
              key={book.id}
              className="absolute"
              style={{
                left: `${15 + idx * 15}%`,
                top: `${20 + (idx % 3) * 30}%`,
                width: '120px',
                height: '160px',
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + idx,
                repeat: Infinity,
                delay: idx * 0.5,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-lg shadow-2xl border border-white/10 transform perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500/50 to-indigo-500/50"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-900/50 to-black/60"></div>
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Premium */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/logo-procc.svg" 
              alt="ProCC Logo" 
              className="h-20 w-auto drop-shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Proyecto ProCC
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-purple-100 mb-8 font-light max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trabajamos por una vida cotidiana más humana, más solidaria y más saludable
          </motion.p>

          {/* Descripción */}
          <motion.p
            className="text-lg md:text-xl text-purple-200/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Favorecemos espacios de encuentro y reflexión acerca de las situaciones y contradicciones cotidianas 
            que nos generan malestar para analizar las causas y buscar alternativas colectivas.
          </motion.p>

          {/* Botones CTA Premium */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#proyecto"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Conoce más</span>
              <MdKeyboardArrowDown className="text-2xl group-hover:animate-bounce" />
            </motion.a>

            <motion.a
              href="#metodologia"
              className="px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdPlayCircle className="text-2xl" />
              <span>Metodología ProCC</span>
            </motion.a>
          </motion.div>

          {/* Estadísticas Premium */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { number: '35+', label: 'Años de Trayectoria', icon: '📚' },
              { number: '5', label: 'Regiones en España', icon: '📍' },
              { number: '100+', label: 'Profesionales Formados', icon: '👥' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-200 text-sm font-semibold uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MdKeyboardArrowDown className="text-white text-4xl opacity-60" />
      </motion.div>
    </section>
  )
}

export default Hero
