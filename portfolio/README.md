# Rishit Singh — Portfolio

Terminal-aesthetic developer portfolio built with React + Vite + Framer Motion + Tailwind CSS.

---

## Stack

- **React 18** + **Vite 5**
- **Framer Motion** — page animations, scroll reveals, hover effects
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Lucide React** — icons
- **Vercel** — deployment

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

---

## Project Structure

```
src/
├── data/index.js          ← ✏️  ALL YOUR CONTENT LIVES HERE
├── sections/
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Timeline.jsx
│   └── Contact.jsx
├── components/
│   ├── Nav.jsx
│   ├── Cursor.jsx
│   ├── Footer.jsx
│   ├── Noise.jsx
│   ├── ProjectCard.jsx
│   ├── SectionLabel.jsx
│   └── variants.js        ← Framer Motion animation presets
├── hooks/
│   ├── useTypewriter.js
│   └── useCursor.js
├── App.jsx
├── main.jsx
└── index.css
public/
└── fonts/                 ← PublicPixel, Chill, RobotoMono
```

---

## Customizing Content

Open **`src/data/index.js`** and fill in:

| Key | What to update |
|---|---|
| `personal` | name, email, GitHub, LinkedIn, resume path |
| `typedPhrases` | 4 terminal phrases in the hero |
| `skillGroups` | rename tags, add/remove groups |
| `projects` | name, description, stack, github, demo, image path |
| `timeline` | date, tag, title, description for each event |

### Adding project screenshots

1. Drop your screenshot in `public/screenshots/myproject.png`
2. In `src/data/index.js`, set `image: '/screenshots/myproject.png'` for that project

---

## Deploy to Vercel

```bash
# Option A: Vercel CLI
npm i -g vercel
vercel

# Option B: Push to GitHub → import in vercel.com dashboard
# Build command:  npm run build
# Output dir:     dist
```

---

## Fonts

| Font | Usage |
|---|---|
| PublicPixel | Section labels, nav logo, hero name |
| Chill | Hero subtitle |
| RobotoMono | Body text, code |

Fonts are loaded from `/public/fonts/` — no external requests.
