import { motion } from 'framer-motion'
import { MdPeople, MdMessage, MdShare, MdTrendingUp, MdFavorite, MdEmojiEvents } from 'react-icons/md'

const Comunidad = () => {
  const socialNetworks = [
    {
      name: 'Telegram',
      icon: '✈️',
      description: 'Únete a nuestro canal de Telegram para recibir actualizaciones, recursos y participar en discusiones',
      link: 'https://t.me/procc_comunidad',
      color: 'from-blue-500 to-blue-600',
      members: '500+'
    },
    {
      name: 'X (Twitter)',
      icon: '🐦',
      description: 'Síguenos en X para estar al día con noticias, eventos y compartir experiencias',
      link: 'https://twitter.com/procc_org',
      color: 'from-black to-gray-800',
      members: '1.2K+'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      description: 'Contenido educativo y experiencias en formato de video corto',
      link: 'https://tiktok.com/@procc_org',
      color: 'from-pink-500 to-red-500',
      members: '800+'
    },
    {
      name: 'Instagram',
      icon: '📷',
      description: 'Imágenes, historias y contenido visual de nuestras actividades',
      link: 'https://instagram.com/procc_org',
      color: 'from-purple-500 to-pink-500',
      members: '2.5K+'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      description: 'Red profesional para profesionales de la salud comunitaria',
      link: 'https://linkedin.com/company/procc',
      color: 'from-blue-600 to-blue-700',
      members: '900+'
    },
    {
      name: 'Facebook',
      icon: '👥',
      description: 'Grupo de Facebook para compartir experiencias y recursos',
      link: 'https://facebook.com/groups/procc',
      color: 'from-blue-500 to-blue-600',
      members: '1.5K+'
    }
  ]

  const communityStats = [
    { icon: <MdPeople className="text-4xl" />, number: '5,000+', label: 'Miembros Activos' },
    { icon: <MdMessage className="text-4xl" />, number: '12K+', label: 'Mensajes Mensuales' },
    { icon: <MdShare className="text-4xl" />, number: '3K+', label: 'Recursos Compartidos' },
    { icon: <MdTrendingUp className="text-4xl" />, number: '150+', label: 'Países Representados' }
  ]

  return (
    <section id="comunidad" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">COMUNIDAD PROCC</h2>
          <p className="section-subtitle">
            Únete a nuestra comunidad global y conecta con profesionales y personas comprometidas con la salud comunitaria
          </p>
        </motion.div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-premium text-center"
            >
              <div className="text-procc-primary mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Redes Sociales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialNetworks.map((network, idx) => (
            <motion.a
              key={idx}
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-premium group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${network.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {network.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {network.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {network.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{network.members} miembros</span>
                <span className="text-procc-primary font-semibold group-hover:text-procc-secondary transition-colors">
                  Únete →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Principal */}
        <motion.div
          className="card-premium max-w-4xl mx-auto bg-gradient-to-r from-procc-primary to-procc-secondary text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <MdPeople className="text-6xl mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              ¡Únete a la Comunidad ProCC!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Conecta con miles de profesionales y personas comprometidas con la salud comunitaria.
              Comparte experiencias, aprende y crece junto a nosotros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://t.me/procc_comunidad"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-procc-primary rounded-full font-semibold shadow-premium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>✈️</span>
                <span>Telegram</span>
              </motion.a>
              <motion.a
                href="https://twitter.com/procc_org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white border-2 border-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🐦</span>
                <span>X (Twitter)</span>
              </motion.a>
              <motion.a
                href="https://tiktok.com/@procc_org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white border-2 border-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🎵</span>
                <span>TikTok</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Beneficios de la Comunidad */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: <MdFavorite className="text-4xl text-procc-primary" />,
              title: 'Apoyo Mutuo',
              description: 'Conecta con personas que comparten tus valores y objetivos'
            },
            {
              icon: <MdEmojiEvents className="text-4xl text-procc-primary" />,
              title: 'Recursos Exclusivos',
              description: 'Accede a materiales, guías y recursos solo para miembros'
            },
            {
              icon: <MdTrendingUp className="text-4xl text-procc-primary" />,
              title: 'Crecimiento Profesional',
              description: 'Desarrolla tus habilidades y expande tu red profesional'
            }
          ].map((benefit, idx) => (
            <div key={idx} className="card-premium text-center">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Comunidad

