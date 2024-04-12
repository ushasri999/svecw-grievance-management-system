// Header.js not using now
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className='head'>
    <img src="/vishnuWhiteLogo.jpg" alt="Logo"  className='college-logo2'/>
    <h1>SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (AUTONOMOUS)::BHIMAVARAM</h1>

    <nav className='nav-class'>
      <Link to = '/' className='my-profile-link'><FontAwesomeIcon icon={faHome} title="My Profile" /></Link>
      <Link to = '/' className='my-profile-link'><FontAwesomeIcon icon={faSignOutAlt} title="Logout" /></Link>
    </nav>
  </header>
  );
};

export default Header;
