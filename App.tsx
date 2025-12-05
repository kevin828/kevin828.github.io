import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './src/sections/Navigation';
import Hero from './src/sections/Hero';
import Portfolio from './src/sections/Portfolio';
import Services from './src/sections/Services';
import Pricing from './src/sections/Pricing';
import About from './src/sections/About';
import Contact from './src/sections/Contact';
import Footer from './src/sections/Footer';
import ScrollToTopButton from './src/components/atoms/ScrollToTopButton';
import { LanguageProvider } from './src/core/hooks/useLanguage';

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