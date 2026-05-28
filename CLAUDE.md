# WNWN — Project Notes for Claude

This is a personal portfolio website for visual / design work, hand-coded in static HTML and CSS. Treat these as the working brief whenever you make changes.

## What we're building

A small portfolio site (5 projects currently, expected to grow). The site name is **WNWN**. The homepage is a single-project-at-a-time gallery carousel — projects are browsed one by one with prev/next controls — not a grid. Each project has its own page with an intro paragraph and a numbered photo sequence.

## Design language

The aesthetic is **brutalist with polished motion** — not raw or DIY-feeling, but confident, type-forward, and uncluttered. Closer to a printed art catalog or fashion lookbook than a typical agency portfolio.

Specifically:

- **Typography does the heavy lifting.** Headlines and the wordmark should feel large and confident — willing to dominate the page. Body copy stays small and quiet by contrast.
- **Stark contrast.** Hard, near-black on a flat light gray. No soft shadows, no gradients, no rounded corners.
- **Asymmetry is welcome.** Don't default to centered, tidy compositions. Push elements to edges; let one side be empty and the other dense.
- **Motion should be deliberate.** Smooth slide transitions, subtle hover states, custom cursor behavior — but never decorative or playful. Motion communicates state, not personality.
- **Numbered sequences over UI widgets.** Prefer typographic indicators (e.g. `01 — 02 — 03`) over progress bars, dots, or other generic UI patterns.
- **No decorative accents.** No icons-for-icons-sake, no red accents, no badges, no callouts. The work and the type are the design.

## Color palette

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#EEEEEE` | Page background |
| `--ink` | `#151515` | Body text, headings, hard blocks |
| `--muted` | `#5a5a5a` | Secondary text, metadata |
| `--rule` | `#c9c9c9` | Dividers, hairlines |

No accent color. If a moment of contrast is needed, use pure black or invert (light text on `--ink` block) rather than introducing a third hue.

## Typography

**Archivo** (Google Fonts) is used for all UI text — headings, nav, labels, project metadata, body copy. Both `--serif` and `--sans` CSS tokens point to Archivo. Weights 400 / 500 / 600 / 700 are loaded.

**Bebas Neue** (Google Fonts) is loaded and used on the About page name display (`OWEN [photo] NGUYEN` hero). Not used elsewhere.

**Space Grotesk** (Google Fonts) is loaded but currently unused. The switch from Archivo to Space Grotesk is an open decision (see below).

For the homepage logo (`.logo`): Archivo 700, 52px, uppercase, letter-spacing 0.06em.

For nav and project page header title (`.project-header-title`): Archivo 500, 17px, uppercase, letter-spacing 0.08em.

Type rules:
- Project page header title and nav links match in size (both 17px) and letter-spacing (0.08em).
- Photo label numbers (`.seq-num`) and gallery names (`.img-caption`) match: both 13px, weight 400, letter-spacing 0.1em, uppercase.
- Body copy: 18px, line-height 1.7.
- Metadata uses `--mono` (system monospace) for secondary labels and `--muted` color.

## Layout principles

- **Generous gutters, generous whitespace.** The page should breathe.
- **12-column thinking, but break the grid when it serves the work.**
- **The header is consistent across all pages:** site name / wordmark left, nav links right.

### Project page layout (actual implementation)

Each project page uses a **numbered sequence layout**:

- One `.num-row` per photo: CSS grid with `grid-template-columns: var(--label-col) 1fr; gap: 24px`.
- `.num-side` inside the label column: `flex-direction: row; align-items: baseline; gap: 8px` — displays `01 Family` on one line.
- The intro paragraph (`.project-body > p:first-child`) has `margin-left: calc(var(--label-col) + 24px)` to align its left edge with the photo column.
- **`--label-col: 200px`** is the single source of truth for the column width. If you change the label column width, change only `--label-col` in `:root` — both the grid and the intro indent will update automatically.
- Mobile (≤720px): `.num-row` reverts to `auto 1fr`; intro margin-left resets to 0.

## Technical approach

- **Static HTML + CSS only.** No frameworks, no build step, no JavaScript dependencies beyond small vanilla scripts for behavior (the carousel, the custom cursor in `cursor.js`).
- **One stylesheet (`styles.css`).** Design tokens at the top in `:root`. Everything else is component-scoped via classes.
- **Project data lives in the `projects` array** in `index.html`. Adding a project means adding an entry there and duplicating an existing project page as a template.
- **Each project page** is a standalone HTML file in `projects/`. Templates should remain hand-editable — readable HTML, no clever abstractions.
- **Images** go in `images/`. File names use dashes, not spaces. Resize to ~2000px wide max before adding. Images are excluded from git (`.gitignore`).
- **Hosting target** is a free static host (Netlify, GitHub Pages, or Cloudflare Pages). Nothing in the build should require server-side processing.

## Current projects (5)

1. People of Telegraph — `projects/people-of-telegraph.html`
2. Family — `projects/family.html`
3. Studio Portraits — `projects/studio-portraits.html`
4. Self Portraits — `projects/self-portraits.html`
5. Streets in Color — `projects/streets-in-color.html`

The "Next →" links at the bottom of each page form a cycle in this order.

## When in doubt

- Choose the option that's quieter, larger, and more confident.
- Prefer removing decoration to adding it.
- Match the existing tone of the codebase: simple HTML, design tokens for any value used more than once, and prose-style comments only where the intent isn't obvious from the markup.
- Don't introduce libraries, build tools, or frameworks without asking.

## Open decisions / to revisit

- **Font**: Archivo vs. Space Grotesk — Space Grotesk is loaded but unused. Decision pending.
- Whether to add: marquee/scrolling text bar, slide transitions on the carousel, large project-number graphics behind the cover.
- Whether to swap the soft progress bar for typographic numbered chapters (`01 — 02 — 03 — 04`), with the current one bolded/underlined.
- About page: content, portrait image, favicon, `<meta name="description">` tag.
