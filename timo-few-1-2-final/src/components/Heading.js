import React from "react";
import data from "../metal.json";

function Heading({ myName }) {
  const counter = Object.keys(data).length;

  return (
    <>
      <h3>FEW 1.2 Final Assessment</h3>
      <p>{myName}</p>
      <p>Number of bands: {counter}</p>
    </>
  );
}

export default Heading;
