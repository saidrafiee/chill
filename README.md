# Chill

Chill adalah proyek antarmuka website streaming film dan serial yang dibuat sebagai latihan slicing UI. Proyek ini menggunakan HTML dan Tailwind CSS, dengan halaman beranda, masuk, dan pendaftaran.

## Teknologi

- HTML
- Tailwind CSS 3
- pnpm

## Struktur Proyek

```text
.
├── assets/
│   ├── banners/
│   ├── icons/
│   ├── posters/
│   ├── background-daftar.jpg
│   ├── background-masuk.jpg
│   └── hero-banner.png
├── dist/
│   └── output.css
├── src/
│   └── input.css
├── daftar.html
├── index.html
├── masuk.html
├── package.json
├── pnpm-lock.yaml
└── tailwind.config.js
```

## Menjalankan Proyek

Pastikan Node.js dan pnpm sudah terpasang. Instal dependensi dari direktori proyek:

```bash
pnpm install
```

Untuk mengembangkan proyek, jalankan Tailwind dalam mode watch:

```bash
pnpm dev
```

Perintah tersebut membuat atau memperbarui `dist/output.css` saat file sumber berubah. Untuk menghasilkan CSS minified, jalankan:

```bash
pnpm build
```

Setelah menjalankan salah satu perintah di atas, buka [index.html](index.html) menggunakan Live Server atau server lokal lainnya. Halaman lainnya: [masuk.html](masuk.html) dan [daftar.html](daftar.html).

## Halaman

- **Beranda**: banner utama dan beberapa bagian rekomendasi film.
- **Masuk**: tampilan form masuk.
- **Daftar**: tampilan form pendaftaran.

## Batasan Proyek

Proyek ini berfokus pada frontend. Form masuk dan pendaftaran hanya berupa antarmuka; backend dan autentikasi pengguna belum tersedia.
