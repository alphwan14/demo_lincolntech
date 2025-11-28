'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingCard from '@/components/FloatingCard'
import PageTransition from '@/components/PageTransition'

const techStack = [
  { 
    name: 'React', 
    color: 'from-blue-500 to-cyan-500',
    description: 'Modern React with Concurrent Features',
    icon: '⚛️',
    proficiency: 95
  },
  { 
    name: 'Next.js', 
    color: 'from-gray-500 to-white',
    description: 'Full-stack React Framework',
    icon: '▲',
    proficiency: 90
  },
  { 
    name: 'TypeScript', 
    color: 'from-blue-600 to-blue-400',
    description: 'Type-Safe JavaScript',
    icon: '📘',
    proficiency: 92
  },
  { 
    name: 'Tailwind CSS', 
    color: 'from-cyan-500 to-blue-500',
    description: 'Utility-First CSS Framework',
    icon: '🎨',
    proficiency: 88
  },
  { 
    name: 'Framer Motion', 
    color: 'from-purple-500 to-pink-500',
    description: 'Production-Ready Motion Library',
    icon: '✨',
    proficiency: 85
  },
  { 
    name: 'Node.js', 
    color: 'from-green-500 to-emerald-500',
    description: 'Server-Side JavaScript Runtime',
    icon: '🟢',
    proficiency: 87
  },
]

const capabilities = [
  {
    title: "AI Integration",
    description: "Machine Learning APIs & Custom AI Solutions",
    icon: "🤖",
    features: ["OpenAI Integration", "Computer Vision", "NLP Processing"]
  },
  {
    title: "Real-time Systems",
    description: "WebSockets & Live Data Streaming",
    icon: "⚡",
    features: ["Socket.io", "Live Collaboration", "Real-time Analytics"]
  },
  {
    title: "Cloud Architecture",
    description: "Scalable Cloud-Native Solutions",
    icon: "☁️",
    features: ["AWS/Azure/GCP", "Microservices", "Serverless Functions"]
  }
]

export default function CapabilitiesPage() {
  const [animationStyle, setAnimationStyle] = useState<'fade' | 'zoom' | 'slide'>('fade')
  const [activeTech, setActiveTech] = useState<number | null>(null)
  const [codePreview, setCodePreview] = useState<string>('// Our clean, maintainable code\nconst innovativeSolution = (challenge: BusinessProblem) => {\n  return elegantImplementation(challenge);\n}')
  const [isTyping, setIsTyping] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Interactive background animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: `rgba(100, 200, 255, ${Math.random() * 0.3})`
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const typeCode = async (newCode: string) => {
    setIsTyping(true)
    let currentText = ''
    for (let i = 0; i < newCode.length; i++) {
      currentText += newCode[i]
      setCodePreview(currentText)
      await new Promise(resolve => setTimeout(resolve, 30))
    }
    setIsTyping(false)
  }

  return (
    <PageTransition variant="slide">
      {/* Animated Background */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.1 }}
      />
      
      <main className="min-h-screen py-20 px-4 pt-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with Particle Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block">
              <motion.h1 
                className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Capabilities
              </motion.h1>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Pushing boundaries with cutting-edge technology and innovative solutions
            </p>
            
            {/* Live Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '<100ms', label: 'Response Time' },
                { value: '24/7', label: 'Support' },
                { value: '10M+', label: 'Users' }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-gradient">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advanced Capabilities Grid */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Core Capabilities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl p-8 group cursor-pointer hover:bg-white/10 transition-all"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {capability.icon}
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-3 text-gradient">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center text-sm text-cyan-400"
                      >
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Interactive Code Playground */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Code Playground
            </h2>
            <div className="glass rounded-2xl p-8">
              <div className="flex gap-4 mb-6 flex-wrap">
                {['React Hook', 'API Route', 'AI Service', 'Animation'].map((example) => (
                  <button
                    key={example}
                    onClick={() => typeCode(`// ${example} Example\nconst ${example.toLowerCase().replace(' ', '')} = () => {\n  // Implementation showcasing ${example}\n  return innovativeResult;\n}`)}
                    disabled={isTyping}
                    className="px-4 py-2 rounded-full glass border border-cyan-500/30 text-gray-300 hover:border-cyan-500/60 disabled:opacity-50 transition-all"
                  >
                    {example}
                  </button>
                ))}
              </div>
              <motion.pre
                layout
                className="bg-black/50 rounded-xl p-6 overflow-x-auto font-mono text-sm"
              >
                <code className="text-green-400">{codePreview}</code>
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="ml-1"
                  >
                    ▊
                  </motion.span>
                )}
              </motion.pre>
            </div>
          </section>

          {/* Enhanced Tech Stack with Proficiency */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Technology Excellence
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setActiveTech(index)}
                  onHoverEnd={() => setActiveTech(null)}
                  className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all cursor-pointer relative"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl font-bold relative overflow-hidden`}>
                    {tech.icon}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-green-500 to-cyan-500"
                      initial={{ height: 0 }}
                      animate={{ height: `${tech.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      style={{ originY: 1 }}
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{tech.name}</h3>
                  
                  <AnimatePresence>
                    {activeTech === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 glass rounded-lg p-4 w-48 z-20"
                      >
                        <p className="text-sm text-gray-300 mb-2">{tech.description}</p>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.proficiency}%` }}
                            transition={{ duration: 1 }}
                            className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full"
                          />
                        </div>
                        <div className="text-xs text-gray-400 mt-1 text-right">
                          {tech.proficiency}%
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: 'Page Load', value: '0.8s', target: '1.5s', improvement: '47% faster' },
                { metric: 'Core Web Vitals', value: '98/100', target: '90/100', improvement: 'Excellent' },
                { metric: 'API Response', value: '120ms', target: '200ms', improvement: '40% faster' },
                { metric: 'Bundle Size', value: '45KB', target: '100KB', improvement: '55% smaller' },
              ].map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="text-2xl font-bold text-gradient mb-2">{item.value}</div>
                  <div className="text-gray-400 mb-2">{item.metric}</div>
                  <div className="text-sm text-green-400">{item.improvement}</div>
                  <div className="text-xs text-gray-500 mt-1">vs target {item.target}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Animation Sandbox */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Animation Sandbox
            </h2>
            <div className="glass rounded-2xl p-8 mb-8">
              <div className="flex gap-4 mb-8 flex-wrap">
                {(['fade', 'zoom', 'slide'] as const).map((style) => (
                  <button
                    key={style}
                    onClick={() => setAnimationStyle(style)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      animationStyle === style
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'glass border border-cyan-500/30 text-gray-300 hover:border-cyan-500/60'
                    }`}
                  >
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </button>
                ))}
              </div>
              <motion.div
                key={animationStyle}
                initial={
                  animationStyle === 'fade'
                    ? { opacity: 0 }
                    : animationStyle === 'zoom'
                    ? { opacity: 0, scale: 0.5 }
                    : { opacity: 0, x: -100 }
                }
                animate={
                  animationStyle === 'fade'
                    ? { opacity: 1 }
                    : animationStyle === 'zoom'
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 text-center"
              >
                <p className="text-2xl font-display font-semibold">
                  Current Animation: {animationStyle.charAt(0).toUpperCase() + animationStyle.slice(1)}
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  )
}