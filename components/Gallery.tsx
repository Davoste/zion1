import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: '/images/crusade.jpeg', title: 'Community Fellowship' },
    { url: '/images/service.jpeg', title: 'Sunday Worship' },
    { url: '/images/service1.jpeg', title: 'Youth Ministry' },
    { url: '/images/logozion.jpg', title: 'Global Impact' },
    { url: '/images/church.jpeg', title: 'Zion Sanctuary' },
    { url: '/images/pasi.jpeg', title: 'Leadership Meeting' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold serif text-blue-900 mb-4">
            Spirit of Zion
          </h2>
          <p className="text-slate-500 uppercase tracking-widest text-xs font-black">
            Members & Activities Gallery
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-sm"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-black uppercase tracking-widest">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
