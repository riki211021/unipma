import React from "react";
import SK_RPL from "../assets/pdf/va.pdf";
import VA_IMG from "../assets/images/va1.png";
import VA_IMG1 from "../assets/images/va2.png";
export default function Va() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* === KIRI: PDF VIEWER + GAMBAR === */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Panduan Pembayaran Virtual Account (VA)</h2>

          {/* Gambar ilustrasi */}
          <img src={VA_IMG} alt="Panduan VA" className="w-3/4 md:w-2/3 mb-5 rounded-lg shadow-sm" />
          <img src={VA_IMG1} alt="Panduan VA" className="w-3/4 md:w-2/3 mb-5 rounded-lg shadow-sm" />

          <p className="text-gray-600 mb-4 text-center">Silakan baca panduan berikut untuk memahami tata cara pembayaran menggunakan Virtual Account (VA).</p>
        </div>

        {/* === KANAN: KONTAK UNIVERSITAS === */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Butuh Bantuan?</h2>
          <p className="text-gray-600 mb-6">Jika Anda masih kurang paham dengan tata cara pembayaran VA, silakan hubungi tim PMB Universitas PGRI Madiun melalui kontak di bawah ini.</p>

          <div className="space-y-3 text-gray-700">
            <p>
              📍 <span className="font-semibold">Alamat:</span>
              Jl. Setia Budi No.85, Kanigoro, Kartoharjo, Madiun, Jawa Timur
            </p>
            <p>
              ☎️ <span className="font-semibold">Telepon:</span> (0351) 462986
            </p>
            <p>
              📱 <span className="font-semibold">WhatsApp:</span>{" "}
              <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline">
                +62 812-3456-789
              </a>
            </p>
            <p>
              📧 <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:pmb@unipma.ac.id" className="text-blue-600 hover:underline">
                pmb@unipma.ac.id
              </a>
            </p>
            <p>
              🌐 <span className="font-semibold">Website:</span>{" "}
              <a href="https://pmb.unipma.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                https://pmb.unipma.ac.id
              </a>
            </p>
          </div>

          <div className="mt-6">
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition-all">
              Hubungi via WhatsApp
            </a>
          </div>
          <div className="w-full flex flex-col items-center mt-6">
            {/* Tombol Download PDF */}
            <a href={SK_RPL} download="Panduan_Virtual_Account.pdf" className="mb-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download Panduan
            </a>

            {/* PDF Viewer */}
            <iframe src={SK_RPL} title="Panduan VA" className="w-[85%] h-[200px] md:h-[400px] rounded-lg border border-gray-200"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
