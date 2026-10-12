import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-wider text-white">
          <div className="p-2 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '12s' }} />
          </div>
          <span>SUMBAWA<span className="text-teal-400">.ID</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
          <a href="#destinasi" className="hover:text-teal-400 transition-colors">Destinasi</a>
          <a href="#budaya" className="hover:text-teal-400 transition-colors">Budaya & Tradisi</a>
          <a href="#panduan" className="hover:text-teal-400 transition-colors">Panduan</a>
          <a href="#destinasi" className="px-5 py-2.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition-all">Jelajahi</a>
        </div>
        <button onClick={() => setMenu(!menu)} className="md:hidden text-slate-200">{menu ? <X /> : <Menu />}</button>
      </div>
      {menu && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 text-slate-200">
          <a href="#destinasi" onClick={() => setMenu(false)}>Destinasi</a>
          <a href="#budaya" onClick={() => setMenu(false)}>Budaya & Tradisi</a>
          <a href="#panduan" onClick={() => setMenu(false)}>Panduan</a>
        </div>
      )}
    </nav>
  );
}
