import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="App-footer">
      <p>{new Date().getFullYear()} The Dog Catalog.</p>
    </footer>
  );
};

export default Footer;
