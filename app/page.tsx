'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'
import FloatingCard from '@/components/FloatingCard'
import MagneticButton from '@/components/MagneticButton'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    if (heroRef.current) {
      gsap.to(heroRef.current.querySelectorAll('.float-element'), {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: 'power1.inOut',
      })
    }
  }, [])

  return (
    <PageTransition variant="fade">
      <main className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Parallax Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#16213e]"
            style={{ opacity, scale }}
          />

          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }} />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="float-element absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="float-element absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-xl"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6">
                <AnimatedText delay={0.3}>
                  Lincoln Tech
                </AnimatedText>
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold mb-8 text-gradient">
                <AnimatedText delay={0.8}>
                  Demo Portal
                </AnimatedText>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                <AnimatedText delay={1.3}>
                  Experience cutting-edge web design and animations
                </AnimatedText>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <MagneticButton
                  onClick={() => {}}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  <Link href="/request-demo">Request Demo</Link>
                </MagneticButton>
                <MagneticButton
                  onClick={() => {}}
                  className="px-8 py-4 glass rounded-full text-white font-semibold text-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all"
                >
                  <Link href="/capabilities">Explore Capabilities</Link>
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-cyan-500 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Showcasing the latest in web technology and design
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Smooth Animations', desc: 'Buttery smooth transitions powered by GSAP and Framer Motion' },
                { title: '3D Interactions', desc: 'Immersive 3D effects and floating UI elements' },
                { title: 'Responsive Design', desc: 'Perfect experience across all devices and screen sizes' },
              ].map((feature, index) => (
                <FloatingCard key={index} className="glass rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gradient">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </FloatingCard>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}

