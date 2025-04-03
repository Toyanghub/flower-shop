import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}