import React from "react";
import imgSrc from "../assets/images/campfire.jpg";
import imgSrc2 from "../assets/images/campfire2.jpg";
import imgSrc3 from "../assets/images/campfire3.jpg";
import imgSrc4 from "../assets/images/camping.jpg";

const images = [imgSrc, imgSrc2, imgSrc3, imgSrc4];

const CampFire = () => (
  <div>
    <h1>CampFire</h1>
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

export default CampFire;
