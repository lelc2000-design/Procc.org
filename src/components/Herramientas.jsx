import { motion } from 'framer-motion'
import { MdCalculate, MdSearch, MdDownload, MdCalendarToday, MdEmail } from 'react-icons/md'

const Herramientas = () => {
  const tools = [
    {
      icon: <MdCalculate className="text-4xl" />,
      title: 'Calculadora de Recursos',
      description: 'Herramienta para calcular recursos necesarios para intervenciones comunitarias',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MdSearch className="text-4xl" />,
      title: 'Buscador de Publicaciones',
      description: 'Busca entre todas nuestras publicaciones, artículos y recursos',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <MdDownload className="text-4xl" />,
      title: 'Descarga de Materiales',
      description: 'Accede a materiales descargables, guías y recursos educativos',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <MdCalendarToday className="text-4xl" />,
      title: 'Calendario de Actividades',
      description: 'Consulta fechas de cursos, talleres, seminarios y eventos',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <MdEmail className="text-4xl" />,
      title: 'Suscripción al Boletín',
      description: 'Recibe actualizaciones, noticias y recursos directamente en tu email',
      color: 'from-red-500 to-red-600'
    },
  ]

  return (
    <section id="herramientas" className="min-h-[calc(100vh-5rem)] section-padding bg-gradient-to-b from-gray-50 via-green-50/20 to-white relative overflow-y-auto">
      {/* Verde claro del logo debajo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">HERRAMIENTAS</h2>
          <p className="section-subtitle">
            Utilidades y recursos interactivos para profesionales y participantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-premium group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {tool.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tool.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {tool.description}
              </p>

              <motion.div
                className="text-procc-primary font-semibold"
                whileHover={{ x: 5 }}
              >
                Acceder →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Formulario de Suscripción */}
        <motion.div
          className="card-premium max-w-2xl mx-auto bg-gradient-to-r from-procc-primary to-procc-secondary text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <MdEmail className="text-6xl mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Suscríbete al Boletín ProCC
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Recibe actualizaciones, noticias y recursos directamente en tu email
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-white text-procc-primary rounded-full font-semibold shadow-premium hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribirse
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Herramientas

