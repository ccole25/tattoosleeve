import React from "react";
import imgSrc from "../assets/images/knife.png";
import imgSrc2 from "../assets/images/knife2.jpg";
import imgSrc4 from "../assets/images/knife4.jpg";
import imgSrc5 from "../assets/images/knife5.jpg";
import imgSrc6 from "../assets/images/knife6.jpg";

const images = [imgSrc, imgSrc2, imgSrc4, imgSrc5, imgSrc6];

const Knife = () => (
  <div>
    <h1>Knife</h1>
    <hr />
    <h3>Description</h3>
    <p>
      I would like an old school buck knife. Some of these are daggers that can
      be used on their own or with other elements. I think it would be cool to
      have the dagger through the knights helmet.
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

export default Knife;
