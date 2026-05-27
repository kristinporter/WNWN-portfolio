# Changelog

## 2026-05-26 — Session 4

**Gallery bug fixes: arrows, title, photo label**

- Fixed arrows appearing above/below photo instead of on sides — root cause was the base `.gallery-stage` rule setting `flex-direction: column`; the gallery override now explicitly sets `row` and clears the homepage's `max-width`/`margin`.
- Added photo title label to gallery footer: `gallery.js` reads the project name from `.project-header-title` and writes `FAMILY — 01 / 07` style label into a new `#gallery-photo-title` element. No per-page data needed.
- Updated footer HTML on all 5 project pages to use the new `gallery-photo-title` + `gallery-next` structure; removed the old `gallery-num` / `gallery-caption` / `gallery-sep` elements.

---

## 2026-05-26 — Session 3

**Fullscreen gallery slideshow**

- Replaced scrolling numbered-sequence layout on all 5 project pages with a fullscreen slideshow: one photo at a time, fills the viewport (`object-fit: contain`), hard-cut on navigation (no animation).
- Added `gallery.js`: shared JS used by all project pages. Each page defines a `photos` array; the script handles prev/next buttons, keyboard arrows, touch swipe, and preloads the next image for instant feel.
- Added gallery CSS to `styles.css`: `.gallery-view` body becomes a `100dvh` flex column with no scroll. Photo frame grows to fill all space between the header and a slim footer bar. Footer shows `01 / 07 · Caption` on the left and a next-project link on the right.
- Removed the old per-page `.num-row` HTML markup and scroll layout (project intro paragraphs removed; project name in header provides context).

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
