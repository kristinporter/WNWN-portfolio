// Custom cursor — a small circle that follows the mouse and inverts whatever's behind it.
// The inversion effect is handled in CSS (mix-blend-mode: difference). This script just
// creates the element on page load and tracks the mouse position.

(function () {
  // Skip on touch-only devices — there's no meaningful cursor to replace.
  if (!window.matchMedia('(hover: hover)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  // Start off-screen so it doesn't flash at (0,0) on load.
  cursor.style.left = '-100px';
  cursor.style.top  = '-100px';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  // Hide when the cursor leaves the window, show again when it returns.
  document.addEventListener('mouseleave', () => cursor.classList.add('cursor--hidden'));
  document.addEventListener('mouseenter', () => cursor.classList.remove('cursor--hidden'));
})();

// Lightbox — click any .expandable image to view it full-size.
(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  const img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  document.addEventListener('click', e => {
    const target = e.target.closest('.expandable');
    if (target) { e.preventDefault(); openLightbox(target.src, target.alt); }
  });
})();

// Contact link: try mailto, fall back to showing the address as a copyable tooltip.
(function () {
  const link = document.getElementById('contact-link');
  if (!link) return;

  link.addEventListener('click', function (e) {
    // Let the mailto attempt fire, then briefly show the address as a fallback.
    setTimeout(() => {
      link.classList.add('show');
      // Hide again after 3 seconds.
      setTimeout(() => link.classList.remove('show'), 3000);
    }, 300);
  });

  // Also hide tooltip if user clicks anywhere else.
  document.addEventListener('click', (e) => {
    if (e.target !== link) link.classList.remove('show');
  });
})();
