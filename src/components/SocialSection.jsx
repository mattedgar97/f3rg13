import { useState, useEffect } from 'react'

export default function SocialSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const socialButtons = [
    {
      name: 'INSTAGRAM',
      url: 'https://www.instagram.com/f3rg13.uk/',
      size: 'text-5xl lg:text-7xl',
    },
    {
      name: 'SOUNDCLOUD',
      url: 'https://soundcloud.com/elizaferguson',
      size: 'text-5xl lg:text-7xl',
    },
    {
      name: 'MIXCLOUD',
      url: 'https://www.mixcloud.com/elizaferguson/',
      size: 'text-5xl lg:text-7xl',
    },
    {
      name: 'EMAIL',
      url: 'mailto:eliza.f3rg13@gmail.com',
      size: 'text-5xl lg:text-7xl',
    },
  ]

  // Placeholder images - replace these with your actual image paths
  const carouselImages = [
    '/assets/fergie1.jpg',
    '/assets/fergie2.jpg',
    '/assets/fergie3.jpeg',
    '/assets/fergie4.webp',
  ]

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="w-full px-4 lg:px-8 mt-6 lg:mt-8">
      <div className="max-w-site mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Social Link Buttons */}
          <div className="w-full lg:flex-1 space-y-3 lg:space-y-4">
            {socialButtons.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target={social.name !== 'EMAIL' ? '_blank' : undefined}
                rel={
                  social.name !== 'EMAIL' ? 'noopener noreferrer' : undefined
                }
                className="block"
              >
                <h2
                  className={`${social.size} font-display font-black uppercase text-ink hover:underline transition-all duration-200 tracking-wide`}
                  style={{
                    lineHeight: '0.95',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {social.name}
                </h2>
              </a>
            ))}
          </div>

          {/* Image Carousel - fills remaining space */}
          <div className="w-full lg:flex-1 lg:-mt-2 flex justify-center lg:justify-end">
            <div className="neon-panel p-4 relative w-full max-w-sm lg:max-w-xs">
              {/* Carousel container */}
              <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-screen">
                {/* Images */}
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Carousel ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-neon w-6'
                        : 'bg-neon/30 hover:bg-neon/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
