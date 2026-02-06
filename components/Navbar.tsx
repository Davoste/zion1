
import React, { useState } from 'react';
import { Menu, X, Cross } from 'lucide-react';
import logo from '../assets/logozion.png';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Sermons', id: 'sermons' },
    { name: 'Events', id: 'events' },
    { name: 'Impact', id: 'about' },
    { name: 'Giving', id: 'give' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-[#1e3a8a] p-1.5 rounded-full border-2 border-red-600 shadow-md">
                <img
                src={logo}
                alt="Zion Harvest Logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1e3a8a] serif leading-none">ZION HARVEST</span>
              <span className="text-[10px] font-bold text-red-600 tracking-[0.2em] uppercase">International Church</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`text-sm font-semibold transition-colors uppercase tracking-wider ${
                  activeTab === link.id ? 'text-[#1e3a8a] border-b-2 border-red-600' : 'text-slate-500 hover:text-[#1e3a8a]'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-red-700 transition-all shadow-lg hover:-translate-y-0.5">
              PLAN A VISIT
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-6 px-4 space-y-2 shadow-2xl animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-6 py-4 rounded-xl text-lg font-bold ${
                activeTab === link.id ? 'bg-blue-50 text-blue-900 border-l-4 border-red-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button className="w-full bg-[#1e3a8a] text-white py-4 mt-4 rounded-xl text-lg font-bold shadow-xl">
            Give Online
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
