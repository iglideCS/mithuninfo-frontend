import React, { useState, useEffect } from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom'
import github from './fimages/footer_github.webp';
import linkedin from './fimages/footer_linkedin.webp';
import mail from './fimages/footer_mail.webp';

export const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after component mounts
    setIsLoading(false);
    
    // Optional: Add event listeners for route changes
    const handleRouteChange = () => {
      setIsLoading(true);
      requestAnimationFrame(() => {
        setIsLoading(false);
      });
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  if (isLoading) {
    return null; // Return null during initial load
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect With Me</h3>
          <ul>
            <li>
              <NavLink to="https://www.linkedin.com/in/mithun-yadav-19a011249/" target='_blank'>
                <img src={linkedin} alt='linkedin' />
              </NavLink>
            </li>
            <li>
               <NavLink to="https://github.com/mithun-ctrl">
                <img src={github} alt='github' />
              </NavLink>
            </li>
            <li>
              <NavLink to="mailto:itsmithun01@gmail.com">
                <img src={mail} alt='mail' />
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className='quick-links'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/achievement">Achievement</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: itsmithun01@gmail.com</p>
          <p>Phone: +918707300485</p>
          <p>Address: Prayagraj, Uttar Pradesh India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mithun. All rights reserved.</p>
      </div>
    </footer>
  );
};
