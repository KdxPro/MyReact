import React from "react";

import addIcon from "../images/add_icon.png";

export function AddBox(props) {
  return <div className="box" id="add_box" onClick={props.onClick}>
    <img className="box--add_icon" src={addIcon} alt="add_icon"/>
  </div>;
}
