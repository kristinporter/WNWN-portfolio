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

  const label = document.createElement('div');
  label.className = 'cursor-label';
  document.body.appendChild(label);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    label.style.left  = e.clientX + 'px';
    label.style.top   = e.clientY + 'px';
  });

  // Hide when the cursor leaves the window, show again when it returns.
  document.addEventListener('mouseleave', () => cursor.classList.add('cursor--hidden'));
  document.addEventListener('mouseenter', () => cursor.classList.remove('cursor--hidden'));

  // Show EXPAND when hovering an expandable photo.
  document.addEventListener('mouseover', (e) => {
    if (e.target.matches('.expandable')) {
      label.textContent = 'expand';
      label.classList.add('visible');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.matches('.expandable') && !document.querySelector('.lightbox.open')) {
      label.classList.remove('visible');
    }
  });
})();

// Lightbox — click any .expandable image to view full-size, with prev/next navigation.
(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox-arrow lightbox-prev';
  prevBtn.textContent = '←';
  prevBtn.setAttribute('aria-label', 'Previous image');

  const img = document.createElement('img');

  const nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox-arrow lightbox-next';
  nextBtn.textContent = '→';
  nextBtn.setAttribute('aria-label', 'Next image');

  overlay.appendChild(prevBtn);
  overlay.appendChild(img);
  overlay.appendChild(nextBtn);
  document.body.appendChild(overlay);

  let images = [];
  let currentIndex = 0;

  function getLabel() { return document.querySelector('.cursor-label'); }

  function show(index) {
    currentIndex = (index + images.length) % images.length;
    img.src = images[currentIndex].src;
    img.alt = images[currentIndex].alt || '';
  }

  function openLightbox(index) {
    images = Array.from(document.querySelectorAll('.expandable'));
    show(index);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    const label = getLabel();
    if (label) { label.textContent = 'close'; label.classList.add('visible'); }
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    const label = getLabel();
    if (label) { label.classList.remove('visible'); }
  }

  prevBtn.addEventListener('click', e => { e.stopPropagation(); show(currentIndex - 1); });
  nextBtn.addEventListener('click', e => { e.stopPropagation(); show(currentIndex + 1); });

  // Hide the cursor label when hovering the arrows so "close" doesn't show.
  [prevBtn, nextBtn].forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      const label = getLabel();
      if (label) label.classList.remove('visible');
    });
    btn.addEventListener('mouseleave', () => {
      const label = getLabel();
      if (label && overlay.classList.contains('open')) {
        label.textContent = 'close';
        label.classList.add('visible');
      }
    });
  });

  overlay.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });

  document.addEventListener('click', e => {
    const target = e.target.closest('.expandable');
    if (target) {
      e.preventDefault();
      images = Array.from(document.querySelectorAll('.expandable'));
      openLightbox(images.indexOf(target));
    }
  });
})();
