import React from "react";

import "./App.css";

import { DragEnDrop } from "./components/DragEnDrop";

function App() {
  const [mPos, setMpos] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setMpos({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <DragEnDrop mousePosition={mPos} />
    </div>
  );
}

export default App;
