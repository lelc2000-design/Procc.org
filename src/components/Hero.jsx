import { motion } from 'framer-motion'
import { MdKeyboardArrowDown, MdPlayCircle } from 'react-icons/md'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 md:pt-28">
      {/* Background sutil con gradiente muy ligero y verde claro del logo */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-green-50/20 to-white"></div>
      
      {/* Verde claro del logo debajo del texto */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-procc-green-light/30 to-transparent"></div>
      
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-procc-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-procc-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Real ProCC */}
          <motion.div
            className="mb-12 flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://www.procc.org/wp-content/uploads/2019/06/logo_centrado.png" 
              alt="ProCC Logo" 
              className="h-24 md:h-32 w-auto"
              onError={(e) => {
                // Fallback si no carga la imagen
                e.target.style.display = 'none'
                const fallback = document.createElement('div')
                fallback.className = 'text-4xl font-bold text-procc-primary'
                fallback.textContent = 'ProCC'
                e.target.parentElement.appendChild(fallback)
              }}
            />
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-procc-primary">Proyecto ProCC</span>
          </motion.h1>
          
          {/* Subtítulo */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 font-light max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Trabajamos por una vida cotidiana más humana, más solidaria y más saludable
          </motion.p>

          {/* Descripción */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Favorecemos espacios de encuentro y reflexión acerca de las situaciones y contradicciones cotidianas 
            que nos generan malestar para analizar las causas y buscar alternativas colectivas.
          </motion.p>

          {/* Botones CTA Profesionales */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#proyecto"
              className="px-8 py-4 bg-procc-primary text-white rounded-full font-semibold text-lg shadow-lg hover:bg-procc-secondary transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Conoce más</span>
              <MdKeyboardArrowDown className="text-xl" />
            </motion.a>

            <motion.a
              href="#metodologia"
              className="px-8 py-4 bg-white text-procc-primary rounded-full font-semibold text-lg shadow-lg border-2 border-procc-primary hover:bg-procc-light transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdPlayCircle className="text-2xl" />
              <span>Metodología ProCC</span>
            </motion.a>
          </motion.div>

          {/* Estadísticas Profesionales */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { number: '35+', label: 'Años de Trayectoria' },
              { number: '5', label: 'Regiones en España' },
              { number: '100+', label: 'Profesionales Formados' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-procc-primary mb-3">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">{stat.label}</div>
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
        <MdKeyboardArrowDown className="text-procc-primary text-3xl opacity-60" />
      </motion.div>
    </section>
  )
}

export default Hero
