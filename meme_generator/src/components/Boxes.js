import React from "react";

import { Box } from "./Box";
import { AddBox } from "./AddBox";

export function Boxes(props) {
  const arrayBox = new Array(props.quantity)
    .fill()
    .map((_, index) => (
      <Box key={index} onDelClick={delFromFinalArrayBox} boxId={index} />
    ));

  const [finalArrayBox, modifyArray] = React.useState(arrayBox);

  function addToFinalArrayBox() {
    modifyArray((prevFinalArrayBox) => {
      let ind = 0;
      for (let i = 0; i < 100; i++) {
        if (!prevFinalArrayBox.find((item) => item.key === String(i))) {
          ind = i;
          break;
        }
      }

      prevFinalArrayBox.filter((item) => item.key !== String(ind));

      return [
        ...prevFinalArrayBox,
        <Box key={ind} onDelClick={delFromFinalArrayBox} boxId={ind} />,
      ];
    });
  }

  function delFromFinalArrayBox(id) {
    modifyArray((prevFinalArrayBox) =>
      prevFinalArrayBox.filter((item) => item.key !== String(id))
    );
  }

  return (
    <div className="boxContainer">
      {finalArrayBox} <AddBox onClick={addToFinalArrayBox} />
    </div>
  );
}
