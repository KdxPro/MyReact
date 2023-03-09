import React from 'react';

export function Header() {
  return (
    <header>

      <nav className='nav'>
        <div className='nav--logo_container'>
          <img className='nav--logo' src="logo192.png" alt="logo"></img>
          <h1 className='nav--text'>React Facts</h1>
        </div>

        <h2 className="nav--title">First React Project</h2>
 
        <ul className='nav--items'>         
            <li><h3>Pricing</h3></li>  
            <li><h3>About</h3></li>
            <li><h3>Contact</h3></li>
        </ul>  
         


      </nav>

    </header>
  );
}
