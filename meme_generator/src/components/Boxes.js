import React from "react";

import { Box } from "./Box";
import { AddBox } from "./AddBox";

export function Boxes(props) {
  const arrayBox = new Array(props.quantity)
    .fill()
    .map((_, index) => <Box key={index} onDelClick={delFromFinalArrayBox} />);

  const [finalArrayBox, modifyArray] = React.useState(arrayBox);

  function addToFinalArrayBox() {
    modifyArray((prevFinalArrayBox) => [
      ...prevFinalArrayBox,
      <Box key={finalArrayBox.length} onDelClick={delFromFinalArrayBox} />,
    ]);
  }

  function delFromFinalArrayBox() {
    modifyArray((prevFinalArrayBox) =>
      prevFinalArrayBox.slice(0, prevFinalArrayBox.length - 1)
    );
  }

  return (
    <div className="boxContainer">
      {finalArrayBox} <AddBox onClick={addToFinalArrayBox} />
    </div>
  );
}
