import React from 'react';
import { Calendar, Compass, ShieldCheck } from 'lucide-react';

export default function TravelTips() {
  const tips = [
    { icon: <Calendar className="w-5 h-5 text-teal-400" />, title: "Waktu Terbaik", desc: "Mei-September saat laut tenang dan savana Kenawa menguning keemasan." },
    { icon: <Compass className="w-5 h-5 text-teal-400" />, title: "Akses & Rute", desc: "Feri Kayangan (Lombok) ke Poto Tano (Sumbawa Barat) atau pesawat ke SWQ Sumbawa Besar." },
    { icon: <ShieldCheck className="w-5 h-5 text-teal-400" />, title: "Tips Hiu Paus", desc: "Berangkat subuh (05.00 WITA) dari Labuhan Jambu untuk bertemu hiu paus di bagan." }
  ];
  return (
    <section id="panduan" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest">Informasi Praktis</span>
        <h2 className="text-3xl font-bold text-white mt-2">Panduan Wisatawan</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((t, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-white/10">
            <div className="p-3 w-fit rounded-xl bg-teal-500/10 mb-4">{t.icon}</div>
            <h3 className="text-base font-bold text-white mb-2">{t.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
