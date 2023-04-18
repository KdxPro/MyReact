import React, { useEffect } from "react";

export function DragEnDrop(props) {
  const [position, setPosition] = React.useState({
    x: props.Object.props.style.styles.left,
    y: props.Object.props.style.styles.top,
  });

  const [isDragging, setIsDragging] = React.useState(false);

  const [lastMousCorr, setlastMousCorr] = React.useState({ x: 0, y: 0 });
  const [lastShapeCorr, setlastShapeCorr] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const listener = (event) => {
      setPosition({
        x: lastShapeCorr.x + (event.x - lastMousCorr.x),
        y: lastShapeCorr.y + (event.y - lastMousCorr.y),
      });
    };
    if (isDragging) {
      window.addEventListener("mousemove", listener);
      return () => window.removeEventListener("mousemove", listener);
    }
  }, [isDragging]);

  function handleClick(event) {
    setIsDragging((prev) => !prev);
    setlastMousCorr({ x: event.clientX, y: event.clientY });
    setlastShapeCorr({ x: position.x, y: position.y });
  }

  return React.cloneElement(props.Object, {
    onClick: handleClick,
    style: {
      left: position.x,
      top: position.y,
    },
  });
}
