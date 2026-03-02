import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameLayout from './components/GameLayout';
import PrivacyPage from './components/pages/PrivacyPage';
import TermsPage from './components/pages/TermsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameLayout />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;