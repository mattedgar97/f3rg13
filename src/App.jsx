import Header from './components/Header'
import Title from './components/Title'
import HeroPanel from './components/HeroPanel'
import GlyphRow from './components/GlyphRow'
import InstagramFeed from './components/InstagramFeed'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Global scanline overlay - on top of everything */}
      <div className="scanlines" aria-hidden="true" />
      {/* Global grain overlay */}
      <div className="grain" aria-hidden="true" />

      <div className="min-h-screen bg-neon">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="pb-8">
          {/* Title */}
          <Title />

          {/* Hero Panel */}
          <HeroPanel />

          {/* Glyph icons row */}
          <GlyphRow />

          {/* Instagram Feed - Full width grid of 4 posts */}
          <section className="w-full px-4 lg:px-8 mt-8 lg:mt-12">
            <div className="max-w-site mx-auto">
              <InstagramFeed />
            </div>
          </section>

          {/* Social links */}
          <section className="w-full px-4 lg:px-8 mt-8 lg:mt-12">
            <div className="max-w-site mx-auto">
              <SocialLinks />
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
