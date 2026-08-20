# Rancangan Situs Pusat Studi Unimus — Struktur Ringkas & Berbasis Kebutuhan Pengunjung

Situs sudah diringkas menjadi 6 menu isi + Kontak pada data isi (`src/lib/site-data.ts`), namun beranda masih memakai tautan menu versi lama (`fokus-kajian`, `publikasi`) sehingga tautan tersebut hanya berujung pada halaman pengalihan, dan bagian "Peta situs" serta pita berjalan (marquee) masih menampilkan struktur lama yang panjang. Rencana ini merapikan sisa pekerjaan itu dan menajamkan isi agar terasa seperti dokumen rancangan resmi unit riset universitas.

## Struktur akhir menu (tetap 6 + Kontak)

| Menu | Untuk siapa | Isi utama |
| --- | --- | --- |
| Beranda | Semua | Pengenalan singkat, angka utama, 6 pintu masuk, ajakan kontak |
| Profil | Masyarakat, mitra | Tentang, visi & misi, struktur, tim peneliti, fasilitas |
| Riset & Inovasi | Dosen, peneliti, mitra | Bidang kajian, penelitian berjalan, inovasi & HKI, arah riset |
| Pengabdian | Masyarakat, desa/mitra | Program, desa binaan, dampak, cara ikut serta |
| Publikasi & Dokumen | Dosen, mahasiswa, publik | Jurnal & buku, ringkasan kebijakan, materi populer, dokumen unduhan |
| Layanan & Kerja Sama | Mitra, instansi, mahasiswa | Layanan kajian, pelatihan/narasumber, alur kerja sama, magang & hibah |
| Berita & Agenda | Semua | Berita, agenda kegiatan terbuka, galeri |
| Kontak | Semua | Alamat, email, telepon, formulir |

Tidak ada menu tambahan. Informasi yang dulu berdiri sendiri (Fokus Kajian, Dokumen, Knowledge Hub, Opportunities, Researchers, Kolaborasi, Layanan, Publikasi) tetap berada di dalam menu gabungan di atas, dan URL lamanya tetap hidup lewat pengalihan yang sudah ada.

## Perapian beranda

- Kartu "pilar" diarahkan ke 4 menu yang paling dicari pengunjung: Riset & Inovasi, Pengabdian, Publikasi & Dokumen, Layanan & Kerja Sama (tidak lagi ke slug lama).
- Bagian "Peta situs" diganti menjadi daftar 6 kartu menu yang ringkas, satu kalimat per menu.
- Pita berjalan (marquee) dipendekkan menjadi beberapa kata kunci saja, bukan daftar seluruh bagian.
- Ditambah satu blok pendek "Untuk Anda": mahasiswa, dosen/peneliti, mitra & instansi, masyarakat — masing-masing satu baris dan satu tautan ke menu yang relevan.

## Nada bahasa

Bahasa Indonesia resmi ala unit akademik Unimus, kalimat pendek, tanpa jargon (hilirisasi, klaster, roadmap, indeksasi). Menyebut konteks Unimus dan Biro Kemahasiswaan dan Alumni di bagian pembuka dan footer.

## Catatan teknis

- `src/routes/index.tsx`: perbaiki slug pilar, ganti bagian "Peta situs" dengan kartu 6 menu, pendekkan marquee, tambah blok "Untuk Anda". Ini juga menghilangkan potensi galat build dari tautan slug lama.
- `src/components/SiteFooter.tsx`: sesuaikan pembagian kolom agar rapi untuk 6 menu + Kontak.
- `head()` pada `profil.tsx`, `riset-inovasi.tsx`, `pengabdian.tsx`, `berita-agenda.tsx`: judul dan deskripsi unik berbahasa sederhana, plus `og:type` dan `twitter:card` seperti halaman gabungan baru.
- Tema terang biru–putih–emas, tipografi, dan animasi reveal/hover dipertahankan tanpa perubahan.
- Verifikasi akhir: cek beranda dan tiap menu di preview, pastikan tidak ada tautan mati.
