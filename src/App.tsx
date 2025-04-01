import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Dashboard from './pages/Dashboard';
import Tips from './pages/Tips';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App; 