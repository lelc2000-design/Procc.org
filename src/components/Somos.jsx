import { motion } from 'framer-motion'
import { MdPeople, MdMenuBook, MdHub, MdEmojiEvents, MdBusiness } from 'react-icons/md'

const Somos = () => {
  const sections = [
    {
      id: 'proyecto',
      icon: <MdPeople className="text-5xl text-procc-primary" />,
      title: 'Proyecto ProCC',
      description: 'Trabajamos por una vida cotidiana más humana, más solidaria y más saludable. Favorecemos espacios de encuentro y reflexión acerca de las situaciones y contradicciones cotidianas que nos generan malestar para analizar las causas y buscar alternativas colectivas.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'metodologia',
      icon: <MdMenuBook className="text-5xl text-procc-primary" />,
      title: 'Metodología ProCC',
      description: 'Usamos la Metodología de los Procesos Correctores Comunitarios (ProCC), una concepción teórico-metodológica fruto de muchos años de praxis. Tiene como objeto de estudio y trabajo los malestares de la vida cotidiana; promueve una mirada crítica del modo de vida y favorece el desarrollo del protagonismo personal-social y la acción participativa de la población en la resolución de sus contradicciones.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'red',
      icon: <MdHub className="text-5xl text-procc-primary" />,
      title: 'Red ProCC',
      description: 'Desarrollamos la acción profesional de manera colectiva. La Red ProCC articula el conjunto de personas, organizaciones e instituciones que coparticipan en alguna forma en los desarrollos nacionales e internacionales del Proyecto.',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'equipo',
      icon: <MdEmojiEvents className="text-5xl text-procc-primary" />,
      title: 'Equipo ProCC',
      description: 'El equipo del Proyecto ProCC está conformado por muchas personas que participan de diferentes formas. Presentamos los miembros del equipo docente y las responsables de la coordinación de las 5 Áreas del Proyecto (Investigación, Acción, Difusión, Relación y Financiación).',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'instituciones',
      icon: <MdBusiness className="text-5xl text-procc-primary" />,
      title: 'Instituciones',
      description: 'Colaboramos con diversas instituciones públicas y privadas para desarrollar proyectos de intervención comunitaria y formación profesional en diferentes ámbitos.',
      color: 'from-red-500 to-red-600'
    },
  ]

  return (
    <section id="somos" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">SOMOS</h2>
          <p className="section-subtitle">
            Conoce nuestra historia, metodología y el equipo que hace posible el Proyecto ProCC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-premium group"
            >
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-procc-light group-hover:bg-procc-primary transition-colors duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {section.description}
              </p>

              <motion.a
                href={`#${section.id}`}
                className="mt-6 inline-block text-procc-primary font-semibold hover:text-procc-secondary transition-colors"
                whileHover={{ x: 5 }}
              >
                Leer más →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Metodología Detallada */}
        <motion.div
          id="metodologia-detalle"
          className="mt-20 card-premium max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Metodología ProCC: Más de 35 Años de Desarrollo
            </h3>
            <p className="text-gray-600 text-lg">
              La Metodología ProCC ha sido desarrollada durante más de tres décadas por 
              <strong className="text-procc-primary"> Mirtha Cucco</strong> y su equipo, 
              consolidándose como una herramienta única para la intervención comunitaria y la salud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                title: 'Objeto de Estudio',
                content: 'Los malestares de la vida cotidiana y sus causas estructurales'
              },
              {
                title: 'Enfoque',
                content: 'Mirada crítica del modo de vida y promoción del protagonismo personal-social'
              },
              {
                title: 'Método',
                content: 'Espacios de encuentro y reflexión para buscar alternativas colectivas'
              },
              {
                title: 'Objetivo',
                content: 'Favorecer una vida cotidiana más humana, solidaria y saludable'
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-procc-light rounded-xl">
                <h4 className="font-bold text-procc-primary mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Somos

