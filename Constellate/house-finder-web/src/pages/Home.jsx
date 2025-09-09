import React, { useState } from 'react';
import ConversationWindow from '../components/ConversationWindow';
import HomeCarousel from '../features/HomeCarousel';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    padding: '2rem',
    position: 'relative'
  };

  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '5rem' }}>
        {/* Section 1: Tagline and Carousel */}
        <section id="learn-section" style={{
          ...sectionStyle,
          paddingTop: '1rem',
          paddingBottom: '1rem'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1.5rem', 
            marginTop: '0',
            textAlign: 'center',
            color: 'var(--star-blue)',
            textShadow: '0 0 10px rgba(126, 203, 255, 0.5)'
          }}>
            Constellate ✦ Turning scattered dots into a guiding constellation
          </h1>
          <HomeCarousel />
        </section>

        {/* Section 2: Conversation Window */}
        <section id="conversation-section" style={sectionStyle}>
          <ConversationWindow />
        </section>

        {/* Section 3: About - Expandable */}
        <section id="about-section" style={{
          ...sectionStyle,
          minHeight: expandedSection === 'about' ? 'auto' : '100vh',
          padding: expandedSection === 'about' ? '4rem 2rem' : '2rem'
        }}>
          <div style={{ 
            maxWidth: '800px', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(10,17,36,0.95) 0%, rgba(26,35,126,0.9) 100%)',
            border: '2px solid var(--star-blue)',
            borderRadius: '15px',
            padding: '2rem',
            boxShadow: '0 0 30px rgba(126, 203, 255, 0.3)',
            position: 'relative',
            overflow: 'hidden'
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
              <h2 style={{ 
                color: 'var(--star-blue)', 
                marginBottom: '1.5rem',
                textShadow: '0 0 10px rgba(126, 203, 255, 0.5)'
              }}>
                ✦ About Constellate ✦
              </h2>
              
              <p style={{ 
                color: 'var(--pure-white)', 
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Constellate is a revolutionary way to find your dream home, combining conversational AI search, 
                curated results, and real community insights from across the web.
              </p>

              {expandedSection === 'about' && (
                <div style={{ 
                  textAlign: 'left',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  border: '1px solid rgba(126, 203, 255, 0.3)'
                }}>
                  <h3 style={{ color: 'var(--star-blue)', marginBottom: '1rem' }}>🌟 How It Works</h3>
                  <ul style={{ color: 'var(--pure-white)', lineHeight: '1.8' }}>
                    <li><strong style={{ color: 'var(--star-blue)' }}>Conversational Search:</strong> Ask questions in natural language about your ideal home</li>
                    <li><strong style={{ color: 'var(--star-blue)' }}>Constellation Network:</strong> Our AI searches across multiple data sources simultaneously</li>
                    <li><strong style={{ color: 'var(--star-blue)' }}>Community Insights:</strong> Real reviews and experiences from Reddit, Google Maps, and more</li>
                    <li><strong style={{ color: 'var(--star-blue)' }}>Smart Recommendations:</strong> AI-powered suggestions based on your preferences and budget</li>
                  </ul>
                  
                  <h3 style={{ color: 'var(--star-blue)', marginTop: '1.5rem', marginBottom: '1rem' }}>🚀 Technology</h3>
                  <p style={{ color: 'var(--pure-white)', lineHeight: '1.6' }}>
                    Built with cutting-edge AI technology including Model Context Protocol (MCP) integration, 
                    natural language processing, and real-time data aggregation from multiple sources. 
                    Our constellation network ensures you get the most comprehensive and up-to-date information.
                  </p>
                </div>
              )}

              <button 
                onClick={() => toggleSection('about')}
                style={{
                  background: 'linear-gradient(45deg, var(--star-blue), var(--space-dark))',
                  color: 'var(--pure-white)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  boxShadow: '0 0 10px rgba(126, 203, 255, 0.5)',
                  transition: 'all 0.3s ease',
                  marginTop: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, var(--pure-white), var(--star-blue))';
                  e.currentTarget.style.color = 'var(--space-dark)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, var(--star-blue), var(--space-dark))';
                  e.currentTarget.style.color = 'var(--pure-white)';
                }}
              >
                {expandedSection === 'about' ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}