'use client'

import { motion } from 'framer-motion'
import FloatingCard from '@/components/FloatingCard'
import PageTransition from '@/components/PageTransition'

const timeline = [
  { year: '2020', title: 'Foundation', desc: 'Started with a vision to create exceptional digital experiences' },
  { year: '2021', title: 'Growth', desc: 'Expanded team and capabilities, working with innovative clients' },
  { year: '2022', title: 'Innovation', desc: 'Introduced cutting-edge animation and interaction techniques' },
  { year: '2023', title: 'Excellence', desc: 'Recognized for outstanding UI/UX design and development' },
  { year: '2024', title: 'Future', desc: 'Continuing to push boundaries in web technology' },
]

export default function AboutPage() {
  return (
    <PageTransition variant="fade">
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
              About Us
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our journey in creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Timeline */}
          <section className="mb-32">
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Our Process
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full transform md:-translate-x-1/2 z-10" />

                    {/* Content Card */}
                    <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <FloatingCard className="glass rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <div className="text-cyan-500 font-display font-bold text-2xl mb-2">{item.year}</div>
                        <h3 className="text-2xl font-display font-semibold mb-2 text-gradient">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </FloatingCard>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Floating Info Cards */}
          <section>
            <h2 className="text-4xl font-display font-semibold mb-12 text-center text-gradient">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚀',
                  title: 'Innovation',
                  desc: 'We constantly explore new technologies and techniques to stay ahead',
                },
                {
                  icon: '✨',
                  title: 'Quality',
                  desc: 'Every project is crafted with attention to detail and excellence',
                },
                {
                  icon: '🎯',
                  title: 'Results',
                  desc: 'We focus on delivering measurable impact for our clients',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <FloatingCard className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all h-full">
                    <div className="text-6xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-display font-semibold mb-4 text-gradient">{value.title}</h3>
                    <p className="text-gray-400">{value.desc}</p>
                  </FloatingCard>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  )
}

