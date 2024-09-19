import React from 'react';
import '../styles/Footer.css'; // Import CSS file from '../styles/'
import twitterLogo from '../images/twitter.jpg'
import instaLogo from '../images/insta.jpg'
import { FaHome, FaUtensils, FaInfoCircle, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>123 Delicious St, Flavor Town, FT 45678</p>
                    <p>Email: <a href="mailto:info@yourrestaurant.com">info@yourrestaurant.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com/yourrestaurant" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img src="https://www.art-wd.com/art_windows/art_source/fb.png" alt="Facebook" className="social-icon" />
                        </a>
                        <a href="https://twitter.com/yourrestaurant" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <img src={twitterLogo} alt="Twitter" className="social-icon" />
                        </a>
                        <a href="https://instagram.com/yourrestaurant" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src={instaLogo} alt="Instagram" className="social-icon" />
                        </a>

                    </div>
                </div>
                 <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/"><FaHome /> Home</a></li>
            <li><a href="/menu"><FaUtensils /> Menu</a></li>
            <li><a href="/about"><FaInfoCircle /> About Us</a></li>
            <li><a href="/contact"><FaPhone /> Contact</a></li>
          </ul>
        </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Restaurant Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
