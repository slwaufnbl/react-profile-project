import React from "react";
import foto from "./salwaa.jpg";

const SalwaaProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-2xl w-full overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-8 flex flex-col items-center">
          <img
            src={foto}
            alt="Salwaa Aufaa Nabila Prasetyo"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-4"
          />
          <h1 className="text-2xl font-bold text-white text-center">
            Salwaa Aufaa Nabila Prasetyo
          </h1>
          <p className="text-pink-100 mt-1 text-sm">Mahasiswi D3 Teknologi Informasi</p>
        </div>

        {/* Info */}
        <div className="p-6 space-y-4">

          {/* Badge Info */}
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-medium">
              📚 Kelas T-2H
            </span>
            <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-medium">
              💻 D3 Teknologi Informasi
            </span>
            <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
              📍 Malang, Jawa Timur
            </span>
          </div>

          {/* Divider */}
          <hr className="border-pink-100" />

          {/* Deskripsi */}
          <div>
            <h2 className="text-lg font-semibold text-rose-500 mb-2">Tentang Saya</h2>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              Perkenalkan, nama saya <strong>Salwaa Aufaa Nabila Prasetyo</strong>, mahasiswi 
              program studi D3 Teknologi Informasi. Saya merupakan pribadi yang tekun, penuh 
              semangat, dan selalu antusias dalam mempelajari hal-hal baru, khususnya di bidang 
              teknologi dan pengembangan sistem informasi.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-justify mt-2">
              Saat ini saya sedang menempuh pendidikan di semester awal dan aktif mengikuti 
              berbagai kegiatan akademik untuk memperluas wawasan serta keterampilan di dunia 
              teknologi informasi. Saya memiliki ketertarikan yang besar terhadap pengembangan 
              web, pemrograman, serta pengelolaan data dan sistem.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-justify mt-2">
              Saya berdomisili di Malang, Jawa Timur, Indonesia — kota yang dikenal sebagai 
              salah satu pusat pendidikan terkemuka di Indonesia. Dalam kehidupan sehari-hari, 
              saya adalah pribadi yang bertanggung jawab, mampu bekerja secara mandiri maupun 
              dalam tim, serta selalu berusaha memberikan yang terbaik dalam setiap tugas yang 
              diemban. Saya percaya bahwa teknologi adalah kunci kemajuan, dan saya berkomitmen 
              untuk terus belajar demi berkontribusi nyata di dunia teknologi informasi di masa depan.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-rose-50 px-6 py-4 text-center">
          <p className="text-rose-400 text-xs">© 2026 Salwaa Aufaa Nabila Prasetyo</p>
        </div>

      </div>
    </div>
  );
};

export default SalwaaProfile;
