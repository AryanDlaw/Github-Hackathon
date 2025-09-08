import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: 'rgba(10,17,36,0.95)',
      color: '#7ecbff',
      textAlign: 'center',
      padding: '2rem 0',
      marginTop: '2rem'
    }}>
      <div style={{ marginBottom: 8 }}>
        <b>Constellate</b> &copy; {new Date().getFullYear()} | All rights reserved.
      </div>
      <div style={{ marginBottom: 8 }}>
        <a href="mailto:info@constellate.com" style={footerLink}>Contact</a> | 
        <a href="#" style={footerLink}>Careers</a> | 
        <a href="#" style={footerLink}>Privacy Policy</a>
      </div>
      <div>
        <span>Follow us:</span>
        <a href="#" style={footerLink}>Twitter</a>
        <a href="#" style={footerLink}>LinkedIn</a>
      </div>
    </footer>
  );
}

const footerLink = {
  color: '#7ecbff',
  margin: '0 0.5rem',
  textDecoration: 'none'
};