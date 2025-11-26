import { useState } from 'react'
import { motion } from 'framer-motion'
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdCheckCircle } from 'react-icons/md'

const Hablemos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [newsletterData, setNewsletterData] = useState({
    nombre: '',
    apellidos: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de envío
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de suscripción
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactos = [
    {
      nombre: 'Centro Marie Langer',
      tipo: 'Intervención comunitaria, Formación de profesionales',
      email: 'cml@procc.org',
      telefonos: ['91 433 53 20', '610 01 61 09'],
      atencionClinica: {
        email: 'clinica@procc.org',
        telefono: '653 93 92 92'
      }
    },
    {
      nombre: 'ProCC Argentina – Yvy Marané',
      email: 'yvymarane@procc.org',
      telefono: '0351-245 79 82'
    },
    {
      nombre: 'ProCC Bilbao',
      email: 'bilbao@procc.org',
      telefono: '675 71 25 92'
    },
    {
      nombre: 'ProCC Estepa',
      email: 'estepa@procc.org',
      telefono: '675 37 53 84'
    },
    {
      nombre: 'ProCC Galicia',
      email: 'galicia@procc.org',
      telefono: '626 60 05 89'
    },
    {
      nombre: 'ProCC Zaragoza',
      email: 'zaragoza@procc.org',
      telefono: '661 52 96 72'
    },
    {
      nombre: 'Asociación Osaginez – Crecer en Salud',
      email: 'osaginez@hotmail.com',
      telefono: '635 73 29 12'
    },
    {
      nombre: 'Asociación Crecer en Salud',
      email: 'crecerensalud@hotmail.com',
      telefono: '666 08 19 18'
    },
    {
      nombre: 'ONG ProCC',
      email: 'atsc@procc.org'
    }
  ]

  return (
    <section id="hablemos" className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white relative pt-24 pb-16">
      {/* Verde claro del logo debajo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Contenedor Premium con Borde */}
        <div className="section-container-premium p-8 md:p-12">
          {/* Header Premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient mb-4">HABLEMOS</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Ponte en contacto con nosotros. Estamos aquí para ayudarte
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Formulario de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-premium"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-procc-primary/10 flex items-center justify-center mr-4">
                  <MdSend className="text-2xl text-procc-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cuéntanos...</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-procc-primary focus:outline-none transition-colors"
                    placeholder="Nombre*"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-procc-primary focus:outline-none transition-colors"
                    placeholder="Teléfono (opcional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-procc-primary focus:outline-none transition-colors"
                    placeholder="Email*"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-procc-primary focus:outline-none transition-colors resize-none"
                    placeholder="Mensaje*"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 mr-2"
                  />
                  <label className="text-sm text-gray-600">
                    Si continúas, aceptas la{' '}
                    <a href="#seguridad" className="text-procc-primary hover:underline">
                      política de privacidad
                    </a>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-procc-primary to-procc-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MdSend className="text-xl" />
                  <span>Enviar</span>
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center space-x-2"
                  >
                    <MdCheckCircle className="text-green-600 text-xl" />
                    <span className="text-green-700 font-semibold">¡Mensaje enviado correctamente!</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Boletín de Noticias */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-premium bg-gradient-to-br from-procc-primary/5 to-procc-secondary/5"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-procc-primary/20 flex items-center justify-center mr-4">
                  <MdEmail className="text-2xl text-procc-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Suscríbete a nuestro Boletín</h3>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={newsletterData.nombre}
                    onChange={(e) => setNewsletterData({ ...newsletterData, nombre: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-procc-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    value={newsletterData.apellidos}
                    onChange={(e) => setNewsletterData({ ...newsletterData, apellidos: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-procc-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={newsletterData.email}
                    onChange={(e) => setNewsletterData({ ...newsletterData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-procc-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 mr-2"
                  />
                  <label className="text-sm text-gray-600">
                    Si continúas, aceptas la{' '}
                    <a href="#seguridad" className="text-procc-primary hover:underline">
                      política de privacidad
                    </a>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-procc-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-procc-secondary transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Suscribirse
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Contactos de todas las sedes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestras Sedes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactos.map((contacto, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="card-premium p-6"
                >
                  <h4 className="text-xl font-bold text-procc-primary mb-4">{contacto.nombre}</h4>
                  
                  {contacto.tipo && (
                    <p className="text-sm text-gray-600 mb-4">{contacto.tipo}</p>
                  )}

                  <div className="space-y-2">
                    {contacto.email && (
                      <a
                        href={`mailto:${contacto.email}`}
                        className="flex items-center space-x-2 text-gray-700 hover:text-procc-primary transition-colors"
                      >
                        <MdEmail className="text-lg" />
                        <span className="text-sm">{contacto.email}</span>
                      </a>
                    )}

                    {contacto.telefono && (
                      <div className="flex items-center space-x-2 text-gray-700">
                        <MdPhone className="text-lg" />
                        <span className="text-sm">{contacto.telefono}</span>
                      </div>
                    )}

                    {contacto.telefonos && contacto.telefonos.map((tel, telIdx) => (
                      <div key={telIdx} className="flex items-center space-x-2 text-gray-700">
                        <MdPhone className="text-lg" />
                        <span className="text-sm">{tel}</span>
                      </div>
                    ))}

                    {contacto.atencionClinica && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Atención clínica:</p>
                        <a
                          href={`mailto:${contacto.atencionClinica.email}`}
                          className="flex items-center space-x-2 text-gray-700 hover:text-procc-primary transition-colors mb-2"
                        >
                          <MdEmail className="text-lg" />
                          <span className="text-sm">{contacto.atencionClinica.email}</span>
                        </a>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <MdPhone className="text-lg" />
                          <span className="text-sm">{contacto.atencionClinica.telefono}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mapa de ubicación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Oficina física en Madrid</h3>
            <div className="card-premium p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjQiTiAzwrA0MicxMy42Ilc!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hablemos


