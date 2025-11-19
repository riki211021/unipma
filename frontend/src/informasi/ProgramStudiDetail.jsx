import React from "react";
import { useParams } from "react-router-dom";
import { GraduationCap, BookOpen, Star, ArrowLeft } from "lucide-react";

// Fungsi slug
const toSlug = (str) =>
  str.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

// ===============================
//   DATABASE DETAIL SEMUA PRODI
// ===============================
const detailProdi = {
  // --- PASCA SARJANA (S2) ---
  [toSlug("Pascasarjana Pendidikan Ilmu Bahasa dan Sastra Indonesia")]: {
    nama: "Pascasarjana Pendidikan Ilmu Bahasa dan Sastra Indonesia",
    fakultas: "Pascasarjana",
    akreditasi: "Akreditasi Baik Sekali",
    deskripsi:
      "Program ini menghasilkan pendidik dan peneliti bahasa Indonesia yang profesional serta mampu mengembangkan penelitian kebahasaan modern.",
    prospek: [
      "Dosen Perguruan Tinggi",
      "Peneliti Bahasa dan Sastra",
      "Editor dan Penulis Profesional",
      "Pengembang Kurikulum Bahasa",
    ],
    fasilitas: [
      "Laboratorium Bahasa",
      "Perpustakaan Digital",
      "Pusat Penelitian Bahasa",
    ],
    kontak: "pasca-bahasa@unipma.ac.id",
  },

  [toSlug("Pascasarjana Pendidikan Ilmu Pengetahuan Sosial")]: {
    nama: "Pascasarjana Pendidikan IPS",
    fakultas: "Pascasarjana",
    akreditasi: "Akreditasi Baik Sekali",
    deskripsi:
      "Program S2 Pendidikan IPS berfokus pada pengembangan pendidik dan peneliti di bidang sosial dengan pendekatan inovatif dan kontekstual.",
    prospek: [
      "Dosen IPS",
      "Peneliti Sosial",
      "Konsultan Pendidikan",
      "Pengembang Kurikulum IPS",
    ],
    fasilitas: ["Ruang Riset IPS", "E-learning", "Perpustakaan Digital"],
    kontak: "pasca-ips@unipma.ac.id",
  },

  [toSlug("Pascasarjana Pendidikan Dasar")]: {
    nama: "Pascasarjana Pendidikan Dasar",
    fakultas: "Pascasarjana",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Program ini mendidik calon pemimpin pendidikan dasar yang unggul dalam pengembangan pembelajaran, manajemen kelas, dan penelitian dasar.",
    prospek: [
      "Dosen PGSD",
      "Pengembang Media Pembelajaran",
      "Kepala Sekolah SD",
      "Peneliti Pendidikan",
    ],
    fasilitas: ["Laboratorium Dasar", "Smart Classroom", "E-learning"],
    kontak: "pasca-pendas@unipma.ac.id",
  },

  [toSlug("Pascasarjana Bimbingan dan Konseling")]: {
    nama: "Pascasarjana Bimbingan dan Konseling",
    fakultas: "Pascasarjana",
    akreditasi: "Akreditasi Baik Sekali",
    deskripsi:
      "Program S2 BK menghasilkan konselor profesional dengan kemampuan asesmen, terapi konseling, dan penelitian ilmiah.",
    prospek: [
      "Dosen BK",
      "Konselor Sekolah",
      "Konselor Keluarga",
      "Peneliti Pendidikan",
    ],
    fasilitas: ["Laboratorium Konseling", "Ruang Observasi", "E-learning"],
    kontak: "pasca-bk@unipma.ac.id",
  },

  // ======================================
  //        PROGRAM SARJANA (S1)
  // ======================================

  // FKIP
  [toSlug("Pendidikan Guru Sekolah Dasar")]: {
    nama: "Pendidikan Guru Sekolah Dasar (PGSD)",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi:
      "PGSD menghasilkan calon guru SD yang kompeten, kreatif, dan siap menghadapi pendidikan abad 21.",
    prospek: [
      "Guru SD",
      "Pengembang Media Pembelajaran",
      "Peneliti Pendidikan",
    ],
    fasilitas: ["Microteaching", "Perpustakaan Digital", "Lab Pembelajaran"],
    kontak: "pgsd@unipma.ac.id",
  },

  [toSlug("Pendidikan Guru Pendidikan Anak Usia Dini")]: {
    nama: "Pendidikan Anak Usia Dini (PAUD)",
    fakultas: "FKIP",
    akreditasi: "Akreditasi Baik Sekali",
    deskripsi:
      "PAUD berfokus pada pengembangan guru profesional untuk pendidikan anak usia dini.",
    prospek: ["Guru PAUD/TK", "Pengelola PAUD", "Konsultan Tumbuh Kembang"],
    fasilitas: ["Lab PAUD", "Ruang Bermain Anak", "Perpustakaan"],
    kontak: "paud@unipma.ac.id",
  },

  [toSlug("Bimbingan Konseling")]: {
    nama: "Bimbingan dan Konseling",
    fakultas: "FKIP",
    akreditasi: "Akreditasi Baik Sekali",
    deskripsi:
      "Menghasilkan konselor sekolah yang profesional dan mampu menangani masalah peserta didik.",
    prospek: ["Konselor Sekolah", "Konselor Remaja", "Asisten Psikolog"],
    fasilitas: ["Lab Konseling", "Ruang Observasi"],
    kontak: "bk@unipma.ac.id",
  },

  [toSlug("Pendidikan Pancasila dan Kewarganegaraan")]: {
    nama: "PPKn",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Membentuk pendidik yang ahli dalam bidang kewarganegaraan, demokrasi, dan pendidikan karakter.",
    prospek: ["Guru PPKn", "Pengembang Kurikulum", "Peneliti Sosial"],
    fasilitas: ["Lab PPKn", "Perpustakaan"],
    kontak: "ppkn@unipma.ac.id",
  },

  [toSlug("Pendidikan Sejarah")]: {
    nama: "Pendidikan Sejarah",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi: "Program studi untuk calon guru sejarah yang kritis dan analitis.",
    prospek: ["Guru Sejarah", "Peneliti Sejarah", "Arsiparis"],
    fasilitas: ["Lab Sejarah", "Arsip Digital"],
    kontak: "sejarah@unipma.ac.id",
  },

  [toSlug("Pendidikan Akuntansi")]: {
    nama: "Pendidikan Akuntansi",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi: "Menghasilkan pendidik dan instruktur akuntansi profesional.",
    prospek: ["Guru Akuntansi", "Instruktur Keuangan", "Akademisi"],
    fasilitas: ["Lab Akuntansi", "Lab Komputer"],
    kontak: "pend-akuntansi@unipma.ac.id",
  },

  [toSlug("Pendidikan Ekonomi")]: {
    nama: "Pendidikan Ekonomi",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi: "Menghasilkan pendidik ekonomi kreatif dan inovatif.",
    prospek: ["Guru Ekonomi", "Pendamping UMKM", "Peneliti Ekonomi"],
    fasilitas: ["Lab Ekonomi", "E-learning"],
    kontak: "pend-ekonomi@unipma.ac.id",
  },

  [toSlug("Pendidikan Bahasa dan Sastra Indonesia")]: {
    nama: "PBSI",
    fakultas: "FKIP",
    akreditasi: "Akreditasi Baik Sekali",
    deskripsi:
      "Fokus pada keilmuan bahasa, sastra, dan pendidikan bahasa Indonesia.",
    prospek: ["Guru Bahasa Indonesia", "Editor", "Penulis"],
    fasilitas: ["Lab Bahasa", "Perpustakaan"],
    kontak: "pbsi@unipma.ac.id",
  },

  [toSlug("Pendidikan Bahasa Inggris")]: {
    nama: "Pendidikan Bahasa Inggris",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Membentuk pendidik bahasa Inggris yang kompeten dan berwawasan global.",
    prospek: ["Guru Bahasa Inggris", "Proofreader", "Penerjemah"],
    fasilitas: ["Lab Bahasa", "Ruang Multimedia"],
    kontak: "pbi@unipma.ac.id",
  },

  [toSlug("Pendidikan Matematika")]: {
    nama: "Pendidikan Matematika",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Menghasilkan pendidik matematika yang logis, analitis, dan inovatif.",
    prospek: ["Guru Matematika", "Peneliti Matematika Terapan"],
    fasilitas: ["Lab Matematika", "Smart Classroom"],
    kontak: "matematika@unipma.ac.id",
  },

  [toSlug("Pendidikan Biologi")]: {
    nama: "Pendidikan Biologi",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Program studi yang mempersiapkan guru biologi profesional dan peneliti pemula.",
    prospek: ["Guru Biologi", "Peneliti Lab", "Fasilitator Lingkungan"],
    fasilitas: ["Lab Biologi", "Lab Mikrobiologi"],
    kontak: "biologi@unipma.ac.id",
  },

  [toSlug("Pendidikan Fisika")]: {
    nama: "Pendidikan Fisika",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Menghasilkan pendidik fisika dan pengembang media pembelajaran berbasis teknologi.",
    prospek: ["Guru Fisika", "Instruktur Teknologi Sains"],
    fasilitas: ["Lab Fisika", "Lab Elektronika"],
    kontak: "fisika@unipma.ac.id",
  },

  [toSlug("Pendidikan Teknik Elektro")]: {
    nama: "Pendidikan Teknik Elektro",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Program studi untuk menghasilkan pendidik teknik elektro yang adaptif terhadap industri 4.0.",
    prospek: ["Guru Teknik Elektro", "Instruktur Teknik", "Teknisi Listrik"],
    fasilitas: ["Lab Elektro", "Lab Listrik"],
    kontak: "pte@unipma.ac.id",
  },

  [toSlug("Pendidikan Ilmu Pengetahuan Alam")]: {
    nama: "Pendidikan IPA",
    fakultas: "FKIP",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Menghasilkan pendidik IPA yang menguasai konsep dasar fisika, biologi, dan kimia.",
    prospek: ["Guru IPA", "Peneliti Dasar", "Pengembang Media Pembelajaran"],
    fasilitas: ["Lab IPA Terpadu", "Smart Classroom"],
    kontak: "ipa@unipma.ac.id",
  },

  // --- FAKULTAS EKONOMI (FEB) ---
  [toSlug("Akuntansi")]: {
    nama: "Akuntansi",
    fakultas: "FEB",
    akreditasi: "Akreditasi Baik Sekali",
    deskripsi:
      "Program studi akuntansi yang membekali mahasiswa dengan kemampuan analisis laporan keuangan dan audit.",
    prospek: ["Akuntan", "Auditor", "Konsultan Keuangan"],
    fasilitas: ["Lab Akuntansi", "Lab Komputer"],
    kontak: "akuntansi@unipma.ac.id",
  },

  [toSlug("Manajemen")]: {
    nama: "Manajemen",
    fakultas: "FEB",
    akreditasi: "Akreditasi Baik Sekali",
    deskripsi:
      "Mempelajari pengelolaan organisasi, bisnis, dan sumber daya manusia.",
    prospek: ["Manajer", "Supervisor", "Wirausahawan"],
    fasilitas: ["Lab Bisnis", "Pusat Kewirausahaan"],
    kontak: "manajemen@unipma.ac.id",
  },

  [toSlug("Perpajakan")]: {
    nama: "Perpajakan",
    fakultas: "FEB",
    akreditasi: "Akreditasi B",
    deskripsi: "Program studi yang berfokus pada perpajakan dan regulasi pajak.",
    prospek: ["Konsultan Pajak", "Petugas Pajak", "Analis Pajak"],
    fasilitas: ["Lab Pajak", "Lab Komputer"],
    kontak: "perpajakan@unipma.ac.id",
  },

  // --- FIKS ---
  [toSlug("Farmasi")]: {
    nama: "Farmasi",
    fakultas: "FIKS",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Menghasilkan tenaga farmasi profesional dengan kemampuan formulasi dan pelayanan kefarmasian.",
    prospek: ["Apoteker", "Asisten Farmasi", "Peneliti Farmasi"],
    fasilitas: ["Lab Kimia Farmasi", "Lab Formulasi"],
    kontak: "farmasi@unipma.ac.id",
  },

  [toSlug("Ilmu Keolahragaan")]: {
    nama: "Ilmu Keolahragaan",
    fakultas: "FIKS",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Memfokuskan pada pembinaan prestasi olahraga dan ilmu kebugaran.",
    prospek: ["Pelatih", "Instruktur Fitness", "Guru Penjas"],
    fasilitas: ["Lab Sport Science", "Gor Olahraga"],
    kontak: "keolahragaan@unipma.ac.id",
  },

  // --- FAKULTAS TEKNIK ---
  [toSlug("Teknik Informatika")]: {
    nama: "Teknik Informatika",
    fakultas: "FT",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Menghasilkan ahli IT di bidang pemrograman, jaringan, dan kecerdasan buatan.",
    prospek: ["Programmer", "IT Support", "Software Engineer"],
    fasilitas: ["Lab Komputer", "Lab Jaringan"],
    kontak: "informatika@unipma.ac.id",
  },

  [toSlug("Sistem Informasi")]: {
    nama: "Sistem Informasi",
    fakultas: "FT",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Fokus pada pengelolaan sistem berbasis teknologi informasi untuk organisasi.",
    prospek: ["Analisis Sistem", "IT Consultant", "Database Administrator"],
    fasilitas: ["Lab SI", "Lab Komputer"],
    kontak: "si@unipma.ac.id",
  },

  [toSlug("Teknik Industri")]: {
    nama: "Teknik Industri",
    fakultas: "FT",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Menghasilkan insinyur industri dengan kemampuan optimasi sistem dan manajemen produksi.",
    prospek: ["Engineer Industri", "Quality Control"],
    fasilitas: ["Lab Industri", "Lab Analisis"],
    kontak: "teknik-industri@unipma.ac.id",
  },

  [toSlug("Teknik Kimia")]: {
    nama: "Teknik Kimia",
    fakultas: "FT",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Menghasilkan lulusan yang menguasai proses industri kimia dan pengolahan bahan.",
    prospek: ["Process Engineer", "Quality Assurance"],
    fasilitas: ["Lab Kimia", "Lab Proses"],
    kontak: "teknik-kimia@unipma.ac.id",
  },

  [toSlug("Teknik Elektro")]: {
    nama: "Teknik Elektro",
    fakultas: "FT",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Fokus pada sistem kelistrikan, elektronika, dan instrumentasi modern.",
    prospek: ["Engineer Listrik", "Teknisi Elektronika"],
    fasilitas: ["Lab Elektro", "Lab Robotik"],
    kontak: "te@unipma.ac.id",
  },

  // --- FAKULTAS HUKUM ---
  [toSlug("Hukum")]: {
    nama: "Ilmu Hukum",
    fakultas: "FH",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Program studi yang menyiapkan lulusan yang memahami hukum perdata, pidana, dan tata negara.",
    prospek: ["Pengacara", "Notaris", "Konsultan Hukum"],
    fasilitas: ["Lab Peradilan Semu", "Perpustakaan Hukum"],
    kontak: "hukum@unipma.ac.id",
  },

  // --- DIPLOMA (D3) ---
  [toSlug("D3 Manajemen Pajak")]: {
    nama: "D3 Manajemen Pajak",
    fakultas: "FEB",
    akreditasi: "Akreditasi B",
    deskripsi:
      "Program vokasi khusus perpajakan yang berorientasi pada praktik dan kebutuhan dunia kerja.",
    prospek: ["Petugas Pajak", "Konsultan Pajak Junior"],
    fasilitas: ["Lab Pajak", "Lab Komputer"],
    kontak: "d3pajak@unipma.ac.id",
  },
};

