import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, DESTINATIONS } from '../data/sumbawaData';
import { Sparkles } from 'lucide-react';

export default function Destinations() {
  const [active, setActive] = useState('Semua');
  const filtered = active === 'Semua' ? DESTINATIONS : DESTINATIONS.filter(d => d.category === active);

  return (
    <section id="destinasi" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest">Destinasi Pilihan</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Pesona Alam Tanpa Batas</h2>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${active === cat ? 'bg-teal-500 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/5'}`}>{cat}</button>
          ))}
        </div>
      </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map(dest => (
            <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} key={dest.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/40 transition-all flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <span className="absolute top-3 right-3 px-3 py-1 bg-slate-950/70 backdrop-blur-md text-teal-300 text-xs rounded-full border border-teal-500/30">{dest.tag}</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-teal-400 uppercase font-semibold">{dest.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-teal-300 transition-colors">{dest.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{dest.desc}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5" /><span>{dest.highlight}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
