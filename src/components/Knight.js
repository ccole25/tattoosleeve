import React from "react";
import imgSrc from "../assets/images/knight.jpg";
import imgSrc2 from "../assets/images/knight2.jpg";
import imgSrc3 from "../assets/images/knight3.jpg";
import imgSrc4 from "../assets/images/knight4.jpg";
import imgSrc5 from "../assets/images/knight5.jpg";
import imgSrc6 from "../assets/images/knight6.jpg";

const images = [imgSrc4, imgSrc5, imgSrc6, imgSrc, imgSrc2, imgSrc3];

const Knight = () => (
  <div>
    <h1>Knight</h1>
    <hr />
    <h3>Description</h3>
    <p>
      As mentioned in the knife section I think a dagger and a knight helmet
      would look good together. Or maybe a knight with a single arrow in his
      head.
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

export default Knight;
