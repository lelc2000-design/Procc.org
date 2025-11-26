import { motion } from 'framer-motion'
import { MdPeople, MdMenuBook, MdHub, MdEmojiEvents, MdBusiness, MdScience, MdPublic, MdShare, MdAccountBalance } from 'react-icons/md'

const Somos = () => {
  return (
    <section id="somos" className="min-h-screen section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative pt-24 pb-16">
      {/* Verde claro del logo debajo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
      {/* Contenedor Premium con Borde */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-container-premium p-8 md:p-12">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="section-title text-gradient mb-6">SOMOS</h1>
            <p className="section-subtitle max-w-4xl mx-auto">
              Conoce nuestra historia, metodología y el equipo que hace posible el Proyecto ProCC
            </p>
          </motion.div>

          {/* PROYECTO PROCC */}
          <motion.div
            id="proyecto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="card-premium max-w-5xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-procc-primary/10 flex items-center justify-center mr-4">
                  <MdPeople className="text-4xl text-procc-primary" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Proyecto ProCC</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Somos un grupo de personas del ámbito de la salud, la educación y la acción social que desde el deseo de construir una vida más humana, saludable y solidaria y con la herramienta de la <strong className="text-procc-primary">Metodología de los Procesos Correctores Comunitarios (ProCC)</strong> encaminamos nuestra práctica hacia la transformación social desde la atención de los malestares de la vida cotidiana.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Desarrollamos el concepto de <strong className="text-procc-primary">Normalidad Supuesta Salud</strong> para realizar una lectura crítica de las causas estructurales de los malestares de la vida cotidiana y priorizamos los abordajes comunitarios en la intervención.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Este proyecto ha sido impulsado por la <strong className="text-procc-primary">Doctora en Psicología Mirtha Cucco</strong> desde los años 80, y ha tenido desarrollos comunitarios, profesionales y académicos en el Estado Español, Argentina, Cuba y en otros países de Latinoamérica.
                </p>
              </div>
            </div>

            {/* Normalidad Supuesta Salud */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 card-premium max-w-4xl mx-auto bg-gradient-to-br from-procc-light via-white to-procc-green-light/20 border-2 border-procc-primary/20"
            >
              <h3 className="text-2xl font-bold text-procc-primary mb-4 flex items-center">
                <MdScience className="mr-3" />
                Normalidad Supuesta Salud
              </h3>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-procc-primary pl-6">
                "Malestares cotidianos que la gente sufre y habitualmente no analiza ni cuestiona porque los considera normales. No generan demanda explícita, no tienen interlocutor válido, para ellos no existe un campo de intervención específico y quedan incluidos en la cultura de la queja. Las respuestas habituales se brindan desde enfoques terapéuticos-asistenciales que, o bien tienden a medicalizarlos, psiquiatrizarlos o categorizarlos como pertenecientes a grupos de riesgo social; o bien a incluirlos en acciones preventivas inespecíficas, y quedan la mayor parte de las veces en tierra de nadie."
              </blockquote>
            </motion.div>

            {/* Las 5 Áreas de Trabajo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16"
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Nos organizamos en cinco áreas de trabajo:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <MdScience className="text-4xl text-procc-primary" />,
                    title: 'Investigación',
                    description: 'La investigación permanente sostiene la acción profesional, garantizando la atención de las necesidades de la población.'
                  },
                  {
                    icon: <MdPublic className="text-4xl text-procc-primary" />,
                    title: 'Acción',
                    description: 'Se desarrolla en la atención psicológica, la intervención comunitaria, la formación, la organización de jornadas y eventos y publicaciones.'
                  },
                  {
                    icon: <MdHub className="text-4xl text-procc-primary" />,
                    title: 'Red',
                    description: 'Todo esto no podemos hacerlo en soledad: lo hacemos en red de manera colectiva y cooperativa.'
                  },
                  {
                    icon: <MdShare className="text-4xl text-procc-primary" />,
                    title: 'Difusión',
                    description: 'Es importante compartir y transmitir lo que hacemos para favorecer el efecto multiplicador y la difusión con rigor científico.'
                  },
                  {
                    icon: <MdAccountBalance className="text-4xl text-procc-primary" />,
                    title: 'Sostenibilidad',
                    description: 'Para dar sostén al Proyecto contamos con apoyos de entidades públicas y privadas, así como de voluntariado.'
                  }
                ].map((area, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                    className="card-premium group hover:border-procc-primary"
                  >
                    <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-procc-light group-hover:bg-procc-primary transition-colors duration-300">
                      <div className="group-hover:scale-110 transition-transform duration-300 text-procc-primary group-hover:text-white">
                        {area.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* METODOLOGÍA PROCC */}
          <motion.div
            id="metodologia"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="card-premium max-w-5xl mx-auto bg-gradient-to-br from-procc-primary/5 via-white to-procc-secondary/5">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-procc-primary/10 flex items-center justify-center mr-4">
                  <MdMenuBook className="text-4xl text-procc-primary" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Metodología ProCC</h2>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  La <strong className="text-procc-primary">Metodología de los Procesos Correctores Comunitarios</strong>, es una concepción teórico-metodológica fruto de muchos años de praxis, dentro del amplio campo que abarca la intervención comunitaria.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Es una concepción que tiene como objeto de estudio y trabajo los <strong className="text-procc-primary">malestares de la vida cotidiana</strong>; se plantea objetivos de intervención que promueven una mirada crítica del modo de vida y favorecen el desarrollo del protagonismo personal-social y la acción participativa de la población en la resolución de sus contradicciones.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Opera con el método de <strong className="text-procc-primary">Grupo Formativo</strong> y diseña estrategias y programas de intervención comunitaria a partir de la lectura de las demandas, la determinación de necesidades y los <strong className="text-procc-primary">Indicadores Diagnósticos de Población</strong>.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">La misma implica:</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Socio-Psico-Bio',
                      description: 'Partir de una concepción socio-psico-bio en interrelación dialéctica que permite, tomando como objeto de estudio la Vida Cotidiana, dar cuenta de la relación entre la formación socio-económica y el devenir subjetivo.'
                    },
                    {
                      title: 'Malestares de la Vida Cotidiana',
                      description: 'Contar con la sistematización de los malestares de la cotidianidad a partir de la crítica de la Vida Cotidiana, y a través de la elaboración de los Indicadores Diagnósticos de Población, descentrando el lugar de la enfermedad.'
                    },
                    {
                      title: 'Normalidad Supuesta Salud',
                      description: 'Habilitar el ámbito de la Normalidad Supuesta Salud como ámbito específico de los ProCC.'
                    },
                    {
                      title: 'Población general',
                      description: 'Implementar un abordaje dirigido en general a toda la población, ya que en conjunto ésta participa de los aspectos hegemónicos de lo instituido no saludable.'
                    },
                    {
                      title: 'Diseño de programas',
                      description: 'Diseñar Programas que permitan responder con rigor a las necesidades de la población, desde el análisis de los malestares cotidianos y los micro procesos inherentes a ellos, y su actualización permanente.'
                    },
                    {
                      title: 'Grupo Formativo',
                      description: 'Contar con un método grupal que permite operar sobre los micro-procesos a través de los cuales el Imaginario Social instituido se materializa en la subjetividad. Sostiene un modelo de aprendizaje que facilita los procesos de elaboración de lo que se ha normalizado potenciando el desarrollo del protagonismo personal-social para la resolución de los conflictos.'
                    },
                    {
                      title: 'Promoción de autonomía',
                      description: 'Articular una específica función del rol de la coordinación acorde a los objetivos de transformación de los malestares de la cotidianidad. Esto conlleva un trabajo específico sobre los obstáculos epistemofílicos (es decir de las propias resistencias), ya que se han de cuestionar las categorías desde las que "estamos construidos/as".'
                    },
                    {
                      title: 'Rol profesional',
                      description: 'Redimensionar el papel profesional y el de la comunidad en la búsqueda de solución a los problemas planteados.'
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      className="p-6 bg-procc-light rounded-xl border-l-4 border-procc-primary"
                    >
                      <h4 className="font-bold text-procc-primary mb-2 text-lg">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RED PROCC */}
          <motion.div
            id="red"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="card-premium max-w-5xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-procc-primary/10 flex items-center justify-center mr-4">
                  <MdHub className="text-4xl text-procc-primary" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Red ProCC</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  La <strong className="text-procc-primary">Red ProCC</strong> articula el conjunto de personas, organizaciones e instituciones que coparticipan en alguna forma en los desarrollos nacionales e internacionales del Proyecto ProCC. Constituye la base social organizada que desde una dirección colegiada garantiza el rigor de las experiencias de trabajo con la Metodología ProCC.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Construimos un modo de organizarnos que, priorizando el acto cooperativo, pretende trabajar y superar modelos jerárquicos, así como los que se sustentan en falsas horizontalidades. Se basa en la interacción de todas nuestras capacidades puestas al servicio del Proyecto; y sus miembros son reconocidos por su legitimidad y no en función de ninguna estructura de poder.
                </p>
                
                <div className="mt-8 p-6 bg-procc-light rounded-xl border-2 border-procc-primary/20">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Si quieres ser parte de la Red ProCC puedes <strong className="text-procc-primary">asociarte</strong>. Consulta cómo hacerlo pinchando en la imagen.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EQUIPO PROCC - Link a sección */}
          <motion.div
            id="equipo-link"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="card-premium max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-procc-primary/10 flex items-center justify-center">
                  <MdEmojiEvents className="text-4xl text-procc-primary" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Equipo ProCC</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                El <strong className="text-procc-primary">equipo del Proyecto ProCC</strong> está conformado por personas que participan de diferentes formas. Aquí presentamos el Departamento Docente Internacional, a las Áreas y las Asociaciones ProCC.
              </p>
              <motion.a
                href="#equipo"
                className="inline-block px-8 py-4 bg-procc-primary text-white rounded-full font-semibold text-lg shadow-premium hover:bg-procc-secondary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Equipo Completo →
              </motion.a>
            </div>
          </motion.div>

          {/* INSTITUCIONES */}
          <motion.div
            id="instituciones"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-premium max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-procc-primary/10 flex items-center justify-center mr-4">
                  <MdBusiness className="text-4xl text-procc-primary" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Instituciones</h2>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Colaboramos con diversas instituciones públicas y privadas para desarrollar proyectos de intervención comunitaria y formación profesional en diferentes ámbitos.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Somos
