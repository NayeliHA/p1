// pagina4.js - carrusel con thumbnails, autoplay y controles
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("carouselTrack");
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("btnPrev");
  const nextBtn = document.getElementById("btnNext");
  const thumbButtons = Array.from(document.querySelectorAll(".thumb"));
  let index = 0;
  let autoplayInterval = null;
  const AUTOPLAY_DELAY = 4000;

  function goToIndex(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    updateActiveThumb();
  }

  function updateActiveThumb() {
    thumbButtons.forEach((t, i) => {
      t.classList.toggle("active", i === index);
    });
  }

  function next() {
    goToIndex(index + 1);
  }
  function prev() {
    goToIndex(index - 1);
  }

  // event listeners for buttons
  nextBtn.addEventListener("click", () => { next(); resetAutoplay(); });
  prevBtn.addEventListener("click", () => { prev(); resetAutoplay(); });

  // thumbnails clickable
  thumbButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const i = parseInt(btn.dataset.index, 10);
      goToIndex(i);
      resetAutoplay();
    });
  });

  // autoplay
  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => { next(); }, AUTOPLAY_DELAY);
  }
  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }
  function resetAutoplay() { stopAutoplay(); startAutoplay(); }

  // pause on hover
  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.addEventListener("mouseenter", stopAutoplay);
  carouselInner.addEventListener("mouseleave", startAutoplay);

  // keyboard arrows
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { next(); resetAutoplay(); }
    if (e.key === "ArrowLeft")  { prev(); resetAutoplay(); }
  });

  // initialize
  goToIndex(0);
  startAutoplay();
});
