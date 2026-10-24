# Rolling Code School · Workshop Landing

Landing page to promote and sell tickets for the paid workshop **"¿Por dónde empiezo a programar?"** by Rolling Code School.

Built as the final project of the **Scrum Professional Bootcamp**, working as a Scrum team over a single Sprint.

🔗 **Live site:** [https://luis-55555.github.io/Workshop-Rolling-Code/](https://luis-55555.github.io/Workshop-Rolling-Code/)
📦 **Repository:** [https://github.com/Luis-55555/Workshop-Rolling-Code](https://github.com/Luis-55555/Workshop-Rolling-Code)

---

## Table of contents

1. [About the project](#about-the-project)
2. [Sections](#sections)
3. [Tech stack](#tech-stack)
4. [Design specs](#design-specs)
5. [Project structure](#project-structure)
6. [Getting started](#getting-started)
7. [Form validation](#form-validation)
8. [Scrum process](#scrum-process)
9. [Team](#team)
10. [Deliverables](#deliverables)

---

## About the project

Rolling Code School is hosting a paid workshop and needs a website to **sell tickets**. The Design team delivered a mockup, and our goal was to build a page that looks **exactly like the mockup**: same colors, same typography and same measurements.

**Out of scope:** backend, database, real payments, and a working cart/countdown logic. The checkout is a demo: no payments are processed and no data is stored.

## Sections

- **Navbar** – quick links (Speakers, Agenda, How to get there) and a "Buy ticket" button.
- **Hero** – event title, date, venue, starting price and call-to-action buttons.
- **Stats bar** – places, talks, duration and formats.
- **Speakers** – the ten talks and the people giving them.
- **Agenda** – schedule for Thursday, November 19.
- **Tickets** – Early Bird, General and Virtual pricing cards.
- **Checkout** – "Finalizá tu compra" demo flow with order summary.
- **How to get there** – venue address and map.
- **Footer**

## Tech stack

| Technology | Use |
| --- | --- |
| HTML5 | Page structure |
| CSS3 | Custom colors, typography and measurements |
| Bootstrap 5.3.3 | Grid and components (loaded via CDN) |
| React + TypeScript | Component-based architecture |
| Git & GitHub | Version control and teamwork |
| GitHub Pages | Free deployment |

## Design specs

**Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (weights 300 italic, 400, 600, 800), with `system-ui, sans-serif` as fallback.

**Layout:** site container of `1200px`, centered. Red blocks are `1312px` wide on the `1440px` design screen. Minimum side margin on mobile: `24px`.

**Color palette** (stored as CSS variables in `:root`):

| Variable | Hex | Use |
| --- | --- | --- |
| `--rc-red` | `#e0202a` | Buttons, labels, numbers, icons |
| `--rc-red-dark` | `#a50d14` | Gradient middle |
| `--rc-red-deep` | `#6e070c` | Gradient end |
| `--rc-gradient` | `160deg · 0% / 55% / 100%` | Hero and checkout blocks |
| `--rc-black` | `#0b0b0c` | Page background, black cards |
| `--rc-surface` | `#111113` | Cards and data bar |
| `--rc-surface-2` | `#26262a` | Chips and empty bars |
| `--rc-border` | `#2c2c31` | 1px borders and lines |
| `--rc-white` | `#ffffff` | Titles, checkout card |
| `--rc-text-soft` | `#d4d4d8` | Paragraphs on dark background |
| `--rc-text-mute` | `#a1a1aa` | Supporting text |

**Corner radius:** red blocks `40px` · cards `32px` · boxes and white card `28px` · options and counter `18px` · inputs `14px` · buttons and chips `999px` (pill).

## Project structure

```
Workshop-Rolling-Code/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── events/
│   │   ├── EventStats/
│   │   ├── footer/
│   │   ├── Hero/
│   │   ├── HowToGetThere/
│   │   ├── MainPartners/
│   │   ├── navbar/
│   │   ├── speakers/
│   │   ├── sponsor/
│   │   ├── tickets/
│   │   └── TicketSection/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── CONTRIBUTING.md          # Contribution guidelines
├── DESIGN.md                # Design specs
├── eslint.config.js
├── FOLDER_STRUCTURE.md      # Folder structure notes
├── historias-de-usuario.md  # User stories
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting started

```bash
# 1. Clone the repository
git clone https://github.com/Luis-55555/Workshop-Rolling-Code.git

# 2. Move into the project folder
cd Workshop-Rolling-Code

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open the local URL shown in the terminal.

## Form validation

Forms warn the user with a clear message when a field is empty or has an invalid value.

- Required fields cannot be left empty.
- Email fields must have a valid format.
- Error messages appear next to the field that needs fixing.

## Scrum process

This project lasted **1 Sprint**.

**Roles**

- **PO (Product Owner):** defines what is needed, confirms the delivery date and accepts or rejects the work.
- **TL (Tech Leads):** mentors who guide the team and help unblock problems.
- **DEV (Developers):** team of 3–4 people who build, test and deliver together.

**Ceremonies:** Sprint Planning (user stories + Planning Poker) · Daily (15 min) · Sprint Review · Retrospective.

**Board:** `Por hacer → En progreso → En revisión → Hecho` on Jira — [https://dfrancoandres.atlassian.net/jira/software/projects/WRC/boards/2](https://dfrancoandres.atlassian.net/jira/software/projects/WRC/boards/2)

### Retrospective

- **What went well:** We split the page sections on Jira and worked in parallel, and using CSS variables helped us keep the same colors and measurements as the mockup.
- **What went wrong:** It was hard to make every section look exactly like the mockup, and fine-tuning measurements took longer than we estimated.
- **What we would improve:** We would improve our Git workflow to avoid merge conflicts: each of us working on our own branch, pulling before starting, and saying in the daily which files we will touch.

## Team

| Name | Role | GitHub |
| --- | --- | --- |
| Luis Alberto Herrera | DEV | [@Luis-55555](https://github.com/Luis-55555) |
| Eduardo Romano | DEV | [@Eduromanoquiroga-Diseño](https://github.com/Eduromanoquiroga-Diseño) |
| Luciana Melissa Villca | DEV | [@lucianamelissavillca-sys](https://github.com/lucianamelissavillca-sys) |

**Scrum Master:** Franco Andrés Díaz · **Tech Leads:** Franco Andrés Díaz

Rolling Code School · Scrum Professional Bootcamp · Landing Workshop Project