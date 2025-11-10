import React from "react";
import jadwalImg from "../assets/images/skema_rpl.jpg";
import SK_RPL from "../assets/pdf/SK_RPL.pdf";
import { Award, CheckCircle, FileText, Download, DollarSign, Calendar, Sparkles } from "lucide-react";

export default function RPLPage() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-blue-50/20 to-white min-h-screen py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium border border-cyan-200/50 shadow-sm">
            <Award className="w-4 h-4" />
            Jalur Khusus
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-gray-900">
            Rekognisi Pembelajaran <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Lampau (RPL)</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">Rekognisi Pembelajaran Lampau (RPL) adalah pengakuan atas capaian pembelajaran seseorang yang diperoleh dari pendidikan formal, nonformal, informal, dan/atau pengalaman kerja.Legalitas Perizinan dari Direktorat Pembelajaran dan Kemahasiswaan, kemendiktisaintek setiap semesternya dapat di unduh melalui laman berikut: (laman)</p>

          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Skema RPL */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Skema Rekognisi Pembelajaran Lampau</h2>
          </div>

          <p className="text-gray-600 mb-6 font-light leading-relaxed">
            Proses RPL dilakukan dalam dua tahap utama: asesmen dan rekognisi, yang bertujuan untuk mengakui hasil belajar dari pendidikan nonformal, informal, dan/atau pengalaman kerja.
          </p>

          <div className="relative group">
            <div>
              <img src={jadwalImg} alt="Skema RPL UNIPMA" className="w-full h-auto max-h-[600px] object-contain rounded-2xl " />
            </div>
          </div>
        </section>

        {/* Tahapan RPL */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Tahapan Rekognisi Pembelajaran Lampau</h2>
          </div>

          <div className="space-y-4">
            {[
              { title: "Konsultasi dengan Unit RPL", desc: "Pemohon melakukan konsultasi untuk memahami prosedur dan memilih program studi yang sesuai." },
              { title: "Menyiapkan Bukti", desc: "Mengumpulkan dokumen yang sahih dan relevan sebagai bukti kompetensi." },
              { title: "Pengajuan Aplikasi RPL", desc: "Mengisi formulir aplikasi dan menyerahkan bukti pendukung ke Unit RPL." },
              { title: "Evaluasi Berkas Aplikasi", desc: "Asesor RPL menilai berkas berdasarkan keahlian yang relevan." },
              { title: "Penerbitan Surat Keputusan", desc: "Keputusan hasil evaluasi diterbitkan sebagai dasar pembebasan mata kuliah." },
              { title: "Melanjutkan Pendidikan", desc: "Pemohon melanjutkan studi dengan mata kuliah yang telah disetujui." },
              { title: "Penerbitan Ijazah", desc: "Setelah memenuhi syarat, pemohon menerima ijazah atau surat pemberhentian pendidikan." },
            ].map((step, index) => (
              <div key={index} className="group backdrop-blur-sm bg-white/80 rounded-xl p-6 border border-gray-100 hover:border-cyan-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white shadow-md group-hover:scale-110 transition-transform">{index + 1}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">{step.title}</h3>
                    <p className="text-gray-600 font-light">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SK RPL */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Surat Keputusan Pengelola RPL</h2>
          </div>

          <p className="text-gray-600 mb-6 font-light">Berikut adalah Surat Keputusan Pemimpin Perguruan Tinggi mengenai pengangkatan Pengelola RPL.</p>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <a
              href={SK_RPL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Download className="w-5 h-5" />
              Lihat / Download PDF
            </a>

            <div className="w-full md:flex-1 h-80 md:h-96 backdrop-blur-sm bg-white/30 border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <iframe src={SK_RPL} title="SK Pengelola RPL" className="w-full h-full" />
            </div>
          </div>
        </section>

        {/* Persyaratan */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Persyaratan Umum</h2>
          </div>

          <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 border border-gray-100 shadow-lg">
            <ul className="space-y-3">
              {["Memiliki pengalaman kerja atau pendidikan nonformal/informal yang relevan.", "Melakukan asesmen mandiri terhadap kompetensi yang dimiliki.", "Menyiapkan bukti-bukti yang sahih dan kredibel."].map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pembiayaan */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Pembiayaan</h2>
          </div>

          <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-4 mb-6">
            <p className="text-gray-700 font-medium text-sm">
              <Sparkles className="w-4 h-4 inline mr-2 text-cyan-600" />
              Keterangan: Biaya semester termasuk SKS, SPP, Hereg, Penunjang, PPL, KKN, Skripsi, Ujian Skripsi, Praktikum.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/80 rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                    <th className="px-4 py-4 border-b border-white/20 text-left text-sm font-semibold uppercase tracking-wide">NO</th>
                    <th className="px-4 py-4 border-b border-white/20 text-left text-sm font-semibold uppercase tracking-wide">PROGRAM STUDI</th>
                    <th className="px-4 py-4 border-b border-white/20 text-center text-sm font-semibold uppercase tracking-wide">BIAYA SEMESTER</th>
                    <th className="px-4 py-4 border-b border-white/20 text-center text-sm font-semibold uppercase tracking-wide">PKKMB</th>
                    <th className="px-4 py-4 border-b border-white/20 text-center text-sm font-semibold uppercase tracking-wide">BPI GEL I</th>
                    <th className="px-4 py-4 border-b border-white/20 text-center text-sm font-semibold uppercase tracking-wide">BPI GEL II</th>
                    <th className="px-4 py-4 border-b border-white/20 text-center text-sm font-semibold uppercase tracking-wide">BPI GEL III</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    ["S-2 Pendidikan Bahasa dan Sastra Indonesia", "-", "-", "-", "-", "-"],
                    ["S-2 Bimbingan dan Konseling", "-", "-", "-", "-", "-"],
                    ["S-2 Pendidikan Ilmu Pengetahuan Sosial", "-", "-", "-", "-", "-"],
                    ["S-2 Pendidikan Dasar", "-", "-", "-", "-", "-"],
                    ["Pendidikan Biologi", "Rp 3,000,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Guru Sekolah Dasar", "Rp 5,000,000", "Rp 1,650,000", "Rp 5,500,000", "-", "-"],
                    ["Pendidikan Guru-Pendidikan Anak Usia Dini", "Rp 3,000,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Sejarah", "Rp 3,000,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Akuntansi", "Rp 3,000,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Bahasa dan Sastra Indonesia", "Rp 4,500,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Ilmu Pengetahuan Alam", "Rp 3,000,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Teknik Elektro", "Rp 2,500,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Matematika", "Rp 3,000,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Bahasa Inggris", "Rp 4,500,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Ekonomi", "Rp 3,000,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Pancasila dan Kewarganegaraan", "Rp 3,000,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Pendidikan Fisika", "Rp 2,500,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Bimbingan dan Konseling", "Rp 4,500,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                    ["Manajemen", "Rp 5,000,000", "Rp 1,650,000", "Rp 5,500,000", "-", "-"],
                    ["D-3 Manajemen Pajak", "Rp 5,000,000", "Rp 1,650,000", "Rp 5,500,000", "-", "-"],
                    ["Akuntansi", "Rp 5,000,000", "Rp 1,650,000", "Rp 5,500,000", "-", "-"],
                    ["Ilmu Keolahragaan", "Rp 5,000,000", "Rp 1,650,000", "Rp 5,500,000", "-", "-"],
                    ["Farmasi", "Rp 5,000,000", "Rp 1,650,000", "Rp 5,500,000", "-", "-"],
                    ["Teknik Informatika", "Rp 5,000,000", "Rp 1,650,000", "Rp 6,500,000", "-", "-"],
                    ["Sistem Informasi", "Rp 3,000,000", "Rp 1,650,000", "Rp 6,500,000", "-", "-"],
                    ["Teknik Industri", "Rp 3,000,000", "Rp 1,650,000", "Rp 6,500,000", "-", "-"],
                    ["Teknik Kimia", "Rp 3,000,000", "Rp 1,650,000", "Rp 6,500,000", "-", "-"],
                    ["Teknik Elektro", "Rp 3,000,000", "Rp 1,650,000", "Rp 6,500,000", "-", "-"],
                    ["Hukum", "Rp 4,500,000", "Rp 1,650,000", "Rp 4,000,000", "-", "-"],
                  ].map((item, index) => (
                    <tr key={index} className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-blue-50/50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <td className="px-4 py-3 text-center font-medium">{index + 1}</td>
                      <td className="px-4 py-3">{item[0]}</td>
                      <td className="px-4 py-3 text-center">{item[1]}</td>
                      <td className="px-4 py-3 text-center">{item[2]}</td>
                      <td className="px-4 py-3 text-center">{item[3]}</td>
                      <td className="px-4 py-3 text-center">{item[4]}</td>
                      <td className="px-4 py-3 text-center">{item[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="backdrop-blur-sm bg-white/60 border border-gray-100 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <strong className="text-gray-900">Keterangan:</strong> Biaya semester termasuk (SKS, SPP, Hereg, Penunjang, PPL, KKN, Skripsi, Ujian Skripsi, Praktikum)
              </p>
            </div>
            <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <strong className="text-gray-900">Menghitung Biaya Total:</strong> Biaya Total = (Biaya Semester) + (BPI sesuai Gelombang) + (PKKMB / Ospek)
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200/50 rounded-2xl p-8 inline-block">
            <p className="text-gray-900 font-semibold mb-4 text-lg">Siap mendaftar melalui jalur RPL?</p>
            <a
              href="https://pmb.unipma.ac.id/portal/daftar_RPL"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Calendar className="w-5 h-5" />
              Daftar Sekarang
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
