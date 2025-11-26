import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = ({ isScrolled, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const menuStructure = [
    {
      main: { name: 'SOMOS', href: '#somos' },
      submenu: [
        { name: 'Proyecto ProCC', href: '#somos', tab: 'proyecto' },
        { name: 'Metodología ProCC', href: '#somos', tab: 'metodologia' },
        { name: 'Red ProCC', href: '#somos', tab: 'red' },
        { name: 'Equipo ProCC', href: '#somos', tab: 'equipo' },
        { name: 'Instituciones', href: '#somos', tab: 'instituciones' },
      ]
    },
    {
      main: { name: 'ESTAMOS', href: '#estamos' },
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
      main: { name: 'HACEMOS', href: '#hacemos' },
      submenu: [
        { name: 'Formación de Profesionales', href: '#hacemos', tab: 'formacion' },
        { name: 'Intervención Comunitaria', href: '#hacemos', tab: 'intervencion' },
        { name: 'Atención Psicológica', href: '#hacemos', tab: 'atencion' },
        { name: 'Supervisión Profesional', href: '#hacemos', tab: 'supervision' },
        { name: 'Asesoría Institucional', href: '#hacemos', tab: 'asesoria' },
      ]
    },
    {
      main: { name: 'DECIMOS', href: '#decimos' },
      submenu: [
        { name: 'Publicaciones', href: '#decimos', tab: 'publicaciones' },
        { name: 'Libros', href: '#decimos', tab: 'libros' },
        { name: 'Videos', href: '#decimos', tab: 'videos' },
        { name: 'Podcasts', href: '#decimos', tab: 'podcasts' },
        { name: 'Fotografías', href: '#decimos', tab: 'fotografias' },
      ]
    },
    { main: { name: 'PUBLICACIONES', href: '#publicaciones' } },
    { main: { name: 'BLOG', href: '#blog' } },
    { main: { name: 'CALENDARIO', href: '#calendario' } },
    { main: { name: 'COMUNIDAD', href: '#comunidad' } },
    { main: { name: 'SEGURIDAD', href: '#seguridad' } },
    { main: { name: 'HABLEMOS', href: '#contacto' } },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-2xl border-b-2 border-procc-primary/20'
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-procc-primary/10'
      }`}
    >
      {/* Línea superior verde premium */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-procc-green via-procc-primary to-procc-green"></div>
      
      <nav className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 xl:px-24">
        {/* Primera fila: Logo y items principales */}
        <div className="flex items-center justify-between h-20 pt-2">
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
              className="h-14 md:h-16 lg:h-18 w-auto"
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

          {/* Items principales - Desktop */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-end">
            {menuStructure.map((item, idx) => (
              <a
                key={idx}
                href={item.main.href || '#'}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(item.main.href || '#')
                }}
                className="relative px-4 xl:px-5 py-2.5 rounded-lg font-bold text-xs xl:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
                style={{
                  background: item.submenu 
                    ? 'linear-gradient(135deg, rgba(107, 70, 193, 0.95) 0%, rgba(139, 92, 246, 0.95) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,1) 100%)',
                  border: item.submenu 
                    ? '2px solid rgba(107, 70, 193, 0.4)'
                    : '2px solid rgba(107, 70, 193, 0.2)',
                  boxShadow: item.submenu
                    ? '0 6px 20px rgba(107, 70, 193, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                    : '0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
                  color: item.submenu ? '#FFFFFF' : '#1F2937',
                }}
                onMouseEnter={(e) => {
                  if (!item.submenu) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(107, 70, 193, 0.98) 0%, rgba(139, 92, 246, 0.98) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.4)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(107, 70, 193, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.submenu) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,1) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.2)';
                    e.currentTarget.style.color = '#1F2937';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)';
                  }
                }}
              >
                {item.main.name}
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

        {/* Segunda fila: Submenús siempre visibles - Desktop */}
        <div className="hidden lg:block pb-3">
          <div className="flex items-center space-x-2 flex-wrap gap-y-2">
            {menuStructure.map((item, idx) => (
              item.submenu && (
                <div key={idx} className="flex items-center space-x-1">
                  {item.submenu.map((sub, subIdx) => (
                    <a
                      key={subIdx}
                      href={sub.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(sub.href, sub.tab)
                      }}
                      className="px-3 py-1.5 rounded-md text-xs font-semibold text-gray-700 hover:text-procc-primary hover:bg-procc-light transition-all duration-200 cursor-pointer border border-transparent hover:border-procc-primary/30"
                    >
                      {sub.name}
                    </a>
                  ))}
                  {idx < menuStructure.filter(i => i.submenu).length - 1 && (
                    <span className="text-gray-300 mx-1">|</span>
                  )}
                </div>
              )
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden border-t-2 border-procc-primary/20"
        >
          <div className="py-4 space-y-2">
            {menuStructure.map((item, idx) => (
              <div key={idx}>
                <a
                  href={item.main.href || '#'}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(item.main.href || '#')
                    setIsMenuOpen(false)
                  }}
                  className="block py-3 px-4 text-gray-800 hover:text-procc-primary font-bold text-sm uppercase cursor-pointer rounded-lg hover:bg-procc-light transition-colors"
                >
                  {item.main.name}
                </a>
                {item.submenu && (
                  <div className="pl-6 mt-1 space-y-1">
                    {item.submenu.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavigation(sub.href, sub.tab)
                          setIsMenuOpen(false)
                        }}
                        className="block py-2 px-4 text-gray-600 hover:text-procc-primary text-sm font-medium cursor-pointer rounded-lg hover:bg-procc-light/50 transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header
