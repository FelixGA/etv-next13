import Link from "next/link";
import React from "react";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__item">
        <h3>Überschrift</h3>
        <div className="slider__item-text">
          <p>
            Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen
            werden.
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
