import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, DollarSign, Award, School, HelpCircle } from "lucide-react";

// Import gambar sama seperti Beasiswa.jsx
import influencerImg from "../assets/images/2.png";
import keuskupanImg from "../assets/images/3.png";
import prestasiImg from "../assets/images/4.png";
import keluargaImg from "../assets/images/5.png";
import guruImg from "../assets/images/6.png";
import beasiswa7Img from "../assets/images/2.png";

export default function BeasiswaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const beasiswaList = {
    kip: {
      nama: "Beasiswa KIP",
      gambar: influencerImg,
      deskripsi:
        "Beasiswa KIP. Beasiswa ini diberikan kepada calon mahasiswa yang melakukan pendaftaran seleksi KIP secara nasional. Calon mahasiswa akan mengikuti seleksi ketat mulai administrasi, wawancara, dan kunjungan lapangan. Mahasiswa yang mendapatkan beasiswa ini akan mendapatkan pembiayaan UKT dari semester 1-8.",
      manfaat: ["Pembebasan biaya kuliah", "Tunjangan biaya hidup per bulan", "Pendampingan akademik"],
      syarat: ["Terdaftar di DTKS / Surat Keterangan Tidak Mampu", "Lulus seleksi masuk UNIPMA", "Mengisi formulir pendaftaran KIP Kuliah"],
    },
    berprestasi: {
      nama: "Beasiswa Mahasiswa Berprestasi",
      gambar: keuskupanImg,
      deskripsi:
        "Beasiswa Prestasi: Beasiswa ini diberikan kepada calon mahasiswa yang memiliki prestasi individu atau kelompok dimulai tingkat Kabupaten, Propinsi, Nasional, dan Internasional. Besaran beasiswa ini adalah mulai 30-60 persen UKT sampai dengan semester 8",
      manfaat: ["Potongan UKT hingga 100%", "Sertifikat penghargaan"],
      syarat: ["Memiliki bukti prestasi minimal tingkat kabupaten", "IPK minimal 3.00"],
    },
    unggulan: {
      nama: "Beasiswa Mahasiswa Unggulan",
      gambar: prestasiImg,
      deskripsi: "Beasiswa unggulan diberikan kepada mahasiswa baru berprestasi dengan nilai akademik tinggi.",
      manfaat: ["Potongan UKT 30–75%", "Program mentoring akademik"],
      syarat: ["Rapor kelas XII dengan nilai rata-rata minimal 80"],
    },
    pgri: {
      nama: "Beasiswa Anak Anggota PGRI",
      gambar: keluargaImg,
      deskripsi: "Beasiswa khusus bagi anak anggota PGRI untuk mendukung keberlanjutan pendidikan di UNIPMA.",
      manfaat: ["Potongan UKT khusus"],
      syarat: ["Kartu anggota PGRI orang tua"],
    },
    mitra: {
      nama: "Beasiswa Sekolah Mitra",
      gambar: guruImg,
      deskripsi: "Beasiswa untuk siswa dari sekolah yang telah bekerja sama dengan UNIPMA.",
      manfaat: ["Potongan biaya pendaftaran", "Potongan UKT"],
      syarat: ["Surat rekomendasi sekolah mitra"],
    },
    ntt: {
      nama: "Beasiswa Khusus Mahasiswa NTT",
      gambar: beasiswa7Img,
      deskripsi: "Beasiswa khusus diberikan untuk mahasiswa asal Nusa Tenggara Timur (NTT).",
      manfaat: ["Potongan biaya kuliah khusus"],
      syarat: ["KTP menunjukkan domisili asal NTT"],
    },
  };

  const data = beasiswaList[id];

  if (!data) {
    return <div className="p-10 text-center text-gray-600 text-lg">Beasiswa tidak ditemukan.</div>;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-16 px-6 md:px-12">
      {/* Tombol Kembali */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-10 text-gray-700 hover:text-cyan-600 transition-colors">
        <ArrowLeft className="w-5 h-5" />
        Kembali
      </button>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="overflow-hidden flex justify-center">
          <img src={data.gambar} alt={data.nama} className="w-full max-h-72 object-contain" />
        </div>

        <div className="p-10 space-y-10">
          {/* Judul */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.nama}</h1>
            <p className="text-gray-600 mt-2">{data.deskripsi}</p>
          </div>

          {/* Manfaat */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-cyan-700">
              <Award className="w-5 h-5" /> Manfaat Beasiswa
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              {data.manfaat.map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="mt-1 w-2 h-2 bg-cyan-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Syarat */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700">
              <HelpCircle className="w-5 h-5" /> Persyaratan
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              {data.syarat.map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a href="#kontak" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-all">
              <DollarSign className="w-5 h-5" />
              Ajukan Beasiswa Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
