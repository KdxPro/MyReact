import React from "react";

import favIcon from "../images/fav_icon.png";
import favIconFull from "../images/favFull_icon.png";

export function MainContent() {
  const [randVal, setRandVal] = React.useState(0);
  const [isFavIcon, setFavIcon] = React.useState(false);

  function handleOnClick(e) {
    e.preventDefault();

    setFavIcon(false);
    setRandVal(Math.floor(Math.random() * 255));
  }

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

        <img
          className="imageContainer--fav_icon"
          src={isFavIcon ? favIconFull : favIcon}
          alt="main_fav_icon"
          onClick={handleOnClickFavIcon}
        ></img>
      </div>
    </main>
  );
}
