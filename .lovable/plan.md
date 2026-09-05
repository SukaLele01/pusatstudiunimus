# Struktur Menu Baru: 5 Menu Isi + Mitra + Kontak

Bisa. Struktur yang Anda tulis lebih ringkas dari yang sekarang dan tetap mencakup semua informasi penting. Isi yang ada sekarang akan dipindahkan ke rumah barunya, tidak ada yang hilang.

## Struktur akhir

| Menu | Submenu | Isi yang dipindahkan dari halaman sekarang |
| --- | --- | --- |
| Beranda | — | Pengenalan, angka utama, pintu masuk ke menu, ajakan kontak |
| Tentang Kami | Profil, Visi & Misi, Struktur Organisasi | Dari Profil (Tentang, Visi & Misi, Struktur). Tim Peneliti dan Fasilitas digabung ke Profil sebagai bagian akhir |
| Program | Pengabdian Masyarakat, Pemberdayaan Masyarakat, Desa/Mitra Binaan | Dari Pengabdian, ditambah Bidang Kajian & Penelitian/Inovasi dari Riset & Inovasi sebagai bagian "program riset" |
| Kegiatan | Berita, Agenda, Dokumentasi | Dari Berita & Agenda (Galeri menjadi Dokumentasi) |
| Publikasi | Artikel, Laporan | Dari Publikasi & Dokumen (jurnal/buku/materi populer menjadi Artikel; ringkasan kebijakan & dokumen resmi menjadi Laporan) |
| Mitra | — (satu halaman) | Dari Layanan & Kerja Sama: layanan kajian, pelatihan, cara mengajukan kerja sama, peluang mahasiswa, hibah |
| Kontak | — | Alamat, email, telepon, formulir |

## Yang perlu diputuskan/dijaga

- Riset & Inovasi tidak lagi jadi menu sendiri. Isinya masuk ke Program (bidang kajian, penelitian berjalan, inovasi) agar pengunjung tetap bisa menemukannya. Jika Anda ingin Riset tetap berdiri sendiri, cukup beri tahu.
- Peluang mahasiswa (magang riset, hibah) ditaruh di Mitra. Bisa juga dipindah ke Program bila lebih cocok.
- Semua tautan lama (profil, riset-inovasi, pengabdian, publikasi-dokumen, layanan-kerjasama, berita-agenda, dan slug lama lainnya) tetap hidup dan diarahkan ke halaman baru, jadi tidak ada tautan mati.

## Catatan teknis

- `src/lib/site-data.ts`: susun ulang `sections` menjadi tentang-kami, program, kegiatan, publikasi, mitra dengan submenu sesuai tabel; teks tetap Bahasa Indonesia resmi sederhana, konteks Unimus.
- Halaman baru: `src/routes/tentang-kami.tsx`, `program.tsx`, `kegiatan.tsx`, `publikasi.tsx` (ubah dari pengalihan menjadi halaman isi), `mitra.tsx` — semuanya memakai `SectionPage`.
- Halaman lama jadi pengalihan: `profil.tsx`, `riset-inovasi.tsx`, `pengabdian.tsx`, `publikasi-dokumen.tsx`, `layanan-kerjasama.tsx`, `berita-agenda.tsx`, plus slug lama yang sudah ada.
- `src/routes/index.tsx`: kartu pilar dan blok "Untuk Anda"/"Menu Utama" diarahkan ke slug baru.
- `SiteHeader.tsx` dan `SiteFooter.tsx` otomatis mengikuti `sections`; Mitra ditampilkan tanpa dropdown karena tidak punya submenu.
- `head()` unik per halaman baru (judul, deskripsi, og, twitter). Tema biru–putih–emas dan animasi tidak diubah.
