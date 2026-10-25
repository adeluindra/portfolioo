# Portfolio MSAL — Starter v0.1

Starter untuk portfolio pribadi Moh Syafiq Ade Luwindra, berdasarkan `PORTFOLIO_UI_DESIGN_V1.md`.

## Checkpoint 1 (sudah ada)
- App Router, TypeScript, Tailwind CSS v4
- Design tokens, header responsif, menu mobile, hero autentik
- Featured project preview (3 kartu), experience, contact (anchor nav berfungsi)
- Unduh CV, GitHub, email (tanpa live demo palsu)
- Metadata awal dan aksesibilitas dasar

## Menjalankan di Windows (PowerShell)

1. Extract ZIP dan buka folder `portfolio-msal` di VS Code/Antigravity.
2. Buka terminal di root folder (lokasi file `package.json`).
3. Cek versi Node: `node -v` (gunakan Node 20.9+).
4. Install dependency: `npm install`
5. Jalankan: `npm run dev`
6. Buka `http://localhost:3000`

Untuk pengujian:

```powershell
npm run lint
npm run typecheck
npm run build
```

Catatan: ZIP sengaja tidak menyertakan `node_modules` atau `package-lock.json`. `npm install` akan membuat lockfile sesuai versi yang didapat saat pemasangan. Commit lockfile itu agar instalasi berikutnya konsisten.

## Struktur

```
portfolio-msal/
├── public/
│   ├── docs/resume.pdf
│   └── images/profile.webp
├── src/
│   ├── app/(page.tsx, layout.tsx, globals.css)
│   ├── components/(Header, Hero, ProjectPreview, Experience, Contact, Footer, SectionHeading)
│   └── data/(profile.ts, projects.ts)
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Di mana mengedit konten?

- Nama, email, GitHub, CV, headline: `src/data/profile.ts`
- Project title, desc, stack, GitHub: `src/data/projects.ts`
- Hero: `src/components/Hero.tsx`
- Navigation: `src/components/Header.tsx`
- Warna dan ukuran dasar: `src/app/globals.css`
- Metadata SEO: `src/app/layout.tsx`

## Belum final — wajib sebelum dipublikasikan

- `public/docs/resume.pdf` berasal dari CV terakhir yang tersedia di Project; **periksa ulang, terutama status pendidikan, nomor telepon, dan tanggal pengalaman**. CV bersifat publik bila situs dideploy.
- Foto `public/images/profile.webp` diekstrak dari PDF portfolio asli. Ganti dengan portrait resolusi asli jika ada.
- Jangan klaim hasil 91% sebagai akurasi lapangan; angka itu belum ditampilkan pada kartu agar tidak disalahpahami.
- Halaman detail `/projects/...`, screenshot project asli, halaman About, Skills, Certifications, dan LinkedIn terverifikasi belum dibuat.
- `robots.index=false` sengaja dipasang agar starter belum terindeks sampai data final diverifikasi.
- Nama project dan URL jangan diklaim sebagai live demo. Hanya repository GitHub yang dikonfirmasi ditampilkan.
- Kode ini disiapkan sebagai source starter; pengujian instalasi/build harus dijalankan di laptop yang terhubung internet.

## Checkpoint berikutnya

1. Review Header + Hero pada 375px dan desktop.
2. Ganti placeholder visual kartu project menjadi screenshot asli.
3. Tambah case study project satu per satu, mulai BISINDO Detector.
4. Tambah About, Skills, Certifications; QA, SEO, deployment.
