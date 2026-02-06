
import React from 'react';
import { Sparkles, Radio, Zap } from 'lucide-react';

const AnnouncementTicker: React.FC = () => {
  const items = [
    { icon: <Zap size={14} />, text: "PROPHETIC DECREE: 2024 IS OUR YEAR OF UNLIMITED POSSIBILITIES" },
    { icon: <Radio size={14} />, text: "NEXT LIVE SERVICE: SUNDAY AT 8:00 AM EAT" },
    { icon: <Sparkles size={14} />, text: "WALKING IN DOMINION — NEW SERMON SERIES OUT NOW" },
    { icon: <Zap size={14} />, text: "MID-WEEK POWER & REVIVAL EVERY WEDNESDAY 5:30 PM" },
    { icon: <Radio size={14} />, text: "JOIN OUR GLOBAL IMPACT MISSIONS — SIGN UP TODAY" },
  ];

  // Repeat items to ensure smooth infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="fixed top-20 w-full bg-red-600 text-white py-2 z-40 overflow-hidden border-y border-red-500 shadow-lg">
      <div className="animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center mx-8 group">
            <span className="text-red-200 mr-2 group-hover:text-white transition-colors">
              {item.icon}
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.15em] cursor-default">
              {item.text}
            </span>
            <span className="ml-8 text-red-400 font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementTicker;
