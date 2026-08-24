/* ==========================================================================
   MOMEN KKN/KKM — DATA
   Tambahkan momen baru dengan menyalin (copy-paste) satu blok { ... } di
   bawah, lalu ganti isinya. Setiap momen bisa punya lebih dari satu foto
   (array `images`) — cukup taruh file foto ke folder /images/kkn dengan
   nama yang sama persis, tidak perlu ubah kode selain di sini.
   ========================================================================== */

/* Deteksi apakah sebuah file media adalah video berdasarkan ekstensinya,
   supaya video bisa dicampur langsung ke dalam array `images` tiap momen. */
function isVideoFile(src) {
  return /\.(mp4|webm|mov|ogg)$/i.test(src);
}

const MOMENTS = [
  {
    id: "momen-1",
    period: "17 Agustus",
    title: "Upacara HUT RI di Kantor Bupati",
    caption: "Momen setelah upacara penaikan bendera.",
    story: "Pada 17 Agustus, mahasiswa KKN/KKM turut mengikuti upacara penaikan bendera dalam rangka peringatan Hari Kemerdekaan RI yang digelar di Kantor Bupati Pidie Jaya. Foto-foto ini diambil setelah upacara selesai, menjadi salah satu momen kebersamaan yang berkesan selama masa pengabdian.",
    images: [
      "images/kkn/momen-1a.jpg",
      "images/kkn/momen-1b.jpg",
      "images/kkn/momen-1c.jpg",
      "images/kkn/momen-1d.jpg"
    ]
  },
  {
    id: "momen-video-1",
    period: "17 Agustus",
    title: "Dokumentasi Video Upacara HUT RI",
    caption: "Cuplikan video upacara penaikan bendera.",
    story: "Video ini merekam suasana upacara penaikan bendera dalam rangka Hari Kemerdekaan RI di Kantor Bupati Pidie Jaya, sebagai pelengkap dokumentasi foto pada momen yang sama.",
    images: ["images/kkn/momen-1-video.mp4"]
  },
 {
    id: "momen-2",
    period: "5 Agustus 2026",
    title: "Proker Hasnaini di TK Insan Cerdas",
    caption: "Edukasi seni dari tali dan cat kertas bersama anak-anak TK Insan Cerdas.",
    story: "Pada 5 Agustus 2026, kelompok KKM melaksanakan Proker Hasnaini di TK Insan Cerdas, Meunasah Kulam. Kegiatan ini diisi dengan edukasi seni menggunakan tali dan cat kertas. Anak-anak diajak mengenal bahan sederhana, berkreasi, dan mengekspresikan ide mereka melalui karya seni dalam suasana belajar yang menyenangkan.",
    images: [
      "images/kkn/momen-2a.jpg",
      "images/kkn/momen-2b.jpg",
      "images/kkn/momen-2c.jpg",
      "images/kkn/momen-2d.jpg",
      "images/kkn/momen-2e.jpg",
      "images/kkn/momen-2f.jpg"
    ]
  },
  {
    id: "momen-video-2",
    period: "Kunjungan Dayah",
    title: "Kunjungan ke Dayah Jeumala Amal",
    caption: "Kunjungan kelompok KKM untuk menjenguk anak Ibu Geuchik di Dayah Jeumala Amal, Sigli.",
    story: "Kelompok KKM berkunjung ke Dayah Jeumala Amal di Sigli untuk menjenguk anak Ibu Geuchik yang sedang menuntut ilmu di sana. Kunjungan ini menjadi salah satu momen kebersamaan dan silaturahmi selama kegiatan KKM.",
    images: ["images/kkn/momen-2-video.mp4"]
  },
  {
    id: "momen-3",
    period: "Kunjungan Dayah",
    title: "Berkunjung ke Dayah Jeumala Amal",
    caption: "Kunjungan kelompok KKM untuk menjenguk anak Ibu Geuchik di Dayah Jeumala Amal, Sigli.",
    story: "Kelompok KKM berkunjung ke Dayah Jeumala Amal di Sigli untuk menjenguk anak Ibu Geuchik yang sedang menuntut ilmu di sana. Kunjungan ini menjadi kesempatan untuk bersilaturahmi dan berbagi momen kebersamaan selama kegiatan KKM.",
    images: [
      "images/kkn/momen-3a.jpeg",
      "images/kkn/momen-3b.jpeg",
      "images/kkn/momen-3c.jpeg"
    ]
  },
  {
    id: "momen-4",
    period: "30 Juli 2026",
    title: "Perkenalan dan Silaturahmi di SDN 10 Meureudu",
    caption: "Perkenalan dan silaturahmi pertama kelompok KKM dengan SDN 10 Meureudu.",
    story: "Pada 30 Juli 2026, kelompok KKM melakukan perkenalan sekaligus silaturahmi pertama dengan pihak SDN 10 Meureudu. Pertemuan ini menjadi awal hubungan baik dan kerja sama kelompok KKM dengan sekolah, yang kemudian menjadi tempat kami melakukan berbagai aktivitas selama kegiatan KKM.",
    images: [
      "images/kkn/momen-4a.jpg",
      "images/kkn/momen-4b.jpeg",
      "images/kkn/momen-4c.jpeg",
      "images/kkn/momen-4d.jpeg",
      "images/kkn/momen-4e.jpeg"
    ]
  }

  /* ---------------------------------------------------------------------
     Cara menambah momen baru: copy-paste satu blok { ... } di atas
     (tanpa lupa tambah koma "," setelah "}" blok sebelumnya), lalu ganti
     id, period, title, caption, story, dan images sesuai momen baru.

     - Momen berisi foto: isi images dengan file .jpg/.png sebanyak apa pun.
     - Momen berisi video: isi images dengan file .mp4/.webm/.mov/.ogg.
     - Jangan campur foto dan video dalam satu momen yang sama — buat
       momen terpisah seperti pola "momen-1" (foto) dan "momen-video-1"
       (video) di atas.
     --------------------------------------------------------------------- */
];

