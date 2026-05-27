// Fullscreen gallery slideshow — used by all project pages.
// Each page defines `const photos = [{ src, alt }, ...]` before loading this script.

(function () {
  if (typeof photos === 'undefined' || !photos.length) return;

  const img        = document.getElementById('gallery-img');
  const titleEl    = document.getElementById('gallery-photo-title');
  const prevBtn    = document.querySelector('.nav-arrow.prev');
  const nextBtn    = document.querySelector('.nav-arrow.next');

  // Read project name from the page header so each page doesn't need to repeat it.
  const headerTitle  = document.querySelector('.project-header-title');
  const projectTitle = headerTitle ? headerTitle.textContent.toUpperCase() : '';

  let current = 0;

  function pad(n) { return String(n).padStart(2, '0'); }

  function render() {
    const p = photos[current];
    img.src = p.src;
    img.alt = p.alt;
    titleEl.textContent = projectTitle + ' — ' + pad(current + 1) + ' / ' + pad(photos.length);
    // Preload the next image so the swap feels instant.
    const preload = new Image();
    preload.src = photos[(current + 1) % photos.length].src;
  }

  function prev() { current = (current - 1 + photos.length) % photos.length; render(); }
  function next() { current = (current + 1) % photos.length; render(); }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });

  // Swipe support for touch screens.
  let touchStartX = 0;
  document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
  });

  render();
})();
