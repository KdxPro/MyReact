import React from "react";

import { Box } from "./Box";
import { Star } from "./Star";

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

  const boxStruct = { obj: <Box />, id: 1 };

  const [arrayBox, setArrayBox] = React.useState(Array(boxStruct));
  function handleOnClickBox() {
    let tmpBoxStruct = boxStruct;
    tmpBoxStruct.id = arrayBox.length + 1;
    setArrayBox((prevArrayBox) => {
      return [...prevArrayBox, tmpBoxStruct];
    });
    console.log(arrayBox);
  }

  return (
    <main>
      <form className="main--form">
        <input className="main--input" placeholder="Top text"></input>
        <input className="main--input" placeholder="Bottom text"></input>
        <button className="main--button" onClick={handleOnClick}>
          Get a new {props.item} image
        </button>
      </form>

      <div className="main--imageContainer">
        <img
          className="imageContainer--image"
          src={"https://picsum.photos/600/400?random=" + randVal}
          alt="main_image"
        ></img>
        <Star isFavIcon={isFavIcon} onClickHandle={handleOnClickFavIcon} />
        <div className="boxContainer">
          <Box arrayBox={arrayBox} onClick={handleOnClickBox} />
        </div>
      </div>
    </main>
  );
}
