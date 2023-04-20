import React from "react";

import "./App.css";

import { DragEnDrop } from "./components/DragEnDrop";

function App() {
  const styles = { left: 0, top: 0 };

  let obj1 = <div className="dragendrop" id="Elem1" style={{ styles }} />;
  let obj2 = <div className="dragendrop" id="Elem2" style={{ styles }} />;

  return (
    <div className="App">
      <DragEnDrop Object={obj1} />
      {/* <DragEnDrop Object={obj2} /> */}
      {/* <DragEnDrop Object={obj1} /> */}
    </div>
  );
}

export default App;
