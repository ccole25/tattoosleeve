import React from "react";
import imgSrc from "../assets/images/compass.jpg";
import imgSrc2 from "../assets/images/compass2.jpg";
import imgSrc3 from "../assets/images/compass3.jpg";
import imgSrc4 from "../assets/images/compass4.jpg";
import imgSrc5 from "../assets/images/compass5.jpg";

const images = [imgSrc, imgSrc5, imgSrc2, imgSrc3, imgSrc4];

const Compass = () => (
  <div>
    <h1>Compass</h1>
    <hr />
    {images.map(i => {
      return (
        <div>
          <img alt={i} key={i} src={i} width="500" />
          <br />
        </div>
      );
    })}
  </div>
);

export default Compass;
