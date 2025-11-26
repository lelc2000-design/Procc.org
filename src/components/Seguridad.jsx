import { motion } from 'framer-motion'
import { MdSecurity, MdLock, MdVisibility, MdDescription, MdCheckCircle, MdError } from 'react-icons/md'

const Seguridad = () => {
  const securityFeatures = [
    {
      icon: <MdSecurity className="text-5xl text-procc-primary" />,
      title: 'Protección de Datos',
      description: 'Cumplimos con el Reglamento General de Protección de Datos (RGPD) y garantizamos la máxima seguridad en el tratamiento de información personal.',
      details: [
        'Encriptación de datos sensibles',
        'Almacenamiento seguro en servidores certificados',
        'Acceso restringido a información personal',
        'Auditorías regulares de seguridad'
      ]
    },
    {
      icon: <MdLock className="text-5xl text-procc-primary" />,
      title: 'Privacidad',
      description: 'Respetamos tu privacidad y protegemos tu información personal. Nunca compartimos tus datos con terceros sin tu consentimiento explícito.',
      details: [
        'Política de privacidad transparente',
        'Control total sobre tus datos',
        'Derecho al olvido',
        'Consentimiento informado'
      ]
    },
    {
      icon: <MdVisibility className="text-5xl text-procc-primary" />,
      title: 'Transparencia',
      description: 'Mantenemos total transparencia sobre cómo utilizamos la información y qué medidas de seguridad implementamos.',
      details: [
        'Información clara sobre uso de datos',
        'Comunicación abierta sobre cambios',
        'Acceso a políticas actualizadas',
        'Canales de consulta disponibles'
      ]
    },
    {
      icon: <MdDescription className="text-5xl text-procc-primary" />,
      title: 'Cumplimiento Legal',
      description: 'Cumplimos con todas las normativas legales aplicables en materia de protección de datos y privacidad.',
      details: [
        'RGPD (Reglamento Europeo)',
        'LOPD-GDD (Ley Orgánica Española)',
        'Normativas internacionales',
        'Actualización continua de normativas'
      ]
    }
  ]

  const privacyRights = [
    {
      title: 'Derecho de Acceso',
      description: 'Puedes solicitar información sobre los datos personales que tenemos sobre ti.'
    },
    {
      title: 'Derecho de Rectificación',
      description: 'Puedes solicitar la corrección de datos inexactos o incompletos.'
    },
    {
      title: 'Derecho de Supresión',
      description: 'Puedes solicitar la eliminación de tus datos personales cuando ya no sean necesarios.'
    },
    {
      title: 'Derecho de Oposición',
      description: 'Puedes oponerte al tratamiento de tus datos personales en determinadas circunstancias.'
    },
    {
      title: 'Derecho de Portabilidad',
      description: 'Puedes solicitar que tus datos sean transferidos a otro proveedor de servicios.'
    },
    {
      title: 'Derecho de Limitación',
      description: 'Puedes solicitar la limitación del tratamiento de tus datos personales.'
    }
  ]

  return (
    <section id="seguridad" className="min-h-[calc(100vh-5rem)] section-padding bg-gradient-to-b from-white via-green-50/20 to-white relative overflow-y-auto">
      {/* Verde claro del logo debajo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">SEGURIDAD Y PRIVACIDAD</h2>
          <p className="section-subtitle">
            Tu seguridad y privacidad son nuestra prioridad. Conoce nuestras medidas de protección
          </p>
        </motion.div>

        {/* Características de Seguridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-premium"
            >
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-procc-light">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="flex items-start space-x-3">
                    <MdCheckCircle className="text-procc-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Derechos de Privacidad */}
        <motion.div
          className="card-premium mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tus Derechos de Privacidad
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacyRights.map((right, idx) => (
              <div
                key={idx}
                className="p-6 bg-procc-light rounded-xl hover:bg-procc-primary/10 transition-colors"
              >
                <h4 className="font-bold text-procc-primary mb-2">{right.title}</h4>
                <p className="text-gray-700 text-sm">{right.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Política de Privacidad */}
        <motion.div
          className="card-premium bg-gradient-to-r from-procc-primary to-procc-secondary text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <MdSecurity className="text-6xl mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Política de Privacidad
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Lee nuestra política completa de privacidad y términos de uso
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#politica-privacidad"
                className="px-8 py-4 bg-white text-procc-primary rounded-full font-semibold shadow-premium hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Política de Privacidad
              </motion.a>
              <motion.a
                href="#terminos-uso"
                className="px-8 py-4 bg-white/10 text-white border-2 border-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Términos de Uso
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contacto Seguridad */}
        <motion.div
          className="mt-12 card-premium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start space-x-4">
            <MdError className="text-procc-primary text-3xl flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-2">¿Tienes preguntas sobre seguridad?</h4>
              <p className="text-gray-700 mb-4">
                Si tienes alguna pregunta o preocupación sobre cómo manejamos tus datos personales,
                no dudes en contactarnos.
              </p>
              <a
                href="mailto:privacidad@procc.org"
                className="text-procc-primary font-semibold hover:text-procc-secondary transition-colors"
              >
                privacidad@procc.org →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Seguridad

