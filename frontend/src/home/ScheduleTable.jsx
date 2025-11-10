import React from "react";
import { Calendar, Clock, FileCheck, Megaphone } from "lucide-react";

export default function ScheduleTable() {
  const schedules = [
    {
      gelombang: "Gelombang 1",
      pendaftaran: "1 Desember 2025 - 30 April 2026 ",
      jalur: "PMDK Raport",
      jalur1: "SKL/Ijasah",
      daftar: "30 April 2026",
    },
    {
      gelombang: "Gelombang 2",
      pendaftaran: "1 Mei 2026 - 31 Juli 2026 ",
      jalur: "PMDK Raport",
      jalur1: "SKL/Ijasah",
      jalur2: "UTBK",
      daftar: "1 Agustus 2026",
    },
    {
      gelombang: "Gelombang 3",
      pendaftaran: "3 Agustus 2026 - 5 September 2026 ",
      jalur: "PMDK Raport",
      jalur1: "SKL/Ijasah",
      jalur2: "UTBK",
      daftar: "12 September 2026",
    },
    {
      gelombang: "Gelombang 4",
      pendaftaran: "15 September 2026 - 30 Oktober 2026 ",
      jalur: "PMDK Raport",
      jalur1: "SKL/Ijasah",
      daftar: "",
    },

  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-50 via-blue-50/30 to-white overflow-hidden" id="jadwal">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium border border-cyan-200/50 shadow-sm">
            <Calendar className="w-4 h-4" />
            Timeline Pendaftaran
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Jadwal <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">PMB UNIPMA</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Catat tanggal penting untuk pendaftaran mahasiswa baru tahun akademik 2025/2026
          </p>

          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wide">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Gelombang
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wide">
                    <div className="flex items-center gap-2">
                      Pendaftaran
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wide">
                    <div className="flex items-center gap-2">                 
                      Jalur Tanpa Tes
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wide">
                    <div className="flex items-center gap-2">
                     Daftar Ulang
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-blue-50/50 transition-all duration-200 group"
                  >
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-2 font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
                        {item.gelombang}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-700">{item.pendaftaran}</td>
                    <td className="py-4 px-6 text-gray-700">{item.jalur}<br />{item.jalur1}<br />{item.jalur2}</td>
                    <td className="py-4 px-6 text-gray-700">{item.daftar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {schedules.map((item, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 space-y-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  {item.gelombang}
                </h3>
                <Calendar className="w-5 h-5 text-cyan-500" />
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
               
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Pendaftaran</p>
                    <p className="text-gray-800 font-medium">{item.pendaftaran}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
             
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Jalur Tanpa Tes</p>
                    <p className="text-gray-800 font-medium">{item.jalur}<br />{item.jalur1}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
               
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Daftar Ulang</p>
                    <p className="text-gray-800 font-medium">{item.daftar}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-12 backdrop-blur-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Jangan sampai terlewat!</p>
              <p className="text-sm text-gray-600 font-light">Segera daftarkan diri Anda sesuai jadwal yang tersedia</p>
            </div>
          </div>
          <a 
            href="/register"
            className="whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}