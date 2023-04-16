import React from "react";

import delIconDef from "../images/del_icon_def.png";
import delIconRed from "../images/del_icon_red.png";

export function Box(props) {
  const [on, setOn] = React.useState(true);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  const [delIcon, changeIcon] = React.useState(delIconDef);
  const [delClassName, changeClassName] = React.useState("box--del_icon_def");

  function changeDelIconRed() {
    changeIcon(delIconRed);
    changeClassName("box--del_icon_red");
  }

  function changeDelIconDef() {
    changeIcon(delIconDef);
    changeClassName("box--del_icon_def");
  }

  return (
    <div className="box" id={on ? "box_on" : "box_off"} onClick={toggle}>
      <img
        className={delClassName}
        src={delIcon}
        alt="del_icon"
        onClick={() => props.onDelClick(props.boxId)}
        onMouseEnter={changeDelIconRed}
        onMouseLeave={changeDelIconDef}
      ></img>
      {props.boxId}
    </div>
  );
}
