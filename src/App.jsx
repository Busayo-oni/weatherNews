// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import WeatherPage from './pages/WeatherPage';
import NewsPage from './pages/NewsPage';
import NewsDetail from './components/NewsDetail';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<WeatherPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:title" element={<NewsDetail />} />
          </Routes>
        </div>
        <Footer /> {/* Add Footer */}
      </div>
    </Router>
  );
}

export default App;
