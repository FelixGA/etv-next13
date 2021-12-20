import Link from "next/link";
import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className="container">
      <div className="w-493px">
        <h3 className="w-4">Überschrift</h3>
        <div className="slider__item-text">
          <p>
            Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen
            werden.
          </p>
        </div>

        <Image src="/images/de.png" alt="picture" width={50} height={50} />
        <Link href="#">
          <a>mehr erfahren </a>
        </Link>
      </div>
    </div>
  );
};
export default Slider;
