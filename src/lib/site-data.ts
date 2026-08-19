export type SubItem = { title: string; desc: string };

export type Section = {
  slug: string;
  label: string;
  title: string;
  tagline: string;
  intro: string;
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
    slug: "profil",
    label: "Profil",
    title: "Profil Pusat Studi",
    tagline: "Siapa kami dan apa yang kami kerjakan",
    intro:
      "Pusat Studi adalah lembaga riset universitas yang menghubungkan hasil penelitian dengan kebutuhan masyarakat, dunia usaha, dan pemerintah.",
    subs: [
      {
        title: "Tentang Kami",
        desc: "Kami mengelola penelitian, inovasi, dan program bersama masyarakat di lingkungan universitas.",
      },
      {
        title: "Visi & Misi",
        desc: "Menjadi rujukan riset yang bermutu dan bermanfaat langsung bagi masyarakat luas.",
      },
      {
        title: "Struktur Organisasi",
        desc: "Dipimpin seorang Kepala Pusat, dibantu sekretaris, koordinator bidang, dan tim administrasi.",
      },
      {
        title: "Tim Peneliti",
        desc: "Puluhan dosen dari berbagai bidang ilmu, dibantu mahasiswa dan mitra pakar dari luar kampus.",
      },
      {
        title: "Fasilitas",
        desc: "Ruang kerja bersama, laboratorium data, perpustakaan digital, dan ruang diskusi publik.",
      },
    ],
  },
  {
    slug: "riset-inovasi",
    label: "Riset & Inovasi",
    title: "Riset & Inovasi",
    tagline: "Penelitian yang berujung pada solusi nyata",
    intro:
      "Penelitian kami dimulai dari masalah nyata di lapangan, lalu dikembangkan menjadi alat, sistem, atau cara kerja baru yang bisa dipakai.",
    subs: [
      {
        title: "Bidang Kajian",
        desc: "Kesehatan, pendidikan, ekonomi masyarakat, teknologi terapan, lingkungan, serta sosial dan budaya.",
      },
      {
        title: "Penelitian Berjalan",
        desc: "Daftar penelitian yang sedang dikerjakan beserta tim, mitra, dan waktu pelaksanaannya.",
      },
      {
        title: "Inovasi & Paten",
        desc: "Alat dan aplikasi hasil penelitian yang sudah diuji, sebagian telah didaftarkan hak kekayaan intelektualnya.",
      },
      {
        title: "Arah Riset",
        desc: "Rencana penelitian lima tahun ke depan agar kegiatan lebih terarah dan hasilnya terukur.",
      },
    ],
  },
  {
    slug: "pengabdian",
    label: "Pengabdian",
    title: "Pengabdian kepada Masyarakat",
    tagline: "Hasil riset yang langsung dirasakan warga",
    intro:
      "Kami mendampingi desa, sekolah, dan usaha kecil dengan program yang disusun dari hasil penelitian dan dievaluasi bersama warga.",
    subs: [
      {
        title: "Program Masyarakat",
        desc: "Kegiatan seperti penyuluhan kesehatan, pendampingan UMKM, dan pelatihan untuk sekolah.",
      },
      {
        title: "Desa & Mitra Binaan",
        desc: "Desa dan komunitas yang kami dampingi secara berkelanjutan selama beberapa tahun.",
      },
      {
        title: "Dampak Program",
        desc: "Perubahan yang tercatat: layanan lebih cepat, kebiasaan lebih sehat, pendapatan meningkat.",
      },
      {
        title: "Ikut Serta",
        desc: "Warga, komunitas, atau instansi dapat mengusulkan program pendampingan melalui halaman Kontak.",
      },
    ],
  },
  {
    slug: "publikasi-dokumen",
    label: "Publikasi & Dokumen",
    title: "Publikasi & Dokumen",
    tagline: "Semua hasil dan dokumen resmi dalam satu tempat",
    intro:
      "Hasil penelitian kami terbuka untuk dibaca siapa pun, mulai dari artikel ilmiah hingga ringkasan singkat dan infografis.",
    subs: [
      {
        title: "Jurnal & Buku",
        desc: "Artikel ilmiah dan buku hasil kajian yang telah diterbitkan.",
      },
      {
        title: "Ringkasan Kebijakan",
        desc: "Ringkasan dua sampai empat halaman berisi temuan penting dan saran tindakan.",
      },
      {
        title: "Materi Populer",
        desc: "Infografis, video singkat, dan artikel media untuk pembaca umum.",
      },
      {
        title: "Dokumen Resmi",
        desc: "Rencana kerja, panduan, format berkas, dan laporan tahunan yang dapat diunduh.",
      },
    ],
  },
  {
    slug: "layanan-kerjasama",
    label: "Layanan & Kerja Sama",
    title: "Layanan & Kerja Sama",
    tagline: "Dukungan riset untuk mitra dan mahasiswa",
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
  {
    slug: "berita-agenda",
    label: "Berita & Agenda",
    title: "Berita & Agenda",
    tagline: "Kabar terbaru dan jadwal kegiatan",
    intro:
      "Ikuti kabar kegiatan kami dan jadwal acara yang terbuka untuk umum, seperti seminar, pelatihan, dan diskusi publik.",
    subs: [
      {
        title: "Berita Terbaru",
        desc: "Kabar hasil penelitian, kunjungan mitra, penghargaan, dan program baru.",
      },
      {
        title: "Agenda Kegiatan",
        desc: "Jadwal seminar, pelatihan, dan diskusi yang bisa diikuti masyarakat umum.",
      },
      {
        title: "Galeri",
        desc: "Foto dan dokumentasi singkat dari kegiatan kami di kampus maupun di lapangan.",
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
