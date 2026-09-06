-- ROLES
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE OR REPLACE FUNCTION public.is_staff(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role IN ('admin', 'editor')
  )
$$;

CREATE POLICY "Signed-in users can read roles"
  ON public.user_roles FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins manage roles"
  ON public.user_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- SHARED updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- POSTS (berita)
CREATE TABLE public.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  summary text,
  content text,
  cover_url text,
  published_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'draft',
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT posts_status_check CHECK (status IN ('draft', 'published'))
);
GRANT SELECT ON public.posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.posts TO authenticated;
GRANT ALL ON public.posts TO service_role;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published posts" ON public.posts FOR SELECT TO anon, authenticated USING (status = 'published');
CREATE POLICY "Staff read all posts" ON public.posts FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "Staff write posts" ON public.posts FOR INSERT TO authenticated WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff update posts" ON public.posts FOR UPDATE TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff delete posts" ON public.posts FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
CREATE TRIGGER posts_updated_at BEFORE UPDATE ON public.posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- EVENTS (agenda)
CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  starts_at timestamptz NOT NULL,
  location text,
  description text,
  register_url text,
  status text NOT NULL DEFAULT 'published',
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT events_status_check CHECK (status IN ('draft', 'published'))
);
GRANT SELECT ON public.events TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published events" ON public.events FOR SELECT TO anon, authenticated USING (status = 'published');
CREATE POLICY "Staff read all events" ON public.events FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "Staff write events" ON public.events FOR INSERT TO authenticated WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff update events" ON public.events FOR UPDATE TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff delete events" ON public.events FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
CREATE TRIGGER events_updated_at BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- PUBLICATIONS
CREATE TABLE public.publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  authors text,
  year integer,
  kind text NOT NULL DEFAULT 'artikel',
  summary text,
  file_url text,
  link_url text,
  status text NOT NULL DEFAULT 'published',
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT publications_kind_check CHECK (kind IN ('artikel', 'laporan')),
  CONSTRAINT publications_status_check CHECK (status IN ('draft', 'published'))
);
GRANT SELECT ON public.publications TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.publications TO authenticated;
GRANT ALL ON public.publications TO service_role;
ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published publications" ON public.publications FOR SELECT TO anon, authenticated USING (status = 'published');
CREATE POLICY "Staff read all publications" ON public.publications FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "Staff write publications" ON public.publications FOR INSERT TO authenticated WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff update publications" ON public.publications FOR UPDATE TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff delete publications" ON public.publications FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
CREATE TRIGGER publications_updated_at BEFORE UPDATE ON public.publications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- GALLERY
CREATE TABLE public.gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  caption text,
  image_url text NOT NULL,
  taken_at date,
  status text NOT NULL DEFAULT 'published',
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT gallery_status_check CHECK (status IN ('draft', 'published'))
);
GRANT SELECT ON public.gallery_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gallery_items TO authenticated;
GRANT ALL ON public.gallery_items TO service_role;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published gallery" ON public.gallery_items FOR SELECT TO anon, authenticated USING (status = 'published');
CREATE POLICY "Staff read all gallery" ON public.gallery_items FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "Staff write gallery" ON public.gallery_items FOR INSERT TO authenticated WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff update gallery" ON public.gallery_items FOR UPDATE TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff delete gallery" ON public.gallery_items FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
CREATE TRIGGER gallery_updated_at BEFORE UPDATE ON public.gallery_items FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- CONTOH ISI
INSERT INTO public.posts (slug, title, summary, content, published_at, status) VALUES
('pelatihan-kader-kesehatan-kedungmundu', 'Pelatihan Kader Kesehatan di Kedungmundu', 'Tiga puluh kader kesehatan mengikuti pelatihan deteksi dini penyakit tidak menular bersama tim Pusat Studi.', E'Pusat Studi Riset & Inovasi Unimus menyelenggarakan pelatihan bagi kader kesehatan di Kelurahan Kedungmundu, Semarang.\n\nPelatihan berlangsung dua hari dan mencakup pengukuran tekanan darah, pencatatan data warga, serta cara merujuk warga ke puskesmas. Kegiatan ini merupakan lanjutan penelitian dosen Fakultas Kesehatan mengenai penyakit tidak menular di wilayah perkotaan.\n\nKader yang telah mengikuti pelatihan akan didampingi selama enam bulan ke depan.', now() - interval '6 days', 'published'),
('kerja-sama-desa-binaan-baru', 'Dua Desa Baru Bergabung dalam Program Desa Binaan', 'Penandatanganan kerja sama dilakukan bersama pemerintah desa untuk program pendampingan tiga tahun.', E'Pusat Studi menambah dua desa binaan baru pada tahun ini.\n\nProgram pendampingan mencakup penguatan usaha kecil warga, pengelolaan sampah rumah tangga, dan peningkatan layanan posyandu. Setiap desa didampingi satu tim dosen dan mahasiswa.\n\nLaporan perkembangan disusun setiap akhir tahun dan dibuka untuk umum.', now() - interval '20 days', 'published'),
('ringkasan-kebijakan-air-bersih', 'Ringkasan Kebijakan Akses Air Bersih Terbit', 'Dokumen empat halaman ini merangkum hasil kajian air bersih di tiga kecamatan.', E'Tim Pusat Studi menerbitkan ringkasan kebijakan mengenai akses air bersih di tiga kecamatan di Kota Semarang.\n\nDokumen memuat temuan utama, kendala di lapangan, dan tiga usulan langkah bagi pemerintah daerah. Ringkasan ini disusun agar mudah dibaca dalam waktu singkat oleh pengambil keputusan.\n\nVersi lengkap laporan tersedia di halaman Publikasi.', now() - interval '38 days', 'published');

