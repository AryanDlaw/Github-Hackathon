import React, { useState } from 'react';
import ResultsShowcase from '../features/ResultsShowcase';
import ReviewInsights from '../features/ReviewInsights';

const initialConversation = [
  { from: 'system', text: 'Welcome! Let’s find your ideal home. What city or area are you interested in?' }
];

export default function ConversationWindow() {
  const [conversation, setConversation] = useState(initialConversation);
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [selectedHome, setSelectedHome] = useState(null);

  // New filter states
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [utility, setUtility] = useState('');

  // Placeholder: Replace with real API calls
  const fetchHomes = () => {
    setResults([
      { id: 1, address: '123 Main St, Springfield', price: '$350,000' },
      { id: 2, address: '456 Oak Ave, Metropolis', price: '$420,000' }
    ]);
  };

  const handleSend = () => {
    if (!input.trim() && !location && !budget && !utility) return;
    setConversation([...conversation, { from: 'user', text: input }]);
    fetchHomes();
    setInput('');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, border: '1px solid #ccc', borderRadius: 8, background: 'rgba(10,17,36,0.95)' }}>
      <h2>Conversation Window</h2>
      <div style={{ marginBottom: 16 }}>
        <label>
          Location:&nbsp;
          <input value={location} onChange={e => setLocation(e.target.value)} placeholder="City or ZIP" />
        </label>
        <label style={{ marginLeft: 16 }}>
          Budget:&nbsp;
          <input value={budget} onChange={e => setBudget(e.target.value)} placeholder="e.g. $300,000" />
        </label>
        <label style={{ marginLeft: 16 }}>
          Utility Needs:&nbsp;
          <input value={utility} onChange={e => setUtility(e.target.value)} placeholder="e.g. EV charger" />
        </label>
      </div>
      <ul>
        {conversation.map((msg, idx) => (
          <li key={idx}><b>{msg.from === 'system' ? 'Assistant' : 'You'}:</b> {msg.text}</li>
        ))}
      </ul>
      <div style={{ margin: '16px 0', color: '#7ecbff' }}>
        <b>Tips for your search:</b>
        <ul>
          <li>Consider commute times and local amenities.</li>
          <li>Check school ratings and neighborhood safety.</li>
          <li>Think about future resale value.</li>
        </ul>
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your preferences..."
        style={{ width: '80%' }}
      />
      <button onClick={handleSend}>Send</button>
      <ResultsShowcase results={results} onSelect={setSelectedHome} />
      {selectedHome && <ReviewInsights home={selectedHome} />}
    </div>
  );
}