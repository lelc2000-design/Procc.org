import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MdLocationOn, MdPhone, MdEmail, MdBusiness, MdSchool, MdGroups } from 'react-icons/md'

const Estamos = () => {
  const [activeLocation, setActiveLocation] = useState(null)

  useEffect(() => {
    // Detectar qué localidad está activa desde el hash
    const hash = window.location.hash.replace('#', '')
    const locationIds = ['andalucia', 'aragon', 'galicia', 'madrid', 'pais-vasco', 'argentina']
    if (locationIds.includes(hash)) {
      setActiveLocation(hash)
    } else {
      setActiveLocation(null) // Mostrar todas si no hay hash específico
    }

    // Escuchar cambios en el hash
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '')
      if (locationIds.includes(newHash)) {
        setActiveLocation(newHash)
      } else {
        setActiveLocation(null)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Datos específicos de cada localidad
  const locationDetails = {
    'madrid': {
      name: 'Madrid',
      title: 'Centro Marie Langer',
      description: 'El Centro de Desarrollo de Salud Comunitaria "Marie Langer" surgió hace más de 40 años por la necesidad y el deseo de contribuir con los procesos de transformación social por un mundo mejor que es posible.',
      description2: 'La orientación comunitaria es nuestra brújula. Lo grupal nuestro mejor instrumento, los vínculos y subjetividades atrapadas en el individualismo, nuestro lugar de intervención. Buscar una cotidianidad más humana, solidaria y saludable es nuestro objetivo.',
      description3: 'Entendemos que la ciencia y la acción profesional juegan un papel activo en la construcción social ya que no son neutras. Como grupo de profesionales de diversas disciplinas asumimos la propuesta teórica–metodológica de la Metodología de los Procesos Correctores Comunitarios (ProCC) que es fruto de nuestros propios desarrollos.',
      description4: 'El Centro es de alcance estatal, coordina desarrollos en diferentes territorios y posee un local físico en Madrid.',
      services: 'Con la satisfacción y seguridad de los resultados obtenidos en diversos escenarios geográficos y a lo largo de muchos años, se ponen a disposición los diversos servicios: intervenciones comunitarias, intervenciones clínicas y docencia a profesionales.',
      entities: {
        'Ayuntamientos': ['Madrid', 'Coslada', 'Las Rozas', 'Fuenlabrada', 'Guadalajara'],
        'Salud': ['MADRID SALUD', 'SALUD MADRID', 'SACyL', 'SERGAS', 'ESCUELA ANDALUZA DE SALUD PUBLICA', 'SAS'],
        'Asociaciones': ['Grupo Hombre Siglo XXI', 'Progrestion', 'AMAPAMU', 'CEEM'],
        'Colegios': ['Pinar de San José', 'Rosa de Luxemburgo', 'Arcángel', 'Siglo XXI', 'Los Peñascales', 'La Navata'],
        'Universidades': ['UCM', 'UAM', 'COMILLAS', 'UNED', 'CASTILLA LA MANCHA']
      },
      contact: {
        formacion: { name: 'Ayelén Losada', phone: '91 433 53 20 / 610 01 61 09', email: 'cml@procc.org', area: 'Formación de profesionales | Intervención comunitaria' },
        clinica: { name: 'Alfredo Waisblat', phone: '653 93 92 92', email: 'clinica@procc.org', area: 'Atención Clínica' },
        address: 'Av. del Mediterráneo 47, escalera 1, 1º D. 28007, Madrid.'
      }
    },
    'aragon': {
      name: 'Aragón',
      title: 'ProCC Zaragoza',
      description: 'El desarrollo ProCC en Zaragoza se inicia en 2015 con la promoción de la intervención comunitaria, la orientación psicopedagógica individualizada, la investigación y la docencia.',
      description2: 'Estos años de intensa labor promocional se colaboró con las siguientes instituciones (entre otras) FAPAR, Universidad de Zaragoza, Ayuntamiento de Utebo, Asociación Ágora, Federación Aragonesa de la Solidaridad; y a través de Programas tales como Barrios con Cuidado, Escuelas de Padres y Madres, Caminos Escolares y Formación del profesorado.',
      contact: {
        principal: { name: 'Rocío Tapiador', phone: '661529672', email: 'zaragoza@procc.org' }
      }
    },
    'galicia': {
      name: 'Galicia',
      title: 'ProCC Galicia',
      description: 'Los desarrollos ProCC en Galicia comienzan alrededor del 2003.',
      description2: 'En este proceso hemos ido aunando esfuerzos profesionales con formación en Metodología ProCC, que trabajamos en instituciones públicas en los ámbitos de la salud y la educación.',
      description3: 'Como profesionales sanitarios de esta zona, una parte importante formamos parte del área de Atención Primaria del Proyecto ProCC.',
      contact: {
        principal: { name: 'Teresa Vázquez Pumariño', phone: '626600589', email: 'galicia@procc.org' }
      }
    },
    'andalucia': {
      name: 'Andalucía',
      title: 'ProCC Andalucía',
      description: 'Desarrollos ProCC en Andalucía con presencia en diferentes localidades.',
      regions: [
        { name: 'ProCC Estepa', contact: 'Contacto local' },
        { name: 'Asociación Crecer en Salud', contact: 'Contacto local' }
      ]
    },
    'pais-vasco': {
      name: 'País Vasco',
      title: 'ProCC País Vasco',
      description: 'Desarrollos ProCC en el País Vasco.',
      regions: [
        { name: 'ProCC Bilbao', contact: 'Contacto local' },
        { name: 'Asociación Osaginez', contact: 'Contacto local' }
      ]
    },
    'argentina': {
      name: 'Argentina',
      title: 'ProCC Argentina',
      description: 'Desarrollos ProCC en Argentina.',
      regions: [
        { name: 'Grupo de Desarrollo "YVY Marané"', contact: 'Contacto local' }
      ]
    }
  }

  const locations = [
    { id: 'andalucia', name: 'Andalucía', coords: [37.3891, -4.8778] },
    { id: 'aragon', name: 'Aragón', coords: [41.6488, -0.8891] },
    { id: 'galicia', name: 'Galicia', coords: [42.5751, -8.1339] },
    { id: 'madrid', name: 'Madrid', coords: [40.4168, -3.7038] },
    { id: 'pais-vasco', name: 'País Vasco', coords: [43.2627, -2.9253] },
    { id: 'argentina', name: 'Argentina', coords: [-34.6037, -58.3816] },
  ]

  // Si hay una localidad activa, mostrar su contenido específico
  if (activeLocation && locationDetails[activeLocation]) {
    const detail = locationDetails[activeLocation]
    return (
      <section id="estamos" className="min-h-screen section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative pt-24 pb-16">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-container-premium p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="section-title text-gradient">{detail.name.toUpperCase()}</h2>
              <h3 className="text-3xl font-bold text-procc-primary mt-4">{detail.title}</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-premium max-w-5xl mx-auto mb-8"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{detail.description}</p>
                {detail.description2 && <p className="text-gray-700 text-lg leading-relaxed mb-6">{detail.description2}</p>}
                {detail.description3 && <p className="text-gray-700 text-lg leading-relaxed mb-6">{detail.description3}</p>}
                {detail.description4 && <p className="text-gray-700 text-lg leading-relaxed mb-6">{detail.description4}</p>}
                {detail.services && <p className="text-gray-700 text-lg leading-relaxed mb-6">{detail.services}</p>}
              </div>
            </motion.div>

            {detail.entities && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="card-premium max-w-5xl mx-auto mb-8"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MdBusiness className="mr-3 text-procc-primary" />
                  ENTIDADES CON LAS QUE TRABAJAMOS
                </h4>
                <p className="text-gray-700 mb-6">Trabajamos con instituciones públicas y privadas, así como con organizaciones o colectivos autónomos y proyectos voluntarios. Algunos de ellos:</p>
                <div className="space-y-4">
                  {Object.entries(detail.entities).map(([category, items]) => (
                    <div key={category} className="p-4 bg-procc-light rounded-lg">
                      <strong className="text-procc-primary">{category}:</strong> {items.join(', ')}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {detail.regions && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="card-premium max-w-5xl mx-auto mb-8"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Desarrollos</h4>
                <div className="space-y-4">
                  {detail.regions.map((region, idx) => (
                    <div key={idx} className="p-4 bg-procc-light rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">{region.name}</h5>
                      {region.contact && (
                        <div className="flex items-center text-sm text-gray-600">
                          <MdEmail className="mr-2 text-procc-primary" />
                          <span>{region.contact}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {detail.contact && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="card-premium max-w-5xl mx-auto"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MdPhone className="mr-3 text-procc-primary" />
                  CONTACTO
                </h4>
                <div className="space-y-6">
                  {detail.contact.principal && (
                    <div className="p-4 bg-procc-light rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">{detail.contact.principal.name}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MdPhone className="mr-2 text-procc-primary" />
                        <span>{detail.contact.principal.phone}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MdEmail className="mr-2 text-procc-primary" />
                        <a href={`mailto:${detail.contact.principal.email}`} className="text-procc-primary hover:underline">
                          {detail.contact.principal.email}
                        </a>
                      </div>
                    </div>
                  )}
                  {detail.contact.formacion && (
                    <div className="p-4 bg-procc-light rounded-lg">
                      <p className="font-semibold text-procc-primary mb-2">{detail.contact.formacion.area}</p>
                      <p className="font-semibold text-gray-900 mb-2">{detail.contact.formacion.name}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MdPhone className="mr-2 text-procc-primary" />
                        <span>{detail.contact.formacion.phone}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MdEmail className="mr-2 text-procc-primary" />
                        <a href={`mailto:${detail.contact.formacion.email}`} className="text-procc-primary hover:underline">
                          {detail.contact.formacion.email}
                        </a>
                      </div>
                    </div>
                  )}
                  {detail.contact.clinica && (
                    <div className="p-4 bg-procc-light rounded-lg">
                      <p className="font-semibold text-procc-primary mb-2">{detail.contact.clinica.area}</p>
                      <p className="font-semibold text-gray-900 mb-2">{detail.contact.clinica.name}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MdPhone className="mr-2 text-procc-primary" />
                        <span>{detail.contact.clinica.phone}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MdEmail className="mr-2 text-procc-primary" />
                        <a href={`mailto:${detail.contact.clinica.email}`} className="text-procc-primary hover:underline">
                          {detail.contact.clinica.email}
                        </a>
                      </div>
                    </div>
                  )}
                  {detail.contact.address && (
                    <div className="p-4 bg-procc-light rounded-lg">
                      <div className="flex items-center text-sm text-gray-600">
                        <MdLocationOn className="mr-2 text-procc-primary" />
                        <span>{detail.contact.address}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 text-center"
            >
              <a
                href="#estamos"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = 'estamos'
                }}
                className="inline-block px-8 py-4 bg-procc-primary text-white rounded-full font-semibold text-lg shadow-premium hover:bg-procc-secondary transition-all duration-300"
              >
                Ver Todas las Localidades →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  // Vista general - todas las localidades
  return (
    <section id="estamos" className="min-h-screen section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative pt-24 pb-16">
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-procc-green-light/30 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-container-premium p-8 md:p-12">
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
              <motion.a
                key={location.id}
                href={`#${location.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = location.id
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card-premium hover:border-procc-primary transition-all cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-procc-primary/10 flex items-center justify-center mr-4">
                    <MdLocationOn className="text-procc-primary text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {location.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {locationDetails[location.id]?.description || 'Haz clic para ver más información'}
                </p>
                <div className="text-procc-primary font-semibold hover:text-procc-secondary transition-colors">
                  Ver más información →
                </div>
              </motion.a>
            ))}
          </div>

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
      </div>
    </section>
  )
}

export default Estamos
