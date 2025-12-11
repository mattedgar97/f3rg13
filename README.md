# F3RG13 — DJ Portfolio

A high-contrast, neon poster-style DJ portfolio built with React + Vite + TailwindCSS. Features animated scanlines, grain texture overlays, bold stacked typography, and a cyber-industrial aesthetic.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
npm run preview  # Preview the production build
```

## 🎨 Design System

| Token             | Value     | Usage            |
| ----------------- | --------- | ---------------- |
| Background (neon) | `#C7D900` | Page background  |
| Panel black       | `#0A0A0A` | Text, borders    |
| Screen panel      | `#151515` | Dark panels      |
| Accent bright     | `#F0FF00` | Micro-highlights |

### Fonts

- **Display:** Anton, Oswald (Google Fonts)
- **Body:** Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Top bar with glyphs
│   ├── HeroPanel.jsx     # Main hero with SVG artwork
│   ├── GlyphRow.jsx      # Four icon panels
│   ├── HeadlineStack.jsx # DJ name typography
│   ├── EventsCard.jsx    # Date/venue card
│   ├── SocialLinks.jsx   # Instagram/SoundCloud/Email
│   ├── Gallery.jsx       # Image placeholders
│   └── Footer.jsx        # Copyright bar
├── constants.js          # ⬅️ EDIT THIS FOR LINKS/NAMES
├── App.jsx
├── main.jsx
└── index.css             # Tailwind + custom effects
```

## ✏️ Customization Guide

### 1. Update DJ Info & Social Links

Edit `src/constants.js`:

```js
export const SITE_CONFIG = {
  djName: 'YOUR NAME',
  tagline: 'YOUR TAGLINE',
  // ...
}

export const SOCIAL_LINKS = {
  instagram: { url: 'https://instagram.com/yourhandle', label: 'Instagram' },
  soundcloud: { url: 'https://soundcloud.com/yourname', label: 'SoundCloud' },
  email: { url: 'mailto:your@email.com', label: 'Booking' },
}

export const DJ_LINEUP = [
  { name: 'DJ ONE', subtitle: null },
  { name: 'DJ TWO', subtitle: '(LIVE)' },
  // Add/remove as needed
]

export const EVENT_INFO = {
  date: '31-12-25',
  time: '10PM - 4AM',
  venue: 'CLUB NAME',
  city: 'CITY',
}
```

### 2. Replace Gallery Images

Gallery placeholders are in `src/components/Gallery.jsx`. Replace the `<img>` tags:

```jsx
<img
  src="/assets/your-image.jpg"
  alt="Description"
  loading="lazy"
  className="w-full h-full object-cover rounded-[14px]"
/>
```

Put your images in `public/assets/`.

### 3. Adjust Colors

Edit `tailwind.config.js`:

```js
colors: {
  neon: '#YOUR_COLOR',
  ink: '#0A0A0A',
  screen: '#151515',
}
```

### 4. Scanline & Grain Intensity

In `src/index.css`:

- `.scanlines` — adjust `opacity` in animation or background alpha
- `.grain` — adjust `opacity: 0.06` to taste

## 🎯 Responsive Breakpoints

| Breakpoint | Width      | Layout                                |
| ---------- | ---------- | ------------------------------------- |
| Mobile     | < 768px    | Single column, full-width buttons     |
| Tablet     | 768–1023px | Single column, events below headlines |
| Desktop    | ≥ 1024px   | Two-column, max-width 1200px          |

## ♿ Accessibility

- All interactive elements are keyboard accessible
- `aria-label` on social links
- Semantic HTML (`header`, `main`, `nav`, `footer`, `figure`)
- Sufficient color contrast

## 🌐 Deployment

### GitHub Pages

```bash
npm run deploy
```

### Vercel / Netlify

Connect your repo — auto-detects Vite and deploys on push.

## 📄 License

MIT — do whatever you want with it.

---

Built with 🖤 and neon green.
