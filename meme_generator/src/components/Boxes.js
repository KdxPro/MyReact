import React from "react";

import { Box } from "./Box";

export function Boxes(props) {
  const arrayBox = new Array(props.quantity)
    .fill()
    .map((_, index) => <Box key={index} />);

  return <div className="boxContainer">{arrayBox}</div>;
}
