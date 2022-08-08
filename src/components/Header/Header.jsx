import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <header className="header">
        <div className="container">
            <button className='siteBtn'><Link to="/jobs" style={linkStyle}>Rukkola!</Link></button>
        </div>
    </header>
  )
}

export default Header;
