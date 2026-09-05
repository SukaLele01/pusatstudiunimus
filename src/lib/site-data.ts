export type SubItem = { title: string; desc: string };

export type Section = {
  slug: string;
  label: string;
  title: string;
  tagline: string;
  intro: string;
  /** Sembunyikan dropdown submenu di navigasi (halaman tunggal). */
  flat?: boolean;
  subs: SubItem[];
};

export const SITE = {
  name: "Pusat Studi Riset & Inovasi",
  short: "Pusat Studi",
  org: "Biro Kemahasiswaan dan Alumni Unimus",
  tagline: "Riset berdampak, kebijakan berbasis bukti",
  email: "pusatstudi@unimus.ac.id",
  phone: "+62 24 7647 4444",
  address: "Kampus Terpadu Unimus, Jl. Kedungmundu Raya No. 18, Semarang 50273",
};

export const sections: Section[] = [
  {
    slug: "tentang-kami",
    label: "Tentang Kami",
    title: "Tentang Kami",
    tagline: "Siapa kami dan apa yang kami kerjakan",
    intro:
      "Pusat Studi adalah unit riset Universitas Muhammadiyah Semarang yang menghubungkan hasil penelitian dengan kebutuhan masyarakat, dunia usaha, dan pemerintah.",
    subs: [
      {
        title: "Profil",
        desc: "Kami mengelola penelitian, inovasi, dan program bersama masyarakat di lingkungan Unimus, didukung dosen dari berbagai bidang ilmu, mahasiswa, serta mitra pakar dari luar kampus. Kegiatan berlangsung di ruang kerja bersama, laboratorium data, perpustakaan digital, dan ruang diskusi publik.",
      },
      {
        title: "Visi & Misi",
        desc: "Menjadi rujukan riset yang bermutu dan bermanfaat langsung bagi masyarakat luas. Misi kami: menjalankan penelitian yang menjawab masalah nyata, membuka hasilnya untuk umum, dan mendampingi mitra menerapkannya.",
      },
      {
        title: "Struktur Organisasi",
        desc: "Dipimpin seorang Kepala Pusat, dibantu sekretaris, koordinator bidang, dan tim administrasi. Setiap program memiliki ketua tim yang bertanggung jawab atas pelaksanaan dan laporannya.",
      },
    ],
  },
  {
    slug: "program",
    label: "Program",
    title: "Program Pusat Studi",
    tagline: "Kegiatan riset dan pendampingan yang kami jalankan",
    intro:
      "Program kami dimulai dari masalah nyata di lapangan, dikerjakan bersama warga dan mitra, lalu hasilnya dievaluasi bersama agar benar-benar terpakai.",
    subs: [
      {
        title: "Pengabdian Masyarakat",
        desc: "Penyuluhan kesehatan, pelatihan untuk sekolah, dan kegiatan lapangan lain yang disusun dari hasil penelitian dosen dan mahasiswa.",
      },
      {
        title: "Pemberdayaan Masyarakat",
        desc: "Pendampingan usaha kecil, kelompok warga, dan kader kesehatan agar mampu berjalan mandiri setelah program selesai.",
      },
      {
        title: "Desa/Mitra Binaan",
        desc: "Desa, sekolah, dan komunitas yang kami dampingi berkelanjutan selama beberapa tahun, dengan catatan perkembangan tiap tahun.",
      },
      {
        title: "Bidang Kajian & Penelitian",
        desc: "Kesehatan, pendidikan, ekonomi masyarakat, teknologi terapan, lingkungan, serta sosial dan budaya. Daftar penelitian berjalan memuat tim, mitra, dan waktu pelaksanaan.",
      },
      {
        title: "Inovasi & Hak Kekayaan Intelektual",
        desc: "Alat dan aplikasi hasil penelitian yang sudah diuji di lapangan, sebagian telah didaftarkan hak kekayaan intelektualnya.",
      },
    ],
  },
  {
    slug: "kegiatan",
    label: "Kegiatan",
    title: "Kegiatan",
    tagline: "Kabar terbaru, jadwal acara, dan dokumentasi",
    intro:
      "Ikuti kabar kegiatan kami dan jadwal acara yang terbuka untuk umum, seperti seminar, pelatihan, dan diskusi publik.",
    subs: [
      {
        title: "Berita",
        desc: "Kabar hasil penelitian, kunjungan mitra, penghargaan, dan program baru.",
      },
      {
        title: "Agenda",
        desc: "Jadwal seminar, pelatihan, dan diskusi yang bisa diikuti masyarakat umum.",
      },
      {
        title: "Dokumentasi",
        desc: "Foto dan catatan singkat dari kegiatan kami di kampus maupun di lapangan.",
      },
    ],
  },
  {
    slug: "publikasi",
    label: "Publikasi",
    title: "Publikasi",
    tagline: "Hasil kajian dan dokumen resmi dalam satu tempat",
    intro:
      "Hasil penelitian kami terbuka untuk dibaca siapa pun, mulai dari artikel ilmiah hingga ringkasan singkat dan dokumen unduhan.",
    subs: [
      {
        title: "Artikel",
        desc: "Artikel ilmiah, buku hasil kajian, serta bacaan populer seperti infografis dan tulisan media untuk pembaca umum.",
      },
      {
        title: "Laporan",
        desc: "Ringkasan kebijakan dua sampai empat halaman, laporan tahunan, panduan, dan format berkas yang dapat diunduh.",
      },
    ],
  },
  {
    slug: "mitra",
    label: "Mitra",
    title: "Mitra & Kerja Sama",
    tagline: "Dukungan riset untuk mitra, instansi, dan mahasiswa",
    flat: true,
    intro:
      "Kami membuka layanan kajian dan kerja sama bagi instansi, dunia usaha, komunitas, serta mahasiswa yang ingin belajar meneliti.",
    subs: [
      {
        title: "Layanan Kajian",
        desc: "Survei, analisis data, evaluasi program, dan penyusunan dokumen perencanaan.",
      },
      {
        title: "Pelatihan & Narasumber",
        desc: "Pelatihan metode penelitian dan penulisan, serta permintaan pembicara untuk kegiatan Anda.",
      },
      {
        title: "Cara Mengajukan Kerja Sama",
        desc: "Kirim gagasan melalui halaman Kontak; kami balas paling lama tujuh hari kerja.",
      },
      {
        title: "Peluang untuk Mahasiswa",
        desc: "Magang riset, asisten peneliti, dan bantuan dana kecil untuk penelitian mandiri.",
      },
      {
        title: "Informasi Hibah",
        desc: "Pengumuman hibah penelitian dan ajakan pengiriman proposal yang diperbarui berkala.",
      },
    ],
  },
];

export const getSection = (slug: string) => sections.find((s) => s.slug === slug)!;

export const stats = [
  { value: "120+", label: "Penelitian aktif" },
  { value: "48", label: "Publikasi ilmiah" },
  { value: "26", label: "Mitra kerja sama" },
  { value: "15", label: "Desa binaan" },
];
