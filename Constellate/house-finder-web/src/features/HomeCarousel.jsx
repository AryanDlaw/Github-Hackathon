import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80'
];

export default function HomeCarousel() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((idx - 1 + images.length) % images.length);
  const next = () => setIdx((idx + 1) % images.length);

  return (
    <div style={{ position: 'relative', width: 340, height: 220, margin: '0 auto' }}>
      <img
        src={images[idx]}
        alt="Home"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
        }}
      />
      <button
        onClick={prev}
        style={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          background: '#7ecbff',
          color: '#0a1124',
          border: 'none',
          borderRadius: '50%',
          width: 32,
          height: 32,
          cursor: 'pointer'
        }}
        aria-label="Previous"
      >&lt;</button>
      <button
        onClick={next}
        style={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          background: '#7ecbff',
          color: '#0a1124',
          border: 'none',
          borderRadius: '50%',
          width: 32,
          height: 32,
          cursor: 'pointer'
        }}
        aria-label="Next"
      >&gt;</button>
    </div>
  );
}