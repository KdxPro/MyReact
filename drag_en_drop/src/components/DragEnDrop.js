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
    x_v0: 0,
    y_v0: 0,
  });

  function intervalUpdate() {
    setPosition({
      x:
        lastShapeCorr.x + (mPos.x - lastMousCorr.x) > 300 - 50
          ? 300 - 50
          : lastShapeCorr.x + (mPos.x - lastMousCorr.x) < 0
          ? 0
          : lastShapeCorr.x + (mPos.x - lastMousCorr.x),
      y:
        lastShapeCorr.y + (mPos.y - lastMousCorr.y) > 500 - 50
          ? 500 - 50
          : lastShapeCorr.y + (mPos.y - lastMousCorr.y) < 0
          ? 0
          : lastShapeCorr.y + (mPos.y - lastMousCorr.y),
    });

    getMotionPos((prevMotionPos) => ({
      x0: position.x,
      y0: position.y,
      x_1: prevMotionPos.x0,
      y_1: prevMotionPos.y0,
      x_v0: position.x - prevMotionPos.x0,
      y_v0: position.y - prevMotionPos.y0,
    }));
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
    setlastMousCorr({ x: event.clientX, y: event.clientY });
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
