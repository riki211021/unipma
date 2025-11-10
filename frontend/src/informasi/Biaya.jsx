import React from "react";
import pmbImage from "../assets/images/pmb.jpeg"; // Gambar PMB kampus, sesuaikan path

export default function Biaya() {
  const dataBiaya = [
    { no: 1, prodi: "S-2 Pendidikan Bahasa dan Sastra Indonesia", biayaSemester: "-", pkkmb: "-", bpiGelI: "-", bpiGelII: "-", bpiGelIII: "-" },
    { no: 2, prodi: "S-2 Bimbingan dan Konseling", biayaSemester: "-", pkkmb: "-", bpiGelI: "-", bpiGelII: "-", bpiGelIII: "-" },
    { no: 5, prodi: "Pendidikan Biologi", biayaSemester: "Rp 3.000.000", pkkmb: "Rp 1.650.000", bpiGelI: "Rp 4.000.000", bpiGelII: "-", bpiGelIII: "-" },
    { no: 6, prodi: "Pendidikan Guru Sekolah Dasar", biayaSemester: "Rp 5.000.000", pkkmb: "Rp 1.650.000", bpiGelI: "Rp 5.500.000", bpiGelII: "-", bpiGelIII: "-" },
    { no: 24, prodi: "Teknik Informatika", biayaSemester: "Rp 5.000.000", pkkmb: "Rp 1.650.000", bpiGelI: "Rp 6.500.000", bpiGelII: "-", bpiGelIII: "-" },
    { no: 29, prodi: "Hukum", biayaSemester: "Rp 4.500.000", pkkmb: "Rp 1.650.000", bpiGelI: "Rp 4.000.000", bpiGelII: "-", bpiGelIII: "-" },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* === Kolom Kiri: Rincian Biaya === */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Rincian Biaya Kuliah</h1>
          <p className="text-gray-600 mb-6">
            Berikut rincian biaya kuliah, PKKMB, dan BPI tiap gelombang untuk masing-masing program studi di Universitas PGRI Madiun.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm md:text-base">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="border px-3 py-2">No</th>
                  <th className="border px-3 py-2 text-left">Program Studi</th>
                  <th className="border px-3 py-2">Biaya Semester</th>
                  <th className="border px-3 py-2">PKKMB</th>
                  <th className="border px-3 py-2">BPI Gel I</th>
                  <th className="border px-3 py-2">BPI Gel II</th>
                  <th className="border px-3 py-2">BPI Gel III</th>
                </tr>
              </thead>
              <tbody>
                {dataBiaya.map((item, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="border px-3 py-2 text-center">{item.no}</td>
                    <td className="border px-3 py-2">{item.prodi}</td>
                    <td className="border px-3 py-2 text-center">{item.biayaSemester}</td>
                    <td className="border px-3 py-2 text-center">{item.pkkmb}</td>
                    <td className="border px-3 py-2 text-center">{item.bpiGelI}</td>
                    <td className="border px-3 py-2 text-center">{item.bpiGelII}</td>
                    <td className="border px-3 py-2 text-center">{item.bpiGelIII}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-gray-700">
            <strong>Keterangan:</strong> Biaya semester termasuk (SKS, SPP, Hereg, Penunjang, PPL, KKN, Skripsi, Ujian Skripsi, Praktikum).<br />
            <strong>Biaya Total =</strong> (Biaya Semester) + (BPI sesuai Gelombang) + (PKKMB/Ospek)
          </p>
        </div>

        {/* === Kolom Kanan: Kontak Kampus === */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Informasi Kontak</h2>
          <p className="text-gray-700 mb-2">
            <strong>Kampus Universitas PGRI Madiun</strong>
          </p>
          <p className="text-gray-600 mb-4">
            Jl. Setia Budi No.85, Kanigoro, Kec. Kartoharjo, Kota Madiun, Jawa Timur 63118
          </p>
          <p className="text-gray-700"><strong>Telepon:</strong> (0351) 462986</p>
          <p className="text-gray-700"><strong>WhatsApp:</strong> 0812-3456-7890</p>
          <p className="text-gray-700"><strong>Email:</strong> info@unipma.ac.id</p>
          <p className="text-gray-700 mb-6"><strong>Website:</strong> www.unipma.ac.id</p>

          <img src={pmbImage} alt="PMB UNIPMA" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* === Persyaratan dan Prosedur === */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Persyaratan Pendaftaran</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
            <li>Fotokopi ijazah terakhir yang telah dilegalisir (2 lembar).</li>
            <li>Fotokopi nilai rapor semester I–V (untuk jalur tanpa tes).</li>
            <li>Fotokopi Kartu Keluarga (KK) dan KTP calon mahasiswa.</li>
            <li>Pas foto terbaru ukuran 3x4 sebanyak 2 lembar.</li>
            <li>Bukti pembayaran pendaftaran.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Prosedur Pendaftaran</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Mengisi formulir pendaftaran online di portal PMB UNIPMA.</li>
            <li>Mengunggah dokumen persyaratan sesuai ketentuan.</li>
            <li>Melakukan verifikasi data dan pembayaran biaya pendaftaran.</li>
            <li>Menerima konfirmasi penerimaan melalui email atau WhatsApp.</li>
            <li>Melakukan daftar ulang sesuai jadwal gelombang masing-masing.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
