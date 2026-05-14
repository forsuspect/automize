import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import CookiesPage from './pages/CookiesPage';

import AnimatedBackground from './components/AnimatedBackground';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <AnimatedBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/carreiras" element={<Careers />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/termos-de-uso" element={<Terms />} />
          <Route path="/politica-de-privacidade" element={<Privacy />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
