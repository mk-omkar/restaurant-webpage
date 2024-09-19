import React from 'react';
import '../styles/Header.css'; // Import CSS file from '../styles/'
import { FaHome, FaUtensils, FaInfoCircle, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href='/'>
            <img src="https://www.whiskaffair.com/wp-content/uploads/2020/07/Chicken-Biryani-2-3.jpg" alt="Restaurant Logo" className="logo-img" />
            Kabab Biryani Curry
          </a>
        </div>
        <nav className="navigation">
        <ul>
            <li><a href="/"><FaHome /> Home</a></li>
            <li><a href="/menu"><FaUtensils /> Menu</a></li>
            <li><a href="/about"><FaInfoCircle /> About Us</a></li>
            <li><a href="/contact"><FaPhone /> Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
