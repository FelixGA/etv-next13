import Link from "next/link";
import React from "react";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__item">
        <h3>überschrift</h3>
        <div className="slider__item-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisi vel consectetur euismod, nisi nisl euismod nisi, vel
            consectetur nisi nisl euismod.
          </p>
        </div>

        <img src="./public/images/de.png" />
        <Link href="#">
          <a>mehr erfahren </a>
        </Link>
      </div>
    </div>
  );
};
export default Slider;
