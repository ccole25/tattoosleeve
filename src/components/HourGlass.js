import React from "react";
import imgSrc from "../assets/images/hourglass.jpg";
import imgSrc2 from "../assets/images/hourglass2.jpg";

const images = [imgSrc, imgSrc2];

const HourGlass = () => (
  <div>
    <h1>Hour Glass</h1>
    <hr />
    <h3>Description</h3>
    <p>
      The Idea behind this is "broken" time. I was thinking the glass could be
      broken with the sand leaking out.
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

export default HourGlass;
