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
    tagline: "Identitas, arah, dan sumber daya kelembagaan",
    intro:
      "Pusat Studi hadir sebagai simpul akademik yang menghubungkan riset multidisiplin dengan kebutuhan nyata masyarakat, industri, dan pemerintah.",
    subs: [
      {
        title: "Tentang Pusat Studi",
        desc: "Lembaga riset internal universitas yang mengelola kajian strategis, inovasi terapan, dan diseminasi pengetahuan lintas fakultas.",
      },
      {
        title: "Sejarah & Latar Belakang",
        desc: "Berdiri dari kebutuhan akan riset yang terintegrasi, tumbuh melalui kolaborasi antarprogram studi dan kemitraan eksternal.",
      },
      {
        title: "Visi, Misi & Tujuan",
        desc: "Menjadi rujukan kajian berbasis bukti di tingkat nasional melalui riset bermutu, publikasi terindeks, dan hilirisasi berdampak.",
      },
      {
        title: "Struktur Organisasi",
        desc: "Kepala Pusat, sekretaris, koordinator klaster riset, unit publikasi, unit kemitraan, dan tim administrasi.",
      },
      {
        title: "Tim / Researchers",
        desc: "Peneliti tetap, peneliti afiliasi, asisten riset mahasiswa, serta mitra pakar dari lembaga dan universitas lain.",
      },
      {
        title: "Fasilitas",
        desc: "Ruang kolaborasi, laboratorium data, studio produksi konten ilmiah, perpustakaan digital, dan ruang diskusi kebijakan.",
      },
    ],
  },
  {
    slug: "fokus-kajian",
    label: "Fokus Kajian",
    title: "Fokus Kajian",
    tagline: "Peta tematik yang memandu seluruh aktivitas riset",
    intro:
      "Setiap agenda riset disusun dalam klaster tematik agar kolaborasi lebih terarah dan capaian dapat diukur dari tahun ke tahun.",
    subs: [
      {
        title: "Bidang Kajian",
        desc: "Kesehatan masyarakat, pendidikan, ekonomi kerakyatan, teknologi terapan, lingkungan, serta sosial-humaniora.",
      },
      {
        title: "Research Cluster",
        desc: "Klaster peneliti lintas disiplin dengan koordinator, agenda tahunan, dan target luaran yang spesifik.",
      },
      {
        title: "Topik Unggulan",
        desc: "Isu prioritas yang dikawal jangka panjang: transformasi digital layanan publik, gizi dan stunting, energi bersih, kota tangguh.",
      },
      {
        title: "Research Roadmap",
        desc: "Tahapan lima tahun dari eksplorasi, pengembangan, uji lapangan, hingga adopsi kebijakan dan komersialisasi.",
      },
    ],
  },
  {
    slug: "riset-inovasi",
    label: "Riset & Inovasi",
    title: "Riset & Inovasi",
    tagline: "Dari pertanyaan penelitian hingga produk yang dipakai",
    intro:
      "Portofolio riset dikelola sebagai siklus utuh: perencanaan, pelaksanaan, perlindungan kekayaan intelektual, dan hilirisasi.",
    subs: [
      {
        title: "Penelitian",
        desc: "Skema penelitian internal, hibah nasional, dan penelitian kerja sama dengan pemangku kepentingan.",
      },
      {
        title: "Research Project",
        desc: "Basis data proyek aktif dengan informasi tim, mitra, luaran, dan periode pelaksanaan.",
      },
      {
        title: "Penelitian Unggulan",
        desc: "Proyek terpilih dengan dampak terukur, publikasi bereputasi, dan replikasi di lokasi lain.",
      },
      {
        title: "Inovasi & Prototipe",
        desc: "Purwarupa alat, sistem informasi, dan model intervensi yang telah diuji terbatas di lapangan.",
      },
      {
        title: "HKI / Paten",
        desc: "Pendampingan pencatatan hak cipta, paten sederhana, desain industri, dan merek atas luaran riset.",
      },
      {
        title: "Hilirisasi",
        desc: "Jalur adopsi hasil riset melalui lisensi, kemitraan industri, dan implementasi program pemerintah daerah.",
      },
    ],
  },
  {
    slug: "pengabdian",
    label: "Pengabdian & Dampak",
    title: "Pengabdian & Dampak",
    tagline: "Pengetahuan yang bekerja di tengah masyarakat",
    intro:
      "Program pengabdian dirancang berbasis temuan riset, dijalankan bersama komunitas, dan dievaluasi dengan indikator dampak.",
    subs: [
      {
        title: "Program PkM",
        desc: "Pengabdian kepada masyarakat tematik: literasi kesehatan, penguatan UMKM, pendampingan sekolah, dan mitigasi bencana.",
      },
      {
        title: "Masyarakat Binaan",
        desc: "Desa dan komunitas mitra yang didampingi multitahun dengan pendekatan partisipatif.",
      },
      {
        title: "Program Unggulan",
        desc: "Model intervensi yang terbukti berhasil dan siap direplikasi oleh pemerintah maupun mitra lain.",
      },
      {
        title: "Impact / Dampak",
        desc: "Laporan dampak sosial dan ekonomi: perubahan perilaku, efisiensi layanan, dan peningkatan pendapatan.",
      },
    ],
  },
  {
    slug: "publikasi",
    label: "Publikasi",
    title: "Publikasi",
    tagline: "Rekam jejak ilmiah yang terbuka dan tertelusur",
    intro:
      "Seluruh luaran dikurasi dan diarsipkan agar mudah diakses akademisi, pembuat kebijakan, dan masyarakat umum.",
    subs: [
      { title: "Jurnal", desc: "Artikel pada jurnal nasional terakreditasi dan jurnal internasional terindeks." },
      { title: "Buku", desc: "Buku referensi, monograf, dan bunga rampai hasil kajian klaster." },
      { title: "Policy Brief", desc: "Ringkasan kebijakan 2–4 halaman dengan rekomendasi tindakan yang operasional." },
      { title: "Research Brief", desc: "Ringkasan temuan riset untuk kalangan praktisi dan mitra program." },
      { title: "Laporan", desc: "Laporan akhir penelitian, laporan program, dan laporan evaluasi mitra." },
      { title: "Artikel Populer", desc: "Tulisan opini dan penjelasan ilmiah untuk media massa dan kanal digital." },
      { title: "Repository", desc: "Arsip digital naskah, data pendukung, dan materi presentasi yang dapat diunduh." },
    ],
  },
  {
    slug: "researchers",
    label: "Researchers",
    title: "Researchers",
    tagline: "Orang-orang di balik setiap temuan",
    intro:
      "Peneliti dikelompokkan menurut keahlian dan kelompok riset sehingga mitra dapat menemukan pakar yang tepat dengan cepat.",
    subs: [
      { title: "Daftar Peneliti", desc: "Direktori peneliti dengan afiliasi fakultas, jabatan fungsional, dan kontak resmi." },
      { title: "Expertise", desc: "Peta keahlian: epidemiologi, kebijakan publik, ekonometrika, rekayasa perangkat lunak, dan lain-lain." },
      { title: "Research Group", desc: "Kelompok riset dengan agenda bersama, pertemuan berkala, dan target luaran tahunan." },
      { title: "Profil Peneliti", desc: "Halaman profil berisi riwayat pendidikan, publikasi terpilih, dan proyek berjalan." },
    ],
  },
  {
    slug: "kolaborasi",
    label: "Kolaborasi",
    title: "Kolaborasi",
    tagline: "Riset tumbuh lebih cepat bersama mitra",
    intro:
      "Kami membuka kerja sama dengan universitas, kementerian, pemerintah daerah, industri, dan organisasi masyarakat sipil.",
    subs: [
      { title: "Mitra", desc: "Daftar mitra aktif beserta bentuk kerja sama dan periode perjanjian." },
      { title: "Research Partnership", desc: "Kemitraan riset jangka menengah dengan pembagian peran dan sumber daya yang jelas." },
      { title: "Joint Research", desc: "Penelitian bersama lintas institusi, termasuk pertukaran peneliti dan penulisan bersama." },
      { title: "Layanan Narasumber", desc: "Permintaan pembicara untuk seminar, pelatihan, uji publik, dan diskusi kebijakan." },
      { title: "Ajukan Kolaborasi", desc: "Formulir pengajuan gagasan kerja sama yang ditindaklanjuti maksimal 7 hari kerja." },
    ],
  },
  {
    slug: "layanan",
    label: "Layanan",
    title: "Layanan",
    tagline: "Dukungan profesional berbasis kapasitas riset",
    intro:
      "Layanan dirancang untuk institusi, dunia usaha, dan mahasiswa yang membutuhkan dukungan metodologis maupun analitis.",
    subs: [
      { title: "Konsultasi", desc: "Pendampingan perumusan masalah, desain riset, dan interpretasi temuan." },
      { title: "Data & Riset", desc: "Pengumpulan data lapangan, survei, dan analisis statistik dengan protokol etik." },
      { title: "Training", desc: "Pelatihan metodologi, analisis data, penulisan ilmiah, dan manajemen riset." },
      { title: "Consulting", desc: "Kajian kelayakan, evaluasi program, dan penyusunan dokumen perencanaan." },
      { title: "Magang", desc: "Program magang riset bagi mahasiswa dengan pembimbingan langsung peneliti." },
      { title: "Research Assistant", desc: "Rekrutmen asisten riset terbuka untuk mahasiswa berprestasi setiap semester." },
    ],
  },
  {
    slug: "opportunities",
    label: "Opportunities",
    title: "Opportunities",
    tagline: "Ruang tumbuh untuk peneliti dan mahasiswa",
    intro:
      "Informasi pendanaan, panggilan naskah, dan kesempatan pengembangan kapasitas diperbarui secara berkala.",
    subs: [
      { title: "Research Grant", desc: "Skema hibah internal dan kanal informasi hibah nasional maupun internasional." },
      { title: "Call for Proposal", desc: "Pengumuman penerimaan proposal beserta panduan, format, dan tenggat waktu." },
      { title: "Call for Paper", desc: "Ajakan mengirim artikel untuk konferensi dan terbitan khusus yang dikelola pusat studi." },
      { title: "Internship", desc: "Kesempatan magang riset bagi mahasiswa internal dan mitra universitas lain." },
      { title: "Student Research", desc: "Pendanaan kecil dan pendampingan untuk riset mandiri mahasiswa." },
    ],
  },
  {
    slug: "berita-agenda",
    label: "Berita & Agenda",
    title: "Berita & Agenda",
    tagline: "Kabar terbaru dan jadwal kegiatan",
    intro: "Ikuti perkembangan kegiatan pusat studi, mulai dari kabar riset hingga undangan kegiatan terbuka.",
    subs: [
      { title: "Berita", desc: "Kabar capaian riset, kunjungan mitra, penghargaan, dan peluncuran program." },
      { title: "Agenda", desc: "Kalender kegiatan bulanan yang dapat diikuti internal maupun publik." },
      { title: "Seminar", desc: "Seminar nasional dan kuliah umum dengan narasumber pakar." },
      { title: "Workshop", desc: "Lokakarya keterampilan riset dan penulisan dengan kapasitas terbatas." },
      { title: "FGD", desc: "Diskusi terarah bersama pemangku kepentingan untuk menguji temuan dan rekomendasi." },
      { title: "Call for Paper", desc: "Pengumuman penerimaan naskah untuk kegiatan ilmiah yang akan datang." },
    ],
  },
  {
    slug: "knowledge-hub",
    label: "Knowledge Hub",
    title: "Knowledge Hub",
    tagline: "Pengetahuan dalam format yang mudah dicerna",
    intro:
      "Temuan riset diterjemahkan ke ragam format agar dapat digunakan oleh audiens yang berbeda tanpa kehilangan ketepatan.",
    subs: [
      { title: "Research Brief", desc: "Ringkasan temuan yang padat, disertai visual data utama." },
      { title: "Policy Brief", desc: "Rekomendasi kebijakan yang siap dibawa ke meja pengambil keputusan." },
      { title: "Infografis", desc: "Visualisasi data untuk kebutuhan sosialisasi dan advokasi." },
      { title: "Video", desc: "Penjelasan singkat hasil riset serta dokumentasi kegiatan lapangan." },
      { title: "Podcast", desc: "Percakapan berkala dengan peneliti dan mitra tentang isu terkini." },
      { title: "FAQ", desc: "Jawaban atas pertanyaan yang sering diajukan tentang layanan dan kerja sama." },
    ],
  },
  {
    slug: "dokumen",
    label: "Dokumen",
    title: "Dokumen",
    tagline: "Dokumen resmi dan perangkat kerja",
    intro: "Semua dokumen tata kelola dan perangkat administrasi riset tersedia dalam satu tempat.",
    subs: [
      { title: "SK", desc: "Surat keputusan pendirian, pengangkatan pengelola, dan penetapan program." },
      { title: "Renstra", desc: "Rencana strategis lima tahun beserta indikator kinerja utama." },
      { title: "Roadmap", desc: "Peta jalan riset per klaster dengan target luaran tahunan." },
      { title: "Panduan", desc: "Panduan pengajuan penelitian, pengabdian, dan pelaporan luaran." },
      { title: "Template", desc: "Format proposal, laporan, policy brief, dan poster ilmiah." },
      { title: "SOP", desc: "Prosedur baku layanan, etik penelitian, dan pengelolaan data." },
      { title: "Laporan Tahunan", desc: "Rekapitulasi kinerja, capaian, dan penggunaan anggaran setiap tahun." },
    ],
  },
];

export const getSection = (slug: string) => sections.find((s) => s.slug === slug)!;

export const stats = [
  { value: "120+", label: "Penelitian aktif" },
  { value: "48", label: "Publikasi terindeks" },
  { value: "26", label: "Mitra kerja sama" },
  { value: "15", label: "Desa binaan" },
];
