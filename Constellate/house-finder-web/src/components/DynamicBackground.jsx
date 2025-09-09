import React, { useState, useEffect } from 'react';

export default function DynamicBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [isHighSpeed, setIsHighSpeed] = useState(false);

  useEffect(() => {
    // Test internet speed and set 3D mode accordingly
    const testSpeed = async () => {
      const startTime = performance.now();
      try {
        await fetch('https://httpbin.org/bytes/1024', { cache: 'no-cache' });
        const endTime = performance.now();
        const speed = 1024 / ((endTime - startTime) / 1000); // KB/s
        setIsHighSpeed(speed > 100); // Enable 3D for speeds > 100 KB/s
      } catch (error) {
        console.log('Speed test failed, using fallback background');
        setIsHighSpeed(false);
      }
    };

    testSpeed();

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isHighSpeed) {
    // Fallback to existing 2D background
    return (
      <>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background: `
            radial-gradient(1px 1px at 20px 30px, var(--pure-white), transparent),
            radial-gradient(1px 1px at 40px 70px, var(--pure-white), transparent),
            radial-gradient(1px 1px at 90px 40px, var(--pure-white), transparent),
            radial-gradient(2px 2px at 50px 20px, var(--star-blue), transparent),
            radial-gradient(2px 2px at 120px 80px, var(--star-blue), transparent),
            radial-gradient(3px 3px at 80px 60px, var(--star-blue), transparent)
          `,
          backgroundSize: '400px 300px',
          opacity: 0.6,
          animation: 'twinkle3d 6s ease-in-out infinite alternate'
        }} />
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background: `
            linear-gradient(45deg, transparent 48%, rgba(126, 203, 255, 0.1) 49%, rgba(126, 203, 255, 0.1) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(126, 203, 255, 0.1) 49%, rgba(126, 203, 255, 0.1) 51%, transparent 52%)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.2
        }} />
      </>
    );
  }

  // 3D Dynamic background for high-speed connections
  return (
    <>
      {/* 3D Star Field with Parallax */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translateY(${scrollY * 0.1}px)`,
        background: `
          radial-gradient(1px 1px at 20px 30px, var(--pure-white), transparent),
          radial-gradient(1px 1px at 40px 70px, var(--pure-white), transparent),
          radial-gradient(1px 1px at 90px 40px, var(--pure-white), transparent),
          radial-gradient(1px 1px at 130px 80px, var(--pure-white), transparent),
          radial-gradient(1px 1px at 160px 30px, var(--pure-white), transparent),
          radial-gradient(1px 1px at 200px 20px, var(--pure-white), transparent),
          radial-gradient(1px 1px at 250px 60px, var(--pure-white), transparent),
          radial-gradient(1px 1px at 300px 40px, var(--pure-white), transparent)
        `,
        backgroundSize: '400px 300px',
        opacity: 0.4,
        animation: 'twinkle3d 6s ease-in-out infinite alternate'
      }} />

      {/* Medium Layer Stars */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translateY(${scrollY * 0.2}px)`,
        background: `
          radial-gradient(2px 2px at 50px 20px, var(--star-blue), transparent),
          radial-gradient(2px 2px at 120px 80px, var(--star-blue), transparent),
          radial-gradient(2px 2px at 180px 50px, var(--star-blue), transparent),
          radial-gradient(2px 2px at 220px 10px, var(--star-blue), transparent),
          radial-gradient(2px 2px at 280px 70px, var(--star-blue), transparent)
        `,
        backgroundSize: '400px 300px',
        opacity: 0.6,
        animation: 'twinkle3d 8s ease-in-out infinite alternate'
      }} />

      {/* Close Layer Stars */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translateY(${scrollY * 0.3}px)`,
        background: `
          radial-gradient(3px 3px at 80px 60px, var(--star-blue), transparent),
          radial-gradient(3px 3px at 150px 30px, var(--star-blue), transparent),
          radial-gradient(3px 3px at 240px 90px, var(--star-blue), transparent)
        `,
        backgroundSize: '400px 300px',
        opacity: 0.8,
        animation: 'twinkle3d 10s ease-in-out infinite alternate'
      }} />

      {/* 3D Constellation Lines */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translateY(${scrollY * 0.15}px)`,
        background: `
          linear-gradient(45deg, transparent 48%, rgba(126, 203, 255, 0.1) 49%, rgba(126, 203, 255, 0.1) 51%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(126, 203, 255, 0.1) 49%, rgba(126, 203, 255, 0.1) 51%, transparent 52%)
        `,
        backgroundSize: '100px 100px',
        opacity: 0.3
      }} />

      {/* Floating Particles */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translateY(${scrollY * 0.05}px)`,
        background: `
          radial-gradient(1px 1px at ${20 + scrollY * 0.01}px ${30 + scrollY * 0.02}px, var(--star-blue), transparent),
          radial-gradient(1px 1px at ${100 + scrollY * 0.015}px ${80 + scrollY * 0.01}px, var(--pure-white), transparent),
          radial-gradient(1px 1px at ${200 + scrollY * 0.02}px ${50 + scrollY * 0.03}px, var(--star-blue), transparent)
        `,
        backgroundSize: '300px 200px',
        opacity: 0.5,
        animation: 'float 15s ease-in-out infinite'
      }} />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(${scrollY * 0.05}px) rotate(0deg); }
          50% { transform: translateY(${scrollY * 0.05 + 10}px) rotate(180deg); }
        }
        
        @keyframes twinkle3d {
          0% { 
            opacity: 0.3;
            transform: translateY(${scrollY * 0.1}px) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateY(${scrollY * 0.1 + 5}px) scale(1.1);
          }
          100% { 
            opacity: 0.5;
            transform: translateY(${scrollY * 0.1}px) scale(1);
          }
        }
      `}</style>
    </>
  );
}
