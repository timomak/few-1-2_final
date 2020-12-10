import React, { useState } from "react";
import "./Band.css";
import Like from "./Like";

function Band(props) {
  // Get the props
  const { ID, band_name, fans, formed, origin, split, style } = props;

  return (
    <div className='Band'>
      <div className='Padding'>
        <h3>{band_name}</h3>
        <p>Formed: {formed}</p>
        <p>{origin}</p>
        <p>Fans: {fans}</p>
      </div>
      <Like />
    </div>
  );
}

export default Band;
