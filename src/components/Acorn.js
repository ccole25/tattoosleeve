import React from "react";
import imgSrc from "../assets/images/acorn.jpg";
import imgSrc3 from "../assets/images/acorn3.jpg";
import imgSrc4 from "../assets/images/acorn4.jpg";
import imgSrc5 from "../assets/images/acorn5.jpg";
import imgSrc7 from "../assets/images/acorn7.jpg";
import imgSrc8 from "../assets/images/acorn8.jpg";

const images = [imgSrc, imgSrc8, imgSrc3, imgSrc4, imgSrc5, imgSrc7];

const Acorn = () => (
  <div>
    <h1>Acorn</h1>
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

export default Acorn;
