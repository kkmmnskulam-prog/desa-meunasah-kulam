# Landing Page — Gampong Meunasah Kulam

## Cara menambahkan foto

Semua foto tinggal ditaruh di folder `images/` dengan nama file **persis** seperti daftar
di bawah. Selama namanya sama, foto akan otomatis muncul di website — tidak perlu ubah
kode apa pun. Kalau file belum ada, website akan menampilkan ikon placeholder sementara.

| Lokasi | Nama file yang dibutuhkan | Catatan |
|---|---|---|
| Hero (foto besar di atas) | `images/hero-mushola.jpg` | Foto utama Meunasah |
| 1. Meunasah Gampong | `images/mushola-1.jpg`, `images/mushola-2.jpg` | Bisa tambah `mushola-3.jpg` dst, lihat catatan di bawah |
| 2. Kantor Geuchik | `images/kantor-geuchik-1.jpg`, `-2.jpg`, `-3.jpg` | Sudah disiapkan 3 slot |
| 3. SD Negeri 10 Meureudu | `images/sdn10-1.jpg` | |
| 4. TK Insan Cerdas | `images/tk-insan-cerdas-1.jpg` | |
| 5. Balai Pengajian Darul Ma'waa | `images/balai-pengajian-1.jpg` | |
| 6. Sungai | `images/sungai-1.jpg`, `images/sungai-2.jpg` | |
| 7. Pos Kamling | `images/pos-kamling-1.jpg` | |

## Menambah jumlah foto per lokasi

Kalau foto yang Anda punya untuk satu lokasi lebih banyak dari slot di atas (misalnya
Kantor Geuchik jadi 5 foto), buka file `js/script.js`, cari lokasi tersebut di bagian
`SPOTLIGHTS`, lalu tambahkan nama file baru ke dalam array `images`. Contoh:

```js
images: ["images/kantor-geuchik-1.jpg", "images/kantor-geuchik-2.jpg", "images/kantor-geuchik-3.jpg", "images/kantor-geuchik-4.jpg"]
```

## Menambah atau mengubah cerita

Cerita tiap lokasi juga ada di `js/script.js`, di properti `story` (cerita lengkap yang
muncul saat kartu diklik) dan `teaser` (satu baris singkat di kartu). Tinggal edit teks
di antara tanda kutip.

## Halaman "Momen KKN/KKM"

Ada halaman terpisah khusus dokumentasi mahasiswa KKN/KKM: `kkn.html`, bisa diakses lewat
menu "Momen KKN" di navigasi atau tombol "Lihat Momen KKN" di halaman utama.

Datanya ada di `js/kkn.js`, sudah disiapkan 6 slot momen placeholder. Cara mengisi:

1. **Foto** — taruh foto ke folder `images/kkn/` dengan nama `momen-1.jpg`, `momen-2.jpg`,
   dst (sesuai yang tertulis di `js/kkn.js`).
2. **Teks** — di `js/kkn.js`, tiap momen punya 4 bagian yang bisa diedit:
   - `period` → periode/waktu KKN (mis. "Januari 2023")
   - `title` → judul singkat momen
   - `caption` → tidak dipakai di kartu saat ini, cadangan untuk pengembangan lanjut
   - `story` → cerita lengkap yang muncul saat kartu diklik

**Menambah momen baru:** salin (copy-paste) satu blok `{ ... }` di dalam array `MOMENTS`,
ganti `id` menjadi unik (mis. `"momen-7"`), lalu sesuaikan isinya. Tidak ada batas jumlah.

**Menambah foto per momen:** sama seperti spotlight — tambahkan nama file lain ke dalam
array `images`, contoh:

```js
images: ["images/kkn/momen-1.jpg", "images/kkn/momen-1b.jpg"]
```

## Fitur tambahan terbaru

- **Transisi halaman yang halus** — saat pindah dari beranda ke halaman Momen KKN
  (atau sebaliknya), halaman akan fade out lalu fade in, bukan berpindah tiba-tiba.
  Ditangani oleh `js/transitions.js` (dipakai bersama kedua halaman).
