import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  MapPin, 
  Video, 
  Users, 
  Clock,
  Plus,
  X,
  CheckCircle
} from 'react-icons/md'

const Calendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState('month') // 'month', 'week', 'day'
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showEventForm, setShowEventForm] = useState(false)
  const [filterType, setFilterType] = useState('all') // 'all', 'online', 'presencial'
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Curso Metodología ProCC 2025-2026',
      type: 'presencial',
      date: new Date(2025, 9, 4), // Octubre 4, 2025
      endDate: new Date(2025, 11, 12), // Diciembre 12, 2026
      time: '09:00',
      endTime: '14:00',
      location: 'Santiago de Compostela',
      description: 'Formación presencial en Santiago de Compostela sobre intervención comunitaria y salud desde una mirada crítica e integral.',
      price: '2.850€ + matrícula 150€',
      capacity: 30,
      enrolled: 18,
      category: 'Formación',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Seminario ProCC - Primavera 2025',
      type: 'online',
      date: new Date(2025, 2, 15), // Marzo 15, 2025
      time: '18:00',
      endTime: '20:00',
      location: 'Online (Zoom)',
      description: 'Ciclo de seminarios cortos para actualización y divulgación de propuestas teóricas y metodológicas.',
      price: 'Gratuito',
      capacity: 100,
      enrolled: 67,
      category: 'Seminario',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'Taller: Escuela de Padres y Madres',
      type: 'presencial',
      date: new Date(2025, 3, 10), // Abril 10, 2025
      time: '17:00',
      endTime: '19:00',
      location: 'Centro Marie Langer, Madrid',
      description: 'Taller grupal para padres y madres sobre temas de crianza y desarrollo comunitario.',
      price: 'Gratuito',
      capacity: 20,
      enrolled: 15,
      category: 'Taller',
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'Webinar: Ciudadanía Global en el Aula',
      type: 'online',
      date: new Date(2025, 3, 22), // Abril 22, 2025
      time: '19:00',
      endTime: '21:00',
      location: 'Online (YouTube Live)',
      description: 'Webinar sobre cómo trabajar la Ciudadanía Global en el aula usando la Metodología ProCC.',
      price: 'Gratuito',
      capacity: 500,
      enrolled: 234,
      category: 'Webinar',
      color: 'bg-orange-500'
    },
    {
      id: 5,
      title: 'Supervisión de Actividad Comunitaria',
      type: 'online',
      date: new Date(2025, 4, 5), // Mayo 5, 2025
      time: '16:00',
      endTime: '18:00',
      location: 'Online (Zoom)',
      description: 'Espacio colectivo de supervisión de actividades comunitarias para miembros de la Red ProCC.',
      price: 'Gratuito',
      capacity: 6,
      enrolled: 4,
      category: 'Supervisión',
      color: 'bg-red-500'
    }
  ])

  const [newEvent, setNewEvent] = useState({
    title: '',
    type: 'presencial',
    date: new Date(),
    time: '09:00',
    endTime: '17:00',
    location: '',
    description: '',
    price: '',
    capacity: '',
    category: 'Formación'
  })

  // Navegación del calendario
  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1))
  }

  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + (direction * 7))
    setCurrentDate(newDate)
  }

  const navigateDay = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + direction)
    setCurrentDate(newDate)
  }

  // Obtener días del mes
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Días del mes anterior
    const prevMonth = new Date(year, month, 0)
    const prevMonthDays = prevMonth.getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false
      })
    }
    
    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      })
    }
    
    // Días del mes siguiente para completar la cuadrícula
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      })
    }
    
    return days
  }

  // Obtener eventos para una fecha
  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date)
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear() &&
        (filterType === 'all' || event.type === filterType)
      )
    })
  }

  // Obtener eventos para la semana
  const getWeekEvents = () => {
    const startOfWeek = new Date(currentDate)
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(endOfWeek.getDate() + 6)
    
    return events.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate >= startOfWeek && eventDate <= endOfWeek &&
        (filterType === 'all' || event.type === filterType)
    })
  }

  // Formatear fecha
  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const handleSubmitEvent = (e) => {
    e.preventDefault()
    const event = {
      id: events.length + 1,
      ...newEvent,
      enrolled: 0,
      color: newEvent.type === 'online' ? 'bg-purple-500' : 'bg-blue-500'
    }
    setEvents([...events, event])
    setNewEvent({
      title: '',
      type: 'presencial',
      date: new Date(),
      time: '09:00',
      endTime: '17:00',
      location: '',
      description: '',
      price: '',
      capacity: '',
      category: 'Formación'
    })
    setShowEventForm(false)
  }

  const days = getDaysInMonth(currentDate)
  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  return (
    <section id="calendario" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-gradient">CALENDARIO DE EVENTOS</h2>
          <p className="section-subtitle">
            Consulta y participa en nuestros cursos, talleres, seminarios y eventos
          </p>
        </motion.div>

        {/* Controles */}
        <div className="card-premium mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Navegación */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  if (viewMode === 'month') navigateMonth(-1)
                  else if (viewMode === 'week') navigateWeek(-1)
                  else navigateDay(-1)
                }}
                className="p-2 rounded-lg hover:bg-procc-light transition-colors"
              >
                <ChevronLeft className="text-2xl text-procc-primary" />
              </button>
              
              <div className="text-center min-w-[200px]">
                <h3 className="text-2xl font-bold text-gray-900">
                  {viewMode === 'month' 
                    ? `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                    : viewMode === 'week'
                    ? `Semana del ${formatDate(new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay())))}`
                    : formatDate(currentDate)
                  }
                </h3>
              </div>
              
              <button
                onClick={() => {
                  if (viewMode === 'month') navigateMonth(1)
                  else if (viewMode === 'week') navigateWeek(1)
                  else navigateDay(1)
                }}
                className="p-2 rounded-lg hover:bg-procc-light transition-colors"
              >
                <ChevronRight className="text-2xl text-procc-primary" />
              </button>
              
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-4 py-2 bg-procc-primary text-white rounded-lg hover:bg-procc-secondary transition-colors text-sm font-semibold"
              >
                Hoy
              </button>
            </div>

            {/* Vista y Filtros */}
            <div className="flex items-center space-x-4">
              {/* Filtros */}
              <div className="flex items-center space-x-2 bg-procc-light rounded-lg p-1">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filterType === 'all' 
                      ? 'bg-procc-primary text-white' 
                      : 'text-gray-700 hover:bg-white'
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setFilterType('online')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filterType === 'online' 
                      ? 'bg-procc-primary text-white' 
                      : 'text-gray-700 hover:bg-white'
                  }`}
                >
                  <Video className="inline mr-1" />
                  Online
                </button>
                <button
                  onClick={() => setFilterType('presencial')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filterType === 'presencial' 
                      ? 'bg-procc-primary text-white' 
                      : 'text-gray-700 hover:bg-white'
                  }`}
                >
                  <MapPin className="inline mr-1" />
                  Presencial
                </button>
              </div>

              {/* Modo de Vista */}
              <div className="flex items-center space-x-2 bg-procc-light rounded-lg p-1">
                <button
                  onClick={() => setViewMode('month')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    viewMode === 'month' 
                      ? 'bg-procc-primary text-white' 
                      : 'text-gray-700 hover:bg-white'
                  }`}
                >
                  Mes
                </button>
                <button
                  onClick={() => setViewMode('week')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    viewMode === 'week' 
                      ? 'bg-procc-primary text-white' 
                      : 'text-gray-700 hover:bg-white'
                  }`}
                >
                  Semana
                </button>
                <button
                  onClick={() => setViewMode('day')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    viewMode === 'day' 
                      ? 'bg-procc-primary text-white' 
                      : 'text-gray-700 hover:bg-white'
                  }`}
                >
                  Día
                </button>
              </div>

              {/* Botón Agregar Evento */}
              <motion.button
                onClick={() => setShowEventForm(!showEventForm)}
                className="px-6 py-2 bg-procc-primary text-white rounded-lg hover:bg-procc-secondary transition-colors font-semibold flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus />
                <span>Nuevo Evento</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Formulario de Nuevo Evento */}
        <AnimatePresence>
          {showEventForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="card-premium mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Crear Nuevo Evento</h3>
                <button
                  onClick={() => setShowEventForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="text-2xl" />
                </button>
              </div>
              <form onSubmit={handleSubmitEvent} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Título del Evento</label>
                    <input
                      type="text"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Tipo</label>
                    <select
                      value={newEvent.type}
                      onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                    >
                      <option value="presencial">Presencial</option>
                      <option value="online">Online</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Fecha</label>
                    <input
                      type="date"
                      value={newEvent.date.toISOString().split('T')[0]}
                      onChange={(e) => setNewEvent({ ...newEvent, date: new Date(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Hora Inicio</label>
                    <input
                      type="time"
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Hora Fin</label>
                    <input
                      type="time"
                      value={newEvent.endTime}
                      onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Ubicación</label>
                    <input
                      type="text"
                      value={newEvent.location}
                      onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                      placeholder={newEvent.type === 'online' ? 'Ej: Online (Zoom)' : 'Ej: Madrid, España'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Precio</label>
                    <input
                      type="text"
                      value={newEvent.price}
                      onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })}
                      placeholder="Ej: Gratuito o 100€"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Capacidad</label>
                    <input
                      type="number"
                      value={newEvent.capacity}
                      onChange={(e) => setNewEvent({ ...newEvent, capacity: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Descripción</label>
                  <textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowEventForm(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-procc-primary text-white rounded-lg hover:bg-procc-secondary transition-colors font-semibold"
                  >
                    Crear Evento
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Vista del Calendario */}
        {viewMode === 'month' && (
          <div className="card-premium">
            {/* Días de la semana */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weekDays.map((day, idx) => (
                <div key={idx} className="text-center font-bold text-gray-700 py-2">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Días del mes */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, idx) => {
                const dayEvents = getEventsForDate(day.date)
                const isToday = day.date.toDateString() === new Date().toDateString()
                
                return (
                  <motion.div
                    key={idx}
                    className={`min-h-[100px] p-2 border rounded-lg ${
                      day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                    } ${isToday ? 'ring-2 ring-procc-primary' : ''}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`text-sm font-semibold mb-1 ${
                      day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                    } ${isToday ? 'text-procc-primary' : ''}`}>
                      {day.date.getDate()}
                    </div>
                    <div className="space-y-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <div
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          className={`${event.color} text-white text-xs p-1 rounded cursor-pointer hover:opacity-80 transition-opacity`}
                        >
                          <div className="truncate">{event.title}</div>
                          <div className="text-xs opacity-90">{event.time}</div>
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-gray-500">
                          +{dayEvents.length - 2} más
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {viewMode === 'week' && (
          <div className="card-premium">
            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 7 }).map((_, idx) => {
                const date = new Date(currentDate)
                date.setDate(date.getDate() - date.getDay() + idx)
                const dayEvents = getEventsForDate(date)
                const isToday = date.toDateString() === new Date().toDateString()
                
                return (
                  <div key={idx} className={`border rounded-lg p-4 ${isToday ? 'ring-2 ring-procc-primary' : ''}`}>
                    <div className={`font-bold mb-4 ${isToday ? 'text-procc-primary' : 'text-gray-900'}`}>
                      {weekDays[idx]}
                      <div className="text-sm text-gray-600">{date.getDate()}</div>
                    </div>
                    <div className="space-y-2">
                      {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          className={`${event.color} text-white p-2 rounded cursor-pointer hover:opacity-80 transition-opacity`}
                        >
                          <div className="font-semibold text-sm">{event.title}</div>
                          <div className="text-xs opacity-90">{event.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {viewMode === 'day' && (
          <div className="card-premium">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {formatDate(currentDate)}
              </h3>
            </div>
            <div className="space-y-4">
              {getEventsForDate(currentDate).map((event) => (
                <motion.div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`${event.color} text-white p-6 rounded-xl cursor-pointer hover:opacity-90 transition-opacity`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-bold">{event.title}</h4>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {event.category}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock />
                      <span>{event.time} - {event.endTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {event.type === 'online' ? <Video /> : <MapPin />}
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users />
                      <span>{event.enrolled}/{event.capacity} participantes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">Precio: {event.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              {getEventsForDate(currentDate).length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No hay eventos programados para este día
                </div>
              )}
            </div>
          </div>
        )}

        {/* Modal de Detalle del Evento */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`${selectedEvent.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {selectedEvent.category}
                      </span>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        selectedEvent.type === 'online' 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {selectedEvent.type === 'online' ? 'Online' : 'Presencial'}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {selectedEvent.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="text-2xl" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CalendarIcon className="text-procc-primary text-xl" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {formatDate(selectedEvent.date)}
                      </div>
                      {selectedEvent.endDate && (
                        <div className="text-sm text-gray-600">
                          Hasta: {formatDate(selectedEvent.endDate)}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-procc-primary text-xl" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {selectedEvent.time} - {selectedEvent.endTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {selectedEvent.type === 'online' ? (
                      <Video className="text-procc-primary text-xl" />
                    ) : (
                      <MapPin className="text-procc-primary text-xl" />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {selectedEvent.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="text-procc-primary text-xl" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {selectedEvent.enrolled} / {selectedEvent.capacity} participantes
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-procc-primary h-2 rounded-full"
                          style={{ width: `${(selectedEvent.enrolled / selectedEvent.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">Precio:</span>
                    <span className="text-procc-primary font-bold text-lg">
                      {selectedEvent.price}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Descripción</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    className="flex-1 px-6 py-4 bg-procc-primary text-white rounded-lg hover:bg-procc-secondary transition-colors font-semibold flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CheckCircle />
                    <span>Inscribirse</span>
                  </motion.button>
                  <motion.button
                    className="px-6 py-4 border-2 border-procc-primary text-procc-primary rounded-lg hover:bg-procc-light transition-colors font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Compartir
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Calendario

