import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = ({ isScrolled, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (href) => {
    if (href && href.startsWith('#')) {
      const section = href.replace('#', '')
      setActiveSection(section)
      window.location.hash = section
      window.scrollTo(0, 0)
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { name: 'SOMOS', href: '#somos' },
    { name: 'ESTAMOS', href: '#estamos' },
    { name: 'HACEMOS', href: '#hacemos' },
    { name: 'DECIMOS', href: '#decimos' },
    { name: 'PUBLICACIONES', href: '#publicaciones' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CALENDARIO', href: '#calendario' },
    { name: 'COMUNIDAD', href: '#comunidad' },
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
                  <a
                    key={idx}
                    href={item.href || '#'}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.href || '#')
                    }}
                    className="relative px-4 py-2.5 rounded-lg font-bold text-xs xl:text-sm uppercase tracking-wider transition-all duration-300 flex items-center space-x-1.5 hover:scale-105 cursor-pointer"
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
                  </a>
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
                <a
                  key={idx}
                  href={item.href || '#'}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(item.href || '#')
                    setIsMenuOpen(false)
                  }}
                  className="block py-2 text-gray-700 hover:text-procc-primary font-semibold text-sm uppercase cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
