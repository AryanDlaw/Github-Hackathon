import React, { useState, useEffect } from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    title: 'Modern Family Home',
    description: 'Spacious 4-bedroom home with open floor plan'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    title: 'Cozy Tiny House',
    description: 'Efficient living in a beautifully designed tiny home'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    title: 'Luxury Villa',
    description: 'Premium waterfront property with stunning views'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    title: 'Minimalist Tiny House',
    description: 'Sustainable living with modern amenities'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80',
    title: 'Suburban Dream',
    description: 'Perfect family home in a quiet neighborhood'
  }
];

export default function HomeCarousel() {
  const [idx, setIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prev = () => {
    setIdx((idx - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };
  
  const next = () => {
    setIdx((idx + 1) % images.length);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIdx((idx + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [idx, isAutoPlaying]);

  return (
    <div style={{
      position: 'relative',
      width: '70vw',
      maxWidth: 1000,
      height: '45vw',
      maxHeight: 500,
      margin: '0 auto',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 0 40px rgba(126, 203, 255, 0.3)',
      border: '2px solid var(--star-blue)'
    }}>
      {/* Main Image */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src={images[idx].url}
          alt={images[idx].title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        {/* Overlay with title and description */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(10, 17, 36, 0.9))',
          padding: '2rem',
          color: 'var(--pure-white)'
        }}>
          <h3 style={{ 
            color: 'var(--star-blue)', 
            marginBottom: '0.5rem',
            fontSize: '1.5rem',
            textShadow: '0 0 10px rgba(126, 203, 255, 0.5)'
          }}>
            {images[idx].title}
          </h3>
          <p style={{ 
            margin: 0, 
            fontSize: '1rem',
            opacity: 0.9
          }}>
            {images[idx].description}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        style={{
          position: 'absolute',
          top: '50%',
          left: 20,
          transform: 'translateY(-50%)',
          background: 'linear-gradient(45deg, var(--star-blue), var(--space-dark))',
          color: 'var(--pure-white)',
          border: 'none',
          borderRadius: '50%',
          width: 50,
          height: 50,
          cursor: 'pointer',
          fontSize: '1.5rem',
          boxShadow: '0 0 15px rgba(126, 203, 255, 0.5)',
          transition: 'all 0.3s ease',
          zIndex: 2
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(45deg, var(--pure-white), var(--star-blue))';
          e.currentTarget.style.color = 'var(--space-dark)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(45deg, var(--star-blue), var(--space-dark))';
          e.currentTarget.style.color = 'var(--pure-white)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
        aria-label="Previous"
      >&lt;</button>
      
      <button
        onClick={next}
        style={{
          position: 'absolute',
          top: '50%',
          right: 20,
          transform: 'translateY(-50%)',
          background: 'linear-gradient(45deg, var(--star-blue), var(--space-dark))',
          color: 'var(--pure-white)',
          border: 'none',
          borderRadius: '50%',
          width: 50,
          height: 50,
          cursor: 'pointer',
          fontSize: '1.5rem',
          boxShadow: '0 0 15px rgba(126, 203, 255, 0.5)',
          transition: 'all 0.3s ease',
          zIndex: 2
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(45deg, var(--pure-white), var(--star-blue))';
          e.currentTarget.style.color = 'var(--space-dark)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(45deg, var(--star-blue), var(--space-dark))';
          e.currentTarget.style.color = 'var(--pure-white)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
        aria-label="Next"
      >&gt;</button>

      {/* Dots Indicator */}
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 2
      }}>
        {images.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => {
              setIdx(dotIdx);
              setIsAutoPlaying(false);
            }}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              border: 'none',
              background: dotIdx === idx ? 'var(--star-blue)' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: dotIdx === idx ? '0 0 10px rgba(126, 203, 255, 0.8)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (dotIdx !== idx) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
              }
            }}
            onMouseLeave={(e) => {
              if (dotIdx !== idx) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
              }
            }}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'rgba(10, 17, 36, 0.8)',
          color: 'var(--star-blue)',
          border: '1px solid var(--star-blue)',
          borderRadius: '50%',
          width: 40,
          height: 40,
          cursor: 'pointer',
          fontSize: '1.2rem',
          transition: 'all 0.3s ease',
          zIndex: 2
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--star-blue)';
          e.currentTarget.style.color = 'var(--space-dark)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(10, 17, 36, 0.8)';
          e.currentTarget.style.color = 'var(--star-blue)';
        }}
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? '⏸️' : '▶️'}
      </button>
    </div>
  );
}