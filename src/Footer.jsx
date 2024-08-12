import React from 'react';
import './Footer.css'; // Create a CSS file for styling if needed

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Ankit. All Rights Reserved.</p>
  </footer>
);

export default Footer;
