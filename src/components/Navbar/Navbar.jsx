import React from "react";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css';

function Navbar () {
   const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="nav-container">
      <div className="nav-mobile">
        <Link to="/">
        <span>
          <svg width="70" height="50" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="40" r="15" fill="#268afc"/>
      <rect x="35" y="55" width="30" height="50" rx="10" fill="#4A90E2"/>

      <circle cx="120" cy="40" r="15" fill="#1cfccb"/>
      <rect x="105" y="55" width="30" height="50" rx="10" fill="#50E3C2"/>

      <circle cx="190" cy="40" r="15" fill="#fa9d07"/>
      <rect x="175" y="55" width="30" height="50" rx="10" fill="#F5A623"/>
      </svg>
        </span>
</Link>
        
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      <div className={`nav-desktop ${menuOpen ? 'nav-desktop-open' : ''}`}>
        <Link to="/">
          <svg width="70" height="50" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="40" r="15" fill="#268afc"/>
      <rect x="35" y="55" width="30" height="50" rx="10" fill="#4A90E2"/>

      <circle cx="120" cy="40" r="15" fill="#1cfccb"/>
      <rect x="105" y="55" width="30" height="50" rx="10" fill="#50E3C2"/>

      <circle cx="190" cy="40" r="15" fill="#fa9d07"/>
      <rect x="175" y="55" width="30" height="50" rx="10" fill="#F5A623"/>
      </svg>
</Link>
     <ul className="nav-links-container">
      <li className="nav-links"><Link to ="/add">Add</Link></li>
      </ul>
       
      </div>
      </div>
      );
}

export default Navbar;
