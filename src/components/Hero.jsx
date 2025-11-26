import { motion } from 'framer-motion'
import { MdKeyboardArrowDown, MdPlayCircle } from 'react-icons/md'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-procc-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-procc-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-gradient">Proyecto ProCC</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Trabajamos por una vida cotidiana más humana,<br />
            más solidaria y más saludable
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Favorecemos espacios de encuentro y reflexión acerca de las situaciones 
            y contradicciones cotidianas que nos generan malestar para analizar las 
            causas y buscar alternativas colectivas.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#proyecto"
              className="px-8 py-4 bg-procc-primary text-white rounded-full font-semibold text-lg shadow-premium hover:bg-procc-secondary transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Conoce más</span>
              <MdKeyboardArrowDown className="inline-block" />
            </motion.a>
            
            <motion.a
              href="#metodologia"
              className="px-8 py-4 bg-white text-procc-primary rounded-full font-semibold text-lg shadow-premium border-2 border-procc-primary hover:bg-procc-light transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdPlayCircle className="text-2xl" />
              <span>Metodología ProCC</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { number: '35+', label: 'Años de Trayectoria' },
              { number: '5', label: 'Regiones en España' },
              { number: '100+', label: 'Profesionales Formados' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="card-premium"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-procc-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MdKeyboardArrowDown className="text-procc-primary text-3xl" />
      </motion.div>
    </section>
  )
}

export default Hero

