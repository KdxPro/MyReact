import React from "react";

import { Star } from "./Star";

export function MainContent() {
  const [randVal, setRandVal] = React.useState(0);

  function handleOnClick(e) {
    e.preventDefault();

    setFavIcon(false);
    setRandVal(Math.floor(Math.random() * 255));
  }

  const [isFavIcon, setFavIcon] = React.useState(false);

  function handleOnClickFavIcon() {
    setFavIcon((prevFavIcon) => !prevFavIcon);
  }

  return (
    <main>
      <form className="main--form">
        <input className="main--input" placeholder="Top text"></input>
        <input className="main--input" placeholder="Bottom text"></input>
        <button className="main--button" onClick={handleOnClick}>
          Get a new meme image
        </button>
      </form>

      <div className="main--imageContainer">
        <img
          className="imageContainer--image"
          src={"https://picsum.photos/600/400?random=" + randVal}
          alt="main_image"
        ></img>
        <Star isFavIcon={isFavIcon} onClickHandle={handleOnClickFavIcon} />
      </div>
    </main>
  );
}
