import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const rukkolaStyle = {
    color: 'white',
    textDecoration: 'none'
  }
  const gitStyle = {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer'
  }
  return (
    <header className="header">
        <div className="container">
            <button className='siteBtn'>
              <Link to="/jobs" style={rukkolaStyle}> Rukkola! </Link>
              <span> / </span>
              <a href="https://github.com/VolodymyrBlyntsov" target="_blank" style={gitStyle}>git!</a>
            </button>
        </div>
    </header>
  )
}

export default Header;
