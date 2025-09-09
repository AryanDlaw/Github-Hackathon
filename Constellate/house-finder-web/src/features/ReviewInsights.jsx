import React, { useEffect, useState } from 'react';

export default function ReviewInsights({ home }) {
  const [reviews, setReviews] = useState([]);

  // Enhanced mock reviews in Google Maps style
  useEffect(() => {
    setReviews([
      { 
        source: 'Google Maps', 
        author: 'Sarah M.',
        rating: 5,
        date: '2 weeks ago',
        text: 'Absolutely love this neighborhood! The house is in perfect condition and the area is so peaceful. Great schools nearby and the commute to downtown is only 15 minutes.',
        helpful: 12
      },
      { 
        source: 'Reddit', 
        author: 'Mike_R',
        rating: 4,
        date: '1 month ago',
        text: 'Lived here for 3 years now. The community is amazing and very family-friendly. Only downside is the HOA fees, but the amenities make it worth it.',
        helpful: 8
      },
      { 
        source: 'Google Maps', 
        author: 'Jennifer L.',
        rating: 5,
        date: '3 weeks ago',
        text: 'Perfect location! Close to everything - grocery stores, restaurants, and the park. The house itself is beautiful with lots of natural light.',
        helpful: 15
      },
      { 
        source: 'Reddit', 
        author: 'Alex_HomeBuyer',
        rating: 4,
        date: '2 months ago',
        text: 'Great investment property. The area is up-and-coming with new developments nearby. Property values have been steadily increasing.',
        helpful: 6
      }
    ]);
  }, [home]);

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getSourceIcon = (source) => {
    return source === 'Google Maps' ? '🗺️' : '💬';
  };

  return (
    <div style={{ 
      marginTop: '2rem',
      background: 'rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '1.5rem',
      border: '1px solid rgba(126, 203, 255, 0.3)'
    }}>
      <h4 style={{ 
        color: 'var(--star-blue)', 
        marginBottom: '1rem',
        textAlign: 'center',
        textShadow: '0 0 5px rgba(126, 203, 255, 0.5)'
      }}>
        🌟 What people are saying about {home.address}
      </h4>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {reviews.map((review, idx) => (
          <div key={idx} style={{
            background: 'linear-gradient(135deg, rgba(10,17,36,0.8) 0%, rgba(26,35,126,0.6) 100%)',
            border: '1px solid var(--star-blue)',
            borderRadius: '10px',
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            {/* Subtle star background */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(1px 1px at 30px 20px, var(--star-blue), transparent),
                radial-gradient(1px 1px at 70px 50px, var(--pure-white), transparent)
              `,
              backgroundSize: '100px 70px',
              opacity: 0.1,
              pointerEvents: 'none',
              zIndex: 0
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Review Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{getSourceIcon(review.source)}</span>
                  <span style={{ 
                    color: 'var(--star-blue)', 
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}>
                    {review.author}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--pure-white)' }}>{renderStars(review.rating)}</span>
                  <span style={{ 
                    color: 'var(--star-blue)', 
                    fontSize: '0.8rem',
                    opacity: 0.8
                  }}>
                    {review.date}
                  </span>
                </div>
              </div>
              
              {/* Review Text */}
              <p style={{ 
                color: 'var(--pure-white)', 
                lineHeight: '1.5',
                marginBottom: '0.5rem',
                fontSize: '0.95rem'
              }}>
                {review.text}
              </p>
              
              {/* Review Footer */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                fontSize: '0.8rem'
              }}>
                <span style={{ 
                  color: 'var(--star-blue)',
                  fontWeight: 'bold'
                }}>
                  {review.source}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ color: 'var(--pure-white)' }}>👍</span>
                  <span style={{ color: 'var(--star-blue)' }}>{review.helpful} helpful</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}