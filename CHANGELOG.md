# Changelog

## 2026-05-27 — Session 6

**Photo labels use gallery name + number on one line**

- Updated `.num-side` to `flex-direction: row` so number and name sit on one line (e.g., `01 Family`).
- Matched `.img-caption` font to `.seq-num`: both now 13px, weight 400, same tracking.
- Changed `.num-row` column from fixed `120px` to `auto` so longer names like "Streets in Color" don't overflow.
- Updated captions in all 5 project pages to use the gallery name instead of generic labels ("Home" → "Family", "Street" → "Streets in Color", etc.).

---

## 2026-05-27 — Session 5

**Reverted fullscreen gallery** *(reverts Sessions 3 & 4)*

- All 5 project pages restored to scrolling numbered-sequence layout. `gallery.js` removed. Gallery CSS removed from `styles.css`.

---

## 2026-05-26 — Session 4 *(reverted in Session 5)*

**Gallery bug fixes**

- Fixed arrows appearing above/below photo instead of on sides — missing `flex-direction: row` override on `.gallery-stage`.
- Added `FAMILY — 01 / 07` photo title label to gallery footer; `gallery.js` reads project name from `.project-header-title` so no per-page data needed.
- Updated footer HTML on all 5 project pages to new `gallery-photo-title` + `gallery-next` structure.

---

## 2026-05-26 — Session 3 *(reverted in Session 5)*

**Fullscreen gallery slideshow**

- Replaced scrolling numbered-sequence layout on all 5 project pages with a fullscreen slideshow: one photo at a time, fills the viewport (`object-fit: contain`), hard-cut navigation.
- Added `gallery.js`: shared script used by all project pages. Each page defines a `photos` array; handles prev/next, keyboard arrows, touch swipe, and preloads next image.
- Added gallery CSS to `styles.css`: `.gallery-view` body is a `100dvh` flex column, no scroll. Photo frame fills space between header and slim footer bar.

---

## 2026-05-26 — Session 2

**Project title consistency**

- Renamed "Portrait Photography" → "Studio Portraits" for consistency with "Self Portraits". Updated in `index.html` (projects array), `projects/studio-portraits.html` (title tag + header), and the "Next" link in `projects/family.html`. File renamed from `portrait-photography.html` to `studio-portraits.html`.

---

## 2026-05-26 — Session 1

**Code review + fixes**

- **CSS tokens corrected** (`styles.css`): `--bg` `#F0F0F0→#EEEEEE`, `--ink` `#000000→#151515`, `--muted` `#000000→#5a5a5a`, `--rule` `#000000→#c9c9c9`. Secondary text now has visible contrast against primary.
- **Deduplicated `.num-row` CSS**: Moved the numbered-sequence layout block from inline `<style>` tags in all 5 project pages into `styles.css`. Pages affected: `people-of-telegraph.html`, `family.html`, `portrait-photography.html`, `self-portraits.html`, `streets-in-color.html`.
- **Image files and folders renamed**: Replaced spaces with dashes across 4 folders and 21 files to match the dash-naming convention and avoid hosting reliability issues. Folders: `portrait photography→portrait-photography`, `self portraits→self-portraits`, `streets in color→streets-in-color`, `telegraph project→telegraph-project`. All `src` references updated in `index.html` and all project pages.
- **Lazy loading added**: `loading="lazy"` added to all 33 `.expandable` images across the 5 project pages.
- **Pre-launch to-do items added to `TODO.md`**: font decision (Archivo vs. Space Grotesk), About page content, portrait image, favicon, `<meta name="description">` on `about.html`, minor CSS and no-JS fallback notes.
