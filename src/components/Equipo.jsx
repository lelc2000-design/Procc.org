import { motion } from 'framer-motion'
import { MdPeople, MdEmail, MdBusiness } from 'react-icons/md'
import { teamMembers } from '../data/team'

const Equipo = () => {
  const directora = teamMembers.find(m => m.id === 'mirtha-cucco')
  const coordinadores = teamMembers.filter(m => m.id !== 'mirtha-cucco')

  return (
    <section id="equipo" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">EQUIPO PROCC</h2>
          <p className="section-subtitle">
            Conoce al equipo de profesionales que desarrolla y promueve la Metodología ProCC
          </p>
        </motion.div>

        {/* Directora - Destacada */}
        {directora && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="card-premium max-w-5xl mx-auto bg-gradient-to-r from-procc-primary to-procc-secondary text-white p-0 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-procc-light text-sm font-semibold uppercase tracking-wide">
                      Directora y Fundadora
                    </span>
                    <h3 className="text-4xl font-bold mt-2 mb-4">{directora.name}</h3>
                    <p className="text-lg text-white/90 leading-relaxed mb-6">
                      {directora.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <MdBusiness className="text-xl" />
                        <span className="text-sm">{directora.area}</span>
                      </div>
                      {directora.email && (
                        <a
                          href={`mailto:${directora.email}`}
                          className="flex items-center space-x-2 hover:text-procc-light transition-colors"
                        >
                          <MdEmail className="text-xl" />
                          <span className="text-sm">Contactar</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-white/30">
                    {directora.image ? (
                      <img
                        src={directora.image}
                        alt={directora.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextElementSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div className="hidden w-full h-full items-center justify-center text-6xl text-white/50">
                      <MdPeople />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Coordinadores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Coordinadores y Equipo Docente
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coordinadores.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="card-premium group hover:shadow-premium transition-all duration-300"
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-procc-light flex items-center justify-center overflow-hidden border-4 border-procc-primary/20 group-hover:border-procc-primary transition-colors">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextElementSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div className="hidden w-full h-full items-center justify-center text-4xl text-procc-primary">
                      <MdPeople />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {member.name}
                </h4>
                <p className="text-procc-primary font-semibold text-sm mb-2 text-center">
                  {member.role}
                </p>
                {member.area && (
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {member.area}
                  </p>
                )}
                {member.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-premium max-w-4xl mx-auto bg-procc-light"
        >
          <div className="text-center p-8">
            <MdPeople className="text-5xl text-procc-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Un Equipo en Crecimiento
            </h3>
            <p className="text-gray-700 leading-relaxed">
              El equipo del Proyecto ProCC está conformado por muchas personas que participan de diferentes formas. 
              Presentamos los miembros del equipo docente y las responsables de la coordinación de las 5 Áreas del Proyecto: 
              <strong className="text-procc-primary"> Investigación, Acción, Difusión, Relación y Financiación</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Equipo

