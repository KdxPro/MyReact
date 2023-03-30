import React from 'react';

export function MainContent() {

  const [randVal, setRandVal] = React.useState(0);
  
  function handleOnClick(e)
  {
    e.preventDefault(); 

    setRandVal(Math.floor(Math.random() * 255));
  }
  
  
  return ( 
    <main>
      <form className='main--form'>
        <input className='main--input' placeholder="Top text"></input>
        <input className='main--input' placeholder="Bottom text"></input>
        <button className='main--button' onClick={handleOnClick}>Get a new meme image</button>
      </form>
      <img className='main--image' src={"https://picsum.photos/600/400?random=" + randVal} alt="main_image"></img>
    </main>
  );
}
