# Dashboard Admin untuk Berita, Agenda, Publikasi, dan Dokumentasi

Ya, layak. Karena isi berubah tiap minggu dan yang mengisi adalah staf non-teknis, dashboard menghemat waktu dan menghindari salah edit. Yang dibuat hanya untuk tiga bagian yang benar-benar sering berubah; teks halaman Profil, Program, dan Mitra tetap tetap (bisa ditambahkan nanti bila perlu).

## Apa yang akan ada

**Halaman masuk (login)**
- Alamat khusus, misal `/masuk`, dengan email dan kata sandi.
- Hanya orang yang Anda daftarkan bisa masuk. Pengunjung biasa tidak melihat menu ini.

**Dashboard admin** (`/admin`), berisi 3 bagian:

| Bagian | Yang bisa dilakukan staf |
| --- | --- |
| Berita | Tulis, ubah, hapus. Judul, tanggal, ringkasan, isi, foto utama, status (draf/terbit) |
| Agenda | Tambah acara: judul, tanggal & waktu, lokasi, keterangan, tautan pendaftaran |
| Publikasi | Tambah artikel/laporan: judul, penulis, tahun, jenis (Artikel/Laporan), unggah berkas PDF atau tautan |
| Dokumentasi | Unggah foto kegiatan, beri judul dan keterangan singkat |

**Halaman publik ikut berubah otomatis**
- `/kegiatan` menampilkan daftar Berita, Agenda mendatang, dan Dokumentasi dari isi yang diunggah.
- `/publikasi` menampilkan daftar Artikel dan Laporan yang bisa diunduh.
- Beranda menampilkan 3 berita terbaru dan agenda terdekat.
- Halaman rincian berita, misal `/kegiatan/berita/pelatihan-kader-kesehatan`, agar bisa dibagikan ke WhatsApp/media sosial dengan gambar dan judul yang benar.
- Bagian yang belum ada isinya tampil dengan pesan sopan, bukan halaman kosong.

## Yang perlu Anda siapkan

- Satu email untuk akun admin pertama (akun berikutnya bisa Anda tambahkan sendiri dari dashboard).
- Beberapa contoh berita, agenda, publikasi, dan foto akan diisikan lebih dulu sebagai contoh agar halaman tidak kosong; silakan ganti dengan yang asli.

## Catatan teknis

- Aktifkan Lovable Cloud (database, penyimpanan berkas, autentikasi email/kata sandi).
- Tabel: `posts` (berita), `events` (agenda), `publications`, `gallery_items`, plus `user_roles` + fungsi `has_role` (peran `admin`, `editor`) — peran disimpan di tabel terpisah, bukan di profil.
- RLS: publik hanya `SELECT` baris `status = 'published'`; tulis/ubah/hapus hanya untuk `has_role(auth.uid(),'admin'|'editor')`. GRANT eksplisit per tabel (anon SELECT hanya untuk tabel isi publik).
- Storage bucket publik `media` untuk foto dan PDF; unggah lewat klien browser dengan kebijakan storage berbasis peran.
- Baca publik lewat `createServerFn` dengan klien publishable (SSR aman) + `ensureQueryData`/`useSuspenseQuery`; tulis lewat `createServerFn` dengan `requireSupabaseAuth` dan validasi Zod.
- Rute admin di bawah `src/routes/_authenticated/` (gerbang bawaan integrasi), halaman `/auth` untuk masuk. Header menampilkan tautan admin hanya bila sesi aktif.
- `head()` unik per halaman baru, termasuk `og:image` dari URL gambar berita pada halaman rincian.
- Isi statis di `src/lib/site-data.ts` tetap dipakai untuk teks pengantar tiap menu; hanya daftar isi yang pindah ke database. Tema biru–putih–emas dan animasi tidak diubah.
