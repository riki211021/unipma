import React from "react";
import { Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, Linkedin, Sparkles } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="relative py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-700 text-white overflow-hidden" id="kontak">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-10 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-40 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-20 left-32 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="md:w-2/3 space-y-6 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Hubungi Kami
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Butuh Informasi <br />
            <span className="font-bold">Lebih Lanjut?</span>
          </h2>

          {/* Description */}
          <p className="text-cyan-100 text-lg font-light leading-relaxed max-w-2xl">
            Tim PMB UNIPMA siap membantu Anda kapan saja. Dapatkan informasi lengkap tentang program studi, jalur pendaftaran, biaya, akreditasi, dan prosedur pendaftaran.
          </p>

          <p className="text-white/80 font-light max-w-2xl">Anda bisa menghubungi kami melalui WhatsApp, telepon, email, atau sosial media resmi kami. Tim kami akan merespons dengan cepat dan ramah.</p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a
              href="https://wa.me/6281525841854"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white text-green-600 px-6 py-3.5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>
            <a href="tel:+6281525841854" className="group flex items-center justify-center gap-3 bg-white text-blue-600 px-6 py-3.5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Telepon
            </a>
            <a href="mailto:pmb@unipma.ac.id" className="group flex items-center justify-center gap-3 bg-white text-cyan-600 px-6 py-3.5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Email
            </a>
          </div>

          {/* Social Media */}
          <div className="pt-6">
            <p className="text-cyan-100 text-sm font-medium mb-4 uppercase tracking-wide">Ikuti Kami</p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/unipma_pmb?igsh=aDV5ZXcyMXFiMzJx"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-pink-500 transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/share/16PWRdAMkp/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://youtube.com/@unipma?si=VRqGqGr9zjUaN4YW"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-red-600 transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@unipma_pmb?_t=ZS-90ursvD6yIy&_r=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white group-hover:text-black transition-colors">
                  <path d="M12.03 2h2.25a5.75 5.75 0 0 0 5.69 5.01v2.3a7.9 7.9 0 0 1-4.47-1.35v7.29a5.65 5.65 0 1 1-5.65-5.66c.19 0 .38.01.56.03v2.29a3.36 3.36 0 1 0 3.36 3.36V2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Illustration / Image */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="relative">
            {/* Gambar Kontak */}
            <img src="/src/assets/images/kontak.png" alt="Contact Illustration" className="w-32 md:w-40 rounded-lg" />

            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-400 to-orange-400 text-blue-900 px-2.5 py-1 rounded-lg shadow-md font-semibold text-xs rotate-3 hover:rotate-0 transition-transform">24/7 Support</div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
}
