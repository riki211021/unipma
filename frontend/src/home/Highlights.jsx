import React from "react";
import { Award, DollarSign, GraduationCap, Building2 } from "lucide-react";

export default function Highlights() {
  const items = [
    {
      title: "Top 100 Kampus Nasional",
      desc: "UNIPMA termasuk 100 besar Perguruan Tinggi terbaik di Indonesia.",
      icon: Award,
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      title: "40+ Program Studi",
      desc: "Pilihan program studi S1 dan S2 yang terakreditasi BAN-PT.",
      icon: GraduationCap,
      gradient: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-50 to-teal-50",
    },
    {
      title: "Fasilitas Lengkap",
      desc: "Kampus modern dengan laboratorium, perpustakaan, dan sport center.",
      icon: Building2,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-blue-50/30 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium border border-cyan-200/50 shadow-sm mb-4">
            Keunggulan UNIPMA
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Mengapa Memilih <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">UNIPMA?</span>
          </h2>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:border-cyan-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon Container */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg shadow-cyan-500/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-1">
              <p className="text-4xl font-bold">50+</p>
              <p className="text-cyan-100 text-sm font-light uppercase tracking-wide">Tahun Berpengalaman</p>
            </div>
            <div className="space-y-1 border-x-0 md:border-x border-white/20">
              <p className="text-4xl font-bold">15K+</p>
              <p className="text-cyan-100 text-sm font-light uppercase tracking-wide">Alumni Sukses</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold">95%</p>
              <p className="text-cyan-100 text-sm font-light uppercase tracking-wide">Tingkat Kelulusan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}