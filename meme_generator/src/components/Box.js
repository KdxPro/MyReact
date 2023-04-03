import React from "react";

export function Box(props) {
  return props.arrayBox.map((item) => (
    <div
      className="box"
      style={{ backgroundColor: item.isSelected ? "blue" : "red" }}
      onClick={props.onClick}
      key={item.id}
    >
      {item.id}
    </div>
  ));
}
