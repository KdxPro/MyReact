import React from "react";

export function Box(props) {
  return props.arrayBox.map((item) => (
    <div className="box" onClick={props.onClick}></div>
  ));
}
