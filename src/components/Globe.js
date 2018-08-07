import React from "react";
import imgSrc from "../assets/images/globe.jpg";
import imgSrc2 from "../assets/images/globe2.jpg";
import imgSrc3 from "../assets/images/globe3.jpg";
import imgSrc4 from "../assets/images/globe4.jpg";
import imgSrc5 from "../assets/images/globe5.jpg";

const images = [imgSrc, imgSrc2, imgSrc3, imgSrc4, imgSrc5];

const Globe = () => (
  <div>
    <h1>Globe</h1>
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

export default Globe;
