import React from 'react';

export default function ResultsShowcase({ results, onSelect }) {
  if (!results.length) return null;
  return (
    <div style={{ marginTop: 24 }}>
      <h3>Results</h3>
      <ul>
        {results.map(home => (
          <li key={home.id}>
            <span>{home.address} - {home.price}</span>
            <button style={{ marginLeft: 8 }} onClick={() => onSelect(home)}>
              See Reviews
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}