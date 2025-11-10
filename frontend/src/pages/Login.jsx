import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";
import unipmaLogo from "../assets/images/unipma.png"; // sesuaikan path

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fungsi untuk membuat soal captcha acak
  const generateCaptcha = () => {
    const ops = ["+", "-", "*", "/"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    // Agar tidak ada pembagian dengan nol dan hasilnya bulat
    if (op === "/") {
      a = a * b;
    }

    let result;
    switch (op) {
      case "+": result = a + b; break;
      case "-": result = a - b; break;
      case "*": result = a * b; break;
      case "/": result = a / b; break;
      default: result = 0;
    }

    setCaptchaQuestion(`${a} ${op} ${b} = ?`);
    setCaptchaAnswer(result.toString());
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userCaptcha.trim() !== captchaAnswer) {
      alert("Captcha salah! Coba lagi.");
      generateCaptcha();
      setUserCaptcha("");
      return;
    }

    setIsLoading(true);
    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login gagal");
    } finally {
      setIsLoading(false);
      generateCaptcha();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Panduan Login */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-b from-cyan-400 to-blue-600 p-12 flex-col justify-center text-white">
          <h2 className="text-4xl font-bold mb-4">Panduan Login</h2>
          <p className="mb-6 text-gray-100/90">
            Selamat datang di portal PMB UNIPMA. Silakan login menggunakan akun yang telah terdaftar. Berikut beberapa panduan:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-100/90">
            <li>Masukkan email yang sudah didaftarkan.</li>
            <li>Gunakan password yang benar untuk login.</li>
            <li>Jika lupa password, gunakan fitur lupa akun di bawah form.</li>
          </ul>
          <p className="mt-6 text-sm text-gray-200/90">
            Portal ini aman dan hanya dapat diakses oleh calon mahasiswa terdaftar.
          </p>
        </div>

        {/* Right Side - Form Login */}
        <div className="w-full md:w-1/2 p-8 md:p-12 relative z-10">
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
              <img src={unipmaLogo} alt="UNIPMA Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-3xl font-light text-gray-900">Portal PMB</h1>
            <p className="text-sm text-gray-500 font-light">UNIPMA</p>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mt-3"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
                <input
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50/50 border border-gray-200 pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50/50 border border-gray-200 pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* CAPTCHA */}
            <div className="group">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Verifikasi (Captcha)</label>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-cyan-100 text-cyan-700 font-bold rounded-lg shadow-sm text-lg select-none">
                  {captchaQuestion}
                </div>
                <input
                  type="text"
                  placeholder="Jawaban"
                  value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)}
                  className="flex-1 bg-gray-50/50 border border-gray-200 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/50 outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  ↻
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              {isLoading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-gray-200/50 space-y-2">
            <a
              href="/forgot-password"
              className="block text-sm text-cyan-600 hover:text-blue-700 font-medium hover:underline"
            >
              Lupa Password?
            </a>
            <p className="text-sm text-gray-600 font-light">
              Belum punya akun?{" "}
              <a
                href="/register"
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 font-semibold hover:underline transition-all"
              >
                Daftar sekarang
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
