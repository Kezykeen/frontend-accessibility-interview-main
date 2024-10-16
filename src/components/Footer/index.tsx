import React from "react";
import "./style.css";

const Footer: React.FC = () => {
  return (
    <footer className="App-footer" aria-labelledby="footer-text">
      <p id="footer-text">
        {new Date().getFullYear()} The Dog Catalog. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
