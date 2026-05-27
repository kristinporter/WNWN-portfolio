# Your portfolio — getting started

A hand-coded static site, designed to grow as you do. No frameworks, no build step, no lock-in. Just HTML and CSS.

## What's in the box

```
portfolio/
├── index.html              ← home page (project grid)
├── about.html              ← about page
├── styles.css              ← all styling lives here
├── projects/
│   └── sample-project.html ← template for each project page
└── images/                 ← drop your images here
```

## How to preview it locally

Just double-click `index.html` — it opens in your browser. That's it. Edit a file, save, refresh.

For nicer local previewing (with proper paths), open Terminal in the `portfolio` folder and run:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Making it yours — the first edits

1. **Open `index.html`** in any text editor (VS Code is free and great; TextEdit works in a pinch).
2. **Find and replace `Your Name`** across all three HTML files with your actual name.
3. **Edit the hero h1 and lede** in `index.html` — that's your one-line introduction.
4. **Replace `hello@yourdomain.com`** with your real email everywhere.
5. **Update the four project cards** — change titles, years, and tags to your real projects.

## Adding a new project

1. Copy `projects/sample-project.html` and rename it (e.g. `projects/coastline-zine.html`).
2. Edit the title, lede, info dl, and the figure/two-up blocks. Add or remove blocks freely.
3. Drop the project's images into the `images/` folder.
4. Update the `src=""` paths to point to those images.
5. Open `index.html` and add a new `<a class="project-card">` block pointing at the new file.

That's the whole workflow. Five minutes per project once you have the rhythm.

## Image tips

- Use JPGs for photographs (smaller file size), PNGs for flat graphics with transparency.
- Resize before uploading — 2000px wide max is plenty. Squoosh.app is a free tool.
- Name files with dashes, not spaces: `project-name-01.jpg`, not `Project Name 01.jpg`.

## Styling tweaks (no CSS knowledge required)

Open `styles.css` and look at the top — there's a `:root` block with design tokens:

```css
--bg: #faf8f4;      /* page background */
--ink: #161616;     /* body text */
--accent: #d83b1e;  /* the red on the italic word */
--serif: ...        /* the display typeface */
```

Change those values and the whole site shifts. Try `--accent: #2d5fc4` for blue, or `--bg: #1a1a1a` and `--ink: #faf8f4` for a dark site.

## Putting it on the internet (free)

When you're ready to show people:

**Option A — Netlify Drop (easiest):** Go to [app.netlify.com/drop](https://app.netlify.com/drop), drag the `portfolio` folder onto the page. You get a URL in 30 seconds. Hook up a custom domain later in their dashboard.

**Option B — GitHub Pages:** If you're comfortable with Git, push the folder to a public GitHub repo and enable Pages in Settings.

**Option C — Cloudflare Pages:** Similar to Netlify, with Cloudflare's CDN. Free tier is generous.

All three give you a real, fast, free website. For a custom domain like `yourname.com`, buy one from Namecheap or Cloudflare (~$10/year) and point it at whichever host you chose.

## When to consider "graduating" to a static site generator

You're fine with hand-coding until something starts to feel repetitive. Concrete signals:

- You have 15+ projects and updating the homepage grid is annoying
- You want a real blog or writing section
- You want tags/categories to filter projects
- You catch yourself copy-pasting the header and footer across every file

At that point, **Astro** is the right next step — it lets you keep your existing HTML/CSS but factor out repeated bits into components, and write project pages in Markdown. The visual design transfers over directly.

Until then, embrace the simplicity. Every file is just HTML you can read.
