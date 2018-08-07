import React from "react";
import imgSrc from "../assets/images/eagle.jpg";
import imgSrc2 from "../assets/images/eagle2.jpg";
import imgSrc3 from "../assets/images/eagle3.jpg";

const images = [imgSrc, imgSrc2, imgSrc3];

const Eagle = () => (
  <div>
    <h1>Eagle</h1>
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

export default Eagle;