- **Animasi muncul saat scroll** — kartu spotlight, kartu momen, dan beberapa
  bagian teks akan muncul dengan animasi halus (fade + geser naik sedikit) saat
  pengunjung scroll ke arahnya, bukan langsung muncul semua sekaligus.
- **Musik latar juga ada di halaman utama** — tombol musik mengambang sekarang
  muncul di `index.html` juga, bukan cuma di halaman Momen KKN. File lagunya
  taruh di `audio/beranda-theme.mp3` (terpisah dari `audio/kkn-theme.mp3`, boleh
  pakai lagu yang sama atau beda).
- **Modal cerita didesain ulang** — di layar desktop/tablet, foto dan cerita kini
  tampil berdampingan (bukan foto di atas lalu cerita di bawah), supaya
  pengunjung bisa langsung baca cerita lengkap tanpa perlu scroll di dalam
  modal. Ini berlaku untuk kedua halaman (spotlight desa & momen KKN). Di layar
  HP yang sempit, tetap disusun atas-bawah karena ruang terbatas.
- **Dukungan video di Momen KKN** — array `images` tiap momen di `js/kkn.js`
  sekarang bisa diisi campuran foto dan video (`.mp4`, `.webm`, `.mov`, `.ogg`).
  File video otomatis dikenali dan ditampilkan dengan pemutar video, tidak perlu
  ubah kode selain menambahkan nama filenya ke array. Contoh:
  ```js
  images: ["images/kkn/momen-1a.jpg", "images/kkn/momen-1-video.mp4"]
  ```

## Musik latar di halaman Momen KKN

Halaman `kkn.html` punya tombol musik mengambang di pojok kanan bawah. Cara pasang:

1. Taruh file lagu (format `.mp3`) ke folder `audio/`:
   - Untuk halaman **utama**, beri nama **`beranda-theme.mp3`**
   - Untuk halaman **Momen KKN**, beri nama **`kkn-theme.mp3`**

   Kalau nama filenya beda, buka `index.html` atau `kkn.html`, cari baris:
   ```html
   <audio id="bgMusic" src="audio/beranda-theme.mp3" loop preload="none"></audio>
   ```
   lalu ganti bagian `src="..."` sesuai nama file Anda.
2. Musik akan **otomatis dicoba diputar** saat halaman dibuka. Kalau browser
   memblokirnya (umum terjadi di banyak browser modern), musik akan mulai begitu
   pengunjung melakukan interaksi pertama di halaman (klik, scroll, atau sentuh) —
   ini normal dan bukan bug.
3. Pengunjung bisa jeda/putar ulang kapan saja lewat tombol musik mengambang.
4. Lagu akan berulang (loop) otomatis selama halaman dibuka.

**Mengganti musik:** cukup ganti file di `audio/kkn-theme.mp3` dengan file lagu baru
(nama file sama), tidak perlu ubah kode.

## Struktur file

```
index.html          → halaman utama (profil desa + spotlight)
kkn.html             → halaman momen KKN/KKM
css/style.css        → tampilan/desain bersama (dipakai kedua halaman)
css/kkn.css          → tampilan khusus halaman momen KKN
js/script.js         → data spotlight + logika halaman utama
js/kkn.js            → data momen KKN + logika halaman momen (termasuk deteksi video)
js/music.js          → logika musik latar (dipakai kedua halaman)
js/transitions.js    → transisi halaman + animasi muncul saat scroll (dipakai kedua halaman)
images/              → foto spotlight desa
images/kkn/           → foto & video momen KKN/KKM
audio/                → file musik latar (beranda-theme.mp3, kkn-theme.mp3)
```

## Menjalankan / upload

Ini website statis (HTML/CSS/JS biasa) — tidak butuh server database. Tinggal upload
seluruh folder ini ke hosting (misalnya InfinityFree), atau buka `index.html` langsung
di browser untuk preview lokal.
