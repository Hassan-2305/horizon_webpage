# Team Horizon CUSAT — React Website

Immersive multi-page React website for Team Horizon, CUSAT's student-led Mars rover team.

## Tech Stack

| Layer    | Choice                          |
|----------|---------------------------------|
| Framework | React 18                       |
| Routing   | React Router v6                |
| Bundler   | Vite 5                         |
| Styling   | Vanilla CSS (no Tailwind)      |
| Canvas    | 2D Canvas API (starfield)      |
| Fonts     | Google Fonts (Bebas Neue + Outfit) |
| No UI lib | Zero component library deps    |

## Project Structure

```
horizon-react/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Router setup
    ├── styles/
    │   └── global.css        # Variables, reset, shared utilities
    ├── data/
    │   └── siteData.js       # All content in one place — edit here
    ├── hooks/
    │   └── useReveal.js      # IntersectionObserver scroll reveal hook
    ├── components/
    │   ├── Layout.jsx        # Persistent shell (nav + footer + canvas)
    │   ├── Navbar.jsx + .css # Navigation with active route highlighting
    │   ├── Footer.jsx        # Site footer
    │   ├── Starfield.jsx     # Animated canvas background
    │   ├── Cursor.jsx        # Custom dual-layer cursor
    │   └── Marquee.jsx       # Scrolling ticker
    └── pages/
        ├── Home.jsx + .css         # Landing with hero + teaser grid
        ├── About.jsx + .css        # Story, pillars, stats, supporters
        ├── Achievements.jsx + .css # Timeline + competition details
        ├── Projects.jsx + .css     # Rover showcase + tech stack
        ├── Team.jsx + .css         # Sub-teams + join CTA + values
        ├── Contact.jsx + .css      # Form + links + info cards
        └── NotFound.jsx            # 404 page
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open http://localhost:5173

## Pages

| Route           | Page         |
|-----------------|--------------|
| `/`             | Home         |
| `/about`        | About        |
| `/achievements` | Achievements |
| `/projects`     | Projects     |
| `/team`         | Team         |
| `/contact`      | Contact      |
| `*`             | 404          |

## Customising Content

All text content, links, stats, and data live in **`src/data/siteData.js`**.
Edit that single file to update the entire site.

## Wiring Up the Contact Form

In `src/pages/Contact.jsx`, replace the `setTimeout` in `handleSubmit` with:

```js
// Example: Formspree
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: new FormData(e.target),
  headers: { Accept: 'application/json' },
})
if (res.ok) setStatus('sent')
else setStatus('error')
```

## Deployment

```bash
npm run build
# Outputs to /dist — deploy to Netlify, Vercel, or GitHub Pages
```

For GitHub Pages, add `base: '/repo-name/'` to `vite.config.js`.

---

Built for Team Horizon · CUSAT · Kochi, Kerala · Est. 2019
