import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Sparkles, Users, Calendar, MapPin } from "lucide-react";

// Contoh gambar — ganti sesuai asetmu
import pramukaImg from "../assets/ukm/pramuka.jpeg";
import olahragaImg from "../assets/ukm/olahraga.jpeg";
import psmImg from "../assets/ukm/psm.jpeg";
import mapalaImg from "../assets/ukm/mapala.jpeg";
import persImg from "../assets/ukm/pers.jpeg";

export default function UkmDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const ukmData = {
    pramuka: {
      nama: "UKM Pramuka",
      gambar: pramukaImg,
      deskripsi:
        "UKM Pramuka UNIPMA merupakan wadah untuk membentuk karakter, kepemimpinan, dan jiwa sosial melalui berbagai kegiatan kepramukaan seperti perkemahan, pelatihan, dan pengabdian masyarakat.",
      ketua: "Budi Santoso",
      jadwal: "Setiap Sabtu, pukul 15.00 - 17.00",
      lokasi: "Lapangan Upacara UNIPMA",
      galeri: [pramukaImg, pramukaImg, pramukaImg],
    },
    olahraga: {
      nama: "UKM Olahraga",
      gambar: olahragaImg,
      deskripsi:
        "UKM Olahraga menaungi berbagai cabang seperti futsal, voli, bulutangkis, basket, dan atletik. UKM ini bertujuan mengembangkan bakat mahasiswa dalam bidang olahraga.",
      ketua: "Andi Wijaya",
      jadwal: "Setiap Selasa & Kamis, pukul 16.00 - 18.00",
      lokasi: "GOR Cendekia UNIPMA",
      galeri: [olahragaImg, olahragaImg],
    },
    psm: {
      nama: "UKM Paduan Suara Mahasiswa (PSM)",
      gambar: psmImg,
      deskripsi:
        "UKM PSM merupakan tempat bagi mahasiswa yang memiliki minat di bidang musik dan seni vokal. Rutin tampil dalam acara kampus maupun tingkat nasional.",
      ketua: "Dewi Lestari",
      jadwal: "Setiap Rabu & Jumat, pukul 16.00 - 18.00",
      lokasi: "Graha Cendekia",
      galeri: [psmImg, psmImg],
    },
    mapala: {
      nama: "UKM MAPALA",
      gambar: mapalaImg,
      deskripsi:
        "MAPALA UNIPMA adalah unit kegiatan mahasiswa pecinta alam yang aktif melakukan pendakian, konservasi, pelatihan survival, dan kegiatan lingkungan.",
      ketua: "Rizky Aditya",
      jadwal: "Setiap Minggu, pukul 07.00",
      lokasi: "Posko MAPALA UNIPMA",
      galeri: [mapalaImg, mapalaImg],
    },
    pers: {
      nama: "UKM Pers Kampus",
      gambar: persImg,
      deskripsi:
        "UKM Pers bergerak dalam bidang jurnalistik, fotografi, desain grafis, dan media kampus. Aktif menerbitkan buletin dan liputan kegiatan mahasiswa.",
      ketua: "Siti Aminah",
      jadwal: "Setiap Senin, pukul 15.00",
      lokasi: "Ruang UKM Pers UNIPMA",
      galeri: [persImg, persImg],
    },
  };

  const detail = ukmData[id];

  if (!detail) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-xl font-semibold">UKM tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-white pb-20">
      {/* Header Image */}
      <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden">
        <img
          src={detail.gambar}
          alt={detail.nama}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-3xl md:text-5xl font-bold">{detail.nama}</h1>
        </div>
      </div>

      {/* Detail Card */}
      <div className="max-w-5xl mx-auto mt-12 px-6 md:px-0">
        <div className="bg-white/80 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            {detail.deskripsi}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Ketua UKM</h4>
                <p className="text-gray-600 text-sm">{detail.ketua}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
              <Calendar className="w-6 h-6 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Jadwal Latihan</h4>
                <p className="text-gray-600 text-sm">{detail.jadwal}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
              <MapPin className="w-6 h-6 text-red-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Lokasi Kegiatan</h4>
                <p className="text-gray-600 text-sm">{detail.lokasi}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-500" />
              Galeri Kegiatan
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {detail.galeri.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`galeri-${i}`}
                  className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
