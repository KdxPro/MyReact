import React from 'react';

export function Header() {
  return (
    <header>
      <nav className='nav'>
        <img className='nav-logo' src="logo192.png" alt="logo"></img>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
