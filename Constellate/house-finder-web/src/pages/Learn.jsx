import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Learn() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Complete Guide to Finding Your Dream Home',
      category: 'buying',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      excerpt: 'Everything you need to know about the home buying process, from pre-approval to closing day.',
      content: 'Finding your dream home is one of life\'s most exciting adventures, but it can also be overwhelming. This comprehensive guide will walk you through every step of the process...',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Tiny House Living: Is It Right for You?',
      category: 'tiny-homes',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      excerpt: 'Explore the benefits and challenges of tiny house living and discover if this minimalist lifestyle suits your needs.',
      content: 'Tiny houses have captured the imagination of many people seeking a simpler, more sustainable lifestyle. But is tiny house living right for everyone?...',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Renting vs Buying: Making the Right Choice',
      category: 'renting',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      excerpt: 'Compare the pros and cons of renting versus buying to make an informed decision about your housing situation.',
      content: 'The age-old question: should you rent or buy? This decision depends on many factors including your financial situation, lifestyle, and long-term goals...',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'First-Time Home Buyer Checklist',
      category: 'buying',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '5 min read',
      excerpt: 'A step-by-step checklist to help first-time home buyers navigate the complex process with confidence.',
      content: 'Buying your first home is a milestone moment, but it can feel daunting. This checklist will help you stay organized and make informed decisions...',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Sustainable Living: Eco-Friendly Home Features',
      category: 'sustainability',
      author: 'Lisa Thompson',
      date: '2024-01-05',
      readTime: '9 min read',
      excerpt: 'Discover eco-friendly features that can make your home more sustainable and reduce your environmental footprint.',
      content: 'Creating an eco-friendly home is not only good for the planet but can also save you money in the long run. Here are the key features to consider...',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'Neighborhood Research: What to Look For',
      category: 'location',
      author: 'Alex Martinez',
      date: '2024-01-03',
      readTime: '6 min read',
      excerpt: 'Learn how to research neighborhoods effectively to find the perfect location for your lifestyle and needs.',
      content: 'Location is everything in real estate. Here\'s how to research neighborhoods thoroughly to ensure you\'re making the right choice...',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', icon: '🌟' },
    { id: 'buying', name: 'Buying Guide', icon: '🏠' },
    { id: 'renting', name: 'Renting Tips', icon: '🏡' },
    { id: 'tiny-homes', name: 'Tiny Homes', icon: '🏘️' },
    { id: 'sustainability', name: 'Sustainability', icon: '🌱' },
    { id: 'location', name: 'Location', icon: '📍' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '5rem' }}>
        <section style={{
          minHeight: '100vh',
          padding: '2rem',
          background: 'transparent'
        }}>
          <h1 style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            color: 'var(--star-blue)',
            textShadow: '0 0 10px rgba(126, 203, 255, 0.5)'
          }}>
            ✦ Learn to Find Your Perfect Home ✦
          </h1>

          <p style={{
            textAlign: 'center',
            color: 'var(--pure-white)',
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Discover expert insights, practical guides, and insider tips to help you navigate the world of real estate 
            and find the home that perfectly matches your dreams and lifestyle.
          </p>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  background: selectedCategory === category.id 
                    ? 'linear-gradient(45deg, var(--star-blue), var(--space-dark))' 
                    : 'rgba(10, 17, 36, 0.8)',
                  color: selectedCategory === category.id ? 'var(--pure-white)' : 'var(--star-blue)',
                  border: '2px solid var(--star-blue)',
                  borderRadius: '25px',
                  padding: '12px 20px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedCategory === category.id ? '0 0 15px rgba(126, 203, 255, 0.5)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.id) {
                    e.currentTarget.style.background = 'var(--star-blue)';
                    e.currentTarget.style.color = 'var(--space-dark)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.id) {
                    e.currentTarget.style.background = 'rgba(10, 17, 36, 0.8)';
                    e.currentTarget.style.color = 'var(--star-blue)';
                  }
                }}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {filteredPosts.map(post => (
              <article key={post.id} style={{
                background: 'linear-gradient(135deg, rgba(10,17,36,0.95) 0%, rgba(26,35,126,0.9) 100%)',
                border: '2px solid var(--star-blue)',
                borderRadius: '15px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(126, 203, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
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
                  opacity: 0.1,
                  pointerEvents: 'none',
                  zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Article Image */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(10, 17, 36, 0.9)',
                      color: 'var(--star-blue)',
                      padding: '5px 10px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>
                      {post.readTime}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        background: 'var(--star-blue)',
                        color: 'var(--space-dark)',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {categories.find(c => c.id === post.category)?.icon} {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span style={{ 
                        color: 'var(--star-blue)', 
                        fontSize: '0.8rem',
                        opacity: 0.8
                      }}>
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 style={{ 
                      color: 'var(--star-blue)', 
                      marginBottom: '0.5rem',
                      fontSize: '1.3rem',
                      lineHeight: '1.3',
                      textShadow: '0 0 5px rgba(126, 203, 255, 0.5)'
                    }}>
                      {post.title}
                    </h3>

                    <p style={{ 
                      color: 'var(--pure-white)', 
                      lineHeight: '1.5',
                      marginBottom: '1rem',
                      opacity: 0.9
                    }}>
                      {post.excerpt}
                    </p>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <span style={{ 
                        color: 'var(--star-blue)', 
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}>
                        By {post.author}
                      </span>
                    </div>

                    <button style={{
                      width: '100%',
                      background: 'linear-gradient(45deg, var(--star-blue), var(--space-dark))',
                      color: 'var(--pure-white)',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(45deg, var(--pure-white), var(--star-blue))';
                      e.currentTarget.style.color = 'var(--space-dark)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(45deg, var(--star-blue), var(--space-dark))';
                      e.currentTarget.style.color = 'var(--pure-white)';
                    }}>
                      Read Full Article
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(10,17,36,0.95) 0%, rgba(26,35,126,0.9) 100%)',
            border: '2px solid var(--star-blue)',
            borderRadius: '15px',
            maxWidth: '800px',
            margin: '4rem auto 0'
          }}>
            <h3 style={{ 
              color: 'var(--star-blue)', 
              marginBottom: '1rem',
              textShadow: '0 0 10px rgba(126, 203, 255, 0.5)'
            }}>
              Ready to Start Your Home Search?
            </h3>
            <p style={{ 
              color: 'var(--pure-white)', 
              marginBottom: '1.5rem',
              fontSize: '1.1rem'
            }}>
              Use our constellation-powered search to find your perfect home today!
            </p>
            <button 
              onClick={() => window.navigateToPage('home')}
              style={{
                background: 'linear-gradient(45deg, var(--star-blue), var(--space-dark))',
                color: 'var(--pure-white)',
                border: 'none',
                borderRadius: '25px',
                padding: '15px 30px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 15px rgba(126, 203, 255, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, var(--pure-white), var(--star-blue))';
                e.currentTarget.style.color = 'var(--space-dark)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, var(--star-blue), var(--space-dark))';
                e.currentTarget.style.color = 'var(--pure-white)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🌟 Start Searching Now
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
