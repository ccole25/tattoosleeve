import React from "react";
import imgSrc from "../assets/images/wolf.png";
import imgSrc2 from "../assets/images/wolf2.png";
import imgSrc3 from "../assets/images/wolf3.png";
import imgSrc4 from "../assets/images/wolf4.png";

const images = [imgSrc2, imgSrc, imgSrc3, imgSrc4];

const Wolf = () => (
  <div>
    <h1>Wolf</h1>
    <hr />
    <h3>Description</h3>
    <p>
      One idea is to have two wolves that circle the elbow. If there is not
      enough space to have two woles on the elbow we can use a single wolf or
      wolf head.
    </p>
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

export default Wolf;
