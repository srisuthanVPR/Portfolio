import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dusk-900 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-brand-400 border-t-transparent mx-auto" />
        <p className="font-display text-lg">Warming up the portfolio…</p>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
