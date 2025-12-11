import Header from './components/Header'
import HeroPanel from './components/HeroPanel'
import GlyphRow from './components/GlyphRow'
import HeadlineStack from './components/HeadlineStack'
import EventsCard from './components/EventsCard'
import SocialLinks from './components/SocialLinks'
import Gallery from './components/Gallery'
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
          {/* Hero Panel */}
          <HeroPanel />

          {/* Glyph icons row */}
          <GlyphRow />

          {/* Two-column layout: Headlines + Events */}
          <section className="w-full px-4 lg:px-8 mt-8 lg:mt-12">
            <div className="max-w-site mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
                {/* Left: Headline stack (60%) */}
                <div className="lg:pr-8">
                  <HeadlineStack />
                </div>

                {/* Right: Events card (40%) */}
                <div className="w-full lg:w-80">
                  <EventsCard />
                </div>
              </div>
            </div>
          </section>

          {/* Social links */}
          <section className="w-full px-4 lg:px-8 mt-8 lg:mt-12">
            <div className="max-w-site mx-auto">
              <SocialLinks />
            </div>
          </section>

          {/* Gallery */}
          <section className="mt-12 lg:mt-16">
            <Gallery />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
