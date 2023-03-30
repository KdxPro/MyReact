import React from "react";

import favIcon from "../images/fav_icon.png";
import favIconFull from "../images/favFull_icon.png";

export function Star(props) {
  return (
    <img
      className="imageContainer--fav_icon"
      src={props.isFavIcon ? favIconFull : favIcon}
      alt="main_fav_icon"
      onClick={props.onClickHandle}
    ></img>
  );
}
