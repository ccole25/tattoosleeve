import React from "react";
import imgSrc from "../assets/images/computer.jpg";
import imgSrc2 from "../assets/images/computer2.jpg";
import imgSrc3 from "../assets/images/computer3.jpg";
import imgSrc4 from "../assets/images/computer4.jpg";
import imgSrc6 from "../assets/images/computer6.jpg";
import imgSrc7 from "../assets/images/computer7.jpg";

const images = [imgSrc, imgSrc2, imgSrc3, imgSrc4, imgSrc6, imgSrc7];

const Computer = () => (
  <div>
    <h1>Computer</h1>
    <hr />
    <h3>Description</h3>
    <p>
      This one is really outside of american traditional, but I am trying to
      find something that represents technology in my life. I am not stuck on a
      computer specifically. Another idea could be just an old school floppy
      disk.
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

export default Computer;
