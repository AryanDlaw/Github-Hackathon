import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Listings() {
  const [selectedHome, setSelectedHome] = useState(null);
  const [filterType, setFilterType] = useState('all'); // 'all', 'buy', 'rent'
  
  // Mock listings data with rent/buy information
  const allListings = [
    { 
      id: 1, 
      address: '123 Stellar Lane, Springfield', 
      price: '$350,000', 
      rentPrice: '$2,200/month',
      type: 'buy',
      rating: '4.8',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      yearBuilt: 2015,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
      description: 'Beautiful home in a quiet neighborhood with excellent schools nearby.'
    },
    { 
      id: 2, 
      address: '456 Nebula Ave, Metropolis', 
      price: '$420,000', 
      rentPrice: '$2,800/month',
      type: 'buy',
      rating: '4.6',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2200,
      yearBuilt: 2018,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80',
      description: 'Modern home with open floor plan and energy-efficient features.'
    },
    { 
      id: 3, 
      address: '789 Galaxy Blvd, Springfield', 
      price: '$380,000', 
      rentPrice: '$2,400/month',
      type: 'buy',
      rating: '4.9',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1950,
      yearBuilt: 2020,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=400&q=80',
      description: 'Newly built home with smart home features and solar panels.'
    },
    { 
      id: 4, 
      address: '321 Cosmos Court, Springfield', 
      price: '$1,800/month', 
      rentPrice: '$1,800/month',
      type: 'rent',
      rating: '4.7',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      yearBuilt: 2019,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80',
      description: 'Cozy apartment with modern amenities and great location.'
    },
    { 
      id: 5, 
      address: '654 Orbit Street, Metropolis', 
      price: '$2,500/month', 
      rentPrice: '$2,500/month',
      type: 'rent',
      rating: '4.5',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1600,
      yearBuilt: 2017,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
      description: 'Spacious rental home with private backyard and garage.'
    },
    { 
      id: 6, 
      address: '987 Solar Drive, Springfield', 
      price: '$1,200/month', 
      rentPrice: '$1,200/month',
      type: 'rent',
      rating: '4.9',
      bedrooms: 1,
      bathrooms: 1,
      sqft: 800,
      yearBuilt: 2021,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80',
      description: 'Perfect tiny house rental for minimalist living.'
    }
  ];

  // Filter listings based on selected type
  const filteredListings = filterType === 'all' 
    ? allListings 
    : allListings.filter(home => home.type === filterType);

  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '5rem' }}>
        <section style={{
          minHeight: '100vh',
          padding: '2rem',
          background: 'transparent'
        }}>
          <h1 style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            color: 'var(--star-blue)',
            textShadow: '0 0 10px rgba(126, 203, 255, 0.5)'
          }}>
            ✦ Constellation Listings ✦
          </h1>

          {/* Filter Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setFilterType('all')}
              style={{
                background: filterType === 'all' 
                  ? 'linear-gradient(45deg, var(--star-blue), var(--space-dark))' 
                  : 'rgba(10, 17, 36, 0.8)',
                color: filterType === 'all' ? 'var(--pure-white)' : 'var(--star-blue)',
                border: '2px solid var(--star-blue)',
                borderRadius: '25px',
                padding: '12px 24px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: filterType === 'all' ? '0 0 15px rgba(126, 203, 255, 0.5)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (filterType !== 'all') {
                  e.currentTarget.style.background = 'var(--star-blue)';
                  e.currentTarget.style.color = 'var(--space-dark)';
                }
              }}
              onMouseLeave={(e) => {
                if (filterType !== 'all') {
                  e.currentTarget.style.background = 'rgba(10, 17, 36, 0.8)';
                  e.currentTarget.style.color = 'var(--star-blue)';
                }
              }}
            >
              🌟 All Properties ({allListings.length})
            </button>
            <button
              onClick={() => setFilterType('buy')}
              style={{
                background: filterType === 'buy' 
                  ? 'linear-gradient(45deg, var(--star-blue), var(--space-dark))' 
                  : 'rgba(10, 17, 36, 0.8)',
                color: filterType === 'buy' ? 'var(--pure-white)' : 'var(--star-blue)',
                border: '2px solid var(--star-blue)',
                borderRadius: '25px',
                padding: '12px 24px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: filterType === 'buy' ? '0 0 15px rgba(126, 203, 255, 0.5)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (filterType !== 'buy') {
                  e.currentTarget.style.background = 'var(--star-blue)';
                  e.currentTarget.style.color = 'var(--space-dark)';
                }
              }}
              onMouseLeave={(e) => {
                if (filterType !== 'buy') {
                  e.currentTarget.style.background = 'rgba(10, 17, 36, 0.8)';
                  e.currentTarget.style.color = 'var(--star-blue)';
                }
              }}
            >
              🏠 For Sale ({allListings.filter(h => h.type === 'buy').length})
            </button>
            <button
              onClick={() => setFilterType('rent')}
              style={{
                background: filterType === 'rent' 
                  ? 'linear-gradient(45deg, var(--star-blue), var(--space-dark))' 
                  : 'rgba(10, 17, 36, 0.8)',
                color: filterType === 'rent' ? 'var(--pure-white)' : 'var(--star-blue)',
                border: '2px solid var(--star-blue)',
                borderRadius: '25px',
                padding: '12px 24px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: filterType === 'rent' ? '0 0 15px rgba(126, 203, 255, 0.5)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (filterType !== 'rent') {
                  e.currentTarget.style.background = 'var(--star-blue)';
                  e.currentTarget.style.color = 'var(--space-dark)';
                }
              }}
              onMouseLeave={(e) => {
                if (filterType !== 'rent') {
                  e.currentTarget.style.background = 'rgba(10, 17, 36, 0.8)';
                  e.currentTarget.style.color = 'var(--star-blue)';
                }
              }}
            >
              🏡 For Rent ({allListings.filter(h => h.type === 'rent').length})
            </button>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {filteredListings.map(home => (
              <div key={home.id} style={{
                background: 'linear-gradient(135deg, rgba(10,17,36,0.95) 0%, rgba(26,35,126,0.9) 100%)',
                border: '2px solid var(--star-blue)',
                borderRadius: '15px',
                padding: '1.5rem',
                boxShadow: '0 0 30px rgba(126, 203, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={() => setSelectedHome(home)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(126, 203, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(126, 203, 255, 0.3)';
              }}>
                
                {/* Constellation background effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `
                    radial-gradient(2px 2px at 20px 30px, var(--star-blue), transparent),
                    radial-gradient(1px 1px at 90px 40px, var(--pure-white), transparent),
                    radial-gradient(2px 2px at 160px 30px, var(--star-blue), transparent)
                  `,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '200px 100px',
                  opacity: 0.2,
                  pointerEvents: 'none',
                  zIndex: 0
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <img 
                    src={home.image} 
                    alt={home.address}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginBottom: '1rem',
                      border: '1px solid var(--star-blue)'
                    }}
                  />
                  
                  <h3 style={{ 
                    color: 'var(--star-blue)', 
                    marginBottom: '0.5rem',
                    textShadow: '0 0 5px rgba(126, 203, 255, 0.5)'
                  }}>
                    {home.address}
                  </h3>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <span style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 'bold', 
                        color: 'var(--pure-white)' 
                      }}>
                        {home.type === 'rent' ? home.rentPrice : home.price}
                      </span>
                      {home.type === 'buy' && (
                        <div style={{ 
                          fontSize: '0.9rem', 
                          color: 'var(--star-blue)',
                          opacity: 0.8
                        }}>
                          Rent: {home.rentPrice}
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--star-blue)' }}>⭐</span>
                      <span style={{ color: 'var(--pure-white)' }}>{home.rating}</span>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ color: 'var(--pure-white)' }}>
                      <strong style={{ color: 'var(--star-blue)' }}>Bedrooms:</strong> {home.bedrooms}
                    </div>
                    <div style={{ color: 'var(--pure-white)' }}>
                      <strong style={{ color: 'var(--star-blue)' }}>Bathrooms:</strong> {home.bathrooms}
                    </div>
                    <div style={{ color: 'var(--pure-white)' }}>
                      <strong style={{ color: 'var(--star-blue)' }}>Sq Ft:</strong> {home.sqft}
                    </div>
                    <div style={{ color: 'var(--pure-white)' }}>
                      <strong style={{ color: 'var(--star-blue)' }}>Year:</strong> {home.yearBuilt}
                    </div>
                  </div>
                  
                  <p style={{ 
                    color: 'var(--pure-white)', 
                    fontSize: '0.9rem',
                    lineHeight: '1.4'
                  }}>
                    {home.description}
                  </p>
                  
                  <button style={{
                    width: '100%',
                    marginTop: '1rem',
                    background: 'linear-gradient(45deg, var(--star-blue), var(--space-dark))',
                    color: 'var(--pure-white)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px rgba(126, 203, 255, 0.5)',
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
                    View Reviews & Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
