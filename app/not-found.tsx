import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-9xl font-display font-bold text-gradient mb-4">404</h1>
        <h2 className="text-4xl font-display font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  )
}

