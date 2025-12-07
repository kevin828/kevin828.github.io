import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollToTopButton from './components/atoms/ScrollToTopButton';
import { LanguageProvider } from './core/hooks/useLanguage';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Additional routes can be added here in the future, e.g.:
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
        */}
      </Routes>
    </LanguageProvider>
  );
};

export default App;