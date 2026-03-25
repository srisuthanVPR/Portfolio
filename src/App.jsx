import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/Footer'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 right-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
      <Navbar />
      <Home />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
