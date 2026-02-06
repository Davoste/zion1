
import React from 'react';
import { Cross, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-red-600 p-1.5 rounded-full">
                <Cross size={24} className="text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter serif uppercase">ZHIC <span className="text-red-500">Nairobi</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Raising a generation of impact through the word and power of God under the leadership of <strong>Pastor Ezekiel</strong>. Join our global family as we possess our inheritance in Zion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-red-600 transition-all"><Facebook size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-red-600 transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-red-600 transition-all"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 serif border-b border-red-600/30 pb-2">Gatherings</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <span className="block text-white font-bold mb-1">Sunday Morning</span>
                08:00 AM — Morning Glory<br />
                10:30 AM — Main Impact Service
              </li>
              <li>
                <span className="block text-white font-bold mb-1">Mid-Week</span>
                Wed 05:30 PM — Power & Revival
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 serif border-b border-red-600/30 pb-2">Explore</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-red-500 transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Ministries</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Missions</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Prayer Requests</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">ZHIC Kids</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 serif border-b border-red-600/30 pb-2">Reach Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 mt-1" />
                Mathare No. 10<br />P.O. Box 1234, Nairobi
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-600" />
                +254 725 517 478
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-600" />
                info@zionharvest.org
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © 2026 Zion Harvest International Church. All rights reserved. Registered in Kenya.
          </p>
          <div className="flex gap-8">
            <button className="text-slate-500 hover:text-white text-xs transition-colors">Terms</button>
            <button className="text-slate-500 hover:text-white text-xs transition-colors">Privacy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
