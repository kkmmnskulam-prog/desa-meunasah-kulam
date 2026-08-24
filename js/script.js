/* ==========================================================================
   MEUNASAH KULAM — DATA
   Setiap spot bisa punya lebih dari satu foto (array `images`).
   Cukup taruh file foto ke folder /images dengan nama yang sama
   persis seperti tertulis di sini — foto akan otomatis muncul,
   tidak perlu mengubah kode ini.
   ========================================================================== */

const SPOTLIGHTS = [
  {
    id: "mushola",
    icon: "icon-mosque",
    size: "wide",
    title: "Meunasah Gampong",
    teaser: "Didirikan setelah gempa Pidie Jaya 2016.",
    story: "Meunasah ini didirikan setelah gempa bumi yang melanda Pidie Jaya pada tahun 2016. Bagi warga Meunasah Kulam, tempat ini bukan sekadar bangunan ibadah — ia adalah simbol bahwa kampung ini bangkit kembali. Di sinilah warga salat berjamaah, anak-anak belajar mengaji, dan berbagai kegiatan gampong berlangsung.",
    images: ["images/mushola-1.jpg"]
  },
  {
    id: "kantor-geuchik",
    icon: "icon-office",
    size: "narrow",
    title: "Kantor Geuchik",
    teaser: "Pusat pemerintahan gampong.",
    story: "Kantor Geuchik adalah tempat kepala desa (geuchik) beserta perangkat pemerintahan gampong Meunasah Kulam berkumpul dan menjalankan urusan administrasi warga.",
    images: ["images/kantor-geuchik-1.jpg", "images/kantor-geuchik-2.jpg", "images/kantor-geuchik-3.jpg"]
  },
  {
    id: "sdn10",
    icon: "icon-school",
    size: "narrow",
    title: "SD Negeri 10 Meureudu",
    teaser: "Cerita lengkap segera hadir.",
    story: "SD Negeri 10 Meureudu adalah sekolah dasar yang terletak di Meunasah Kulam, tempat anak-anak gampong menempuh pendidikan dasar mereka. Cerita lebih lengkap tentang sekolah ini akan ditambahkan kemudian.",
    images: ["images/sdn10-1.jpg", "images/sdn10-2.jpg", "images/sdn10-3.jpg"]
  },
  {
    id: "tk-insan-cerdas",
    icon: "icon-school",
    size: "narrow",
    title: "TK Insan Cerdas",
    teaser: "Tempat belajar anak-anak usia dini.",
    story: "TK Insan Cerdas terletak tidak jauh dari meunasah gampong, menjadi tempat anak-anak usia dini di Meunasah Kulam belajar dan bermain sebelum melanjutkan ke sekolah dasar.",
    images: ["images/tk-insan-cerdas-1.jpg", "images/tk-insan-cerdas-2.jpg"]
  },
  {
    id: "balai-pengajian",
    icon: "icon-quran",
    size: "narrow",
    title: "Balai Pengajian Darul Ma'waa",
    teaser: "Belajar Al-Qur'an dan kitab bersama.",
    story: "Balai Pengajian Anak Darul Ma'waa adalah tempat anak-anak dari berbagai gampong berkumpul untuk belajar mengaji Al-Qur'an dan kitab, menjadikannya salah satu pusat pendidikan agama bagi anak-anak di sekitar Meunasah Kulam.",
    images: ["images/balai-pengajian-1.jpg"]
  },
  {
    id: "sungai",
    icon: "icon-river",
    size: "wide",
    title: "Sungai Gampong",
    teaser: "Tempat mencuci, mandi, dan memandang.",
    story: "Sungai yang mengalir di Meunasah Kulam menjadi tempat warga mencuci pakaian dan anak-anak bermain air, dengan kedalaman yang cukup aman serta pemandangan alam yang indah di sekelilingnya.",
    images: ["images/sungai-1.jpg", "images/sungai-2.jpg"]
  },
  {
    id: "pos-kamling",
    icon: "icon-post",
    size: "narrow",
    title: "Pos Kamling",
    teaser: "Tempat bapak-bapak berkumpul.",
    story: "Pos Kamling Meunasah Kulam adalah tempat para bapak-bapak gampong berkumpul, berjaga malam secara bergiliran, dan mengobrol santai — salah satu ruang sosial paling akrab di kampung ini.",
    images: ["images/pos-kamling-1.jpg"]
  }
];

