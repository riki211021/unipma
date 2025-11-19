import React from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProgramStudi() {
  const navigate = useNavigate();

  // Fungsi pembuat slug
  const toSlug = (str) =>
    str.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

  // Komponen kartu prodi (supaya tidak duplikat)
  const ProdiCard = ({ prodi }) => (
    <div
      onClick={() => navigate(`/prodi-detail/${toSlug(prodi)}`)}
      className="cursor-pointer group backdrop-blur-sm bg-white/80 rounded-xl border border-gray-100 hover:border-cyan-200 shadow-md hover:shadow-xl p-5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-gray-800 font-medium leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
          {prodi}
        </p>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-blue-50/20 to-white min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium border border-cyan-200/50 shadow-sm">
            <GraduationCap className="w-4 h-4" />
            Pilihan Studi
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-gray-900">
            Program Studi{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              UNIPMA
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Pilih jenjang pendidikan sesuai minat dan karier masa depan Anda.
          </p>

          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* --- Program Pascasarjana --- */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Program Pascasarjana (S2)
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-1"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pascasarjana Pendidikan Ilmu Bahasa dan Sastra Indonesia",
              "Pascasarjana Pendidikan Ilmu Pengetahuan Sosial",
              "Pascasarjana Pendidikan Dasar",
              "Pascasarjana Bimbingan dan Konseling",
            ].map((prodi, i) => (
              <ProdiCard key={i} prodi={prodi} />
            ))}
          </div>
        </section>

        {/* --- Program Sarjana (S1) --- */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Program Sarjana (S1)
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mt-1"></div>
            </div>
          </div>

          {/* FKIP */}
          <div className="mb-12">
            <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Fakultas Keguruan dan Ilmu Pendidikan (FKIP)
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Pendidikan Guru Sekolah Dasar",
                "Pendidikan Guru Pendidikan Anak Usia Dini",
                "Bimbingan Konseling",
                "Pendidikan Pancasila dan Kewarganegaraan",
                "Pendidikan Sejarah",
                "Pendidikan Akuntansi",
                "Pendidikan Ekonomi",
                "Pendidikan Bahasa dan Sastra Indonesia",
                "Pendidikan Bahasa Inggris",
                "Pendidikan Matematika",
                "Pendidikan Biologi",
                "Pendidikan Profesi Guru",
                "Pendidikan Fisika",
                "Pendidikan Teknik Elektro",
                "Pendidikan Ilmu Pengetahuan Alam",
              ].map((prodi, i) => (
                <ProdiCard key={i} prodi={prodi} />
              ))}
            </div>
          </div>

          {/* FEB */}
          <div className="mb-12">
            <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Fakultas Ekonomi dan Bisnis (FEB)
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Akuntansi", "Manajemen", "Perpajakan"].map((prodi, i) => (
                <ProdiCard key={i} prodi={prodi} />
              ))}
            </div>
          </div>

          {/* FIKS */}
          <div className="mb-12">
            <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Fakultas Ilmu Kesehatan dan Sains (FIKS)
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Farmasi", "Ilmu Keolahragaan"].map((prodi, i) => (
                <ProdiCard key={i} prodi={prodi} />
              ))}
            </div>
          </div>

          {/* FT */}
          <div className="mb-12">
            <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Fakultas Teknik (FT)
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Teknik Informatika",
                "Sistem Informasi",
                "Teknik Industri",
                "Teknik Kimia",
                "Teknik Elektro",
              ].map((prodi, i) => (
                <ProdiCard key={i} prodi={prodi} />
              ))}
            </div>
          </div>

          {/* FH */}
          <div className="mb-12">
            <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Fakultas Hukum (FH)
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Hukum"].map((prodi, i) => (
                <ProdiCard key={i} prodi={prodi} />
              ))}
            </div>
          </div>
        </section>

        {/* --- Program Diploma (D3) --- */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Program Diploma (D3)
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mt-1"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProdiCard prodi="D3 Manajemen Pajak" />
          </div>
        </section>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-sm bg-white/60 border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-2">
              40+
            </div>
            <p className="text-gray-600 font-medium">Program Studi</p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
              5
            </div>
            <p className="text-gray-600 font-medium">Fakultas</p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 mb-2">
              100%
            </div>
            <p className="text-gray-600 font-medium">Terakreditasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
