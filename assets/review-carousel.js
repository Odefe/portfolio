(() => {
  const carousel = document.querySelector('[data-review-carousel]');
  if (!carousel) return;

  const reviewImages = [
    '1695675596778.jpeg', '1701341701244.jpeg', '1701341749628.jpeg',
    '1701341924336.jpeg', '1701341957240.jpeg', '1701341970291.jpeg',
    '1701341977353.jpeg', '1701341996015.jpeg', '1701342002257.jpeg',
    '1701342008958.jpeg', '1701342016395.jpeg', '1701342025279.jpeg',
    'Screenshot 2026-09-08 122527.png', 'Screenshot 2026-09-08 122541.png',
    'Screenshot 2026-09-08 122552.png', 'Screenshot 2026-09-08 122605.png',
    'Screenshot 2026-09-08 122614.png', 'Screenshot 2026-09-08 122624.png',
    'Screenshot 2026-09-08 122632.png', 'Screenshot 2026-09-08 122645.png',
    'Screenshot 2026-09-08 122655.png', 'Screenshot 2026-09-08 122707.png',
    'Screenshot 2026-09-08 122714.png', 'Screenshot 2026-09-08 122723.png',
    'Screenshot 2026-09-08 122737.png', 'Screenshot 2026-09-08 122748.png',
    'Screenshot 2026-09-08 122842.png', 'Screenshot 2026-09-08 122852.png',
    'Screenshot 2026-09-08 122859.png', 'Screenshot 2026-09-08 122910.png',
    'Screenshot 2026-09-08 122918.png', 'Screenshot 2026-09-08 122926.png',
    'Screenshot 2026-09-08 122939.png', 'Screenshot 2026-09-08 122948.png',
    'Screenshot 2026-09-08 122956.png', 'Screenshot 2026-09-08 123006.png',
    'Screenshot 2026-09-08 123015.png', 'Screenshot 2026-09-08 123023.png',
    'Screenshot 2026-09-08 123031.png', 'Screenshot 2026-09-08 123038.png',
    'Screenshot 2026-09-08 123046.png', 'Screenshot 2026-09-08 123053.png',
    'Screenshot 2026-09-08 123105.png', 'Screenshot 2026-09-08 123112.png',
    'Screenshot 2026-09-08 123118.png', 'Screenshot 2026-09-08 123133.png',
    'Screenshot 2026-09-08 123211.png', 'Screenshot 2026-09-08 123220.png',
    'Screenshot 2026-09-08 123227.png', 'Screenshot 2026-09-08 123235.png',
    'Screenshot 2026-09-08 123250.png', 'Screenshot 2026-09-08 123311.png',
    'Screenshot 2026-09-08 123323.png'
  ];
  const stage = carousel.querySelector('.review-stage');
  stage.innerHTML = reviewImages.map((filename, index) => {
    const source = `assets/reviews/${encodeURIComponent(filename).replace(/%20/g, ' ')}`;
    const label = `Review image ${index + 1}`;
    return `<div id="client-review-${index + 1}" class="review-slide${index === 0 ? ' is-active' : ''}" data-review-slide role="group" aria-roledescription="slide" aria-label="${index + 1} of ${reviewImages.length}"${index === 0 ? '' : ' hidden'}><a class="review-image-card" href="${source}" target="_blank" rel="noopener noreferrer"><img src="${source}" alt="${label}" loading="lazy" decoding="async"></a></div>`;
  }).join('');

  const slides = [...stage.querySelectorAll('[data-review-slide]')];
  const status = carousel.querySelector('[data-review-status]');
  const controls = carousel.querySelector('[data-review-controls]');
  const counter = carousel.querySelector('[data-review-counter]');
  const previous = carousel.querySelector('[data-review-prev]');
  const next = carousel.querySelector('[data-review-next]');
  if (slides.length < 2 || !status || !controls || !counter || !previous || !next) return;

  const interval = 8000;
  let current = 0;
  let timer;
  let pointerInside = false;
  let focusInside = carousel.contains(document.activeElement);

  function syncPlayback() {
    window.clearTimeout(timer);
    const shouldPlay = !document.hidden && !pointerInside && !focusInside;
    carousel.dataset.rotation = shouldPlay ? 'playing' : 'paused';

    if (shouldPlay) {
      timer = window.setTimeout(() => showReview(current + 1), interval);
    }
  }

  function showReview(index, announce = false) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      const active = position === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
    });
    counter.textContent = `${current + 1} / ${slides.length}`;
    counter.setAttribute('aria-label', `Review ${current + 1} of ${slides.length}`);
    if (announce) status.textContent = `Review ${current + 1} of ${slides.length}.`;
    syncPlayback();
  }

  previous.addEventListener('click', () => showReview(current - 1, true));
  next.addEventListener('click', () => showReview(current + 1, true));
  carousel.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'touch') return;
    pointerInside = true;
    syncPlayback();
  });
  carousel.addEventListener('pointerleave', () => {
    pointerInside = false;
    syncPlayback();
  });
  carousel.addEventListener('focusin', () => {
    focusInside = true;
    syncPlayback();
  });
  carousel.addEventListener('focusout', (event) => {
    focusInside = carousel.contains(event.relatedTarget);
    syncPlayback();
  });
  document.addEventListener('visibilitychange', syncPlayback);
  window.addEventListener('pagehide', () => window.clearTimeout(timer));
  window.addEventListener('pageshow', syncPlayback);

  carousel.classList.add('is-enhanced');
  slides.forEach((slide) => { slide.hidden = false; });
  showReview(0);
  controls.hidden = false;
})();
