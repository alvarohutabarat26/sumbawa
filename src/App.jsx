import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import CultureSection from './components/CultureSection';
import TravelTips from './components/TravelTips';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c16] text-slate-100 antialiased selection:bg-teal-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <CultureSection />
        <TravelTips />
      </main>
      <footer className="py-8 px-6 border-t border-white/10 text-center text-xs text-slate-500">
        <p>© 2026 Portal Wisata Sumbawa. Dibuat untuk para penjelajah.</p>
      </footer>
    </div>
  );
}
