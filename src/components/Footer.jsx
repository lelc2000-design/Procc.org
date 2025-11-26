import { motion, AnimatePresence } from 'framer-motion'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const Footer = ({ showFooter }) => {
  return (
    <AnimatePresence>
      {showFooter && (
        <motion.footer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed bottom-0 left-0 right-0 bg-procc-green text-white py-6 shadow-2xl z-[9999]"
        >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Información Básica en Negrita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-bold text-lg mb-4">CONTACTO</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdEmail className="text-xl" />
                <span className="font-bold">cml@procc.org</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdPhone className="text-xl" />
                <span className="font-bold">610 016 109</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdLocationOn className="text-xl" />
                <span className="font-bold">Centro Marie Langer, Madrid</span>
              </div>
            </div>
          </motion.div>

          {/* Información Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="font-bold text-lg mb-4">PROCC</h4>
            <p className="font-bold">
              Procesos Correctores Comunitarios
            </p>
            <p className="font-bold mt-2">
              Centro Marie Langer
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="font-bold mb-2">
              © Marie Langer 1980 - 2025
            </p>
            <p className="font-bold mb-2">
              Algunos derechos reservados
            </p>
            <p className="font-bold">
              Hecho con ❤️ por Nodo Común
            </p>
          </motion.div>
        </div>

        {/* Línea Separadora */}
        <div className="border-t border-white/20 pt-6">
          <div className="text-center">
            <p className="font-bold text-sm">
              Política de privacidad | Términos de uso
            </p>
          </div>
        </div>
      </div>
        </motion.footer>
      )}
    </AnimatePresence>
  )
}

export default Footer
