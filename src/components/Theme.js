import React from "react";
import imgSrc from "../assets/images/theme.jpg";
import imgSrc2 from "../assets/images/theme2.jpg";
import imgSrc3 from "../assets/images/theme3.jpg";

const images = [imgSrc2, imgSrc, imgSrc3];

const Theme = () => (
  <div>
    <h1>Theme</h1>
    <hr />
    <h3>Description</h3>
    <p>
      These are some drawings I came across that really caught my eye. The first
      one is clean as fuck. On these cards there is a lot of elements that we
      can grab inspiration from. Some of the images that where added to the
      specific elements are not as polished or clean as I would like, but these
      can be our guide for overall look and feel.
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

export default Theme;
