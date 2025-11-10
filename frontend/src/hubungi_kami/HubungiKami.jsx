import React from "react";
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function HubungiKami() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Judul Halaman */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-3">Hubungi Kami</h1>
          <p className="text-gray-600 text-lg">Kami siap membantu menjawab semua pertanyaan Anda tentang Penerimaan Mahasiswa Baru UNIPMA.</p>
        </div>

        {/* Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bagian Kiri - Informasi Kontak */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b pb-2 border-blue-200">Informasi Kontak UNIPMA</h2>

            <div className="space-y-5 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1" />
                <p>
                  <strong>Alamat:</strong>
                  <br />
                  Universitas PGRI Madiun (UNIPMA)
                  <br />
                  Jl. Setiabudi No.85, Kanigoro, Kec. Kartoharjo, Kota Madiun, Jawa Timur 63118
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <p>
                  <strong>Telepon:</strong> +6281525841854
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <p>
                  <strong>Email:</strong> pmb@unipma.ac.id
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="text-blue-600" />
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="https://unipma.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.unipma.ac.id
                  </a>
                </p>
              </div>
            </div>

            {/* Sosial Media */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Sosial Media UNIPMA</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/unipmaofficial" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition">
                  <Facebook className="text-blue-600" />
                </a>
                <a href="https://www.instagram.com/unipma_official" target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-100 rounded-full hover:bg-pink-200 transition">
                  <Instagram className="text-pink-600" />
                </a>
                <a href="https://twitter.com/unipma_official" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition">
                  <Twitter className="text-blue-500" />
                </a>
                <a href="https://www.youtube.com/@unipmaofficial" target="_blank" rel="noopener noreferrer" className="p-3 bg-red-100 rounded-full hover:bg-red-200 transition">
                  <Youtube className="text-red-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Bagian Kanan - Peta */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-100">
            <iframe
              title="Peta UNIPMA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.290519869088!2d111.53923138469554!3d-7.633670172011678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79be94b7511f73%3A0x863e1316e7a8da28!2sUniversitas%20PGRI%20Madiun!5e0!3m2!1sen!2sid!4v1761030701418!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
