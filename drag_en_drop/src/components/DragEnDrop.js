import React, { useEffect } from "react";

export function DragEnDrop(props) {
  const [position, setPosition] = React.useState({
    x: props.Object.props.style.styles.left,
    y: props.Object.props.style.styles.top,
  });

  const [mPos, setMpos] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [lastMousCorr, setlastMousCorr] = React.useState({ x: 0, y: 0 });
  const [lastShapeCorr, setlastShapeCorr] = React.useState({ x: 0, y: 0 });
  const [motionPos, getMotionPos] = React.useState({
    x0: 0,
    y0: 0,
    x_1: 0,
    y_1: 0,
    x_v0: 1,
    y_v0: 0,
  });

  let newPosX = 0;
  let newPosY = 0;

  function intervalUpdate() {
    getMotionPos((prevMotionPos) => ({
      x0: newPosX + prevMotionPos.x_v0,
      y0: newPosY + prevMotionPos.y_v0,
      x_1: prevMotionPos.x0,
      y_1: prevMotionPos.y0,
      // x_v0: prevMotionPos.x_v0,
      // y_v0: prevMotionPos.y_v0,
      x_v0: newPosX - prevMotionPos.x0,
      y_v0: newPosY - prevMotionPos.y0,
    }));

    newPosX = isDragging
      ? lastShapeCorr.x + (mPos.x - lastMousCorr.x)
      : motionPos.x0;
    newPosY = isDragging
      ? lastShapeCorr.y + (mPos.y - lastMousCorr.y)
      : motionPos.y0;

    if (newPosX > 300 - 50) newPosX = 300 - 50;
    if (newPosX < 0) newPosX = 0;
    if (newPosY > 500 - 50) newPosY = 500 - 50;
    if (newPosY < 0) newPosY = 0;

    setPosition({ x: newPosX, y: newPosY });

    // console.log("pos2", motionPos);
  }

  useEffect(() => {
    const interval = setInterval(intervalUpdate, 20);

    return () => clearInterval(interval);
  }, [position]);

  useEffect(() => {
    const listener = (event) => {
      setMpos({ x: event.x, y: event.y });
    };

    if (isDragging) {
      window.addEventListener("mousemove", listener);
      return () => window.removeEventListener("mousemove", listener);
    }
  }, [isDragging]);

  function handleOnMouseDown(event) {
    setIsDragging(true);
    setlastMousCorr({ x: event.clientX, y: event.clientY});
    setlastShapeCorr({ x: position.x, y: position.y });
  }

  function handleOnMouseUp() {
    setIsDragging(false);
  }

  return React.cloneElement(props.Object, {
    onMouseDown: handleOnMouseDown,
    onMouseUp: handleOnMouseUp,
    style: {
      left: position.x,
      top: position.y,
    },
    children: String(motionPos.x_v0) + " " + String(motionPos.y_v0),
  });
}
