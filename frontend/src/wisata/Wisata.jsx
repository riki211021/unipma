import React from "react";
import { useNavigate } from "react-router-dom";
import { Building, Trees } from "lucide-react";
import alunAlunImg from "../assets/wisata/alun-alun/1.webp";
import tamanBantaranImg from "../assets/wisata/bantaran/1.jpg";
import pahlawanStreetImg from "../assets/wisata/psc/1.jpg";
import ngrowo from "../assets/wisata/ngrowo/2.jpg";

export default function Wisata() {
  const navigate = useNavigate();

  const wisataList = [
    {
      id: "alunalun",
      nama: "Alun-Alun Madiun",
      deskripsi:
        "Pusat kota yang menjadi tempat favorit warga untuk bersantai, olahraga, dan kuliner malam hari.",
      gambar: alunAlunImg,
      icon: Building,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      id: "bantaran",
      nama: "Taman Bantaran Kali Madiun",
      deskripsi:
        "Ruang terbuka hijau dengan pemandangan sungai dan taman bermain anak yang indah.",
      gambar: tamanBantaranImg,
      icon: Trees,
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      id: "psc",
      nama: "Pahlawan Street Center",
      deskripsi:
        "Ikon baru Madiun dengan konsep smart city, area pedestrian, kuliner, dan mural tematik.",
      gambar: pahlawanStreetImg,
      icon: Building,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "ngrowo",
      nama: "Ngrowo Bening Madiun",
      deskripsi:
        "Ikon baru Madiun dengan konsep smart city, area pedestrian, kuliner, dan mural tematik.",
      gambar: ngrowo,
      icon: Trees,
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div className="p-8 grid md:grid-cols-3 gap-8">
      {wisataList.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/wisata/${item.id}`)}
          className="cursor-pointer group relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/80 border border-gray-100 hover:border-cyan-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          <img
            src={item.gambar}
            alt={item.nama}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{item.nama}</h3>
            <p className="text-sm opacity-90">{item.deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
