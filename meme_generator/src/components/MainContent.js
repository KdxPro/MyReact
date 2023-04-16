import React from "react";

import { Boxes } from "./Boxes";
import { Star } from "./Star";
import { TopText } from "./TopText";
import { BottomText } from "./BottomText";

export function MainContent(props) {
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

  const [topText, setTopText] = React.useState("");
  const changeTopText = (event) => {
    setTopText(event.target.value);
  };

  const [bottomText, setBottomText] = React.useState("");
  const changeBottomText = (event) => {
    setBottomText(event.target.value);
  };

  return (
    <main>
      <form className="main--form">
        <input
          className="main--input"
          placeholder="Top text"
          onChange={changeTopText}
        ></input>
        <input
          className="main--input"
          placeholder="Bottom text"
          onChange={changeBottomText}
        ></input>
        <button className="main--button" onClick={handleOnClick}>
          Get a new {props.item} image
        </button>
      </form>

      <div className="main--imageContainer">
        <img
          className="imageContainer--image"
          src={"https://picsum.photos/600/400?random=" + randVal}
          alt="main_image"
        />
        <TopText text={topText} />
        <BottomText text={bottomText} />
        <Star isFavIcon={isFavIcon} onClickHandle={handleOnClickFavIcon} />
        <Boxes quantity={5} />
      </div>
    </main>
  );
}
