import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, Heart, Music, Calendar, Flame, X, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

const CULTURES = [
  {
    id: 1,
    title: "Barapan Kebo",
    subtitle: "Pacuan Kerbau Lumpur Pesta Rakyat",
    tag: "Adrenalin & Tradisi Agraris",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    desc: "Adu kecepatan pasangan kerbau di sawah berlumpur tebal. Pemenang ditentukan saat joki berhasil menjatuhkan tonggak sakral 'Saka'.",
    fullStory: "Barapan Kebo bukan sekadar perlombaan balap, melainkan manifestasi rasa syukur petani Sumbawa menyambut musim tanam. Joki berdiri di atas 'nggala' (pembajak kayu) sambil mengendalikan kerbau yang berlari kencang di lumpur setinggi lutut. Titik penentu kemenangan adalah ketepatan joki merobohkan 'Saka' (tonggak kayu yang ditancapkan di ujung lapangan) yang sarat dengan mantra sandro (dukun adat).",
    schedule: "April – Juni (Menjelang Musim Tanam Padi)",
    location: "Kecamatan Moyo Utara & Labuhan Badas, Sumbawa",
    philosophy: "Melambangkan ketangkasan, keberanian, persaudaraan, dan doa kesuburan tanah pertiwi."
  },
  {
    id: 2,
    title: "Tenun Kre Alang & Tradisi Rimpu",
    subtitle: "Mahakarya Songket Emas & Kehormatan",
    tag: "Warisan Tekstil Kesultanan",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    desc: "Kain tenun songket mewah bertabur benang emas perak peninggalan Kesultanan Sumbawa, serta tradisi busana santun Rimpu khas Bima.",
    fullStory: "Kre Alang ditenun secara tradisional menggunakan alat gedongan selama berbulan-bulan. Motifnya yang paling terkenal adalah 'Piyo Lonto Engal' dan bunga melati yang merefleksikan nilai-nilai Islam dan budi pekerti luhur. Di tanah Mbojo (Bima), tradisi 'Rimpu' menggunakan dua lembar sarung tenun tanpa peniti untuk menutup aurat, menjadi simbol kesantunan dan identitas wanita Muslimah sejak abad ke-17.",
    schedule: "Dapat disaksikan setiap hari di sentra desa tenun",
    location: "Desa Poto (Sumbawa) & Desa Maria Wawo (Bima)",
    philosophy: "Simbol kehormatan, kesabaran wanita penenun, dan pelestarian identitas luhur leluhur."
  },
  {
    id: 3,
    title: "Kuda Savana & Madu Hutan Samawa",
    subtitle: "Eliksir Stamina Alami Padang Terbuka",
    tag: "Kekayaan Herbal Organik",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    desc: "Susu fermentasi alami kuda liar yang hidup bebas di padang savana Tambora dipadu kemurnian madu lebah hutan Apis dorsata.",
    fullStory: "Kuda liar Sumbawa (Jara Samawa) hidup merumput bebas di savana Doro Ncanga di kaki Gunung Tambora. Susunya diperah tanpa campuran bahan kimia dan mengalami fermentasi alami sehingga awet bertahun-tahun serta kaya akan antibodi. Sementara Madu Sumbawa dipanen dari sarang lebah raksasa yang menggantung di pohon-pohon sialang setinggi 30 meter di hutan tropis primer.",
    schedule: "Tersedia sepanjang tahun, panen madu raya saat kemarau",
    location: "Savana Doro Ncanga & Hutan Lindung Batulanteh",
    philosophy: "Harmoni manusia dengan alam savana yang liar namun memberikan sumber kehidupan dan kesehatan."
  },
  {
    id: 4,
    title: "Seni Tutur Sakeco & Tari Nguri",
    subtitle: "Kidung Filosofis & Keramahan Kerajaan",
    tag: "Seni Suara & Gerak Keraton",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
    desc: "Lantunan bait sastra lisan diiringi tabuhan Rebana Ode bertalu-talu yang menceritakan petuah hidup, diiringi keanggunan tari Nguri.",
    fullStory: "Sakeco adalah kesenian khas Samawa berupa dua pria yang melantunkan syair sastra bertutur secara bersahut-sahutan sambil memukul rebana ode dengan ritme yang memukau. Sementara Tari Nguri diciptakan untuk menggambarkan keramahan dan kepedulian rakyat Sumbawa dalam menghibur dan melayani Sultan, kini ditarikan untuk menyambut tamu kehormatan.",
    schedule: "Pementasan upacara adat & Festival Moyo tahunan",
    location: "Pusat Kebudayaan Kota Sumbawa Besar",
    philosophy: "Petuah moral, pesan kebijaksanaan generasi tua, dan penghormatan tulus kepada tamu."
  },
  {
    id: 5,
    title: "Bela Diri Gantao & Pacuan Joki Cilik",
    subtitle: "Ketangkasan Ksatria Padang Terbuka",
    tag: "Keterampilan Tradisional",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    desc: "Seni bela diri perpaduan silat Melayu dan akrobatik pukulan tangan kosong, serta keahlian joki cilik menunggang kuda tanpa pelana.",
    fullStory: "Gantao adalah seni bela diri kuno yang diwariskan oleh para pendekar pesisir Sumbawa, dimainkan diiringi tabuhan gong dan gendang genang. Gerakannya memadukan keindahan langkah tari dengan serangan tangkas yang mematikan. Bersanding dengan tradisi 'Maen Jaran', pacuan kuda khas pulau Sumbawa yang terkenal dengan kelincahan joki cilik lokal melintasi arena tanah berdebu.",
    schedule: "Pekan Olahraga Tradisional & Hari Jadi Daerah",
    location: "Gelanggang Pacuan Kuda Angin Laut, Sumbawa",
    philosophy: "Menumbuhkan jiwa ksatria, ketangguhan mental, dan keberanian sejak usia dini."
  }
];

