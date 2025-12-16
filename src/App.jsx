import Header from './components/Header'
import Title from './components/Title'
import HeroPanel from './components/HeroPanel'
import SocialSection from './components/SocialSection'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'
import AudioVisualizer from './components/AudioVisualizer'
import { AudioProvider } from './contexts/AudioContext'

function App() {
  return (
    <AudioProvider>
      {/* Global scanline overlay - on top of everything */}
      <div className="scanlines" aria-hidden="true" />
      {/* Global grain overlay */}
      <div className="grain" aria-hidden="true" />

      <div className="min-h-screen bg-neon">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="pb-8">
          {/* Hero Panel with Title overlay */}
          <div className="relative">
            <HeroPanel />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Title />
            </div>
          </div>

          {/* Glyph icons row */}
          <SocialSection />

          {/* Instagram Feed - Full width grid of 4 posts */}
          <section className="w-full px-4 lg:px-8 mt-8 lg:mt-12">
            <div className="max-w-site mx-auto">
              <InstagramFeed />
            </div>
          </section>
        </main>

        {/* Footer with Audio Visualizer behind it */}
        <div className="relative">
          <AudioVisualizer />
          <Footer />
        </div>
      </div>
    </AudioProvider>
  )
}

export default App
