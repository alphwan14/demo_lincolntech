'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingCard from '@/components/FloatingCard'
import MagneticButton from '@/components/MagneticButton'
import PageTransition from '@/components/PageTransition'

export default function ShowcasePage() {
  const [morphingText, setMorphingText] = useState(0)
  const texts = ['Innovation', 'Excellence', 'Creativity', 'Quality']

  return (
    <PageTransition variant="scale">
      <main className="min-h-screen py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient">
              Showcase
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Interactive demos and micro-interactions
            </p>
          </motion.div>

          {/* Page Load Transitions */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Page Load Transitions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Slide', icon: '➡️' },
                { name: 'Fade', icon: '✨' },
                { name: 'Zoom', icon: '🔍' },
              ].map((transition, index) => (
                <motion.div
                  key={transition.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all"
                >
                  <div className="text-6xl mb-4">{transition.icon}</div>
                  <h3 className="text-2xl font-display font-semibold mb-2">{transition.name}</h3>
                  <p className="text-gray-400">Smooth transition effect</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Micro-interactions */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Micro-interactions
            </h2>
            <div className="glass rounded-2xl p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <MagneticButton
                  onClick={() => {}}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Ripple Button</span>
                  <motion.span
                    className="absolute inset-0 bg-white/30 rounded-full"
                    initial={{ scale: 0, opacity: 1 }}
                    whileTap={{ scale: 4, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </MagneticButton>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-32 h-32 glass rounded-2xl flex items-center justify-center cursor-pointer"
                >
                  <span className="text-4xl">🖼️</span>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Floating Cards */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Floating Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <FloatingCard
                  key={i}
                  className="glass rounded-2xl p-6 aspect-square flex flex-col items-center justify-center hover:bg-white/10 transition-all"
                >
                  <div className="text-5xl mb-4">💫</div>
                  <h3 className="text-xl font-display font-semibold mb-2">Card {i}</h3>
                  <p className="text-sm text-gray-400 text-center">3D tilt on hover</p>
                </FloatingCard>
              ))}
            </div>
          </section>

          {/* Text Morphing */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Text Morphing Animation
            </h2>
            <div className="glass rounded-2xl p-12 text-center">
              <div className="h-32 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={morphingText}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-display font-bold text-gradient"
                  >
                    {texts[morphingText]}
                  </motion.h2>
                </AnimatePresence>
              </div>
              <button
                onClick={() => setMorphingText((prev) => (prev + 1) % texts.length)}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Morph Text
              </button>
            </div>
          </section>

          {/* Staggered Grid */}
          <section>
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Staggered Grid
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass rounded-xl p-6 aspect-square flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <span className="text-3xl">{index + 1}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  )
}

