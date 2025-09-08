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

  // Placeholder: Replace with real API calls
  const fetchHomes = (query) => {
    setResults([
      { id: 1, address: '123 Main St, Springfield', price: '$350,000' },
      { id: 2, address: '456 Oak Ave, Metropolis', price: '$420,000' }
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setConversation([...conversation, { from: 'user', text: input }]);
    fetchHomes(input);
    setInput('');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Conversation Window</h2>
      <ul>
        {conversation.map((msg, idx) => (
          <li key={idx}><b>{msg.from === 'system' ? 'Assistant' : 'You'}:</b> {msg.text}</li>
        ))}
      </ul>
      <div style={{ margin: '16px 0', color: '#555' }}>
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
        placeholder="Type your city or preferences..."
        style={{ width: '80%' }}
      />
      <button onClick={handleSend}>Send</button>
      <ResultsShowcase results={results} onSelect={setSelectedHome} />
      {selectedHome && <ReviewInsights home={selectedHome} />}
    </div>
  );
}