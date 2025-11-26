import { motion } from 'framer-motion'
import { MdLocationOn, MdPhone, MdEmail, MdLanguage } from 'react-icons/md'

const Estamos = () => {
  const locations = [
    {
      id: 'andalucia',
      name: 'Andalucía',
      regions: [
        { name: 'ProCC Estepa', contact: 'Contacto local' },
        { name: 'Asociación Crecer en Salud', contact: 'Contacto local' }
      ],
      coords: [37.3891, -4.8778]
    },
    {
      id: 'aragon',
      name: 'Aragón',
      regions: [
        { name: 'ProCC Zaragoza', contact: 'Contacto local' }
      ],
      coords: [41.6488, -0.8891]
    },
    {
      id: 'galicia',
      name: 'Galicia',
      regions: [
        { name: 'ProCC Galicia', contact: 'Contacto local' }
      ],
      coords: [42.5751, -8.1339]
    },
    {
      id: 'madrid',
      name: 'Madrid',
      regions: [
        { name: 'Centro Marie Langer', contact: 'cml@procc.org', phone: '610 016 109' },
        { name: 'ONG ProCC', contact: 'Contacto local' }
      ],
      coords: [40.4168, -3.7038]
    },
    {
      id: 'pais-vasco',
      name: 'País Vasco',
      regions: [
        { name: 'ProCC Bilbao', contact: 'Contacto local' },
        { name: 'Asociación Osaginez', contact: 'Contacto local' }
      ],
      coords: [43.2627, -2.9253]
    },
    {
      id: 'argentina',
      name: 'Argentina',
      regions: [
        { name: 'Grupo de Desarrollo "YVY Marané"', contact: 'Contacto local' }
      ],
      coords: [-34.6037, -58.3816]
    },
  ]

  return (
    <section id="estamos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">ESTAMOS</h2>
          <p className="section-subtitle">
            Encuentra el centro ProCC más cercano a ti en España y Argentina
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, idx) => (
            <motion.div
              key={location.id}
              id={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-premium"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-procc-primary/10 flex items-center justify-center mr-4">
                  <MdLocationOn className="text-procc-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {location.name}
                </h3>
              </div>

              <div className="space-y-4">
                {location.regions.map((region, regionIdx) => (
                  <div key={regionIdx} className="p-4 bg-procc-light rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {region.name}
                    </h4>
                    {region.contact && (
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MdEmail className="mr-2 text-procc-primary" />
                        <span>{region.contact}</span>
                      </div>
                    )}
                    {region.phone && (
                      <div className="flex items-center text-sm text-gray-600">
                        <MdPhone className="mr-2 text-procc-primary" />
                        <span>{region.phone}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <motion.a
                href={`#${location.id}`}
                className="mt-6 inline-block text-procc-primary font-semibold hover:text-procc-secondary transition-colors"
                whileHover={{ x: 5 }}
              >
                Más información →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Mapa Interactivo - Placeholder para integración con Leaflet */}
        <motion.div
          className="mt-20 card-premium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Mapa de Ubicaciones ProCC
          </h3>
          <div className="h-96 bg-procc-light rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MdLocationOn className="text-procc-primary text-6xl mx-auto mb-4" />
              <p className="text-gray-600">
                Mapa interactivo con todas las ubicaciones ProCC
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (Integración con Leaflet en desarrollo)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Estamos

