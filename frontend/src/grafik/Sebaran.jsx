import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Sebaran() {
  // Data Provinsi
  const dataProvinsi = [
    { nama: "Jawa Timur", total: 2153 },
    { nama: "Jawa Tengah", total: 33 },
    { nama: "Jawa Barat", total: 23 },
    { nama: "Maluku", total: 84 },
    { nama: "Ngawi", total: 351 },
    { nama: "Magetan", total: 390 },
    { nama: "Lainnya", total: 2348 - (2153 + 33 + 23 + 84 + 351 + 390) },
  ];

  // Data Kota/Kabupaten
  const dataKota = [
    { nama: "Kota Madiun", total: 253 },
    { nama: "Kab. Madiun", total: 464 },
    { nama: "Kab. Magetan", total: 390 },
    { nama: "Kab. Ngawi", total: 351 },
    { nama: "Kab. Bojonegoro", total: 190 },
    { nama: "Kab. Ponorogo", total: 157 },
    { nama: "Kab. Trenggalek", total: 94 },
    { nama: "Kab. Jombang", total: 94 },
    { nama: "Kab. Nganjuk", total: 49 },
    { nama: "Lainnya", total: 437 },
  ];

  const COLORS = ["#4F46E5", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#9CA3AF", "#14B8A6", "#6366F1", "#F97316"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Sebaran Pendaftar
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bagian Kiri - Tabel */}
          <div className="space-y-8 overflow-auto">
            {/* Tabel Provinsi */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Sebaran Berdasarkan Provinsi
              </h2>
              <table className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-3 py-2 text-left">No</th>
                    <th className="px-3 py-2 text-left">Nama Provinsi</th>
                    <th className="px-3 py-2 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["D.K.I. Jakarta", 5],
                    ["Jambi", 2],
                    ["Sumatera Selatan", 8],
                    ["Lampung", 4],
                    ["Kalimantan Barat", 6],
                    ["Jawa Barat", 23],
                    ["Jawa Tengah", 33],
                    ["Maluku", 84],
                    ["Jawa Timur", 2153],
                  ].map((row, i) => (
                    <tr key={i} className="border-t hover:bg-blue-50">
                      <td className="px-3 py-2">{i + 1}</td>
                      <td className="px-3 py-2">{row[0]}</td>
                      <td className="px-3 py-2">{row[1]}</td>
                    </tr>
                  ))}
                  <tr className="font-semibold bg-blue-50">
                    <td colSpan="2" className="px-3 py-2">Jumlah Total</td>
                    <td className="px-3 py-2">2348</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tabel Kota/Kabupaten */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Sebaran Berdasarkan Kota / Kabupaten
              </h2>
              <table className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-cyan-600 text-white">
                  <tr>
                    <th className="px-3 py-2 text-left">No</th>
                    <th className="px-3 py-2 text-left">Nama Kota / Kab</th>
                    <th className="px-3 py-2 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {dataKota.map((row, i) => (
                    <tr key={i} className="border-t hover:bg-cyan-50">
                      <td className="px-3 py-2">{i + 1}</td>
                      <td className="px-3 py-2">{row.nama}</td>
                      <td className="px-3 py-2">{row.total}</td>
                    </tr>
                  ))}
                  <tr className="font-semibold bg-cyan-50">
                    <td colSpan="2" className="px-3 py-2">Jumlah Kota</td>
                    <td className="px-3 py-2">2479</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bagian Kanan - Dua Diagram */}
          <div className="flex flex-col items-center justify-center space-y-10">
            {/* Diagram Provinsi */}
            <div className="w-full bg-blue-50 rounded-xl shadow-md p-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
                Diagram Sebaran Provinsi
              </h2>
              <div className="w-full h-72">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={dataProvinsi}
                      dataKey="total"
                      nameKey="nama"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {dataProvinsi.map((entry, index) => (
                        <Cell key={`prov-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Diagram Kota / Kabupaten */}
            <div className="w-full bg-cyan-50 rounded-xl shadow-md p-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
                Diagram Sebaran Kota / Kabupaten
              </h2>
              <div className="w-full h-72">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={dataKota}
                      dataKey="total"
                      nameKey="nama"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#82ca9d"
                      label
                    >
                      {dataKota.map((entry, index) => (
                        <Cell key={`kota-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
