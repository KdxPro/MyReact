import React from "react";

import { Box } from "./Box";
import { AddBox } from "./AddBox";

export function Boxes(props) {
  const arrayBox = new Array(props.quantity)
    .fill()
    .map((_, index) => <Box key={index} />);

  const [finalArrayBox, addElem] = React.useState(arrayBox);
  function addToFinalArrayBox() {
    addElem((prevFinalArrayBox) => [
      ...prevFinalArrayBox,
      <Box key={finalArrayBox.length} />,
    ]);
  }

  return (
    <div className="boxContainer">
      {finalArrayBox} <AddBox onClick={addToFinalArrayBox} />
    </div>
  );
}