/* ==========================================================================
   RENDER MOMENT CARDS
   ========================================================================== */

const grid = document.getElementById("momentsGrid");

MOMENTS.forEach((m, i) => {
  const card = document.createElement("article");
  const isVideoMoment = m.images.length > 0 && m.images.every(isVideoFile);
  card.className = `moment-card reveal${isVideoMoment ? " moment-card--video" : ""}`;
  card.style.transitionDelay = `${(i % 3) * 0.08}s`;
  card.dataset.id = m.id;
  if (!isVideoMoment) {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Lihat momen ${m.title}`);
  }

  const galleryTag = m.images.length > 1
    ? `<div class="moment-card__gallery-tag"><svg><use href="#icon-photo"/></svg>${m.images.length} media</div>`
    : "";

  const coverIsVideo = isVideoFile(m.images[0]);
  const coverMedia = coverIsVideo
    ? `<video class="moment-card__img" src="${m.images[0]}" muted loop autoplay playsinline
             onerror="this.style.display='none'; this.parentElement.classList.add('media--empty')"></video>`
    : `<img class="moment-card__img" src="${m.images[0]}" alt="${m.title}"
             onerror="this.style.display='none'; this.parentElement.classList.add('media--empty')">`;

  card.innerHTML = `
    <div class="moment-card__media">
      ${coverMedia}
      <div class="moment-card__fallback">
        <svg><use href="#icon-people"/></svg>
        <span>${m.images[0]}</span>
      </div>
    </div>
    <div class="moment-card__scrim"></div>
    ${galleryTag}
    <div class="moment-card__body">
      <p class="moment-card__date">${m.period}</p>
      <h3 class="moment-card__title">${m.title}</h3>
    </div>
  `;

  if (!isVideoMoment) {
    card.addEventListener("click", () => openModal(m));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(m); }
    });
  }

  grid.appendChild(card);
});

if (typeof initScrollReveal === "function") initScrollReveal(".moment-card");

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

function openModal(moment) {
  lastFocused = document.activeElement;
  currentImages = moment.images;
  currentSlide = 0;
  modal.dataset.momentId = moment.id;

  modalEyebrow.textContent = moment.period || "Momen";
  modalTitle.textContent = moment.title;
  modalStory.textContent = moment.story || moment.caption;

  galTrack.innerHTML = currentImages.map((src, idx) => {
    const mediaTag = isVideoFile(src)
      ? `<video src="${src}" controls playsinline
                onerror="this.style.display='none'; this.parentElement.classList.add('media--empty')"></video>`
      : `<img src="${src}" alt="${moment.title} — media ${idx + 1}"
              onerror="this.style.display='none'; this.parentElement.classList.add('media--empty')">`;
    return `
    <div class="modal__gallery-slide" data-idx="${idx}">
      ${mediaTag}
      <div class="fallback">
        <svg><use href="#icon-people"/></svg>
        <span>${src}</span>
      </div>
    </div>`;
  }).join("");

  galDots.innerHTML = currentImages.map((_, idx) =>
    `<button class="modal__dot" data-idx="${idx}" aria-label="Foto ${idx + 1}"></button>`
  ).join("");

  const showNav = currentImages.length > 1;
  galPrev.hidden = !showNav;
  galNext.hidden = !showNav;
  galDots.style.display = showNav ? "flex" : "none";

    galTrack.querySelectorAll("img").forEach((image) => {
      image.addEventListener("load", updateGallerySize, { once: true });
    });
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
    updateGallerySize();
  }

  function updateGallerySize() {
    const activeImage = galTrack.children[currentSlide]?.querySelector("img");
    if (!activeImage?.naturalWidth || !activeImage.naturalHeight) return;

    const galleryWidth = galTrack.parentElement.clientWidth;
    const maxHeight = Math.min(window.innerHeight * 0.76, 620);
    const imageRatio = activeImage.naturalWidth / activeImage.naturalHeight;
    const naturalHeight = galleryWidth / imageRatio;

    galTrack.parentElement.style.aspectRatio = naturalHeight <= maxHeight
      ? `${imageRatio}`
      : "auto";
    galTrack.parentElement.style.height = `${Math.min(naturalHeight, maxHeight)}px`;
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

/* Musik latar & transisi halaman kini ditangani oleh js/music.js dan
   js/transitions.js (dipakai bersama index.html & kkn.html). */
