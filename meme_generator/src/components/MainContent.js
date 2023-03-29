

export function MainContent() {

  let tmp = 0;
  
  function handleOnClick(e)
  {
    e.preventDefault();

    tmp = Math.floor(Math.random() * 10);

    console.log(tmp);
  }

  return (
    <main>
      <form className='main--form'>
        <input className='main--input' placeholder="Top text"></input>
        <input className='main--input' placeholder="Bottom text"></input>
        <button className='main--button' onClick={handleOnClick}>Get a new meme image</button>
      </form>
      <img className='main--image' src={"https://picsum.photos/600/400?random=" + tmp} alt="main_image"></img>
    </main>
  );
}
