import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Impor semua gambar
import alunalun1 from "../assets/wisata/alun-alun/1.webp";
import alunalun2 from "../assets/wisata/alun-alun/2.webp";
import alunalun3 from "../assets/wisata/alun-alun/3.webp";

import bantaran1 from "../assets/wisata/bantaran/1.jpg";
import bantaran2 from "../assets/wisata/bantaran/2.webp";
import bantaran3 from "../assets/wisata/bantaran/3.webp";

import psc1 from "../assets/wisata/psc/1.jpg";
import psc2 from "../assets/wisata/psc/2.webp";
import psc3 from "../assets/wisata/psc/3.jpg";
import psc4 from "../assets/wisata/psc/4.jpeg";
import psc5 from "../assets/wisata/psc/5.jpg";
import psc6 from "../assets/wisata/psc/6.png";

import ngrowo1 from "../assets/wisata/ngrowo/1.jpeg";
import ngrowo2 from "../assets/wisata/ngrowo/2.jpg";

export default function DetailWisata() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Data lengkap dengan galeri
  const detail = {
    alunalun: {
      nama: "Alun-Alun Madiun",
      deskripsi:
        "Alun-Alun Madiun merupakan pusat kota tempat masyarakat berkumpul, bersantai, olahraga, dan menikmati suasana malam hari. Di sekitar area ini juga terdapat kuliner khas Madiun dan fasilitas umum yang tertata rapi.",
      galeri: [alunalun1, alunalun2, alunalun3],
    },
    bantaran: {
      nama: "Taman Bantaran Kali Madiun",
      deskripsi:
        "Taman Bantaran Kali Madiun menjadi ruang terbuka hijau dengan pemandangan sungai dan taman bermain anak yang indah. Tempat ini cocok untuk keluarga dan olahraga pagi.",
      galeri: [bantaran1, bantaran2, bantaran3],
    },
    psc: {
      nama: "Pahlawan Street Center (PSC)",
      deskripsi:
        "Pahlawan Street Center merupakan ikon smart city Kota Madiun dengan area pedestrian, kuliner malam, dan mural tematik yang menarik perhatian wisatawan lokal maupun luar kota.",
      galeri: [psc1, psc2, psc3,psc4,psc5,psc6],
    },
    ngrowo: {
      nama: "Ngrowo Bening Madiun",
      deskripsi:
        "Ngrowo Bening Edu Park adalah lokasi pembibitan sejumlah komoditas sayur serta buah, yaitu Melon, Semangka, Cabai, Tomat, Pisang, Pepaya, Kacang Panjang dan budidaya Anggrek.",
      galeri: [ngrowo1,ngrowo2],
    },
  };

  const data = detail[id];

  if (!data) {
    return <p className="p-10 text-center">Data wisata tidak ditemukan.</p>;
  }

  return (
    <div className="p-10 max-w-6xl mx-auto">
      {/* Tombol kembali */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
      >
        ← Kembali
      </button>

      {/* Judul dan deskripsi */}
      <h1 className="text-4xl font-bold text-cyan-700 mb-4">{data.nama}</h1>
      <p className="text-gray-700 leading-relaxed mb-8">{data.deskripsi}</p>

      {/* Galeri foto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.galeri.map((foto, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={foto}
              alt={`${data.nama} - ${index + 1}`}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay efek hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white font-semibold text-sm">
                {data.nama} #{index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
