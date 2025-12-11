export default function SocialSection() {
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
      name: 'EMAIL',
      url: 'mailto:eliza.f3rg13@gmail.com',
      size: 'text-5xl lg:text-7xl',
    },
  ]

  return (
    <div className="w-full px-4 lg:px-8 mt-6 lg:mt-8">
      <div className="max-w-site mx-auto">
        {/* Social Link Buttons */}
        <div className="w-full space-y-3 lg:space-y-4">
          {socialButtons.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target={social.name !== 'EMAIL' ? '_blank' : undefined}
              rel={social.name !== 'EMAIL' ? 'noopener noreferrer' : undefined}
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
      </div>
    </div>
  )
}
