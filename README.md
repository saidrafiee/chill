# Chill - Slicing UI Streaming Website (Netflix Clone)

Proyek slicing UI website streaming film bernama **Chill** berdasarkan rancangan Figma/Template dengan menggunakan **HTML5**, **CSS3 (Tailwind CSS)**, dan package manager **pnpm**.

---

## 📁 Struktur Folder Proyek

```text
chill/
├── assets/
│   ├── icons/
│   │   ├── logo.svg        # Logo utama Chill (clapperboard + teks)
│   │   └── google.svg      # Ikon Google untuk tombol login/daftar
│   └── images/             # Gambar & poster film
├── src/
│   └── input.css           # Sumber Tailwind CSS & custom styling
├── dist/
│   └── output.css          # CSS hasil kompilasi Tailwind (minified)
├── index.html              # Halaman Beranda (Home)
├── masuk.html              # Halaman Masuk (Login)
├── daftar.html             # Halaman Daftar (Register)
├── tailwind.config.js      # Konfigurasi kustom tema warna Chill
├── package.json            # Script & dependensi pnpm
└── template.png            # Acuan desain asli
```

---

## 🚀 Cara Menjalankan Proyek

### 1. Mode Development (Auto-compile Tailwind)

Saat mengedit file HTML atau CSS, jalankan perintah berikut di terminal:

```bash
pnpm dev
```

Perintah ini akan memantau (_watch mode_) setiap perubahan class Tailwind dan langsung memperbarui file `./dist/output.css`.

### 2. Build untuk Produksi

Untuk mengompilasi CSS versi minified akhir:

```bash
pnpm build
```

### 3. Membuka Halaman di Browser

Anda dapat membuka file HTML secara langsung:

- Buka file [index.html](file:///c:/0.%20CODING/BOOTCAMP%20HARISENIN%20FSD/Mission%203/chill/index.html) untuk melihat **Beranda**.
- Buka file [masuk.html](file:///c:/0.%20CODING/BOOTCAMP%20HARISENIN%20FSD/Mission%203/chill/masuk.html) untuk melihat halaman **Masuk / Login**.
- Buka file [daftar.html](file:///c:/0.%20CODING/BOOTCAMP%20HARISENIN%20FSD/Mission%203/chill/daftar.html) untuk melihat halaman **Daftar / Register**.

_Tip_: Anda juga bisa menggunakan ekstensi VS Code **Live Server** untuk membuka `index.html` dengan reload otomatis di browser.

---

## 🎨 Halaman yang Tersedia

1. **Beranda (`index.html`)**:
   - Navbar sticky dengan brand logo & profil.
   - Hero Banner "Duty After School" dengan tombol aksi dan rating 18+.
   - Baris tontonan: _Melanjutkan Tonton Film_ (dengan progress bar), _Top Rating Hari ini_, _Film Trending_, dan _Rilis Baru_.
   - Footer lengkap dengan navigasi genre dan bantuan.
   - Responsif untuk desktop, tablet, dan smartphone.
2. **Masuk (`masuk.html`)**:
   - Tampilan modal login di tengah dengan background bioskop sinematik.
   - Input username, password (dengan tombol toggle lihat sandi), tombol masuk, serta login alternatif dengan Google.
3. **Daftar (`daftar.html`)**:
   - Form pendaftaran dengan input username, password, dan konfirmasi password.
