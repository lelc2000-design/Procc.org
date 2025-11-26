import { motion } from 'framer-motion'
import { useState } from 'react'
import { MdSchool, MdPeople, MdFavorite, MdVisibility, MdBusiness, MdFamilyRestroom, MdChildCare, MdWoman, MdElderly, MdSchool as MdEducation, MdGroups } from 'react-icons/md'

const Hacemos = () => {
  const [activeTab, setActiveTab] = useState('formacion')

  const areas = {
    formacion: {
      title: 'Formación de Profesionales',
      icon: <MdSchool className="text-5xl text-procc-primary" />,
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-procc-primary mb-4">Especialidad en la Metodología de los ProCC</h3>
            <p className="text-gray-700 mb-4">
              La <strong>formación en Metodología ProCC</strong> es una titulación privada que te ofrece un espacio de formación muy conectado con la práctica, cuya direccionalidad es contribuir a la transformación social.
            </p>
            <p className="text-gray-700 mb-4">
              Se encuadra desde la Orientación Comunitaria, privilegiando el trabajo grupal y se dirige especialmente a la atención de los malestares cotidianos que conforman el ámbito de la Normalidad Supuesta Salud.
            </p>
            <p className="text-gray-700 mb-6">
              Su duración completa es de <strong>400 horas</strong>, que se desarrollarán desde octubre de 2025 a diciembre de 2026.
            </p>
            
            <div className="bg-gradient-to-r from-procc-primary to-procc-secondary text-white p-6 rounded-2xl mb-6">
              <h4 className="text-xl font-bold mb-4">Curso Metodología ProCC - Edición 2025–2026</h4>
              <p className="mb-4">Formación presencial en Santiago de Compostela sobre intervención comunitaria y salud desde una mirada crítica e integral.</p>
              <ul className="space-y-2 text-sm">
                <li><strong>📅 Inicio:</strong> 4 octubre 2025 – <strong>Fin:</strong> 12 diciembre 2026</li>
                <li><strong>🌷 Modalidad:</strong> Presencial quincenal (sábados)</li>
                <li><strong>⏳ Duración:</strong> 400 horas</li>
                <li><strong>💶 Precio:</strong> 2.850 € + matrícula 150 €</li>
                <li><strong>🎓 Descuento de 190 €</strong> si hiciste formaciones ProCC previas (mín. 16h)</li>
              </ul>
              <div className="mt-4">
                <strong>📞</strong> 610 016 109 · <a href="mailto:cml@procc.org" className="underline">cml@procc.org</a>
              </div>
            </div>

            <div className="bg-procc-light p-6 rounded-xl mb-6">
              <h4 className="text-lg font-bold text-procc-primary mb-3">¿Quieres más información?</h4>
              <p className="text-gray-700 mb-4">
                Crea tu usuario en el <a href="https://aula.procc.org/" target="_blank" rel="noopener noreferrer" className="text-procc-primary underline font-semibold">Aula Virtual de manera gratuita</a> y conoce nuestros cursos, seminarios y diversas aplicaciones de la Metodología ProCC.
              </p>
            </div>

            <div className="bg-white border-2 border-procc-primary/20 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-procc-primary mb-4">Preguntas frecuentes:</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>¿Cómo llegar a las necesidades de la población?</strong></li>
                <li><strong>¿Cómo prevenir el desgaste y la pérdida de sentido de la tarea profesional?</strong></li>
                <li><strong>¿Cómo no quedar atrapado en la demanda?</strong></li>
                <li><strong>¿Qué supone trabajar con una concepción integral de salud?</strong></li>
                <li><strong>¿Valoras la intervención comunitaria, pero la sientes ajena a tu profesión?</strong></li>
                <li><strong>¿Te interesa tener herramientas para la intervención con grupos?</strong></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    intervencion: {
      title: 'Intervención Comunitaria',
      icon: <MdPeople className="text-5xl text-procc-primary" />,
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-gray-700 mb-6">
              La intervención comunitaria ProCC se desarrolla en diferentes ámbitos de la vida cotidiana, trabajando con grupos para analizar las contradicciones que generan malestar y buscar alternativas colectivas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-premium">
                <MdFamilyRestroom className="text-4xl text-procc-primary mb-4" />
                <h4 className="text-xl font-bold text-procc-primary mb-3">Familia</h4>
                <p className="text-gray-600 mb-3 italic">
                  Prisas. Agobio. Se me sube a la chepa. No hago carrera de él. Le digo las cosas 20 veces. No me hace ni caso. No tengo tiempo para mí. Es muy movidita. No para quieto. No hay forma de poner límites. Me siento culpable. Termino perdiendo los nervios…
                </p>
                <p className="text-gray-700 mb-3"><strong>¿Es lo que hay?</strong></p>
                <p className="text-gray-700 mb-3">
                  La crianza se emprende, sin duda, con ilusión y entusiasmo, pero también con muchas dudas y preocupaciones que se agudizan con la multitud de corrientes educativas que actualmente nos rodean.
                </p>
                <p className="text-gray-700 mb-3"><strong>¿Cuál es el criterio?</strong></p>
                <p className="text-gray-700">
                  El modo de vida y la función social asignada a la familia nos atrapan en fuertes contradicciones. Las Escuelas para Madres y Padres ProCC pretenden ser un espacio de reflexión grupal para trabajar estas contradicciones y buscar alternativas desde una mirada crítica y creativa.
                </p>
                <p className="text-gray-700 mt-3">
                  Los Programas ProCC dirigidos al ámbito familiar cuentan con herramientas teórico-prácticas para la construcción de vínculos saludables encaminados al fomento de la autonomía.
                </p>
              </div>

              <div className="card-premium">
                <MdChildCare className="text-4xl text-procc-primary mb-4" />
                <h4 className="text-xl font-bold text-procc-primary mb-3">Jóvenes</h4>
                <p className="text-gray-700">
                  Programas de intervención dirigidos a jóvenes para trabajar las contradicciones propias de esta etapa vital, promoviendo el desarrollo saludable y la participación activa.
                </p>
              </div>

              <div className="card-premium">
                <MdWoman className="text-4xl text-procc-primary mb-4" />
                <h4 className="text-xl font-bold text-procc-primary mb-3">Género</h4>
                <p className="text-gray-700">
                  Espacios de trabajo grupal para analizar las contradicciones relacionadas con los roles de género y promover relaciones más igualitarias y saludables.
                </p>
              </div>

              <div className="card-premium">
                <MdElderly className="text-4xl text-procc-primary mb-4" />
                <h4 className="text-xl font-bold text-procc-primary mb-3">Mayores</h4>
                <p className="text-gray-700">
                  Programas dirigidos a personas mayores para trabajar los malestares propios de esta etapa, promoviendo el envejecimiento activo y saludable.
                </p>
              </div>

              <div className="card-premium">
                <MdEducation className="text-4xl text-procc-primary mb-4" />
                <h4 className="text-xl font-bold text-procc-primary mb-3">Comunidad educativa</h4>
                <p className="text-gray-700">
                  Intervenciones en el ámbito escolar trabajando con toda la comunidad educativa (profesorado, familias, alumnado) para abordar las contradicciones que afectan al proceso educativo.
                </p>
              </div>

              <div className="card-premium">
                <MdGroups className="text-4xl text-procc-primary mb-4" />
                <h4 className="text-xl font-bold text-procc-primary mb-3">Participación</h4>
                <p className="text-gray-700">
                  Programas que promueven la participación ciudadana y el protagonismo social en la resolución de problemas comunitarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    atencion: {
      title: 'Atención Psicológica',
      icon: <MdFavorite className="text-5xl text-procc-primary" />,
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-gray-700 mb-4">
              El Centro Marie Langer (Sede Madrid) está <strong>acreditado como Centro Sanitario</strong> autorizado por la Consejería de Sanidad de la Comunidad de Madrid.
            </p>
            <p className="text-gray-700 mb-4">
              Contamos con un <strong>equipo de profesionales de la psicología colegiados</strong> con años de experiencia y en constante actualización.
            </p>
            <p className="text-gray-700 mb-6">
              La <strong>intervención clínica ProCC</strong> plantea la atención de los diversos problemas de salud mental en el marco de las contradicciones que hacen a la vida de las personas. Por eso, nuestro equipo posee formación y práctica en la intervención sobre los malestares cotidianos, lo que facilita una mejor comprensión de las diversas problemáticas del ámbito clínico, así como de las diversas poblaciones que acuden a consulta.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="card-premium">
                <h4 className="text-lg font-bold text-procc-primary mb-3">Modalidad presencial</h4>
                <p className="text-gray-700">
                  En la actualidad atendemos de <strong>forma presencial</strong> en nuestras consultas (Avenida del Mediterráneo, 47, esc. 1, 1º D, Madrid), cumpliendo con todas las medidas de seguridad necesarias para asegurar la protección y el cuidado tanto del equipo como de los y las pacientes.
                </p>
              </div>

              <div className="card-premium">
                <h4 className="text-lg font-bold text-procc-primary mb-3">Modalidad online</h4>
                <p className="text-gray-700">
                  Y siempre hemos contado con un servicio de <strong>atención clínica online</strong>. ¿No estás en Madrid? ¿Tu zona está confinada? No te preocupes, es posible seguir teniendo acceso a un espacio emocionalmente seguro, confidencial y de calidad. Contacta con nuestro equipo.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-premium">
                <h4 className="text-lg font-bold text-procc-primary mb-3">Niños/as</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• TDAH</li>
                  <li>• Problemas de conducta</li>
                  <li>• Dificultad de aprendizaje</li>
                  <li>• Ansiedad</li>
                  <li>• Conflictos familiares</li>
                  <li>• Depresión</li>
                  <li>• Enuresis</li>
                  <li>• Miedos y fobias</li>
                </ul>
              </div>

              <div className="card-premium">
                <h4 className="text-lg font-bold text-procc-primary mb-3">Adolescentes</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Baja autoestima</li>
                  <li>• Depresión</li>
                  <li>• Adicciones</li>
                  <li>• Nuevas tecnologías</li>
                  <li>• Apatía</li>
                  <li>• Fobias sociales</li>
                  <li>• Conflictos de identidad</li>
                  <li>• Dificultades relacionales</li>
                  <li>• Miedos y fobias</li>
                </ul>
              </div>

              <div className="card-premium">
                <h4 className="text-lg font-bold text-procc-primary mb-3">Adultos</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Baja autoestima</li>
                  <li>• Depresión</li>
                  <li>• Conflictos relacionales (familia, pareja, laboral, etc)</li>
                  <li>• Situaciones de crisis</li>
                  <li>• Duelo y pérdidas</li>
                  <li>• Comportamientos obsesivos y fóbicos</li>
                  <li>• Ansiedad y angustia</li>
                </ul>
              </div>

              <div className="card-premium">
                <h4 className="text-lg font-bold text-procc-primary mb-3">Otros servicios</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Terapia de pareja</li>
                  <li>• Orientación para padres y madres</li>
                  <li>• Grupo terapéutico</li>
                  <li>• Talleres de niños/as</li>
                  <li>• Grupo terapéutico adolescentes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    supervision: {
      title: 'Supervisión Profesional',
      icon: <MdVisibility className="text-5xl text-procc-primary" />,
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-gray-700 mb-4 italic">
              ¿Tienes un o una paciente sobre el que necesitas reflexionar? ¿Percibiste algo raro en la última sesión grupal? ¿Te preguntas cómo intervenir o qué pasos dar a continuación?
            </p>
            <p className="text-gray-700 mb-4">
              Los espacios de supervisión se convierten con frecuencia en espacios de persecución. Sin embargo, consideramos la <strong>supervisión profesional</strong> como una actividad inherente a la práctica profesional que contribuye al cuidado de la tarea y del profesional. Es un espacio de análisis, cuidado y reflexión sobre una tarea concreta que favorece el crecimiento y el aprendizaje.
            </p>
            <p className="text-gray-700 mb-6">
              Las realizamos tanto sobre casos clínicos, proyectos comunitarios o acciones formativas, pueden ser de carácter individual o grupal y están a cargo de profesionales especializados.
            </p>
            <p className="text-gray-700">
              Ante la duda <a href="#hablemos" className="text-procc-primary underline font-semibold">anímate a preguntarnos,</a> con mucha honestidad te diremos si podemos ayudarte.
            </p>
          </div>
        </div>
      )
    },
    asesoria: {
      title: 'Asesoría Institucional',
      icon: <MdBusiness className="text-5xl text-procc-primary" />,
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-gray-700 mb-4">
              Si tienes una idea en mente pero no sabes por dónde empezar; estás viviendo un momento difícil en tu institución y necesitas tomar distancia para pensarla; te gustaría conocer en mayor profundidad la coordinación de equipos; quieres formar a tu equipo en resolución de conflictos; te gustaría mejorar vuestra comunicación; te preguntas cómo mejorar la motivación y autoestima del grupo de trabajo; necesitas asesoramiento para el proceso de toma de decisiones; te preguntas cómo elaborar los actuales cambios del equipo; quieres aprender más sobre liderazgo y dirección saludable…
            </p>
            <p className="text-gray-700 mb-4">
              Puedes contar con nuestra experiencia y recorrido a través de nuestro servicio de <strong>asesoría institucional</strong>.
            </p>
            <p className="text-gray-700 mb-6">
              Puede ser de carácter individual o grupal y está a cargo de profesionales especializados. Ante la duda <a href="#hablemos" className="text-procc-primary underline font-semibold">anímate a preguntarnos</a>, con mucha honestidad te diremos si podemos ayudarte.
            </p>
          </div>
        </div>
      )
    }
  }

  return (
    <section id="hacemos" className="min-h-[calc(100vh-5rem)] section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative pt-24 pb-16 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="section-container-premium p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title text-gradient">HACEMOS</h2>
            <p className="section-subtitle">
              Descubre todas las actividades y servicios que ofrecemos desde ProCC
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {Object.keys(areas).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-procc-primary text-white shadow-lg scale-105'
                    : 'bg-white text-procc-primary border-2 border-procc-primary/20 hover:border-procc-primary/40 hover:scale-105'
                }`}
              >
                {areas[key].title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-premium p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-procc-primary">
                {areas[activeTab].icon}
              </div>
              <h3 className="text-3xl font-bold text-procc-primary">
                {areas[activeTab].title}
              </h3>
            </div>
            {areas[activeTab].content}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hacemos
