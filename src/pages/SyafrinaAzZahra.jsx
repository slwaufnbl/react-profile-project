import { useState } from "react";
import fotoProfil from "../assets/syafrina.jpeg";

export default function SyafrinaAzZahra() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="h-36 bg-gradient-to-br from-green-300 to-lime-400 relative">
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 400 40" preserveAspectRatio="none">
            <path d="M0,20 Q100,0 200,20 Q300,40 400,20 L400,40 L0,40 Z" fill="#f9a8d4" />
          </svg>
        </div>
        <div className="bg-pink-300 px-6 pt-0 pb-8 relative">
          <div className="absolute -top-14 left-6">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
              <img src={fotoProfil} className="w-full h-full object-cover" alt="Foto Profil Syafrina" />
            </div>
          </div>
          <div className="pt-14">
            <h1 className="text-2xl font-bold text-gray-800">Syafrina Az Zahra</h1>
            <p className="text-gray-700 font-medium mt-1">Mahasiswa D3 Teknologi Informasi</p>
          </div>
          <div className="border-t border-pink-200 my-5 opacity-60" />
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-1 border-b-2 border-cyan-400 pb-1 inline-block">Biodata</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Nama Lengkap:</span>
                <span className="font-semibold text-gray-800">Syafrina Az Zahra</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Kelas:</span>
                <span className="font-semibold text-gray-800">Pemrograman Web</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Jurusan:</span>
                <span className="font-semibold text-gray-800">Teknologi Informasi</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Domisili:</span>
                <span className="font-semibold text-gray-800">Malang, Jawa Timur</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-5 mt-4">
            <h2 className="text-lg font-bold text-gray-800 mb-1 border-b-2 border-cyan-400 pb-1 inline-block">Tentang Diri</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Halo! Nama saya Syafrina Az Zahra, seorang mahasiswi aktif program studi D3 Teknologi Informasi. Saya memiliki ketertarikan yang besar di bidang pengembangan web dan desain antarmuka pengguna. Saya percaya bahwa teknologi dapat menjadi alat yang luar biasa untuk membantu banyak orang.
              {showMore && (<> Dalam perjalanan akademik saya, saya telah mempelajari berbagai teknologi seperti HTML, CSS, JavaScript, dan kini tengah mendalami ReactJS. Saya senang belajar hal-hal baru, berkolaborasi dalam tim, dan menghadapi tantangan yang mendorong saya untuk terus berkembang.</>)}
            </p>
            <button onClick={() => setShowMore(!showMore)} className="mt-2 text-xs text-cyan-500 font-semibold hover:underline">
              {showMore ? "Sembunyikan ▲" : "Selengkapnya ▼"}
            </button>
          </div>
        </div>
      </div>
    </div>
);
}
