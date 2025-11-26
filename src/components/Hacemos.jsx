import { motion } from 'framer-motion'
import { MdSchool, MdPeople, MdFavorite, MdVisibility, MdBusiness } from 'react-icons/md'

const Hacemos = () => {
  const activities = [
    {
      id: 'formacion',
      icon: <MdSchool className="text-5xl text-procc-primary" />,
      title: 'Formación de Profesionales',
      description: 'Cursos y talleres especializados en Metodología ProCC para profesionales de la salud, educación y trabajo social.',
      details: [
        'Curso Metodología ProCC 2025-2026 (400 horas)',
        'Formación presencial en Santiago de Compostela',
        'Modalidad quincenal (sábados)',
        'Precio: 2.850€ + matrícula 150€',
        'Descuento de 190€ para formaciones previas'
      ],
      color: 'bg-blue-50'
    },
    {
      id: 'intervencion',
      icon: <MdPeople className="text-5xl text-procc-primary" />,
      title: 'Intervención Comunitaria',
      description: 'Programas de intervención en diferentes ámbitos: familia, jóvenes, género, mayores, comunidad educativa y participación.',
      details: [
        'Programa Escuela de Padres y Madres',
        'Intervención con jóvenes',
        'Trabajo de género',
        'Programas para mayores',
        'Intervención en comunidad educativa'
      ],
      color: 'bg-green-50'
    },
    {
      id: 'atencion',
      icon: <MdFavorite className="text-5xl text-procc-primary" />,
      title: 'Atención Psicológica',
      description: 'Servicios de atención psicológica individual y grupal basados en la Metodología ProCC.',
      color: 'bg-red-50'
    },
    {
      id: 'supervision',
      icon: <MdVisibility className="text-5xl text-procc-primary" />,
      title: 'Supervisión Profesional',
      description: 'Espacios de supervisión para profesionales que implementan la Metodología ProCC en sus contextos de trabajo.',
      details: [
        'Grupo de Supervisión de Actividad Comunitaria',
        'Supervisión individual',
        'Supervisión grupal'
      ],
      color: 'bg-purple-50'
    },
    {
      id: 'asesoria',
      icon: <MdBusiness className="text-5xl text-procc-primary" />,
      title: 'Asesoría Institucional',
      description: 'Asesoramiento a instituciones públicas y privadas para la implementación de programas basados en la Metodología ProCC.',
      color: 'bg-orange-50'
    },
  ]

  return (
    <section id="hacemos" className="section-padding bg-gradient-to-b from-gray-50 via-green-50/20 to-white relative">
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
          <h2 className="section-title text-gradient">HACEMOS</h2>
          <p className="section-subtitle">
            Descubre todas las actividades y servicios que ofrecemos desde ProCC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, idx) => (
            <motion.div
              key={activity.id}
              id={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-premium group"
            >
              <div className={`mb-6 flex items-center justify-center w-20 h-20 rounded-2xl ${activity.color} group-hover:bg-procc-primary transition-colors duration-300`}>
                <div className="group-hover:scale-110 transition-transform duration-300 text-procc-primary group-hover:text-white">
                  {activity.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {activity.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {activity.description}
              </p>

              {activity.details && (
                <ul className="space-y-2 mb-4">
                  {activity.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-procc-primary mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <motion.a
                href={`#${activity.id}`}
                className="inline-block text-procc-primary font-semibold hover:text-procc-secondary transition-colors"
                whileHover={{ x: 5 }}
              >
                Más información →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Formación Destacada */}
        <motion.div
          className="mt-20 card-premium max-w-4xl mx-auto bg-gradient-to-r from-procc-primary to-procc-secondary text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <MdSchool className="text-6xl mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Curso Metodología ProCC 2025-2026
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Formación presencial en Santiago de Compostela
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">400h</div>
                <div className="opacity-90">Duración total</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Oct 2025</div>
                <div className="opacity-90">Inicio</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2.850€</div>
                <div className="opacity-90">Precio + 150€ matrícula</div>
              </div>
            </div>

            <motion.a
              href="#contacto"
              className="inline-block px-8 py-4 bg-white text-procc-primary rounded-full font-semibold text-lg shadow-premium hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Más información e inscripción
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hacemos

