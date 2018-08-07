import React from "react";
import imgSrc from "../assets/images/pen.jpg";
import imgSrc2 from "../assets/images/pen2.jpg";
import imgSrc3 from "../assets/images/pen3.jpg";

const images = [imgSrc, imgSrc2, imgSrc3];

const Pen = () => (
  <div>
    <h1>Pen</h1>
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

export default Pen;
