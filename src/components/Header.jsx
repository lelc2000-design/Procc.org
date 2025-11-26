import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const menuItems = [
    {
      name: 'SOMOS',
      submenu: [
        { name: 'Proyecto ProCC', href: '#proyecto' },
        { name: 'Metodología ProCC', href: '#metodologia' },
        { name: 'Red ProCC', href: '#red' },
        { name: 'Equipo ProCC', href: '#equipo' },
        { name: 'Instituciones', href: '#instituciones' },
      ]
    },
    {
      name: 'ESTAMOS',
      submenu: [
        { name: 'Andalucía', href: '#andalucia' },
        { name: 'Aragón', href: '#aragon' },
        { name: 'Galicia', href: '#galicia' },
        { name: 'Madrid', href: '#madrid' },
        { name: 'País Vasco', href: '#pais-vasco' },
        { name: 'Argentina', href: '#argentina' },
      ]
    },
    {
      name: 'HACEMOS',
      submenu: [
        { name: 'Formación de Profesionales', href: '#formacion' },
        { name: 'Intervención Comunitaria', href: '#intervencion' },
        { name: 'Atención Psicológica', href: '#atencion' },
        { name: 'Supervisión Profesional', href: '#supervision' },
        { name: 'Asesoría Institucional', href: '#asesoria' },
      ]
    },
    {
      name: 'DECIMOS',
      submenu: [
        { name: 'Publicaciones', href: '#publicaciones' },
        { name: 'Libros', href: '#libros' },
        { name: 'Videos', href: '#videos' },
        { name: 'Podcasts', href: '#podcasts' },
        { name: 'Fotografías', href: '#fotografias' },
      ]
    },
    { name: 'BLOG', href: '#blog' },
    { name: 'CALENDARIO', href: '#calendario' },
    {
      name: 'COMUNIDAD',
      submenu: [
        { name: 'Redes Sociales', href: '#comunidad' },
        { name: 'Telegram', href: '#comunidad' },
        { name: 'X (Twitter)', href: '#comunidad' },
        { name: 'TikTok', href: '#comunidad' },
      ]
    },
    { name: 'SEGURIDAD', href: '#seguridad' },
    { name: 'HABLEMOS', href: '#contacto' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="https://www.procc.org/wp-content/uploads/2019/06/logo_centrado.png" 
              alt="ProCC Logo" 
              className="h-14 md:h-16 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div className="text-2xl font-bold text-procc-primary" style={{ display: 'none' }}>
              ProCC
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href || '#'}
                  className="text-gray-700 hover:text-procc-primary font-semibold text-sm uppercase tracking-wide transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.submenu && <span className="text-xs">▼</span>}
                </a>

                {item.submenu && (
                  <AnimatePresence>
                    {activeDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-premium p-4 border border-gray-100"
                      >
                        {item.submenu.map((sub, subIdx) => (
                          <a
                            key={subIdx}
                            href={sub.href}
                            className="block py-2 px-3 text-gray-700 hover:text-procc-primary hover:bg-procc-light rounded-lg transition-colors duration-200 text-sm"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-procc-primary transition-colors"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 mt-4 pb-4"
            >
              {menuItems.map((item, idx) => (
                <div key={idx} className="py-2">
                  <a
                    href={item.href || '#'}
                    className="block py-2 text-gray-700 hover:text-procc-primary font-semibold text-sm uppercase"
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-1">
                      {item.submenu.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.href}
                          className="block py-1 text-gray-600 hover:text-procc-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

