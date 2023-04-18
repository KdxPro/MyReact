import React, { useEffect } from "react";

export function DragEnDrop(props) {
  const [position, setPosition] = React.useState({
    x: props.Object.props.style.styles.left,
    y: props.Object.props.style.styles.top,
  });

  const [isDragging, setIsDragging] = React.useState(false);
  const [lastMousCorr, setlastMousCorr] = React.useState({ x: 0, y: 0 });
  const [lastShapeCorr, setlastShapeCorr] = React.useState({ x: 0, y: 0 });
  const [motionPos, getMotionPos] = React.useState({
    x0: 0,
    y0: 0,
    x_1: 0,
    y_1: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      getMotionPos((prevMotionPos) => ({
        x0: position.x,
        y0: position.y,
        x_1: prevMotionPos.x0,
        y_1: prevMotionPos.y0,
      }));
      console.log(motionPos.x0 - motionPos.x_1);
    }, 20);

    return () => clearInterval(interval);
  }, [motionPos, position]);

  let mutex = false;
  function setMutex(val) {
    mutex = val;
  }

  useEffect(() => {
    const listener = (event) => {
      if (mutex) return;

      setMutex(true);
      setTimeout(setMutex, 20, false);

      setPosition({
        x: lastShapeCorr.x + (event.x - lastMousCorr.x),
        y: lastShapeCorr.y + (event.y - lastMousCorr.y),
      });
    };

    if (isDragging) {
      window.addEventListener("mousemove", listener);
      return () => window.removeEventListener("mousemove", listener);
    }
  }, [isDragging, lastMousCorr, lastShapeCorr, mutex]);

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
  });
}
