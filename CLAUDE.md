# WNWN — Project Notes for Claude

This is a personal portfolio website for visual / design work, hand-coded in static HTML and CSS. Treat these as the working brief whenever you make changes.

## What we're building

A small portfolio site (3–5 projects to start, expected to grow). The site name is **WNWN**, displayed as a wordmark in the top-left of every page. The homepage is a single-project-at-a-time gallery carousel — projects are browsed one by one with prev/next controls — not a grid. Each project has its own page with a hero, body copy, and figure blocks.

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

**Bebas Neue** (Google Fonts) for the **WNWN wordmark only** — condensed, all-caps display sans, single weight. Set at **120px**, line-height `0.85`, no extra letter-spacing.

**Space Grotesk** (Google Fonts) for everything else — headings, nav, labels, project metadata, and body. Weights 400 / 500 / 600 / 700 are loaded. If a mono treatment is ever needed for metadata, pair with **Space Mono** or **JetBrains Mono**.

Type rules:
- Wordmark and project titles are uppercase and confident in scale.
- Metadata (years, categories, project numbers) is monospaced or in a mono-style label treatment, with letter-spacing tracked open (~`0.08em` – `0.12em`).
- Body copy stays at 17–19px, line-height ~1.55–1.7.

## Layout principles

- **Generous gutters, generous whitespace.** The page should breathe.
- **12-column thinking, but break the grid when it serves the work.** Projects can span full bleed; intro paragraphs can sit in a narrow column.
- **Editorial pacing.** Project pages alternate between full-bleed figures, two-up image pairs, and narrow text columns — like a magazine spread.
- **The header is consistent across all pages:** WNWN wordmark left, nav links right, optionally a short intro paragraph beneath the nav on the home page.

## Technical approach

- **Static HTML + CSS only.** No frameworks, no build step, no JavaScript dependencies beyond small vanilla scripts for behavior (e.g. the carousel, the custom cursor in `cursor.js`).
- **One stylesheet (`styles.css`).** Design tokens at the top in `:root`. Everything else is component-scoped via classes.
- **Project data lives in the `projects` array** at the bottom of `index.html`. Adding a project means adding an entry there and duplicating `projects/sample-project.html` as a template.
- **Each project page** is a standalone HTML file in `projects/`. Templates should remain hand-editable — readable HTML, no clever abstractions.
- **Images** go in `images/`. File names use dashes, not spaces. Resize to ~2000px wide max before adding.
- **Hosting target** is a free static host (Netlify, GitHub Pages, or Cloudflare Pages). Nothing in the build should require server-side processing.

## When in doubt

- Choose the option that's quieter, larger, and more confident.
- Prefer removing decoration to adding it.
- Match the existing tone of the codebase: simple HTML, design tokens for any value used more than once, and prose-style comments only where the intent isn't obvious from the markup.
- Don't introduce libraries, build tools, or frameworks without asking.

## Open decisions / to revisit

- Whether to add: marquee/scrolling text bar, slide transitions on the carousel, large project-number graphics behind the cover.
- Whether to swap the soft progress bar for typographic numbered chapters (`01 — 02 — 03 — 04`), with the current one bolded/underlined.
- Author / personal name — separate from the WNWN brand, used in footer copyright and bio. Currently a placeholder.
