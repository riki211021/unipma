import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Jalur() {
  const data = [
    { name: "PMDK", value: 754 },
    { name: "SKL", value: 577 },
    { name: "UTBK", value: 103 },
    { name: "S2", value: 119 },
    { name: "RPL", value: 362 },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042", "#A020F0"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100 py-16 px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Statistik Jalur Pendaftaran UNIPMA
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Sisi Kiri - Tabel */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">No</th>
                  <th className="py-3 px-4 text-left">Nama Jalur</th>
                  <th className="py-3 px-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-cyan-50 transition`}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4 text-right font-medium text-gray-700">
                      {item.value}
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-100 font-semibold">
                  <td colSpan="2" className="py-3 px-4 text-right">
                    Jumlah Total
                  </td>
                  <td className="py-3 px-4 text-right text-blue-700">{total}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Sisi Kanan - Diagram Pie */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Diagram Jalur Pendaftaran
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-4 text-center px-4">
              Grafik di atas menampilkan perbandingan jumlah peserta dari setiap jalur pendaftaran UNIPMA tahun ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