/* ==========================================================================
   RENDER SPOTLIGHT CARDS
   ========================================================================== */

const grid = document.getElementById("spotlightGrid");

SPOTLIGHTS.forEach((spot, i) => {
  const card = document.createElement("article");
  card.className = "spot-card reveal";
  card.style.transitionDelay = `${(i % 3) * 0.08}s`;
  card.dataset.size = spot.size;
  card.dataset.id = spot.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Lihat cerita ${spot.title}`);

  const galleryTag = spot.images.length > 1
    ? `<div class="spot-card__gallery-tag"><svg><use href="#icon-photo"/></svg>${spot.images.length} foto</div>`
    : "";

  card.innerHTML = `
    <div class="spot-card__media">
      <img class="spot-card__img" src="${spot.images[0]}" alt="${spot.title}"
           onerror="this.style.display='none'; this.parentElement.classList.add('media--empty')">
      <div class="spot-card__fallback">
        <svg><use href="#${spot.icon}"/></svg>
        <span>${spot.images[0]}</span>
      </div>
    </div>
    <div class="spot-card__scrim"></div>
    ${galleryTag}
    <div class="spot-card__body">
      <p class="spot-card__index">${String(i + 1).padStart(2, "0")} / 07</p>
      <h3 class="spot-card__title">${spot.title}</h3>
      <p class="spot-card__teaser">${spot.teaser}</p>
    </div>
  `;

  card.addEventListener("click", () => openModal(spot));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(spot); }
  });

  grid.appendChild(card);
});

if (typeof initScrollReveal === "function") initScrollReveal(".spot-card");

/* ==========================================================================
   MODAL + GALLERY
   ========================================================================== */

const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalTitle = document.getElementById("modalTitle");
const modalStory = document.getElementById("modalStory");
const galTrack = document.getElementById("modalGalleryTrack");
const galDots = document.getElementById("galDots");
const galPrev = document.getElementById("galPrev");
const galNext = document.getElementById("galNext");

let currentSlide = 0;
let currentImages = [];
let lastFocused = null;

function openModal(spot) {
  lastFocused = document.activeElement;
  currentImages = spot.images;
  currentSlide = 0;

  modalEyebrow.textContent = "Spotlight";
  modalTitle.textContent = spot.title;
  modalStory.textContent = spot.story;

  galTrack.innerHTML = currentImages.map((src, idx) => `
    <div class="modal__gallery-slide" data-idx="${idx}">
      <img src="${src}" alt="${spot.title} — foto ${idx + 1}"
           onerror="this.style.display='none'; this.parentElement.classList.add('media--empty')">
      <div class="fallback">
        <svg><use href="#${spot.icon}"/></svg>
        <span>${src}</span>
      </div>
    </div>
  `).join("");

  galDots.innerHTML = currentImages.map((_, idx) =>
    `<button class="modal__dot" data-idx="${idx}" aria-label="Foto ${idx + 1}"></button>`
  ).join("");

  const showNav = currentImages.length > 1;
  galPrev.hidden = !showNav;
  galNext.hidden = !showNav;
  galDots.style.display = showNav ? "flex" : "none";

  updateSlide();

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

function updateSlide() {
  galTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  [...galDots.children].forEach((dot, idx) => {
    dot.classList.toggle("is-active", idx === currentSlide);
  });
}

function goToSlide(idx) {
  const len = currentImages.length;
  currentSlide = (idx + len) % len;
  updateSlide();
}

modalBackdrop.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
galPrev.addEventListener("click", () => goToSlide(currentSlide - 1));
galNext.addEventListener("click", () => goToSlide(currentSlide + 1));
galDots.addEventListener("click", (e) => {
  const dot = e.target.closest(".modal__dot");
  if (dot) goToSlide(Number(dot.dataset.idx));
});

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("is-open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") goToSlide(currentSlide - 1);
  if (e.key === "ArrowRight") goToSlide(currentSlide + 1);
});

/* ==========================================================================
   NAV: scroll state + mobile toggle
   ========================================================================== */

const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
}, { passive: true });

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navLinks.style.display = isOpen ? "flex" : "";
});

/* ==========================================================================
   FOOTER YEAR
   ========================================================================== */

document.getElementById("year").textContent = new Date().getFullYear();
