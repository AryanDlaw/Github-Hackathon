import React, { useEffect, useState } from 'react';

export default function ReviewInsights({ home }) {
  const [reviews, setReviews] = useState([]);

  // Placeholder: Replace with real Reddit/Google Maps review fetching
  useEffect(() => {
    setReviews([
      { source: 'Reddit', text: 'Great neighborhood, friendly people.' },
      { source: 'Google Maps', text: 'Close to parks and schools.' }
    ]);
  }, [home]);

  return (
    <div style={{ marginTop: 24 }}>
      <h4>What people are saying about {home.address}</h4>
      <ul>
        {reviews.map((review, idx) => (
          <li key={idx}><b>{review.source}:</b> {review.text}</li>
        ))}
      </ul>
    </div>
  );
}