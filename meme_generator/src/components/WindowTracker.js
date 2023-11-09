import React from "react";

import "./WindowTracker.css";

export function WindowTracker() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [show, setShow] = React.useState(true);
  function onClickHandle() {
    setShow((prevShow) => !prevShow);
  }

  React.useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
    //console.log("add");

    return function () {
      //console.log("remove");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div className="windowTracker">
      <button onClick={onClickHandle}>Toggle WindowTracker</button>
      {show && <h5>Window width:</h5>}
      {show && <h1>{width}</h1>}
    </div>
  );
}
