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
  );
}

export default App;