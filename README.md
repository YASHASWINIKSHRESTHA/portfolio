# Yashaswini Kulshrestha — Portfolio

Personal portfolio site — backend + agentic AI engineer. One-pager built to
show the work, not just describe it: real projects, real GitHub links, real
metrics.

**Live:** https://portfolio-theta-six-21.vercel.app

## Sections

- **Hero** — intro, rotating gradient ring, floating achievement badges
- **About** — short first-person narrative
- **Experience** — HealthKart + Microsoft, animated timeline
- **Projects** — ATS Resume Agent, VeriLoan, PersonalMail-RL, each linked to its repo
- **Skills** — grouped by category, each group tied to the project/experience that proves it
- **Achievements** — hackathons, scholarship, LeetCode, with count-up stats
- **Contact** — email, LinkedIn, GitHub, résumé download

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | Fraunces, Caveat, Inter (`next/font`) |
| Deployment | Vercel |

## Project structure

```
app/            # root layout, page assembly, global styles
components/     # one component per section, plus components/ui/ primitives
  ui/            ScrollReveal, CountUp, Section, CursorGlow, BrandIcons
lib/data.ts     # all site content (experience, projects, skills, etc.)
public/         # avatar image, résumé PDF
```

Content lives in `lib/data.ts` — update copy, projects, or metrics there
without touching component code.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy

```bash
npx vercel --prod
```

## TODO

- [ ] Add `public/resume.pdf` — the résumé download buttons link here but the
      file isn't committed yet
- [ ] Point at a custom domain (currently on the free `*.vercel.app` subdomain)
