import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Info, Sparkles } from "lucide-react";

import masjidImg from "../assets/ibadah/masjid.jpeg";
import musholaImg from "../assets/ibadah/mushola.jpeg";
import gerejaImg from "../assets/ibadah/gereja.jpeg";

export default function IbadahDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = {
    masjid: {
      nama: "Masjid Kampus",
      gambar: masjidImg,
      deskripsi:
        "Masjid Kampus Unipma digunakan untuk kegiatan peribadahan, kajian Islam, dan berbagai aktivitas keagamaan mahasiswa. Tempatnya nyaman, bersih, dan ramah mahasiswa.",
      lokasi: "Area Gedung Utama Universitas PGRI Madiun",
      jam: "Setiap Hari • 24 Jam",
      fasilitas: [
        "Tempat Wudhu",
        "Ruang Sholat Luas",
        "Pendingin Ruangan",
        "Kajian Rutin",
        "Perpustakaan Mini"
      ],
      warna: "from-cyan-500 to-blue-600",
    },
    mushola: {
      nama: "Mushola Mahasiswa",
      gambar: musholaImg,
      deskripsi:
        "Mushola ini disediakan khusus bagi mahasiswa yang ingin beribadah dengan tenang di tengah kesibukan kuliah. Letaknya mudah dijangkau dari seluruh fakultas.",
      lokasi: "Dekat Area Fakultas Keguruan",
      jam: "Setiap Hari • 05.00 - 22.00",
      fasilitas: ["Tempat Wudhu", "Ruang Sholat", "Rak Al-Qur'an", "Kipas Angin"],
      warna: "from-blue-500 to-indigo-500",
    },
    gereja: {
      nama: "Gereja Kampus",
      gambar: gerejaImg,
      deskripsi:
        "Gereja Kampus digunakan untuk kegiatan peribadahan minggu serta kegiatan rohani mahasiswa Kristen. Tempat ibadah yang nyaman dan menenangkan.",
      lokasi: "Kompleks Barat Universitas PGRI Madiun",
      jam: "Setiap Hari • 07.00 - 20.00",
      fasilitas: [
        "Ruang Ibadah Nyaman",
        "Area Musik Gereja",
        "Kegiatan Rohani",
        "Parkir Luas"
      ],
      warna: "from-teal-500 to-cyan-600",
    },
  };

  const item = data[id];

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Data tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-blue-50/20 to-white pb-20">
      {/* Header */}
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={item.gambar}
          className="w-full h-full object-cover"
          alt={item.nama}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full shadow hover:bg-white/30 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali
        </button>

        <h1 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-semibold text-white drop-shadow-lg">
          {item.nama}
        </h1>
      </div>

      <div className="px-6 md:px-16 lg:px-32 mt-10 space-y-10">
        {/* Deskripsi */}
        <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-cyan-600" />
            <h2 className="text-lg font-semibold text-gray-800">
              Deskripsi
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">{item.deskripsi}</p>
        </div>

        {/* Informasi Lokasi & Jam */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-cyan-600" />
              <h2 className="text-lg font-semibold text-gray-800">Lokasi</h2>
            </div>
            <p className="text-gray-600">{item.lokasi}</p>
          </div>

          <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-cyan-600" />
              <h2 className="text-lg font-semibold text-gray-800">
                Jam Operasional
              </h2>
            </div>
            <p className="text-gray-600">{item.jam}</p>
          </div>
        </div>

        {/* Fasilitas */}
        <div className="bg-white/80 backdrop-blur shadow-lg rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-600" />
            <h2 className="text-lg font-semibold text-gray-800">Fasilitas</h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {item.fasilitas.map((fasilitas, i) => (
              <li
                key={i}
                className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm border border-gray-200"
              >
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-br ${item.warna}`}
                ></div>
                <span className="text-gray-700">{fasilitas}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Line gradient bottom */}
        <div
          className={`h-1 w-full rounded-full bg-gradient-to-r ${item.warna}`}
        ></div>
      </div>
    </div>
  );
}