// ======================================================
//                  RENDER DETAIL
// ======================================================
export default function ProgramStudiDetail() {
  const { id } = useParams();
  const data = detailProdi[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Program Studi tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-blue-50/20 to-white min-h-screen py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Back Button */}
        <a
          href="/studi"
          className="inline-flex items-center text-cyan-700 hover:text-cyan-900 mb-6 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
        </a>

        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-2xl shadow-md mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                {data.nama}
              </h1>
              <p className="text-gray-600 text-sm">{data.fakultas}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-cyan-700 font-medium">
            <Star className="w-5 h-5" /> {data.akreditasi}
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed">{data.deskripsi}</p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-600" /> Prospek Kerja
            </h2>
            <ul className="space-y-2 text-gray-700">
              {data.prospek.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-2 rounded-full bg-cyan-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-600" /> Fasilitas
            </h2>
            <ul className="space-y-2 text-gray-700">
              {data.fasilitas.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kontak */}
        <div className="mt-12 bg-white/70 backdrop-blur-sm border border-gray-100 p-6 rounded-xl shadow text-center">
          <p className="text-gray-700">Kontak Program Studi:</p>
          <p className="text-cyan-700 font-semibold text-lg">{data.kontak}</p>
        </div>
      </div>
    </div>
  );
}
