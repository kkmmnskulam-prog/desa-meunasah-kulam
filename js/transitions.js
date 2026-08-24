/* ==========================================================================
   TRANSISI HALAMAN & ANIMASI SCROLL — dipakai bersama index.html & kkn.html
   ========================================================================== */

/* ---- fade-in saat halaman dimuat, fade-out saat pindah halaman ---- */
function markPageReady() {
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
}
document.addEventListener("DOMContentLoaded", markPageReady);

// pageshow menangani kasus tombol "back" browser (bfcache)
window.addEventListener("pageshow", () => {
  document.body.classList.remove("is-leaving");
  markPageReady();
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[href]");
  if (!link) return;
  const href = link.getAttribute("href");

  // Biarkan anchor di halaman yang sama (#profil dll), link eksternal,
  // dan link yang sengaja dibuka di tab baru berjalan normal tanpa transisi.
  if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || link.target === "_blank") {
    return;
  }

  e.preventDefault();
  document.body.classList.remove("is-ready");
  document.body.classList.add("is-leaving");
  setTimeout(() => { window.location.href = href; }, 280);
});

/* ---- reveal halus saat elemen masuk ke layar ---- */
function initScrollReveal(selector) {
  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  els.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal(".reveal");
});
