// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="page-header">
      <img src="/vishnuLogo.png" alt="SVECW Logo" className="college-logo" />
      <div>
        <h1>An Online Grievance Management System for SVECW</h1>
      </div>
    </nav>
  );
};

export default Navbar;
