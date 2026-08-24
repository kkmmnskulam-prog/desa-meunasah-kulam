/* ==========================================================================
   MUSIK LATAR — dipakai bersama, cari elemen #bgMusic dan #musicToggle
   di halaman manapun yang menyertakan script ini.
   Browser umumnya memblokir audio otomatis berbunyi sebelum ada interaksi
   dari pengguna, jadi di sini kita:
   1) coba mainkan otomatis saat halaman dibuka,
   2) kalau diblokir, musik mulai pada interaksi pertama (klik/scroll/
      sentuh) di halaman, dan tombol tetap bisa dipakai untuk jeda/putar manual.
   ========================================================================== */

(function () {
  const bgMusic = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  if (!bgMusic || !musicToggle) return;

  let userPausedMusic = false;

  function setMusicState(isPlaying) {
    musicToggle.classList.toggle("is-playing", isPlaying);
    musicToggle.classList.toggle("is-muted", !isPlaying);
    musicToggle.setAttribute("aria-pressed", String(isPlaying));
  }

  function tryPlayMusic() {
    if (userPausedMusic) return;
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setMusicState(true))
        .catch(() => setMusicState(false)); // autoplay diblokir, tunggu interaksi
    }
  }

  function armAutoplayOnFirstInteraction() {
    const start = () => {
      tryPlayMusic();
      ["click", "touchstart", "scroll", "keydown"].forEach((evt) =>
        document.removeEventListener(evt, start)
      );
    };
    ["click", "touchstart", "scroll", "keydown"].forEach((evt) =>
      document.addEventListener(evt, start, { once: true, passive: true })
    );
  }

  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      userPausedMusic = false;
      tryPlayMusic();
    } else {
      bgMusic.pause();
      userPausedMusic = true;
      setMusicState(false);
    }
  });

  tryPlayMusic();
  armAutoplayOnFirstInteraction();
})();
