import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Learn from './pages/Learn';
import DynamicBackground from './components/DynamicBackground';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/listings') {
        setCurrentPage('listings');
      } else if (path === '/learn') {
        setCurrentPage('learn');
      } else {
        setCurrentPage('home');
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange(); // Check initial route

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Global navigation function
  window.navigateToPage = (page) => {
    if (page === 'listings') {
      window.history.pushState({}, '', '/listings');
      setCurrentPage('listings');
    } else if (page === 'learn') {
      window.history.pushState({}, '', '/learn');
      setCurrentPage('learn');
    } else {
      window.history.pushState({}, '', '/');
      setCurrentPage('home');
    }
  };

  return (
    <div className="app-container">
      <DynamicBackground />
      {currentPage === 'home' && <Home />}
      {currentPage === 'listings' && <Listings />}
      {currentPage === 'learn' && <Learn />}
    </div>
  );
}

export default App;