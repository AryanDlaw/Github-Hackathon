import React from 'react';

export default function ResultsShowcase({ results, onSelect }) {
  if (!results.length) return null;
  
  return (
    <div style={{ 
      marginTop: '2rem',
      background: 'rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '1.5rem',
      border: '1px solid rgba(126, 203, 255, 0.3)'
    }}>
      <h3 style={{ 
        color: 'var(--star-blue)', 
        marginBottom: '1rem',
        textAlign: 'center',
        textShadow: '0 0 5px rgba(126, 203, 255, 0.5)'
      }}>
        ✦ Constellation Results ✦
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem'
      }}>
        {results.map(home => (
          <div key={home.id} style={{
            background: 'linear-gradient(135deg, rgba(10,17,36,0.8) 0%, rgba(26,35,126,0.6) 100%)',
            border: '1px solid var(--star-blue)',
            borderRadius: '10px',
            padding: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onClick={() => onSelect(home)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(126, 203, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            
            {/* Subtle star background */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(1px 1px at 20px 20px, var(--star-blue), transparent),
                radial-gradient(1px 1px at 80px 60px, var(--pure-white), transparent)
              `,
              backgroundSize: '100px 80px',
              opacity: 0.1,
              pointerEvents: 'none',
              zIndex: 0
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <h4 style={{ 
                  color: 'var(--star-blue)', 
                  margin: 0,
                  fontSize: '1.1rem'
                }}>
                  {home.address}
                </h4>
                {home.rating && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ color: 'var(--star-blue)' }}>⭐</span>
                    <span style={{ color: 'var(--pure-white)' }}>{home.rating}</span>
                  </div>
                )}
              </div>
              
              <div style={{ 
                color: 'var(--pure-white)', 
                fontSize: '1.2rem', 
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                {home.price}
              </div>
              
              <button style={{
                width: '100%',
                background: 'linear-gradient(45deg, var(--star-blue), var(--space-dark))',
                color: 'var(--pure-white)',
                border: 'none',
                borderRadius: '5px',
                padding: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, var(--pure-white), var(--star-blue))';
                e.currentTarget.style.color = 'var(--space-dark)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, var(--star-blue), var(--space-dark))';
                e.currentTarget.style.color = 'var(--pure-white)';
              }}>
                🌟 View Reviews & Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}