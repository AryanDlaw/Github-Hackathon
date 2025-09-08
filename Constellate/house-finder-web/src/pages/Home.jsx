import React from 'react';
import ConversationWindow from '../components/ConversationWindow';
import HomeCarousel from '../features/HomeCarousel';

export default function Home() {
  return (
    <div>
      {/* Section 1: Tagline and Carousel */}
      <section style={{
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
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent'
      }}>
        <ConversationWindow />
      </section>
    </div>
  );
}