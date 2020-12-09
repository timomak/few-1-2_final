import React from "react";

function Band(props) {
  // Get the props
  const { ID, band_name, fans, formed, origin, split, style } = props;

  return (
    <>
      <h1>{band_name}</h1>
    </>
  );
}

export default Band;
