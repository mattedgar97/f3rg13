import { SOCIAL_LINKS } from '../constants'

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const SoundCloudIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 15v-2a4 4 0 0 1 4-4c.5 0 1 .1 1.4.3" />
    <path d="M7 17v-4" />
    <path d="M10 17V9a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v0h2a3 3 0 0 1 0 6h-6" />
    <path d="M10 13v4" />
    <path d="M13 12v5" />
    <path d="M16 11v6" />
  </svg>
)

const EmailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export default function SocialLinks() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
      <a
        href={SOCIAL_LINKS.instagram.url}
        className="social-btn w-full sm:w-auto justify-center"
        aria-label="Follow on Instagram"
      >
        <InstagramIcon />
        <span>{SOCIAL_LINKS.instagram.label}</span>
      </a>

      <a
        href={SOCIAL_LINKS.soundcloud.url}
        className="social-btn w-full sm:w-auto justify-center"
        aria-label="Listen on SoundCloud"
      >
        <SoundCloudIcon />
        <span>{SOCIAL_LINKS.soundcloud.label}</span>
      </a>

      <a
        href={SOCIAL_LINKS.email.url}
        className="social-btn w-full sm:w-auto justify-center"
        aria-label="Send email"
      >
        <EmailIcon />
        <span>{SOCIAL_LINKS.email.label}</span>
      </a>
    </div>
  )
}
