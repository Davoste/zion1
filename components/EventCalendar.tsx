
import React from 'react';
import { Clock, MapPin, ArrowRight, Waves, Flame, Award } from 'lucide-react';
import { ChurchEvent } from '../types';

const MOCK_EVENTS: ChurchEvent[] = [
  {
    id: '1',
    title: 'Members Baptism Service',
    date: 'June 15, 2024',
    time: '10:00 AM - 1:00 PM',
    location: 'Zion Harvest Pool / Mathare Area',
    category: 'Service',
    image: 'https://images.unsplash.com/photo-1544427928-142ca20488d5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Community Outreach Crusade',
    date: 'June 22, 2024',
    time: '4:00 PM - 8:00 PM',
    location: 'Mathare Grounds No. 10',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Ordinance of Leaders',
    date: 'July 10, 2024',
    time: '11:00 AM',
    location: 'ZHIC Main Sanctuary',
    category: 'Service',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
  }
];

const EventCalendar: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-widest text-xs font-black mb-4 block">Our Calendar</span>
          <h2 className="text-4xl md:text-5xl font-bold serif text-blue-900">Upcoming Gatherings</h2>
        </div>

        <div className="grid gap-8">
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl p-5 md:p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-center group overflow-hidden relative">
              <div className="w-full md:w-80 h-56 rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-slate-50">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900 text-white text-[10px] font-black uppercase tracking-widest">
                    {event.title.includes('Baptism') ? <Waves size={12} /> : 
                     event.title.includes('Crusade') ? <Flame size={12} /> : <Award size={12} />}
                    {event.category}
                  </div>
                  <span className="text-slate-400 font-bold text-sm">{event.date}</span>
                </div>
                <h3 className="text-3xl font-bold serif text-blue-900">{event.title}</h3>
                <div className="flex flex-wrap gap-8 text-slate-500 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-red-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-red-600" />
                    {event.location}
                  </div>
                </div>
                <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                  Join us for a powerful time as we fulfill our mandate in Mathare. Everyone is welcome to participate in our mission.
                </p>
              </div>
              <button className="w-full md:w-auto px-10 py-5 bg-blue-50 text-blue-900 rounded-xl font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm">
                Inquire
                <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
