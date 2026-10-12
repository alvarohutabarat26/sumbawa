import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, DESTINATIONS } from '../data/sumbawaData';
import { Sparkles, MapPin, ExternalLink, X, Clock, Calendar, Compass } from 'lucide-react';

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedDest, setSelectedDest] = useState(null);

  const filtered = activeCategory === 'Semua' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(item => item.category === activeCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedDest(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedDest) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedDest]);

  return (
    <section id="destinasi" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest">Eksplorasi Lengkap</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight">
          Destinasi Pilihan Sumbawa
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
          Dari barat hingga timur pulau Sumbawa. Klik pada kartu mana saja untuk melihat kisah sejarah, tips kunjungan, dan langsung terhubung ke Google Maps.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-teal-500 text-slate-950 font-semibold shadow-lg shadow-teal-500/25 scale-105'
                  : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Cards */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map(dest => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              key={dest.id}
              onClick={() => setSelectedDest(dest)}
              className="group cursor-pointer bg-slate-900/90 rounded-2xl overflow-hidden border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/15 flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-teal-300 text-[11px] font-medium rounded-full border border-teal-500/30 shadow-lg">
                  {dest.tag}
                </span>
                <span className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-slate-300 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-md">
                  <MapPin className="w-3 h-3 text-teal-400" />
                  <span className="truncate max-w-[180px]">{dest.location}</span>
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-teal-400 uppercase tracking-wider font-semibold">
                    {dest.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-teal-300 transition-colors line-clamp-1">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                    {dest.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[150px]">{dest.highlight}</span>
                  </div>
                  <span className="text-teal-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Detail &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Detail Modal Popup */}
      <AnimatePresence>
        {selectedDest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDest(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-slate-100 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDest(null)}
                aria-label="Tutup Detail"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-950 text-slate-300 hover:text-white backdrop-blur-md border border-white/10 transition-all shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden bg-slate-800">
                <img
                  src={selectedDest.image}
                  alt={selectedDest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40 backdrop-blur-md">
                    {selectedDest.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight drop-shadow-md">
                    {selectedDest.name}
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    <span>{selectedDest.location}</span>
                  </div>
                </div>
              </div>

              {/* Scrollable Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-1">
                    Mengenal Lebih Dalam
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                    {selectedDest.fullStory}
                  </p>
                </div>

                {/* Practical Quick Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-medium">Waktu Terbaik:</span>
                      <span className="text-slate-200 font-semibold">{selectedDest.bestTime}</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-medium">Keunikan Utama:</span>
                      <span className="text-slate-200 font-semibold">{selectedDest.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Activities Badges */}
                {selectedDest.activities && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-teal-400" /> Aktivitas Rekomendasi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDest.activities.map((act, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-white/5">
                          ✓ {act}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons: Direct Google Maps Link */}
                <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={selectedDest.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/25"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Buka Rute di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedDest(null)}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}