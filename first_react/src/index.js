import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function Navbar(){
  return(
    <img src="logo192.png" alt="logo"></img>
  );
}

function MainContent()
{
  return(
    <div>

      <h1>Fun facts about React</h1>
      
      <h3>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was orginally created by Jordan Walke</li>
          <li>Has well over 100 start on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </h3>

    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>

    <Navbar></Navbar>
    <MainContent></MainContent>

  </React.StrictMode>
);
