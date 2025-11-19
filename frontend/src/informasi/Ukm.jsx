import React from "react";
import { useNavigate } from "react-router-dom";

// Gambar UKM (ganti sesuai asetmu)
import pramukaImg from "../assets/ukm/pramuka.jpeg";
import olahragaImg from "../assets/ukm/olahraga.jpeg";
import psmImg from "../assets/ukm/psm.jpeg";
import mapalaImg from "../assets/ukm/mapala.jpeg";
import persImg from "../assets/ukm/pers.jpeg";

import {
  Users,
  Mountain,
  Drum,
  Flag,
  Dumbbell,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Ukm() {
  const navigate = useNavigate();

  const ukmList = [
    {
      id: "pramuka",
      nama: "UKM Pramuka",
      gambar: pramukaImg,
      icon: Flag,
      gradient: "from-orange-400 to-red-500",
    },
    {
      id: "olahraga",
      nama: "UKM Olahraga",
      gambar: olahragaImg,
      icon: Dumbbell,
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      id: "psm",
      nama: "UKM Paduan Suara Mahasiswa",
      gambar: psmImg,
      icon: Drum,
      gradient: "from-rose-400 to-pink-500",
    },
    {
      id: "mapala",
      nama: "UKM MAPALA",
      gambar: mapalaImg,
      icon: Mountain,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "pers",
      nama: "UKM Pers Kampus",
      gambar: persImg,
      icon: Users,
      gradient: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-blue-50/20 to-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background efek */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200/50 shadow-sm">
          <Users className="w-4 h-4" />
          Unit Kegiatan Mahasiswa
        </div>

        <h1 className="text-3xl md:text-5xl font-light text-gray-900">
          Daftar{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
            UKM UNIPMA
          </span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto font-light">
          Tempat mahasiswa mengembangkan minat, bakat, serta potensi diri
          melalui berbagai kegiatan positif.
        </p>

        <div className="flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-cyan-600 rounded-full"></div>
        </div>
      </div>

      {/* Grid UKM */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {ukmList.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              onClick={() => navigate(`/ukm/${item.id}`)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/80 border border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gambar */}
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>

                <div
                  className={`absolute top-4 right-4 z-20 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Konten */}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 transition-all duration-300">
                    {item.nama}
                  </h2>

                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-purple-300 transition-colors duration-300"></div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span className="font-light">Organisasi aktif & kreatif</span>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
