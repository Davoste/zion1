
import React from 'react';
import { ChevronRight, Play, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544427928-142ca20488d5?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-black/40 to-slate-900/80 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="inline-flex items-center px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-white uppercase bg-red-600 rounded-full shadow-lg border border-red-400">
          <MapPin size={14} className="mr-2" />
          Nairobi, Kenya
        </div>
        <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-none drop-shadow-2xl serif">
          Experience <br /> <span className="text-red-500 italic">Abundance</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
          A Global Movement raising a generation of impact through the Word and Power of God.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-blue-900 rounded-md font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center justify-center shadow-2xl group">
            Join Our Service
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-blue-900/50 backdrop-blur-md text-white border-2 border-white/30 rounded-md font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center">
            <Play className="mr-2 w-5 h-5 fill-white" />
            Watch Live
          </button>
        </div>
      </div>

      {/* Service Schedule */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center px-4">
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 flex gap-12 text-white">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-1">Morning Glory</p>
            <p className="text-lg font-bold">8:00 AM EAT</p>
          </div>
          <div className="w-px bg-white/20"></div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-1">Impact Service</p>
            <p className="text-lg font-bold">10:30 AM EAT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
