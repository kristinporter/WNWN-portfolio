# Changelog

## 2026-05-27 — Session 5

**Reverted fullscreen gallery**

- Reverted Sessions 3 & 4 (fullscreen slideshow on project pages). All 5 project pages are back to the scrolling numbered-sequence layout. `gallery.js` removed. Gallery CSS removed from `styles.css`.

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
