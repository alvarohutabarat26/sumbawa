import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080c16] via-[#080c16]/70 to-[#080c16]/40" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" /> The Untamed Wonder of Indonesia
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Eksplorasi Keajaiban <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-amber-300">Tanah Samawa</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Dari perairan jernih Pulau Moyo, savana emas Kenawa, hiu paus Teluk Saleh, hingga kaldera raksasa Tambora.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#destinasi" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-semibold shadow-lg hover:shadow-teal-500/25 transition-all">Mulai Petualangan</a>
          <a href="#budaya" className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md transition-all">Kenali Budaya</a>
        </motion.div>
      </div>
      <a href="#destinasi" aria-label="Scroll" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </a>
    </header>
  );
}
