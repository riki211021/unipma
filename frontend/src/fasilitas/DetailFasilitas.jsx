// src/pages/DetailFasilitas.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import asrama1 from "../assets/fasilitas/asrama/p1.jpg";
import asrama2 from "../assets/fasilitas/asrama/1p.jpg";
import asrama3 from "../assets/fasilitas/asrama/2p.jpg";
import asrama4 from "../assets/fasilitas/asrama/3p.jpg";

import lab1 from "../assets/fasilitas/lab/1.jpg";
import lab2 from "../assets/fasilitas/lab/2.jpg";

import perpustakaan1 from "../assets/fasilitas/perpustakaan/1.jpg";
import perpustakaan2 from "../assets/fasilitas/perpustakaan/2.jpg";
import perpustakaan3 from "../assets/fasilitas/perpustakaan/3.jpg";

import gor1 from "../assets/fasilitas/gor/1.jpg";
import gor2 from "../assets/fasilitas/gor/2.jpeg";
import gor3 from "../assets/fasilitas/gor/3.jpeg";

import graha1 from "../assets/fasilitas/graha/1.jpg";
import graha2 from "../assets/fasilitas/graha/2.jpg";

export default function DetailFasilitas() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dataFasilitas = {
    asrama: {
      nama: "Asrama Mahasiswa",
      deskripsi:
        "Asrama UNIPMA menyediakan tempat tinggal nyaman dengan fasilitas lengkap untuk mendukung kehidupan mahasiswa selama studi.",
      galeri: [asrama1, asrama2, asrama3, asrama4],
    },
    lab: {
      nama: "Laboratorium",
      deskripsi:
        "Laboratorium UNIPMA dilengkapi dengan peralatan modern untuk mendukung kegiatan praktikum dan riset mahasiswa.",
      galeri: [lab1, lab2],
    },
    perpustakaan: {
      nama: "Perpustakaan",
      deskripsi:
        "Perpustakaan digital dan fisik UNIPMA menyediakan berbagai koleksi buku, jurnal, dan literatur akademik.",
      galeri: [perpustakaan1, perpustakaan2, perpustakaan3],
    },
    gor: {
      nama: "GOR Cendekia",
      deskripsi:
        "Gedung Olahraga Cendekia menjadi tempat utama kegiatan olahraga dan event kampus.",
      galeri: [gor1, gor2, gor3],
    },
    graha: {
      nama: "Graha Cendekia",
      deskripsi:
        "Graha Cendekia digunakan sebagai aula serbaguna untuk seminar, wisuda, dan kegiatan besar kampus.",
      galeri: [graha1, graha2],
    },
  };

  const data = dataFasilitas[id];
  if (!data) return <p className="p-10 text-center">Data fasilitas tidak ditemukan.</p>;

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % data.galeri.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? data.galeri.length - 1 : prev - 1
    );
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600"
      >
        ← Kembali
      </button>

      {/* Judul dan Deskripsi */}
      <h1 className="text-3xl font-bold text-cyan-700 mb-4">{data.nama}</h1>
      <p className="text-gray-700 leading-relaxed mb-8">{data.deskripsi}</p>

      {/* Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.galeri.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${data.nama} - ${i + 1}`}
            onClick={() => setSelectedIndex(i)}
            className="rounded-xl shadow-md object-cover w-full h-64 cursor-pointer hover:scale-105 transition-transform duration-500"
          />
        ))}
      </div>

      {/* Modal Fullscreen */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-5xl font-bold hover:text-cyan-400 select-none"
          >
            ‹
          </button>

          <img
            src={data.galeri[selectedIndex]}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg object-contain"
          />

          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-5xl font-bold hover:text-cyan-400 select-none"
          >
            ›
          </button>

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
