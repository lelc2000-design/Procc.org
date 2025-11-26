import { motion } from 'framer-motion'
import { MdMenuBook, MdVideoLibrary, MdMic, MdImage, MdNewspaper } from 'react-icons/md'

const Decimos = () => {
  const publications = [
    {
      id: 'publicaciones',
      icon: <MdNewspaper className="text-5xl text-procc-primary" />,
      title: 'Publicaciones',
      description: 'Artículos y documentos sobre adolescencia, género, ámbito escolar, familiar, sanitario y construcción social de la subjetividad.',
      categories: [
        'Adolescencia',
        'Género',
        'Ámbito escolar',
        'Ámbito familiar',
        'Ámbito sanitario',
        'Construcción social de la subjetividad',
        'Lo grupal',
        'Metodología ProCC'
      ]
    },
    {
      id: 'libros',
      icon: <MdMenuBook className="text-5xl text-procc-primary" />,
      title: 'Libros',
      description: 'Publicaciones editoriales sobre la Metodología ProCC y sus aplicaciones.',
      color: 'bg-blue-50'
    },
    {
      id: 'videos',
      icon: <MdVideoLibrary className="text-5xl text-procc-primary" />,
      title: 'Videos',
      description: 'Contenido audiovisual educativo y formativo sobre la Metodología ProCC.',
      color: 'bg-red-50'
    },
    {
      id: 'podcasts',
      icon: <MdMic className="text-5xl text-procc-primary" />,
      title: 'Podcasts',
      description: 'Serie de podcasts como "Ayudando a crecer" en Alto Gredos sobre temas de crianza y desarrollo comunitario.',
      featured: 'Podcast "Ayudando a crecer" en Alto Gredos',
      color: 'bg-purple-50'
    },
    {
      id: 'fotografias',
      icon: <MdImage className="text-5xl text-procc-primary" />,
      title: 'Fotografías',
      description: 'Galería de imágenes de actividades, formaciones y eventos ProCC.',
      color: 'bg-green-50'
    },
  ]

  const recentPublications = [
    {
      title: '¿Es posible trabajar la Ciudadanía Global en el aula? Algunos aportes de la Metodología ProCC',
      category: 'Ámbito escolar',
      date: '2024'
    },
    {
      title: 'El 11-M en Madrid. ¿Afectados o enfermos?',
      category: 'Construcción social de la subjetividad',
      date: '2024'
    },
    {
      title: 'Podcast "Ayudando a crecer" en Alto Gredos IV: Hablando con un Guardia Civil',
      category: 'Podcasts',
      date: '2024'
    },
    {
      title: '¿Para qué sirve (a una médica) una concepción teórico-metodológica sobre la vida cotidiana?',
      category: 'Ámbito sanitario',
      date: '2024'
    },
    {
      title: 'Pirámide de la salud integral de 4 caras',
      category: 'Metodología ProCC',
      date: '2023'
    },
  ]

  return (
    <section id="decimos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">DECIMOS</h2>
          <p className="section-subtitle">
            Explora nuestras publicaciones, libros, videos, podcasts y recursos educativos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              id={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-premium group"
            >
              <div className={`mb-6 flex items-center justify-center w-20 h-20 rounded-2xl ${pub.color || 'bg-procc-light'} group-hover:bg-procc-primary transition-colors duration-300`}>
                <div className="group-hover:scale-110 transition-transform duration-300 text-procc-primary group-hover:text-white">
                  {pub.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {pub.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {pub.description}
              </p>

              {pub.categories && (
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Categorías:</div>
                  <div className="flex flex-wrap gap-2">
                    {pub.categories.map((cat, catIdx) => (
                      <span key={catIdx} className="px-3 py-1 bg-procc-light text-procc-primary rounded-full text-xs font-medium">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {pub.featured && (
                <div className="mb-4 p-4 bg-procc-primary/10 rounded-lg">
                  <div className="text-sm font-semibold text-procc-primary mb-1">Destacado:</div>
                  <div className="text-gray-700">{pub.featured}</div>
                </div>
              )}

              <motion.a
                href={`#${pub.id}`}
                className="inline-block text-procc-primary font-semibold hover:text-procc-secondary transition-colors"
                whileHover={{ x: 5 }}
              >
                Explorar →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Últimas Publicaciones */}
        <motion.div
          className="card-premium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Últimas Publicaciones
          </h3>
          
          <div className="space-y-6">
            {recentPublications.map((pub, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-procc-light rounded-xl hover:bg-procc-primary/10 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{pub.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="px-3 py-1 bg-white rounded-full">{pub.category}</span>
                      <span>{pub.date}</span>
                    </div>
                  </div>
                  <motion.a
                    href="#"
                    className="text-procc-primary hover:text-procc-secondary"
                    whileHover={{ scale: 1.2 }}
                  >
                    →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.a
              href="#publicaciones"
              className="inline-block px-8 py-4 bg-procc-primary text-white rounded-full font-semibold hover:bg-procc-secondary transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todas las publicaciones
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Decimos

