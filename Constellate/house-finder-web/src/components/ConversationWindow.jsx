import React, { useState, useEffect, useRef } from 'react';
import ResultsShowcase from '../features/ResultsShowcase';
import ReviewInsights from '../features/ReviewInsights';

const initialConversation = [
  { from: 'system', text: 'Welcome to Constellate! ✦ Let\'s find your ideal home among the stars. What city or area are you interested in?' }
];

export default function ConversationWindow() {
  const [conversation, setConversation] = useState(initialConversation);
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [selectedHome, setSelectedHome] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // New filter states
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [utility, setUtility] = useState('');
  const [propertyType, setPropertyType] = useState('buy'); // 'buy' or 'rent'
  const [budgetRange, setBudgetRange] = useState('any'); // 'any', 'low', 'medium', 'high', 'custom'

  const nlwebRef = useRef(null);

  useEffect(() => {
    if (window.NLWeb && nlwebRef.current) {
      window.NLWeb.init({
        container: nlwebRef.current,
        // ...other config options as needed...
      });
    }
  }, []);

  // NLWeb MCP Integration with better error handling
  const queryNLWeb = async (query) => {
    try {
      setIsLoading(true);
      
      // Initialize MCP connection
      const initResponse = await fetch('http://localhost:8000/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "initialize",
          params: {
            protocolVersion: "2024-11-05",
            capabilities: {},
            clientInfo: { name: "constellate-web", version: "1.0" }
          }
        })
      });

      if (!initResponse.ok) {
        throw new Error(`MCP initialization failed: ${initResponse.status}`);
      }

      // Send initialized notification
      await fetch('http://localhost:8000/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "notifications/initialized",
          params: {}
        })
      });

      // Query NLWeb
      const queryResponse = await fetch('http://localhost:8000/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 2,
          method: "tools/call",
          params: {
            name: "ask",
            arguments: {
              query: query,
              site: ["zillow", "apartments", "reddit", "googlemaps_reviews"]
            }
          }
        })
      });

      if (!queryResponse.ok) {
        throw new Error(`MCP query failed: ${queryResponse.status}`);
      }

      const result = await queryResponse.json();
      
      if (result.result && result.result.content && result.result.content[0]) {
        const responseText = result.result.content[0].text;
        
        // Check if the response is meaningful (not just "Asking" or empty)
        if (responseText && responseText.length > 50 && !responseText.includes('"Asking"')) {
          return responseText;
        } else {
          // NLWeb doesn't have data configured, provide helpful fallback
          return `The constellation network is active but doesn't have housing data endpoints configured yet. I'll help you with a curated search based on your filters. In the meantime, you can explore our curated listings below!`;
        }
      } else if (result.error) {
        // Handle specific error cases
        if (result.error.message.includes('No valid endpoints available')) {
          return `The constellation network is active but doesn't have housing data endpoints configured yet. I'll help you with a curated search based on your filters. In the meantime, you can explore our curated listings below!`;
        }
        throw new Error(`MCP Error: ${result.error.message}`);
      } else {
        throw new Error('Unexpected response format from constellation network');
      }
    } catch (error) {
      console.error('NLWeb query error:', error);
      return `The stars seem to be misaligned (${error.message}). Let me help you with a basic search instead.`;
    } finally {
      setIsLoading(false);
    }
  };

  // Enhanced home search with NLWeb integration and filters
  const fetchHomes = async (searchQuery) => {
    try {
      // Build enhanced query with filters
      const enhancedQuery = `${searchQuery} | Type: ${propertyType} | Budget Range: ${budgetRange} | Location: ${location} | Budget: ${budget} | Needs: ${utility}`;
      
      // Try NLWeb first with enhanced query
      const nlwebResponse = await queryNLWeb(enhancedQuery);
      
      // Add NLWeb response to conversation
      setConversation(prev => [...prev, { 
        from: 'system', 
        text: `✦ Constellation Response: ${nlwebResponse}` 
      }]);

      // Generate filtered mock data based on selections
      const allMockResults = [
        { id: 1, address: '123 Stellar Lane, Springfield', price: '$350,000', rentPrice: '$2,200/month', type: 'buy', rating: '4.8' },
        { id: 2, address: '456 Nebula Ave, Metropolis', price: '$420,000', rentPrice: '$2,800/month', type: 'buy', rating: '4.6' },
        { id: 3, address: '789 Galaxy Blvd, Springfield', price: '$380,000', rentPrice: '$2,400/month', type: 'buy', rating: '4.9' },
        { id: 4, address: '321 Cosmos Court, Springfield', price: '$1,800/month', rentPrice: '$1,800/month', type: 'rent', rating: '4.7' },
        { id: 5, address: '654 Orbit Street, Metropolis', price: '$2,500/month', rentPrice: '$2,500/month', type: 'rent', rating: '4.5' },
        { id: 6, address: '987 Solar Drive, Springfield', price: '$1,200/month', rentPrice: '$1,200/month', type: 'rent', rating: '4.9' }
      ];

      // Filter results based on property type
      let filteredResults = allMockResults;
      if (propertyType !== 'buy' && propertyType !== 'rent') {
        // If no specific type selected, show all
        filteredResults = allMockResults;
      } else {
        filteredResults = allMockResults.filter(home => home.type === propertyType);
      }

      // Filter by budget range if specified
      if (budgetRange !== 'any') {
        filteredResults = filteredResults.filter(home => {
          const price = propertyType === 'rent' ? home.rentPrice : home.price;
          const priceNum = parseInt(price.replace(/[$,]/g, ''));
          
          switch (budgetRange) {
            case 'low': return priceNum <= 200000;
            case 'medium': return priceNum > 200000 && priceNum <= 500000;
            case 'high': return priceNum > 500000 && priceNum <= 1000000;
            case 'luxury': return priceNum > 1000000;
            default: return true;
          }
        });
      }

      setResults(filteredResults.slice(0, 3)); // Show top 3 results
    } catch (error) {
      console.error('Search error:', error);
      setResults([
        { id: 1, address: '123 Main St, Springfield', price: '$350,000', type: 'buy' },
        { id: 2, address: '456 Oak Ave, Metropolis', price: '$420,000', type: 'buy' }
      ]);
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !location && !budget && !utility) return;
    
    const userMessage = input || `Looking for homes in ${location} with budget ${budget} and needs: ${utility}`;
    setConversation([...conversation, { from: 'user', text: userMessage }]);
    
    await fetchHomes(userMessage);
    setInput('');
  };

  return (
    <div style={{ 
      maxWidth: 800, 
      margin: 'auto', 
      padding: 30, 
      border: '2px solid #7ecbff', 
      borderRadius: 15, 
      background: 'linear-gradient(135deg, rgba(10,17,36,0.95) 0%, rgba(26,35,126,0.9) 100%)',
      boxShadow: '0 0 30px rgba(126, 203, 255, 0.3), inset 0 0 30px rgba(126, 203, 255, 0.1)',
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
          radial-gradient(2px 2px at 20px 30px, #7ecbff, transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(126, 203, 255, 0.8), transparent),
          radial-gradient(1px 1px at 90px 40px, #fff, transparent),
          radial-gradient(1px 1px at 130px 80px, rgba(126, 203, 255, 0.6), transparent),
          radial-gradient(2px 2px at 160px 30px, #7ecbff, transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px',
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#7ecbff', 
          fontSize: '2rem',
          marginBottom: '20px',
          textShadow: '0 0 10px rgba(126, 203, 255, 0.5)',
          fontFamily: 'monospace'
        }}>
          ✦ Convo ✦
        </h2>
        
        <div style={{ marginBottom: 20, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <label style={{ color: '#7ecbff', display: 'flex', alignItems: 'center', gap: '5px' }}>
            🌍 Location:&nbsp;
            <input 
              value={location} 
              onChange={e => setLocation(e.target.value)} 
              placeholder="City or ZIP" 
              style={{
                background: 'rgba(10,17,36,0.8)',
                color: '#fff',
                border: '1px solid #7ecbff',
                borderRadius: '5px',
                padding: '8px',
                boxShadow: '0 0 5px rgba(126, 203, 255, 0.3)'
              }}
            />
          </label>
          <label style={{ color: '#7ecbff', display: 'flex', alignItems: 'center', gap: '5px' }}>
            💰 Budget:&nbsp;
            <input 
              value={budget} 
              onChange={e => setBudget(e.target.value)} 
              placeholder="e.g. $300,000" 
              style={{
                background: 'rgba(10,17,36,0.8)',
                color: '#fff',
                border: '1px solid #7ecbff',
                borderRadius: '5px',
                padding: '8px',
                boxShadow: '0 0 5px rgba(126, 203, 255, 0.3)'
              }}
            />
          </label>
          <label style={{ color: '#7ecbff', display: 'flex', alignItems: 'center', gap: '5px' }}>
            🏠 Type:&nbsp;
            <select 
              value={propertyType} 
              onChange={e => setPropertyType(e.target.value)} 
              style={{
                background: 'rgba(10,17,36,0.8)',
                color: '#fff',
                border: '1px solid #7ecbff',
                borderRadius: '5px',
                padding: '8px',
                boxShadow: '0 0 5px rgba(126, 203, 255, 0.3)',
                cursor: 'pointer'
              }}
            >
              <option value="buy">🏠 Buy</option>
              <option value="rent">🏡 Rent</option>
            </select>
          </label>
          <label style={{ color: '#7ecbff', display: 'flex', alignItems: 'center', gap: '5px' }}>
            💵 Range:&nbsp;
            <select 
              value={budgetRange} 
              onChange={e => setBudgetRange(e.target.value)} 
              style={{
                background: 'rgba(10,17,36,0.8)',
                color: '#fff',
                border: '1px solid #7ecbff',
                borderRadius: '5px',
                padding: '8px',
                boxShadow: '0 0 5px rgba(126, 203, 255, 0.3)',
                cursor: 'pointer'
              }}
            >
              <option value="any">Any Budget</option>
              <option value="low">$0 - $200K</option>
              <option value="medium">$200K - $500K</option>
              <option value="high">$500K - $1M</option>
              <option value="luxury">$1M+</option>
              <option value="custom">Custom Range</option>
            </select>
          </label>
          <label style={{ color: '#7ecbff', display: 'flex', alignItems: 'center', gap: '5px' }}>
            ⚡ Needs:&nbsp;
            <input 
              value={utility} 
              onChange={e => setUtility(e.target.value)} 
              placeholder="e.g. EV charger" 
              style={{
                background: 'rgba(10,17,36,0.8)',
                color: '#fff',
                border: '1px solid #7ecbff',
                borderRadius: '5px',
                padding: '8px',
                boxShadow: '0 0 5px rgba(126, 203, 255, 0.3)'
              }}
            />
          </label>
        </div>
        
        {/* Tips moved above conversation */}
        <div style={{ 
          margin: '20px 0', 
          color: '#7ecbff', 
          fontSize: '0.9rem',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '10px',
          padding: '15px',
          border: '1px solid rgba(126, 203, 255, 0.3)'
        }}>
          <b>🌟 Constellation Tips:</b>
          <ul style={{ marginTop: '5px' }}>
            <li>Consider commute times and local amenities.</li>
            <li>Check school ratings and neighborhood safety.</li>
            <li>Think about future resale value.</li>
            <li>Use the filters above to narrow down your search.</li>
          </ul>
        </div>
        
        <div style={{ 
          maxHeight: '300px', 
          overflowY: 'auto', 
          marginBottom: '20px',
          padding: '15px',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '10px',
          border: '1px solid rgba(126, 203, 255, 0.3)'
        }}>
          {conversation.map((msg, idx) => (
            <div key={idx} style={{ 
              marginBottom: '10px', 
              padding: '10px',
              borderRadius: '8px',
              background: msg.from === 'system' ? 'rgba(126, 203, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              borderLeft: `3px solid ${msg.from === 'system' ? '#7ecbff' : '#fff'}`
            }}>
              <b style={{ color: msg.from === 'system' ? '#7ecbff' : '#fff' }}>
                {msg.from === 'system' ? '✦ Constellation' : '👤 You'}:
              </b> {msg.text}
            </div>
          ))}
          {isLoading && (
            <div style={{ 
              textAlign: 'center', 
              color: '#7ecbff',
              fontStyle: 'italic',
              padding: '10px'
            }}>
              ✦ Consulting the stars... ✦
            </div>
          )}
        </div>
        
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask the constellation about your dream home..."
            style={{ 
              flex: 1,
              background: 'rgba(10,17,36,0.8)',
              color: '#fff',
              border: '1px solid #7ecbff',
              borderRadius: '5px',
              padding: '12px',
              boxShadow: '0 0 5px rgba(126, 203, 255, 0.3)'
            }}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            style={{
              background: isLoading ? '#555' : 'linear-gradient(45deg, #7ecbff, #1a237e)',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              padding: '12px 20px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              boxShadow: '0 0 10px rgba(126, 203, 255, 0.5)',
              transition: 'all 0.3s ease'
            }}
          >
            {isLoading ? '✦' : 'Send'}
          </button>
        </div>
        
        <ResultsShowcase results={results} onSelect={setSelectedHome} />
        {selectedHome && <ReviewInsights home={selectedHome} />}
        <div ref={nlwebRef} />
      </div>
    </div>
  );
}