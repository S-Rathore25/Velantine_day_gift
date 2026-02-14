import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Memories from './pages/Memories';
import Reasons from './pages/Reasons';
import Letter from './pages/Letter';
import Countdown from './pages/Countdown';
import Surprise from './pages/Surprise';
import Navigation from './components/Navigation';

const Layout = () => {
  const location = useLocation();
  const showNav = location.pathname !== '/';

  return (
    <div className="bg-pink-50 min-h-screen text-gray-800 font-sans">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/surprise" element={<Surprise />} />
        </Routes>
      </AnimatePresence>

      {showNav && <Navigation />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
