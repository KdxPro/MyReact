import React from "react";

import { Box } from "./Box";

export function Boxes() {
  const boxStruct = { obj: <Box />, id: 1, isSelected: true };

  const [arrayBox, setArrayBox] = React.useState([boxStruct]);
  function handleOnClickBox() {
    let tmpBoxStruct = { ...boxStruct };
    tmpBoxStruct.id = arrayBox[arrayBox.length - 1].id + 1;
    tmpBoxStruct.isSelected = !arrayBox[arrayBox.length - 1].isSelected;
    setArrayBox((prevArrayBox) => [...prevArrayBox, tmpBoxStruct]);
  }

  return (
    <div className="boxContainer">
      <Box arrayBox={arrayBox} onClick={handleOnClickBox} />
    </div>
  );
}
