import React from "react";
import data from "../metal.json";
import Band from "./Band";
import "./MetalMeta.css";

function MetalMeta() {
  const bands = data.map(
    ({ ID, band_name, fans, formed, origin, split, style }, i) => {
      console.log("Band :", ID, band_name, fans, formed, origin, split, style);
      return (
        <Band
          ID={ID}
          key={ID}
          band_name={band_name}
          fans={fans}
          formed={formed}
          origin={origin}
          split={split}
          style={style}
        />
      );
    }
  );

  return <div className='BandsList'>{bands}</div>;
}

export default MetalMeta;
