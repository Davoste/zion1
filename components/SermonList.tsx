
import React, { useState } from 'react';
import { PlayCircle, Calendar, User, Mic2, X } from 'lucide-react';
import { Sermon } from '../types';

const MOCK_SERMONS: Sermon[] = [
  {
    id: '1',
    title: 'The Prophetic Harvest',
    speaker: 'Pastor Ezekiel',
    date: 'June 02, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800',
    series: 'Harvest Season',
    description: 'Understanding the spiritual timing for your breakthrough and the power of consistent seed-sowing.',
    videoId: 'dQw4w9WgXcQ' // Placeholder ID
  },
  {
    id: '2',
    title: 'Impact Without Borders',
    speaker: 'Pastor Ezekiel',
    date: 'May 26, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
    series: 'International Mandate',
    description: 'How to expand your influence and fulfill your God-given purpose on a global stage.',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Walking in Dominion',
    speaker: 'Pastor Ezekiel',
    date: 'May 19, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=800',
    series: 'Kingdom Power',
    description: 'Rediscovering your authority in Christ and reclaiming lost territories in your personal life.',
    videoId: 'dQw4w9WgXcQ'
  }
];

const SermonList: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mic2 className="text-red-600" size={20} />
              <span className="text-sm font-black uppercase tracking-widest text-blue-900">Word and Power</span>
            </div>
            <h2 className="text-5xl font-bold serif text-blue-900">Recent Teachings</h2>
          </div>
          <button className="px-6 py-3 bg-blue-50 text-blue-900 rounded-full text-sm font-bold hover:bg-blue-900 hover:text-white transition-all">
            Browse All Series
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {MOCK_SERMONS.map((sermon) => (
            <div key={sermon.id} className="group cursor-pointer" onClick={() => sermon.videoId && setSelectedVideo(sermon.videoId)}>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 shadow-2xl border-b-4 border-red-600 bg-slate-100">
                <img 
                  src={sermon.thumbnail} 
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/40 transition-colors flex items-center justify-center">
                  <PlayCircle className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 shadow-2xl" size={72} />
                </div>
              </div>
              <span className="inline-block text-[10px] font-black bg-red-600 text-white px-3 py-1 rounded-full mb-3 uppercase tracking-tighter">
                {sermon.series}
              </span>
              <h3 className="text-2xl font-bold mb-3 text-blue-900 serif group-hover:text-red-600 transition-colors">{sermon.title}</h3>
              <div className="flex items-center space-x-4 text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">
                <div className="flex items-center">
                  <User size={14} className="mr-1.5 text-blue-900" />
                  {sermon.speaker}
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1.5 text-blue-900" />
                  {sermon.date}
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {sermon.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors"
          >
            <X size={40} />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Sermon Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default SermonList;
