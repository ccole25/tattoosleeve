import React from "react";
import imgSrc from "../assets/images/pizza.jpg";

const images = [imgSrc];

const Pizza = () => (
  <div>
    <h1>Pizza</h1>
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

export default Pizza;
