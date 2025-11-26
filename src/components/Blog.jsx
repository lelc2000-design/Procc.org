import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Share2, MessageCircle, Clock, User, Star, Send, ThumbsUp } from 'react-icons/md'
// Función para formatear tiempo relativo
const formatTimeAgo = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000)
  if (seconds < 60) return 'hace unos segundos'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `hace ${minutes} minuto${minutes > 1 ? 's' : ''}`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `hace ${hours} hora${hours > 1 ? 's' : ''}`
  const days = Math.floor(hours / 24)
  return `hace ${days} día${days > 1 ? 's' : ''}`
}

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'María González',
      avatar: '👩',
      title: 'Mi experiencia con la Metodología ProCC',
      content: 'Después de 3 años aplicando la Metodología ProCC en mi trabajo comunitario, he visto cambios transformadores. La forma en que abordamos los malestares cotidianos ha cambiado completamente mi perspectiva profesional y personal.',
      category: 'Experiencia',
      likes: 24,
      comments: 8,
      shares: 5,
      rating: 5,
      timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutos atrás
      commentsList: [
        { id: 1, author: 'Ana Martínez', content: 'Totalmente de acuerdo, ha sido transformador', timestamp: new Date(Date.now() - 1 * 60 * 1000) }
      ]
    },
    {
      id: 2,
      author: 'Carlos Ruiz',
      avatar: '👨',
      title: 'Aprendizajes del Curso 2024-2025',
      content: 'El curso de Metodología ProCC ha sido una experiencia increíble. Los espacios de reflexión y encuentro han permitido que desarrollemos herramientas prácticas para nuestro trabajo diario. Recomiendo totalmente esta formación.',
      category: 'Aprendizaje',
      likes: 31,
      comments: 12,
      shares: 7,
      rating: 5,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      commentsList: []
    },
    {
      id: 3,
      author: 'Laura Fernández',
      avatar: '👩‍🦰',
      title: 'Sentimientos y reflexiones sobre la intervención comunitaria',
      content: 'Trabajar desde la Metodología ProCC me ha permitido conectar de manera más profunda con las personas. Los sentimientos que surgen en estos espacios de encuentro son auténticos y transformadores. Es un honor ser parte de esta red.',
      category: 'Sentimientos',
      likes: 45,
      comments: 15,
      shares: 10,
      rating: 5,
      timestamp: new Date(Date.now() - 8 * 60 * 1000),
      commentsList: []
    }
  ])

  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'Experiencia', rating: 5 })
  const [showForm, setShowForm] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [newComment, setNewComment] = useState('')

  // Actualizar posts cada 1 minuto (simulado)
  useEffect(() => {
    const interval = setInterval(() => {
      // Simular actualización de likes/comentarios
      setPosts(prevPosts => 
        prevPosts.map(post => ({
          ...post,
          timestamp: new Date(post.timestamp.getTime() - 60000) // Actualizar timestamp
        }))
      )
    }, 60000) // 1 minuto

    return () => clearInterval(interval)
  }, [])

  const handleSubmitPost = (e) => {
    e.preventDefault()
    const post = {
      id: posts.length + 1,
      author: 'Usuario',
      avatar: '👤',
      ...newPost,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: new Date(),
      commentsList: []
    }
    setPosts([post, ...posts])
    setNewPost({ title: '', content: '', category: 'Experiencia', rating: 5 })
    setShowForm(false)
  }

  const handleLike = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    )
  }

  const handleComment = (postId) => {
    if (!newComment.trim()) return
    const comment = {
      id: Date.now(),
      author: 'Usuario',
      content: newComment,
      timestamp: new Date()
    }
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments + 1,
              commentsList: [...post.commentsList, comment]
            }
          : post
      )
    )
    setNewComment('')
    setSelectedPost(null)
  }

  const handleShare = (post, platform) => {
    const url = `https://procc.org/blog/${post.id}`
    const text = `${post.title} - ${post.content.substring(0, 100)}...`
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    }
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank')
      setPosts(prevPosts =>
        prevPosts.map(p =>
          p.id === post.id ? { ...p, shares: p.shares + 1 } : p
        )
      )
    }
  }

  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-gradient">BLOG DE LA COMUNIDAD</h2>
          <p className="section-subtitle">
            Comparte tus experiencias, sentimientos y aprendizajes con la comunidad ProCC
          </p>
          <motion.button
            onClick={() => setShowForm(!showForm)}
            className="mt-6 px-8 py-4 bg-procc-primary text-white rounded-full font-semibold hover:bg-procc-secondary transition-all duration-300 shadow-premium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {showForm ? 'Cancelar' : '+ Compartir Mi Experiencia'}
          </motion.button>
        </motion.div>

        {/* Formulario de Nuevo Post */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="card-premium mb-12"
            >
              <h3 className="text-2xl font-bold mb-6">Comparte tu Experiencia</h3>
              <form onSubmit={handleSubmitPost}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Título</label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Categoría</label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                  >
                    <option>Experiencia</option>
                    <option>Aprendizaje</option>
                    <option>Sentimientos</option>
                    <option>Reflexión</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Tu Historia</label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Valoración</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewPost({ ...newPost, rating: star })}
                        className={`text-3xl ${star <= newPost.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        <Star />
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-procc-primary text-white rounded-full font-semibold hover:bg-procc-secondary transition-all duration-300"
                >
                  Publicar
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-premium"
            >
              {/* Header del Post */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-procc-primary/10 flex items-center justify-center text-2xl">
                    {post.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{post.author}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="text-xs" />
                      <span>
                        {formatTimeAgo(post.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`text-lg ${star <= post.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Categoría */}
              <span className="inline-block px-3 py-1 bg-procc-light text-procc-primary rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>

              {/* Contenido */}
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h4>
              <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>

              {/* Acciones */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-procc-primary transition-colors"
                  >
                    <Heart className="text-xl" />
                    <span>{post.likes}</span>
                  </button>
                  <button
                    onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-procc-primary transition-colors"
                  >
                    <MessageCircle className="text-xl" />
                    <span>{post.comments}</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <Share2 className="text-xl text-gray-600" />
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleShare(post, 'twitter')}
                        className="text-blue-400 hover:text-blue-600"
                        title="Compartir en X/Twitter"
                      >
                        🐦
                      </button>
                      <button
                        onClick={() => handleShare(post, 'telegram')}
                        className="text-blue-500 hover:text-blue-700"
                        title="Compartir en Telegram"
                      >
                        ✈️
                      </button>
                      <button
                        onClick={() => handleShare(post, 'whatsapp')}
                        className="text-green-500 hover:text-green-700"
                        title="Compartir en WhatsApp"
                      >
                        💬
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">{post.shares}</span>
                  </div>
                </div>
              </div>

              {/* Comentarios */}
              <AnimatePresence>
                {selectedPost === post.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <div className="space-y-4 mb-4">
                      {post.commentsList.map((comment) => (
                        <div key={comment.id} className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full bg-procc-light flex items-center justify-center">
                            👤
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold text-sm">{comment.author}</span>
                              <span className="text-xs text-gray-500">
                                {formatTimeAgo(comment.timestamp)}
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm">{comment.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Escribe un comentario..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-procc-primary"
                        onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id)}
                      />
                      <button
                        onClick={() => handleComment(post.id)}
                        className="px-6 py-2 bg-procc-primary text-white rounded-lg hover:bg-procc-secondary transition-colors"
                      >
                        <Send />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>

        {/* Indicador de Actualización */}
        <motion.div
          className="mt-12 text-center text-gray-500 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🔄 Actualizando cada minuto...
        </motion.div>
      </div>
    </section>
  )
}

export default Blog

