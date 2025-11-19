import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactCTA from "./components/ContactCTA"; // ⬅️ import komponen CTA bawah
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Jadwal from "./informasi/Jadwal";
import JalurPendaftaran from "./informasi/JalurPendaftaran";
import RPLPage from "./informasi/Rpl";
import BiayaPage from "./informasi/Biaya";
import ProgramStudi from "./informasi/ProgramStudi";
import Va from "./informasi/Va";
import HasilSeleksi from "./Hasil_Seleksi/HasilSeleksi";
import HubungiKami from "./hubungi_kami/HubungiKami";
import Jalur from "./grafik/Jalur";
import Sebaran from "./grafik/Sebaran";
import Beasiswa from "./beasiswa/Beasiswa";
import Fasilitas from "./fasilitas/Fasilitas";
import Wisata from "./wisata/Wisata";
import DetailWisata from "./wisata/DetailWisata";
import DetailFasilitas from "./fasilitas/DetailFasilitas";
import Ibadah from "./informasi/Ibadah";
import Ukm from "./informasi/Ukm";
import UkmDetail from "./informasi/UkmDetail";
import IbadahDetail from "./informasi/IbadahDetail";
import BeasiswaDetail from "./beasiswa/BeasiswaDetail";
import ProgramStudiDetail from "./informasi/ProgramStudiDetail";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar selalu muncul di atas */}
      <Navbar />

      {/* Konten utama halaman */}
      <Routes>
        {/* Halaman umum */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Halaman informasi */}
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/pendaftaran" element={<JalurPendaftaran />} />
        <Route path="/rpl" element={<RPLPage />} />
        <Route path="/biaya" element={<BiayaPage />} />
        <Route path="/studi" element={<ProgramStudi />} />
        <Route path="/prodi-detail/:id" element={<ProgramStudiDetail />} />

        <Route path="/va" element={<Va />} />
        <Route path="/ukm" element={<Ukm />} />
        <Route path="/ukm/:id" element={<UkmDetail />} />
        <Route path="/ibadah" element={<Ibadah />} />
        <Route path="/ibadah/:id" element={<IbadahDetail />} />


        {/* beasiswa */}
        <Route path="/beasiswa" element={<Beasiswa />} />
        <Route path="/beasiswa/:id" element={<BeasiswaDetail />} />


        {/* Hasil seleksi */}
        <Route path="/hasil" element={<HasilSeleksi />} />

        {/* fasilitas */}
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/fasilitas/:id" element={<DetailFasilitas />} />


        {/* Hubungi Kami */}
        <Route path="/hubungi" element={<HubungiKami />} />

        {/* wisata */}
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/wisata/:id" element={<DetailWisata/>} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Redirect jika route tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Komponen Contact CTA muncul di bawah semua halaman */}
      <ContactCTA />
    </BrowserRouter>
  );
}

export default App;
