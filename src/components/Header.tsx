import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import CatalogLogo from '../CatalogLogo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={CatalogLogo} alt="Dog's Catalog Logo" />
          </Link>
        </div>
      </nav>
      <nav className="nav-container">
        <ul>
          <li><Link to="/">Catalog</Link></li>
          <li><Link to="/manage">Manage</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
