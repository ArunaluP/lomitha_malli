# EPT Solutions — Website (React + Vite)

Public website for **EPT Solutions (Pvt) Ltd** (formerly Energy Power Technology).

## Requirements
- [Node.js](https://nodejs.org) 18 or newer (includes `npm`)

## Run on your computer
```bash
npm install      # first time only — downloads React & Vite
npm run dev      # opens a live-reloading dev server (http://localhost:5173)
```

## Build for your web host
```bash
npm run build
```
This creates a `dist/` folder. Upload **everything inside `dist/`** to your hosting
(cPanel `public_html`, Netlify, Vercel, GitHub Pages, Firebase, etc.).
`base: './'` in `vite.config.js` means it also works from a sub-folder.

## Where to edit things
| What | File |
|---|---|
| Company details, phone, email, addresses, social links | `src/data/content.js` → `company` |
| Stats, services, projects, clients, brands, team, reasons | `src/data/content.js` |
| Colours, fonts, spacing, animations | `src/index.css` (variables at the top in `:root`) |
| Images & logos | `public/img/` (`clients/`, `brands/`, project photos, `mark-light.png` logo) |
| Service illustrations (animated SVG) | `src/components/Illustrations.jsx` |
| Network diagram | `src/components/TopologySvg.jsx` |

To add a client: drop its logo PNG in `public/img/clients/` and add a line to `clients` in `content.js`.
To add a brand: drop the logo in `public/img/brands/` and add it to `brandRows`.

## Project structure
```
src/
  App.jsx                 page layout (section order)
  main.jsx                entry point
  index.css               all styles + animations
  utils.js                img() helper
  data/content.js         ALL website text & lists
  hooks/                  useReveal, useInView, useInterval, useLiveNumber
  components/
    Header.jsx            sticky menu, mobile menu, active-section highlight
    Hero.jsx              first screen: typing text, live CCTV monitor, orbit, status cards, counters
    NetworkCanvas.jsx     animated particle network background
    Ticker.jsx            scrolling service-name bands
    About.jsx  Services.jsx  Infrastructure.jsx  Projects.jsx
    WhyUs.jsx  Clients.jsx   Team.jsx (Team + CSR)  Contact.jsx  Footer.jsx
    Illustrations.jsx  TopologySvg.jsx  SvgDefs.jsx  CountUp.jsx  Effects.jsx  SectionHead.jsx
```

## Quote form
The form needs no server: it opens WhatsApp (`company.whatsapp`) or the visitor's email app
(`company.emails[0]`) with the enquiry filled in.
