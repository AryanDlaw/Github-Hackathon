import React from 'react';

export default function NavBar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      width: '100vw',
      boxSizing: 'border-box',
      background: 'rgba(10,17,36,0.95)',
      color: '#7ecbff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10,
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.3rem', letterSpacing: '2px' }}>
        Constellate
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <button onClick={() => {
          if (window.location.pathname === '/') {
            scrollToSection('conversation-section');
          } else {
            window.navigateToPage('home');
            setTimeout(() => scrollToSection('conversation-section'), 100);
          }
        }} style={navBtnStyle}>Convo</button>
        <button onClick={() => {
          if (window.location.pathname === '/') {
            scrollToSection('learn-section');
          } else {
            window.navigateToPage('learn');
          }
        }} style={navBtnStyle}>Learn</button>
        <button onClick={() => {
          if (window.location.pathname === '/') {
            scrollToSection('about-section');
          } else {
            window.navigateToPage('home');
            setTimeout(() => scrollToSection('about-section'), 100);
          }
        }} style={navBtnStyle}>About</button>
        <button onClick={() => window.navigateToPage('listings')} style={navBtnStyle}>Listings</button>
      </div>
    </nav>
  );
}

const navBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#7ecbff',
  fontSize: '1rem',
  marginLeft: '1.5rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  letterSpacing: '1px'
};