INSERT INTO public.events (title, starts_at, location, description, register_url, status) VALUES
('Seminar Terbuka: Riset untuk Kebijakan Daerah', now() + interval '12 days', 'Aula Kampus Terpadu Unimus, Semarang', 'Diskusi bersama peneliti dan perwakilan pemerintah daerah mengenai pemanfaatan hasil riset dalam penyusunan kebijakan. Terbuka untuk mahasiswa, dosen, dan masyarakat umum.', NULL, 'published'),
('Pelatihan Penulisan Artikel Ilmiah', now() + interval '26 days', 'Laboratorium Data Pusat Studi', 'Pelatihan dua hari bagi mahasiswa dan dosen mengenai penyusunan artikel ilmiah, mulai dari kerangka hingga pemilihan jurnal.', NULL, 'published'),
('Diskusi Publik: Pengelolaan Sampah Rumah Tangga', now() + interval '45 days', 'Balai Desa Mitra Binaan', 'Diskusi bersama warga dan kader lingkungan mengenai hasil pendampingan pengelolaan sampah selama satu tahun.', NULL, 'published');

INSERT INTO public.publications (title, authors, year, kind, summary, status) VALUES
('Faktor Risiko Penyakit Tidak Menular pada Warga Perkotaan Semarang', 'Tim Peneliti Kesehatan Pusat Studi Unimus', 2025, 'artikel', 'Artikel hasil penelitian mengenai pola risiko penyakit tidak menular pada warga di wilayah padat penduduk.', 'published'),
('Pemberdayaan Usaha Kecil Berbasis Komunitas', 'Tim Peneliti Ekonomi Masyarakat', 2024, 'artikel', 'Kajian mengenai pendampingan usaha kecil warga dan dampaknya terhadap pendapatan rumah tangga.', 'published'),
('Ringkasan Kebijakan: Akses Air Bersih di Tiga Kecamatan', 'Pusat Studi Riset & Inovasi Unimus', 2025, 'laporan', 'Ringkasan empat halaman berisi temuan utama dan tiga usulan langkah bagi pemerintah daerah.', 'published'),
('Laporan Tahunan Pusat Studi 2025', 'Pusat Studi Riset & Inovasi Unimus', 2025, 'laporan', 'Rangkuman kegiatan penelitian, pengabdian, publikasi, dan kerja sama sepanjang tahun 2025.', 'published');

INSERT INTO public.gallery_items (title, caption, image_url, taken_at, status) VALUES
('Pelatihan kader kesehatan', 'Sesi praktik pengukuran tekanan darah bersama kader di Kedungmundu.', 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1200&q=70', current_date - 6, 'published'),
('Diskusi bersama warga desa binaan', 'Pertemuan evaluasi program pendampingan di balai desa.', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=70', current_date - 30, 'published'),
('Seminar hasil kajian', 'Pemaparan hasil kajian air bersih di aula kampus.', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=70', current_date - 60, 'published');