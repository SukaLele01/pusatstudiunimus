# Menyederhanakan Situs Menjadi 7 Menu

Isi situs saat ini terlalu banyak (13 bagian, ~60 submenu, bahasa akademik). Rencananya: lebur menjadi **7 menu utama**, tiap menu punya 3-5 poin singkat dengan bahasa resmi namun mudah dipahami masyarakat umum.

## Struktur menu baru

| Menu | Isi yang dilebur ke dalamnya |
| --- | --- |
| Beranda | Ringkasan singkat + jalur cepat ke 6 menu lain |
| Profil | Tentang, visi & misi, struktur organisasi, tim peneliti, fasilitas |
| Riset & Inovasi | Bidang kajian, penelitian berjalan, inovasi & paten, arah riset |
| Pengabdian | Program masyarakat, desa/mitra binaan, dampak, ajakan ikut serta |
| Publikasi & Dokumen | Jurnal & buku, ringkasan kebijakan, unduhan dokumen, pustaka terbuka |
| Layanan & Kerja Sama | Layanan untuk publik/mitra, cara mengajukan kerja sama, peluang hibah & magang riset |
| Berita & Agenda | Berita terbaru, agenda kegiatan, galeri singkat |
| Kontak | Tetap seperti sekarang, dirapikan |

Menu "Lainnya" di navigasi dihapus karena tidak lagi diperlukan.

## Penyederhanaan isi

- Tiap poin ditulis 1-2 kalimat pendek, tanpa jargon seperti "hilirisasi", "klaster", "roadmap", "indeksasi".
- Beranda dipersingkat: hero, 4 angka utama, 6 kartu menu, satu ajakan kontak. Bagian "Peta situs" panjang dan marquee daftar 13 bagian dihapus.
- Halaman bagian tetap memakai satu templat: judul, satu paragraf pembuka, kartu-kartu poin, tautan ke bagian lain.

## Desain & animasi

Tema terang biru-putih-emas, tipografi, dan animasi reveal/hover tetap dipertahankan — hanya jumlah dan panjang isinya yang dikurangi.

## Catatan teknis

- `src/lib/site-data.ts`: sections diringkas dari 13 menjadi 7 entri dengan `subs` maksimal 5 dan teks pendek.
- Route baru/diganti nama: `publikasi-dokumen.tsx`, `layanan-kerjasama.tsx`; route lama (`fokus-kajian`, `dokumen`, `knowledge-hub`, `opportunities`, `researchers`, `kolaborasi`) dihapus dan diarahkan (redirect) ke halaman gabungannya agar tautan lama tidak mati.
- `SiteHeader.tsx`: hapus grup "Lainnya", tampilkan 7 menu + tombol Kontak; menu mobile mengikuti struktur yang sama.
- `SiteFooter.tsx` dan `routes/index.tsx` disesuaikan dengan daftar 7 menu.
- `head()` tiap route diperbarui: judul dan deskripsi unik, bahasa sederhana.
