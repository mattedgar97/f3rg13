# F3RG13

A neon-styled DJ portfolio website for Eliza Ferguson (F3RG13), featuring a bold cyber-industrial aesthetic with animated audio visualizations, Instagram feed integration, and an immersive video background. Built with React, Vite, and TailwindCSS.

## About

This website showcases F3RG13's work as a DJ specializing in UKG, Speed Garage, Bassline, and Funky House. The site features:

- **Audio-reactive visualizer** — Frequency bars that animate behind the title when the background video is unmuted
- **Live Instagram feed** — Automatically fetches and displays recent posts from [@f3rg13.uk](https://www.instagram.com/f3rg13.uk/)
- **Background video** — Looping video with mute/unmute control
- **Neon design system** — High-contrast styling with scanline and grain texture effects
- **Responsive layout** — Optimized for mobile, tablet, and desktop viewing

## Local Development

### Prerequisites

- Node.js 20 or higher
- npm

### Setup and Run

1. **Clone the repository**

   ```bash
   git clone https://github.com/mattedgar97/f3rg13.git
   cd f3rg13
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   The site will be available at [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run dev` — Start Vite development server with hot reload
- `npm run build` — Build for production (outputs to `dist/`)
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint to check code quality
- `npm run format` — Format code with Prettier

## Deployment

### GitHub Actions CI/CD Pipeline

The site automatically deploys to GitHub Pages whenever changes are pushed to the `main` branch.

**Workflow:** `.github/workflows/deploy.yml`

The pipeline consists of two jobs:

1. **Build Job**
   - Checks out the code
   - Sets up Node.js 20 with npm caching
   - Installs dependencies with `npm ci`
   - Builds the production bundle with `npm run build`
   - Uploads the `dist/` folder as a GitHub Pages artifact

2. **Deploy Job**
   - Runs after the build job completes
   - Deploys the artifact to GitHub Pages
   - Makes the site available at the configured GitHub Pages URL

**Permissions:** The workflow has read access to repository contents and write access to GitHub Pages.

**Concurrency:** Only one deployment runs at a time; new deployments cancel in-progress ones.

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

This builds the site and uses `gh-pages` to push the `dist/` folder to the `gh-pages` branch.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Top navigation with mute control
│   ├── Title.jsx           # Main title with audio visualizer
│   ├── HeroPanel.jsx       # Background video section
│   ├── InstagramFeed.jsx   # Instagram post grid
│   ├── SocialSection.jsx   # Social media links
│   └── Footer.jsx          # Copyright footer
├── contexts/
│   ├── AudioContext.jsx    # Audio context provider
│   └── AudioContextValue.js # Audio context value
├── hooks/
│   └── useAudio.js         # Hook for audio context
├── constants.js            # Site configuration and links
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css               # Global styles and Tailwind
```

## Technologies

- **React 19** — UI framework
- **Vite** — Build tool and dev server
- **TailwindCSS** — Utility-first CSS framework
- **Web Audio API** — Audio visualization
- **Instatouch** — Instagram feed integration
- **GitHub Actions** — CI/CD automation
- **GitHub Pages** — Static site hosting

---

Built with 🖤 and neon vibes.