export default function CultureSection() {
  const [selectedCulture, setSelectedCulture] = useState(null);

  return (
    <section id="budaya" className="py-24 px-6 relative bg-gradient-to-b from-[#080c16] via-slate-950 to-[#080c16] border-y border-white/10 overflow-hidden">
      {/* Decorative Ambient Lights */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Warisan Leluhur & Denyut Jiwa Samawa
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Kearifan Budaya & Tradisi Sakral
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed font-light">
            Lebih dari sekadar bentang alam memukau, Pulau Sumbawa mengakar kuat pada tradisi kesatria, kemegahan kesultanan, dan harmoni hidup bersama alam.
          </p>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CULTURES.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCulture(item)}
              className="group cursor-pointer relative bg-slate-900/90 rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md shadow-lg ${item.badgeColor}`}>
                  {item.tag}
                </span>

                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span className="truncate max-w-[170px]">{item.schedule}</span>
                  </span>
                  <span className="text-amber-300 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Eksplor <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture Event Calendar Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-teal-950/40 via-slate-900 to-amber-950/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4" /> Kalender Festival Budaya Tahunan
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Ingin Menyaksikan Pesta Rakyat Langsung?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Rencanakan liburanmu bertepatan dengan <strong>Festival Pesona Moyo (September)</strong> atau <strong>Festival Pesona Tambora (April)</strong> untuk pengalaman budaya terlengkap.
            </p>
          </div>
          <a
            href="#panduan"
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20 whitespace-nowrap"
          >
            Lihat Panduan Trip
          </a>
        </div>
      </div>

      {/* Cultural Detail Modal Popup */}
      <AnimatePresence>
        {selectedCulture && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCulture(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-slate-100 max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedCulture(null)}
                aria-label="Tutup"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-950 text-slate-300 hover:text-white backdrop-blur-md border border-white/10 transition-all shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden bg-slate-800">
                <img
                  src={selectedCulture.image}
                  alt={selectedCulture.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${selectedCulture.badgeColor}`}>
                    {selectedCulture.tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
                    {selectedCulture.title}
                  </h2>
                  <p className="text-xs text-amber-300 font-medium mt-1">
                    {selectedCulture.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1.5">
                    Kisah & Filosofi Sakral
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                    {selectedCulture.fullStory}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs">
                  <span className="font-bold text-amber-300 block mb-1">
                    Makna Filosofis:
                  </span>
                  <p className="text-slate-300 italic">
                    "{selectedCulture.philosophy}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-medium">Jadwal Perhelatan:</span>
                      <span className="text-slate-200 font-semibold">{selectedCulture.schedule}</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block font-medium">Lokasi Pelaksanaan:</span>
                      <span className="text-slate-200 font-semibold">{selectedCulture.location}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedCulture(null)}
                    className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all"
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