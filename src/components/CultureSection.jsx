import React from 'react';
import { CULTURE_ITEMS } from '../data/sumbawaData';
import { Trophy, Sparkles, Heart } from 'lucide-react';
const icons = { Trophy: <Trophy className="w-6 h-6 text-amber-400" />, Sparkles: <Sparkles className="w-6 h-6 text-teal-400" />, Heart: <Heart className="w-6 h-6 text-rose-400" /> };

export default function CultureSection() {
  return (
    <section id="budaya" className="py-20 px-6 bg-slate-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest">Kearifan Lokal</span>
          <h2 className="text-3xl font-bold text-white mt-2">Warisan Budaya & Tradisi</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CULTURE_ITEMS.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-teal-500/30 transition-all">
              <div className="p-3 w-fit rounded-xl bg-white/5 mb-4">{icons[item.icon]}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
