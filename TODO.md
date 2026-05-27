# WNWN — To Do

## Typography

- [ ] Try Helvetica Neue LT Pro 65 Medium for headings
- [ ] Test menu text alternatives:
  - Helvetica LT Pro Roman
  - Helvetica Neue LT Pro 55 Roman
  - Swiss721 BT Regular
  - Neue Haas Grotesk Text Pro 55 Roman
  - Nimbus Sans Regular
  - Hanken Grotesk Regular
- [ ] Improve font for general body/surrounding text
- [ ] Add name below WNWN wordmark in a skinny stretched font

## Navigation & UI

- [ ] Add brackets around selected nav item to indicate active state
- [ ] Brackets in more places to signal interactive elements
  - [ ] Possible italics for the currently selected/active button
  - [ ] Maybe remove brackets on the currently active page/button instead
- [ ] Center the double arrows relative to the project cover square

## Color & Aesthetic

- [ ] Harsher colors — consider darker black, neon green, or bright red
- [ ] Explore use of `*` as decorative weird stars throughout

## About Page

- [ ] Add black & white portrait + bold black text layout
  - [ ] Ask Nikhil or John to take portrait
  - [ ] Layout concept: OWEN {b&w photo cutout} NGUYEN

## Gallery

- [ ] Fix gallery error
- [ ] Incorporate photos better within gallery

## Pre-launch checklist (from code review)

- [ ] **Typography:** Decide Archivo vs. Space Grotesk — one is loaded but unused. Either update all CSS to use Space Grotesk (per the design brief) or update CLAUDE.md to reflect Archivo as the choice.
- [ ] **About page content:** Fill in bio paragraphs, "Based in", Clients, Recognition, Elsewhere links.
- [ ] **About page portrait:** Add `images/portrait.jpg` (the `onerror` fallback is working but the slot is empty).
- [ ] **Favicon:** Add `<link rel="icon">` to all pages.
- [ ] **`<meta name="description">` on about.html:** Currently missing; `index.html` has one.
- [ ] **Minor — redundant CSS:** `.nav-arrow` in `styles.css:171` has `cursor: none` which is already covered by the global `@media (hover: hover)` rule on buttons.
- [ ] **Minor — no-JS fallback:** The carousel's initial `href` on `#cover-link` points to `sample-project.html`; update to the first real project so it degrades gracefully without JS.

## Loading Screen

- [ ] Design loading screen featuring a grainy CD being inserted into a CD player
  - [ ] Alternate idea: a CD player you press play on to enter the site
