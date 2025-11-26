import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = ({ isScrolled, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const handleNavigation = (href, tab = null) => {
    if (href && href.startsWith('#')) {
      const section = href.replace('#', '')
      
      // Si hay tab, guardarlo en sessionStorage
      if (tab) {
        sessionStorage.setItem(`${section}_tab`, tab)
      }
      
      setActiveSection(section)
      window.location.hash = section
      window.scrollTo(0, 0)
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    {
      name: 'SOMOS',
      href: '#somos',
      submenu: [
        { name: 'Proyecto ProCC', href: '#somos', tab: 'proyecto' },
        { name: 'Metodología ProCC', href: '#somos', tab: 'metodologia' },
        { name: 'Red ProCC', href: '#somos', tab: 'red' },
        { name: 'Equipo ProCC', href: '#somos', tab: 'equipo' },
        { name: 'Instituciones', href: '#somos', tab: 'instituciones' },
      ]
    },
    {
      name: 'ESTAMOS',
      href: '#estamos',
      submenu: [
        { name: 'Andalucía', href: '#estamos', tab: 'andalucia' },
        { name: 'Aragón', href: '#estamos', tab: 'aragon' },
        { name: 'Galicia', href: '#estamos', tab: 'galicia' },
        { name: 'Madrid', href: '#estamos', tab: 'madrid' },
        { name: 'País Vasco', href: '#estamos', tab: 'pais-vasco' },
        { name: 'Argentina', href: '#estamos', tab: 'argentina' },
      ]
    },
    {
      name: 'HACEMOS',
      href: '#hacemos',
      submenu: [
        { name: 'Formación de Profesionales', href: '#hacemos', tab: 'formacion' },
        { name: 'Intervención Comunitaria', href: '#hacemos', tab: 'intervencion' },
        { name: 'Atención Psicológica', href: '#hacemos', tab: 'atencion' },
        { name: 'Supervisión Profesional', href: '#hacemos', tab: 'supervision' },
        { name: 'Asesoría Institucional', href: '#hacemos', tab: 'asesoria' },
      ]
    },
    {
      name: 'DECIMOS',
      href: '#decimos',
      submenu: [
        { name: 'Publicaciones', href: '#decimos', tab: 'publicaciones' },
        { name: 'Libros', href: '#decimos', tab: 'libros' },
        { name: 'Videos', href: '#decimos', tab: 'videos' },
        { name: 'Podcasts', href: '#decimos', tab: 'podcasts' },
        { name: 'Fotografías', href: '#decimos', tab: 'fotografias' },
      ]
    },
    { name: 'PUBLICACIONES', href: '#publicaciones' },
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
          ? 'bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-200'
          : 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
      }`}
    >
      {/* Línea superior teal/verde */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-procc-green via-procc-primary to-procc-green"></div>
      
      <nav className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo con ESPACIO MÁXIMO */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('#inicio')
            }}
            className="flex items-center pr-24 md:pr-32 lg:pr-40 xl:pr-48 2xl:pr-56 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="https://www.procc.org/wp-content/uploads/2019/06/logo_centrado.png" 
              alt="ProCC Logo" 
              className="h-12 md:h-14 lg:h-16 w-auto"
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

          {/* Desktop Menu ULTRA PREMIUM */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-1 justify-end">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href || '#'}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(item.href || '#')
                  }}
                  className="relative px-4 py-2.5 rounded-lg font-bold text-xs xl:text-sm uppercase tracking-wider transition-all duration-300 flex items-center space-x-1.5 group-hover:scale-105 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                    border: '2px solid rgba(107, 70, 193, 0.15)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)',
                    color: '#4B5563',
                    textShadow: '0 1px 2px rgba(255,255,255,0.8)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(107, 70, 193, 0.95) 0%, rgba(139, 92, 246, 0.95) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.3)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(107, 70, 193, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)';
                    e.currentTarget.style.textShadow = '0 1px 2px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.15)';
                    e.currentTarget.style.color = '#4B5563';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)';
                    e.currentTarget.style.textShadow = '0 1px 2px rgba(255,255,255,0.8)';
                  }}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <span className="text-[10px] xl:text-xs opacity-70">▼</span>
                  )}
                </a>

                {item.submenu && (
                  <AnimatePresence>
                    {activeDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl p-4 border-2 border-procc-primary/20"
                        style={{
                          boxShadow: '0 20px 40px rgba(107, 70, 193, 0.15), 0 0 0 1px rgba(107, 70, 193, 0.1)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        {item.submenu.map((sub, subIdx) => (
                          <a
                            key={subIdx}
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavigation(sub.href, sub.tab)
                            }}
                            className="block py-3 px-4 text-gray-700 hover:text-procc-primary hover:bg-gradient-to-r hover:from-procc-light hover:to-transparent rounded-xl transition-all duration-200 text-sm font-medium border-l-2 border-transparent hover:border-procc-primary cursor-pointer"
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
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.href || '#')
                      if (!item.submenu) setIsMenuOpen(false)
                    }}
                    className="block py-2 text-gray-700 hover:text-procc-primary font-semibold text-sm uppercase cursor-pointer"
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-1">
                      {item.submenu.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.href}
                          onClick={(e) => {
                            e.preventDefault()
                            handleNavigation(sub.href, sub.tab)
                            setIsMenuOpen(false)
                          }}
                          className="block py-1 text-gray-600 hover:text-procc-primary text-sm cursor-pointer"
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
