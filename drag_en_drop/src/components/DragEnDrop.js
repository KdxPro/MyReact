import React from "react";

export function DragEnDrop(props) {
  let corr = { x: 0, y: 0 };
  let styles = { left: corr.x, top: corr.y };

  const [lastMousCorr, setlastMousCorr] = React.useState({ x: 0, y: 0 });
  const [lastShapeCorr, setlastShapeCorr] = React.useState({ x: 0, y: 0 });

  const [isClicked, setIsClicked] = React.useState(false);
  function changeIsClicked() {
    setIsClicked((prevIsClicked) => !prevIsClicked);

    setlastMousCorr({ x: props.mousePosition.x, y: props.mousePosition.y });
    setlastShapeCorr({ x: finalCorr.x, y: finalCorr.y });
  }

  const [finalCorr, setFinalCorr] = React.useState(corr);
  function changeFinalCorr(x, y) {
    setFinalCorr({
      x: lastShapeCorr.x + x,
      y: lastShapeCorr.y + y,
    });

    changeFinalStyles(finalCorr.x, finalCorr.y);
  }

  const [finalStyles, setFinalStyles] = React.useState(styles);
  function changeFinalStyles(x, y) {
    setFinalStyles({ left: x, top: y });
  }

  // function tmp() {
  //   if (isClicked)
  //     changeFinalCorr(
  //       props.mousePosition.x - lastMousCorr.x,
  //       props.mousePosition.y - lastMousCorr.y
  //     );
  //   console.log(1);
  // }
  // console.log(2);

  function tmp() {
    if (isClicked) {
      changeFinalCorr(
        props.mousePosition.x - lastMousCorr.x,
        props.mousePosition.y - lastMousCorr.y
      );
    }
  }

  return (
    <div
      className="dragendrop"
      style={finalStyles}
      onClick={changeIsClicked}
      onMouseMove={tmp}
    ></div>
  );
}
