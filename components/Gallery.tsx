import React from 'react';

// Import local images
import img1 from '../src/assets/crusade.jpeg';
import img2 from '../src/assets/service.jpeg';
import img3 from '../src/assets/service1.jpeg';
import img4 from '../srcassets/logozion.jpg';
import img5 from '../src/assets/church.jpeg';
import img6 from '../src/assets/pasi.jpeg';

const Gallery: React.FC = () => {
  const images = [
    { url: img1, title: 'Community Fellowship' },
    { url: img2, title: 'Sunday Worship' },
    { url: img3, title: 'Youth Ministry' },
    { url: img4, title: 'Global Impact' },
    { url: img5, title: 'Zion Sanctuary' },
    { url: img6, title: 'Leadership Meeting' }
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
