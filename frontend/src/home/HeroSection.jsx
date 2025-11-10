import React, { useState, useEffect } from "react";
import hero1 from "../assets/images/dashboard/1.png";
import hero2 from "../assets/images/dashboard/2.png";
import hero3 from "../assets/images/dashboard/3.png";
import hero4 from "../assets/images/dashboard/4.jpg";
import hero5 from "../assets/images/dashboard/5.jpg";
import hero6 from "../assets/images/dashboard/wisata.png";
import pita from "../assets/images/akreditasi.png";
import { Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const images = [hero1, hero2, hero3, hero4, hero5,hero6];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ marginTop: "-80.1px" }}>
      <div className="relative w-full overflow-hidden bg-white">
        {/* Gambar hero slideshow */}
        <div className="relative w-full flex justify-center items-center bg-black overflow-hidden">
          {/* Slideshow */}
          <div className="relative w-full flex justify-center items-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`w-full h-auto transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0 absolute inset-0"}`}
                style={{
                  objectFit: "contain",
                  display: index === currentImage ? "block" : "none",
                }}
              />
            ))}
          </div>

          {/* === Pita Akreditasi === */}
          <a href="https://akreditasi.unipma.ac.id/" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-4 sm:right-8 flex flex-col items-center cursor-pointer group" title="Lihat Akreditasi">
            <img
              src={pita}
              alt="Pita Akreditasi"
              className="
    w-[30px]          /* ukuran default untuk mobile */
    sm:w-[90px]       /* ukuran untuk layar >= 640px */
    md:w-[110px]      /* ukuran untuk layar >= 768px */
    lg:w-[130px]      /* ukuran untuk layar >= 1024px */
    h-auto
    drop-shadow-xl
    transition-transform
    duration-300
    group-hover:scale-105
  "
            />
          </a>

          {/* Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button key={index} onClick={() => setCurrentImage(index)} className={`h-2 rounded-full transition-all duration-300 ${currentImage === index ? "w-8 bg-white shadow-lg" : "w-2 bg-white/50 hover:bg-white/75"}`} />
            ))}
          </div>
        </div>

        {/* 🎥 Video Profil UNIPMA */}
        <div className="w-full flex justify-center bg-gray-100 py-8">
          <div className="relative w-full max-w-5xl flex flex-col items-center px-4">
            <video src="/videos/profile-unipma.mp4" controls className="w-full h-auto rounded-xl shadow-lg" />
            <p className="mt-4 text-gray-600 text-center text-sm sm:text-base">Video Profil Universitas PGRI Madiun</p>
          </div>
        </div>

        {/* Konten bawah hero */}
        <div className="max-w-6xl mx-auto px-6 py-12 text-center space-y-6">
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="/register"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#brosur" className="inline-flex items-center justify-center gap-2 border-2 border-cyan-200 bg-white/50 text-cyan-700 px-8 py-3.5 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 font-semibold">
              <Download className="w-5 h-5" />
              Download Brosur
            </a>
          </div>

          <div className="flex justify-center gap-12 pt-8 border-t border-gray-200/50">
            <div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">15+</p>
              <p className="text-sm text-gray-500 font-medium">Program Studi</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">B</p>
              <p className="text-sm text-gray-500 font-medium">Akreditasi</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">10K+</p>
              <p className="text-sm text-gray-500 font-medium">Mahasiswa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
