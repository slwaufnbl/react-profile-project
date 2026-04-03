import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SalwaaProfile from './salwaa-aufaa-nabila';
import SyafrinaAzZahra from './pages/SyafrinaAzZahra';

function Home() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-rose-500">👥 Team Profiles</h1>
      <Link to="/salwaa-aufaa-nabila" className="bg-rose-400 text-white px-6 py-2 rounded-full hover:bg-rose-500">
        Salwaa Aufaa Nabila
      </Link>
      <Link to="/syafrina-az-zahra" className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500">
        Syafrina Az Zahra
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salwaa-aufaa-nabila" element={<SalwaaProfile />} />
        <Route path="/syafrina-az-zahra" element={<SyafrinaAzZahra />} />
      </Routes>
    </Router>
  );
}

export default App;