import { motion } from 'framer-motion'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const footerSections = [
    {
      title: 'SOMOS',
      links: [
        { name: 'Proyecto ProCC', href: '#proyecto' },
        { name: 'Metodología ProCC', href: '#metodologia' },
        { name: 'Red ProCC', href: '#red' },
        { name: 'Equipo ProCC', href: '#equipo' },
        { name: 'Instituciones', href: '#instituciones' },
      ]
    },
    {
      title: 'ESTAMOS',
      links: [
        { name: 'Andalucía', href: '#andalucia' },
        { name: 'Aragón', href: '#aragon' },
        { name: 'Galicia', href: '#galicia' },
        { name: 'Madrid', href: '#madrid' },
        { name: 'País Vasco', href: '#pais-vasco' },
        { name: 'Argentina', href: '#argentina' },
      ]
    },
    {
      title: 'HACEMOS',
      links: [
        { name: 'Formación', href: '#formacion' },
        { name: 'Intervención Comunitaria', href: '#intervencion' },
        { name: 'Atención Psicológica', href: '#atencion' },
        { name: 'Supervisión', href: '#supervision' },
        { name: 'Asesoría', href: '#asesoria' },
      ]
    },
    {
      title: 'DECIMOS',
      links: [
        { name: 'Publicaciones', href: '#publicaciones' },
        { name: 'Libros', href: '#libros' },
        { name: 'Videos', href: '#videos' },
        { name: 'Podcasts', href: '#podcasts' },
        { name: 'Fotografías', href: '#fotografias' },
      ]
    },
  ]

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4">ProCC</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Procesos Correctores Comunitarios. Trabajamos por una vida cotidiana 
                más humana, más solidaria y más saludable.
              </p>
              
              {/* Contacto */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <MdEmail className="mr-3 text-procc-accent" />
                  <span>cml@procc.org</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MdPhone className="mr-3 text-procc-accent" />
                  <span>610 016 109</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MdLocationOn className="mr-3 text-procc-accent" />
                  <span>Centro Marie Langer, Madrid</span>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="flex space-x-4 mt-6">
                {[
                  { icon: FaFacebook, href: '#' },
                  { icon: FaTwitter, href: '#' },
                  { icon: FaInstagram, href: '#' },
                  { icon: FaLinkedin, href: '#' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-procc-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enlaces */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-procc-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Línea Separadora */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © Marie Langer 1980 - 2025 | Política de privacidad
            </p>
            <p className="text-gray-400 text-sm">
              Algunos derechos reservados
            </p>
            <p className="text-gray-400 text-sm">
              Hecho con ♥ por Nodo Común
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

