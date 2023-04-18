import { useEffect, useState } from "react";

export function DragEnDrop() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const [lastMousCorr, setlastMousCorr] = useState({ x: 0, y: 0 });
  const [lastShapeCorr, setlastShapeCorr] = useState({ x: 0, y: 0 });

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

  const handleClick = (event) => {
    setIsDragging((prev) => !prev);
    setlastMousCorr({ x: event.clientX, y: event.clientY });
    setlastShapeCorr({ x: position.x, y: position.y });

    console.log(event.clientX, event.clientY);
    console.log(position.x, position.y);
  };

  return (
    <div
      className="dragendrop"
      style={{
        left: position.x,
        top: position.y,
      }}
      onClick={handleClick}
    />
  );
}
