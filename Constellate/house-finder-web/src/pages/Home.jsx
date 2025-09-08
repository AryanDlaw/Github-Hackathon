import React from 'react';
import ConversationWindow from '../components/ConversationWindow';
import HomeCarousel from '../features/HomeCarousel';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '5rem' }}>
        {/* Section 1: Tagline and Carousel */}
        <section id="learn-section" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'transparent'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
            Constellate ✦ Turning scattered dots into a guiding constellation
          </h1>
          <HomeCarousel />
        </section>
        {/* Section 2: Conversation Window */}
        <section id="conversation-section" style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'transparent'
        }}>
          <ConversationWindow />
        </section>
        {/* Section 3: About */}
        <section id="about-section" style={{
          minHeight: '40vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'transparent'
        }}>
          <h2>About Constellate</h2>
          <p style={{ maxWidth: 600, color: '#fff', textAlign: 'center' }}>
            Constellate is a new way to find your dream home, combining conversational search, curated results, and real community insights.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}