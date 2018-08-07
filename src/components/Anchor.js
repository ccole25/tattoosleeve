import React from "react";
import imgSrc from "../assets/images/anchor.jpg";
import imgSrc2 from "../assets/images/anchor2.jpg";
import imgSrc3 from "../assets/images/anchor3.jpg";
import imgSrc4 from "../assets/images/anchor4.jpg";
import imgSrc5 from "../assets/images/anchor5.jpg";
import imgSrc6 from "../assets/images/anchor6.jpg";

const images = [imgSrc5, imgSrc6, imgSrc2, imgSrc3, imgSrc4, imgSrc];

const Anchor = () => (
  <div>
    <h1>Anchor</h1>
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

export default Anchor;
