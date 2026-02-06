
import React from 'react';
import { Quote } from 'lucide-react';

const ScriptureSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <Quote size={200} />
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-red-500 text-sm font-black uppercase tracking-[0.3em] mb-6">The Great Commission</h2>
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl italic serif leading-relaxed">
              "Basi, enendeni, mkawafanye mataifa yote kuwa wanafunzi, mkiwabatiza kwa jina la Baba, na Mwana, na Roho Mtakatifu; na kuwafundisha kuyashika yote niliyowaamuru ninyi; na tazama, mimi nipo pamoja nanyi siku zote, hata ukamilifu wa dahari."
            </p>
            <p className="text-red-400 font-bold tracking-widest uppercase text-xs">Biblia | Mathayo 28:19-20</p>
          </div>
          
          <div className="w-24 h-px bg-white/20 mx-auto"></div>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-blue-100">
              "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen."
            </p>
            <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Matthew 28:19-20 (KJV)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptureSection;
