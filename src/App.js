 dev/syafrina-az-zahra
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SyafrinaAzZahra from "./pages/SyafrinaAzZahra";
import SalwaaAufaaNabila from "./pages/salwaa-aufaa-nabila";
import AlfiRizqiRachmadina from "./pages/AlfiRizqiRachmadina";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/syafrina-az-zahra" element={<SyafrinaAzZahra />} />
        <Route path="/salwaa-aufaa-nabila" element={<SalwaaAufaaNabila />} />
        <Route path="/alfi-rizqi-rachmadina" element={<AlfiRizqiRachmadina />} />
      </Routes>
    </BrowserRouter>
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalwaaProfile from './salwaa-aufaa-nabila';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/salwaa" element={<SalwaaProfile />} />
      </Routes>
    </Router>
 main
  );
}

export default App;