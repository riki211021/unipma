import React, { useState } from "react";
import { Search } from "lucide-react";

export default function HasilSeleksi() {
  const [query, setQuery] = useState("");
  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    // simulasi hasil pencarian (nanti bisa diganti fetch API Laravel)
    setTimeout(() => {
      setHasil({
        nama: "Riki Dwi Saputra",
        nomor: "PMB20251234",
        status: "LULUS",
        prodi: "Teknik Informatika",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-blue-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">
            Cek Hasil Seleksi PMB UNIPMA
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Silakan masukkan <strong>Nomor Registrasi</strong> atau{" "}
            <strong>Nama Lengkap</strong> Anda untuk melihat hasil seleksi.
          </p>
        </div>

        {/* Form Pencarian */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Masukkan Nomor Registrasi atau Nama..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {loading ? "Mencari..." : "Cari"}
          </button>
        </form>

        {/* Hasil */}
        <div className="mt-10">
          {loading && (
            <p className="text-center text-blue-600 font-medium">
              Sedang mencari data Anda...
            </p>
          )}

          {!loading && hasil && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                {hasil.status === "LULUS" ? "Selamat! 🎉" : "Maaf 😞"}
              </h2>
              <p className="text-gray-700 mb-1">
                <strong>Nama:</strong> {hasil.nama}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Nomor Registrasi:</strong> {hasil.nomor}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Program Studi:</strong> {hasil.prodi}
              </p>
              <span
                className={`px-5 py-2 rounded-full text-sm font-semibold ${
                  hasil.status === "LULUS"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                Status: {hasil.status}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
