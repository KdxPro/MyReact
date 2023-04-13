import React from "react";

export function Box(props) {
  const [on, setOn] = React.useState(true);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <div className="box" id={on ? "box_on" : "box_off"} onClick={toggle}></div>
  );
}
