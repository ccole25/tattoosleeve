import React from "react";
import imgSrc from "../assets/images/balance.png";
import imgSrc2 from "../assets/images/balance2.png";
import imgSrc3 from "../assets/images/balance3.jpg";
import imgSrc4 from "../assets/images/balance4.jpg";

const images = [imgSrc4, imgSrc, imgSrc2, imgSrc3];

const Balance = () => (
  <div>
    <h1>Balance</h1>
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

export default Balance;
